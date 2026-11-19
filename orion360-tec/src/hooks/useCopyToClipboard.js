import { useCallback, useEffect, useRef, useState } from "react";

function useCopyToClipboard(resetDelay = 2200) {
  const timerRef = useRef(null);
  const [copiedKey, setCopiedKey] = useState(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copy = useCallback(
    async (text, key = "default") => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          const ok = document.execCommand("copy");
          document.body.removeChild(textarea);
          if (!ok) return false;
        }

        setCopiedKey(key);
        if (timerRef.current) {
          window.clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
          setCopiedKey(null);
        }, resetDelay);

        return true;
      } catch {
        return false;
      }
    },
    [resetDelay]
  );

  const isCopied = useCallback(
    (key = "default") => copiedKey === key,
    [copiedKey]
  );

  return { copiedKey, isCopied, copy };
}

export default useCopyToClipboard;
