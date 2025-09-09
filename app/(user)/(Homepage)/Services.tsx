"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BgLayer from "../app_chunks/BgLayer";
import Image from "next/image";
import { useInView } from "framer-motion";
const MotionImage = motion(Image);
const Services = () => {
  const services = [
    {
      title: "Construction Management",
      img: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    },
    {
      title: "Engineering",
      img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    },
    {
      title: "Environmental Services",
      img: "https://images.pexels.com/photos/30589066/pexels-photo-30589066.jpeg",
    },
    {
      title: "IT and Cybersecurity",
      img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    },
    {
      title: "Planning and Consulting",
      img: "https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg",
    },
    {
      title: "Process Developement & Implementation",
      img: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
    },
    {
      title: "Planning",
      img: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
    },
    {
      title: "Community Engagement",
      img: "https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg",
    },
  ];
  const serviceRef = useRef(null);
  const inView = useInView(serviceRef, {
    margin: "-50% 0px -50% 0px", // top & bottom 50% to center
    amount: "some", // or 'all' depending on use case
    once: true, // or true if you want it to trigger only once
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <section className="container py-20 mx-auto">
      <h1 className="text-5xl font-semibold text-center">Our Services</h1>
      <motion.ul
        transition={{ staggerChildren: 1 }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-12"
        ref={serviceRef}
      >
        {services.map((service, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.li
              key={idx}
              animate={{
                y: inView ? 0 : 300,
                x: inView ? 0 : -100,
                opacity: inView ? 1 : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.19, 1, 0.22, 1],
                delay: 0.05 * idx,
              }}
              onAnimationComplete={() => {
                if (inView && idx === services.length - 1) {
                  setAnimationFinished(true);
                }
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-[320px] p-2 flex flex-col justify-end overflow-hidden rounded-lg w-full relative cursor-pointer"
            >
              {/* Background image */}
              <MotionImage
                src={service.img}
                alt=""
                fill
                className="object-cover absolute inset-0"
                animate={{ scale: isHovered ? 1.15 : 1 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              />
              <BgLayer color="bg-slate-900/30" />

              <motion.div
                layout
                animate={{ opacity: animationFinished ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className={`w-full  text-slate-50 rounded-md relative   !p-3  ${
                  animationFinished
                    ? "backdrop-filter backdrop-blur-lg bg-gradient-to-tr from-[#387EF0]/40 to-[#387EF0]/70 z-10"
                    : ""
                }`}
              >
                <h3 className="font-semibold relative z-10">{service.title}</h3>
              </motion.div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Services;
