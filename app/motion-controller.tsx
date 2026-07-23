"use client";

import { useEffect } from "react";

export default function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero");
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".project-card"),
    );
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    let frame = 0;

    body.classList.add("motion-ready");

    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--scroll-y", `${window.scrollY}`);
        header?.classList.toggle("is-scrolled", window.scrollY > 40);
      });
    };

    const updatePointer = (event: PointerEvent) => {
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      hero.style.setProperty("--pointer-x", x.toFixed(3));
      hero.style.setProperty("--pointer-y", y.toFixed(3));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    hero?.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    const cardCleanups = cards.map((card) => {
      const onPointerMove = (event: PointerEvent) => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
      };
      card.addEventListener("pointermove", onPointerMove, { passive: true });
      return () => card.removeEventListener("pointermove", onPointerMove);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      hero?.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
      cardCleanups.forEach((cleanup) => cleanup());
      body.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
