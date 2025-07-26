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
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000", // 👈 Increased scroll distance
          scrub: true,
          pin: true,
        },
      });

      cardsRef.current.forEach((card, i) => {
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
          i // step-by-step
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="h-screen flex flex-col justify-center sticky top-0">
        <div className="container mx-auto">
          <h1 className="text-5xl font-[600] text-center mb-12">
            The Process <span className="text-blue-500">We Follow</span>
          </h1>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processes.map((process, idx) => (
              <li
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
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
        </div>
      </div>
    </section>
  );
};

export default Process;
