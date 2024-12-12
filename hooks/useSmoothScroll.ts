import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");

        // Ensure href starts with '#' and prevent default jump
        if (href && href.startsWith("#")) {
          event.preventDefault(); // Always prevent default behavior
          if (href.length > 1) {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
