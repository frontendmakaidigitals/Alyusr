"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const processes = [
    "process1.svg",
    "process2.svg",
    "process3.svg",
    "process4.svg",
    "process5.svg",
    "process6.svg",
  ];

  const sectionRef = useRef(null);
  const desktopCardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const [isComplete, setIsComplete] = React.useState(false);
  console.log(isComplete);
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
          onUpdate: (self) => {
            if (circleRef.current) {
              const circumference = circleRef.current.getTotalLength();
              circleRef.current.style.strokeDasharray = `${circumference}`;
              circleRef.current.style.strokeDashoffset = `${
                circumference - self.progress * circumference
              }`;
            }
            if (self.progress >= 1) {
              setIsComplete(true);
            }
          },
          onEnterBack: () => setIsComplete(false),
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
          onUpdate: (self) => {
            if (circleRef.current) {
              const circumference = circleRef.current.getTotalLength();
              circleRef.current.style.strokeDasharray = `${circumference}`;
              circleRef.current.style.strokeDashoffset = `${
                circumference - self.progress * circumference
              }`;
            }
          },
        },
      });

      mobileCardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Fade in every card
        if (i === 0) {
          gsap.set(card, { opacity: 1, zIndex: 1 });
        } else {
          tl.fromTo(
            card,
            { opacity: 0, zIndex: 0 },
            { opacity: 1, zIndex: 1, duration: 0.3, ease: "power2.inOut" },
            i
          );
        }

        // Fade out only if not the last card
        if (i !== total - 1) {
          tl.to(
            card,
            {
              opacity: 0,
              zIndex: 0,
              duration: 0.3,
              ease: "power2.inOut",
            },
            i + 0.7
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white z-10">
      {/* ✅ Circular Loader */}
      <div
        className="fixed bottom-6 right-6 w-12 h-12 z-50"
        ref={(el) => {
          if (!el) return;

          let scrollTimeout: NodeJS.Timeout | null = null;
          let rippleTween: gsap.core.Tween | null = null;
          const rippleCircle =
            el.querySelector<SVGCircleElement>("#rippleCircle");

          const startRipple = () => {
            if (!rippleCircle || isComplete) return;

            // reset before starting
            gsap.set(rippleCircle, { scale: 1, opacity: 0.5 });

            // kill old tween if exists
            if (rippleTween) rippleTween.kill();

            rippleTween = gsap.fromTo(
              rippleCircle,
              { scale: 1, opacity: 0.5 },
              {
                scale: 2.2,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                repeat: -1,
                repeatDelay: 0.6,
                transformOrigin: "center center",
              }
            );
          };

          const stopRipple = () => {
            if (rippleTween) {
              rippleTween.kill();
              rippleTween = null;
              console.log("ripple stopped");
            }
            if (rippleCircle) {
              gsap.set(rippleCircle, { scale: 1, opacity: 0 });
              console.log("ripple reset");
            }
          };

          const handleScroll = () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);

            if (isComplete) {
              stopRipple(); // ensure it’s killed
              return; // 🚫 don’t schedule restart
            }

            stopRipple(); // stop immediately while scrolling

            // only schedule restart if not complete
            scrollTimeout = setTimeout(() => {
              if (!isComplete) startRipple();
            }, 800);
          };

          window.addEventListener("scroll", handleScroll);

          // cleanup
          return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
            stopRipple();
          };
        }}
      >
        <div
          id="rippleCircle"
          className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-12 h-12 bg-blue-500"
        />
        <svg className="w-full h-full -rotate-90 rounded-full bg-white">
          {/* Background track (default color) */}
          <circle
            cx="50%"
            cy="50%"
            r="22"
            stroke="#e5e7eb"
            strokeWidth="3"
            fill="transparent"
          />
          {/* Ripple circle (color effect) */}

          {/* Progress circle (animated) */}
          <circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r="22"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="0"
            strokeDashoffset="0"
            strokeLinecap="round"
          />
        </svg>
      </div>

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
                  src={`/process/${process}`}
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
