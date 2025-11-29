import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    let timeout;

    const reveal = () => {
      // Debounce → improves speed
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        document.querySelectorAll(".reveal").forEach((el) => {
          const top = el.getBoundingClientRect().top;

          if (top < window.innerHeight - 80) {
            el.classList.add("active");
          }
        });
      }, 80); // smooth + fast
    };

    window.addEventListener("scroll", reveal);

    // ❌ NO reveal() on load — stop instant animation
    return () => window.removeEventListener("scroll", reveal);
  }, []);
}
