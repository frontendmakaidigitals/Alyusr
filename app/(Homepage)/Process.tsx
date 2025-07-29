"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const processes = [
    "process1.png",
    "process2.png",
    "process3.png",
    "process4.png",
    "process5.png",
    "process6.png",
  ];

  const sectionRef = useRef(null);
  const desktopCardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ Desktop animation
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      });

      desktopCardsRef.current.forEach((card, i) => {
        if (card) {
          tl.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
            },
            i
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ✅ Mobile animation
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const ctx = gsap.context(() => {
      const total = mobileCardsRef.current.length;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 500}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      mobileCardsRef.current.forEach((card, i) => {
        if (!card) return;

        tl.fromTo(
          card,
          {
            opacity: 0,
            zIndex: 0,
          },
          {
            opacity: 1,
            zIndex: 1,
            duration: 0.3,
            ease: "power2.inOut",
          },
          i
        ).to(
          card,
          {
            opacity: 0,
            zIndex: 0,
            duration: 0.3,
            ease: "power2.inOut",
          },
          i + 0.7
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white z-10">
      <div className="h-screen flex flex-col justify-center sticky top-0">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-semibold text-center mb-12">
            The Process <span className="text-blue-500">We Follow</span>
          </h1>

          {/* ✅ Desktop Grid */}
          <ul className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processes.map((process, idx) => (
              <li
                key={idx}
                ref={(el) => {
                  desktopCardsRef.current[idx] = el;
                }}
                className="w-full opacity-0 transform"
              >
                <img
                  src={`/process/${process}`}
                  alt={`Process ${idx + 1}`}
                  className="w-full object-contain"
                />
              </li>
            ))}
          </ul>

          {/* ✅ Mobile Stacked */}
          <ul className="lg:hidden relative w-full h-[60dvh]">
            {processes.map((process, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  mobileCardsRef.current[idx] = el;
                }}
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
              >
                <img
                  src={`/process/${Process}`}
                  alt={`Process ${idx + 1}`}
                  className="w-auto max-h-full object-contain"
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;
