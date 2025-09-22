"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import BgLayer from "../app_chunks/BgLayer";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
const MotionImage = motion(Image);
const Services = () => {
  const services = [
    {
      title: "Construction Management",
      link: "/Services/Engineering-Infrastructure/Construction-Management",
      img: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    },
    {
      title: "Engineering",
      link: "/Services/Engineering-Infrastructure/Engineering-Services",
      img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    },
    {
      title: "Environmental Services",
      link: "/Services/Environment-Sustainability-and-Resilience/environmental-services",
      img: "https://images.pexels.com/photos/30589066/pexels-photo-30589066.jpeg",
    },
    {
      title: "IT and Cybersecurity",
      link: "/Services/Transportation-and-Smart-Mobility/it-and-cybersecurity",
      img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    },
    {
      title: "Planning and Consulting",
      link: "/Services/Urban-Planning/planning-and-advisory",
      img: "https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg",
    },
    {
      title: "Process Developement & Implementation",
      link: "/Services/Project-Advisory/process-development-and-implementation",
      img: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
    },
    {
      title: "Cost Planning",
      link: "/Services/Project-Advisory/cost-management",
      img: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
    },
    {
      title: "Community Engagement",
      link: "/Services/Environment-Sustainability-and-Resilience/climate-adaptation",
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
      <h1 className="text-4xl lg:text-5xl font-semibold text-center">
        Our Services
      </h1>
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
              <Link href={service.link}>
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
                  <h3 className="font-semibold relative z-10">
                    {service.title}
                  </h3>
                </motion.div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
      <div className="flex justify-center items-center">
        <Link
          href={"/Services"}
          className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
        >
          View all services <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
};

export default Services;
