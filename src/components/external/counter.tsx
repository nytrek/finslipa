import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * @see https://stackoverflow.com/questions/60205544/in-framer-motion-how-to-animate-pure-data-like-a-number-from-0-to-100
 */
export function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(nodeRef);
  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current as { textContent: string };
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);
  return <span ref={nodeRef} />;
}
