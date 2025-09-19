"use client";

import React, { useRef, useEffect, useState } from "react";
import { AnimatedTestimonials } from "../app_chunks/Animated-Testimonial";

const Process = () => {
  const processes = [
  {
    title: "Research",
    description:
      "We begin by thoroughly analyzing your goals, audience, and market trends to uncover insights that shape a strong foundation for your project.",
    image:
      "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg",
  },
  {
    title: "Design",
    description:
      "Our creative team transforms ideas into user-centric, visually compelling designs that balance aesthetics with intuitive functionality.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    title: "Development",
    description:
      "We bring the designs to life with clean, efficient, and scalable code—ensuring performance, security, and flexibility.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
  {
    title: "Testing",
    description:
      "Rigorous testing across devices and environments guarantees reliability, usability, and a seamless user experience.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
  {
    title: "Launch",
    description:
      "Your project goes live with a smooth rollout, ensuring stability, visibility, and an impactful first impression.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "Maintenance",
    description:
      "We provide ongoing monitoring, updates, and enhancements to keep your project secure, optimized, and future-ready.",
    image:
      "https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg",
  },
];


  return (
    <section className="relative bg-white z-10">

      {/* Pinned Content */}
      <div className="h-screen flex flex-col justify-center sticky top-0">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-semibold text-center mb-12">
            The Process <span className="text-blue-500">We Follow</span>
          </h1>

          <AnimatedTestimonials testimonials={processes} />;
        </div>
      </div>
    </section>
  );
};

export default Process;
