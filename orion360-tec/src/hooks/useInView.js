import { useEffect, useRef, useState } from "react";

function useInView(options = {}) {
  const { threshold = 0.05, rootMargin = "0px 0px -20px 0px" } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      const frameId = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return [ref, isVisible];
}

export default useInView;
