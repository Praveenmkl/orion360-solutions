import { useEffect, useRef } from "react";

function useSpotlight() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let rafId = 0;
    let lastTime = 0;
    const state = {
      targetX: 0,
      targetY: 0,
      smoothX: 0,
      smoothY: 0,
      targetAlpha: 0,
      smoothAlpha: 0,
    };

    const applyVars = () => {
      element.style.setProperty("--spot-x", `${state.smoothX.toFixed(1)}px`);
      element.style.setProperty("--spot-y", `${state.smoothY.toFixed(1)}px`);
      element.style.setProperty("--spot-alpha", state.smoothAlpha.toFixed(3));
    };

    const step = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const dt = Math.min(0.05, (timestamp - lastTime) / 1000);
      lastTime = timestamp;

      const posEase = 1 - Math.exp(-dt * 9);
      const alphaEase = 1 - Math.exp(-dt * 6);

      state.smoothX += (state.targetX - state.smoothX) * posEase;
      state.smoothY += (state.targetY - state.smoothY) * posEase;
      state.smoothAlpha += (state.targetAlpha - state.smoothAlpha) * alphaEase;
      applyVars();

      const settled =
        Math.abs(state.targetX - state.smoothX) < 0.3 &&
        Math.abs(state.targetY - state.smoothY) < 0.3 &&
        Math.abs(state.targetAlpha - state.smoothAlpha) < 0.005;

      if (!settled && !reducedMotionQuery.matches) {
        rafId = window.requestAnimationFrame(step);
      } else {
        rafId = 0;
        lastTime = 0;
      }
    };

    const wakeLoop = () => {
      if (reducedMotionQuery.matches) return;
      if (!rafId) {
        lastTime = 0;
        rafId = window.requestAnimationFrame(step);
      }
    };

    const handlePointerMove = (event) => {
      if (reducedMotionQuery.matches) return;
      const rect = element.getBoundingClientRect();
      state.targetX = event.clientX - rect.left;
      state.targetY = event.clientY - rect.top;
      if (state.smoothAlpha === 0) {
        state.smoothX = state.targetX;
        state.smoothY = state.targetY;
      }
      state.targetAlpha = 1;
      wakeLoop();
    };

    const handlePointerLeave = () => {
      state.targetAlpha = 0;
      wakeLoop();
    };

    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return elementRef;
}

export default useSpotlight;
