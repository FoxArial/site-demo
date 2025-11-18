"use client";

import { useFadeInOnScroll } from "../../utils/useFadeInOnScroll";

export default function FadeSection({ children }: React.PropsWithChildren) {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <div ref={ref} className={`fade-section ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}
