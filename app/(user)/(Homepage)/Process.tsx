"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const processes = [
    {
      title: "Research",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perferendis nihil amet in, sequi a nobis eum quo.",
      image:
        "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg",
    },
    {
      title: "Design",
      description:
        "We create designs that are user-friendly and visually appealing.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
    {
      title: "Development",
      description: "Building functional and scalable solutions.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      title: "Testing",
      description: "Ensuring everything works perfectly.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    {
      title: "Launch",
      description: "Deploying your project successfully.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      title: "Maintenance",
      description: "Providing ongoing support and updates.",
      image:
        "https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg",
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollDirection = useRef(1); // 1 = down, -1 = up

  useEffect(() => {
    if (!sectionRef.current) return;

    const totalSteps = processes.length;
    const circle = circleRef.current;
    const radius = 22;
    const circumference = 2 * Math.PI * radius;

    if (circle) {
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
    }

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${totalSteps * window.innerHeight}`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        scrollDirection.current = self.direction; // Track scroll direction
        const progress = self.progress;
        const stepIndex = Math.min(
          totalSteps - 1,
          Math.floor(progress * totalSteps)
        );
        setActiveIndex(stepIndex);

        if (circle) {
          circle.style.strokeDashoffset = `${circumference * (1 - progress)}`;
        }
      },
    });
  }, [processes.length]);

  useEffect(() => {
    if (!contentRef.current) return;

    const scrollDir = scrollDirection.current; // 1 = down, -1 = up
    const isDown = scrollDir === 1;

    const items = contentRef.current.querySelectorAll(".anim-item");
    const imageWrapper = contentRef.current.querySelector(".image-wrapper");
    const imageMask = contentRef.current.querySelector(".image-mask");
    const image = imageWrapper?.querySelector("img");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset mask and image positions based on scroll direction
      gsap.set(imageMask, {
        y: isDown ? "0%" : "-100%",
        backgroundColor: "#ffffff",
      });

      gsap.set(image, {
        scale: isDown ? 1.4 : 0.8,
        autoAlpha: 1,
      });

      gsap.set(items, {
        opacity: 0,
        y: isDown ? 30 : -30,
      });

      // Animate mask: reverse direction depending on scroll
      tl.to(imageMask, {
        y: isDown ? "-100%" : "100%", // reverse reveal when scrolling up
        duration: 1,
        ease: "power3.inOut",
      });

      // Animate image scaling
      tl.to(
        image,
        {
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0
      );

      // Animate text fade/slide
      tl.to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        0.3
      );
    }, contentRef);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="relative bg-white z-10">
      {/* Progress Circle */}
      <div className="fixed bottom-6 right-6 w-12 h-12 z-50">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="22"
            stroke="#e5e7eb"
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r="22"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Pinned Content */}
      <div className="h-screen flex flex-col justify-center sticky top-0">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-semibold text-center mb-12">
            The Process <span className="text-blue-500">We Follow</span>
          </h1>

          <div ref={contentRef} className="grid grid-cols-2 gap-8 items-center">
            <div className="anim-item">
              <h2 className="text-4xl font-bold mb-4">
                {processes[activeIndex].title}
              </h2>
              <p className="text-gray-600">
                {processes[activeIndex].description}
              </p>
            </div>

            {/* Image with Reveal */}
            <div className="image-wrapper border border-slate-300 relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg anim-item">
              <div className="image-mask absolute inset-0 bg-white z-20 will-change-transform"></div>
              <img
                src={processes[activeIndex].image}
                alt={processes[activeIndex].title}
                className="w-full h-full object-cover will-change-transform"
                style={{ visibility: "hidden" }} // Hides image until GSAP makes it visible
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
