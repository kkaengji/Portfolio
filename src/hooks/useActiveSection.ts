import { useState, useEffect, useRef } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const idsRef = useRef(ids);
  idsRef.current = ids;

  useEffect(() => {
    const getActive = () => {
      const scrollY = window.scrollY;
      const viewportMid = scrollY + window.innerHeight / 3;

      let current = idsRef.current[0];
      for (const id of idsRef.current) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= viewportMid) {
          current = id;
        }
      }
      setActive(current);
    };

    let lastCall = 0;
    const throttled = () => {
      const now = Date.now();
      if (now - lastCall < 100) return;
      lastCall = now;
      getActive();
    };

    getActive();
    window.addEventListener("scroll", throttled, { passive: true });
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  return active;
}
