"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const processes = [
    "Process1.png",
    "Process2.png",
    "Process3.png",
    "Process4.png",
    "Process5.png",
    "Process6.png",
  ];

  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000", // Adjust based on number of cards
          scrub: true,
          pin: true,
          pinSpacing: true, // ✅ Ensures space is reserved
          pinType: "transform", // ✅ Ensures mobile compatibility
        },
      });

      cardsRef.current.forEach((card, i) => {
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
            i * 1 // stagger with step-by-step scroll
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white z-10">
      <div className="flex flex-col justify-center py-32 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-semibold text-center mb-12">
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
