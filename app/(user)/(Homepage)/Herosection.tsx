"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import BgLayer from "../app_chunks/BgLayer";
import { motion } from "motion/react";

const Herosection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Sync with carousel API
  useEffect(() => {
    if (!api) return;
    api.scrollTo(activeIndex);
  }, [activeIndex, api]);

  const titles = [
    "Vision 2030",
    "Smart Cities",
    "Engineering",
    "Architecture & Infrastructure",
    "Foundation",
  ];

  const slides = [
    {
      title: "TRUSTED GLOBAL INFRASTRUCTURE LEADER",
      desc: "Delivering transformative engineering solutions that power the future of cities, industries, and communities.",
      img: "/global.jpg",
    },
    {
      title: "ENGINEERING THE FUTURE OF GLOBAL MEGA PROJECTS",
      desc: "Delivering world-class infrastructure, smart cities, and sustainable solutions: trusted by governments, developers, and industries across regions.",
      img: "/mega.jpg",
    },
    {
      title: "DRIVEN BY INDUSTRY-LED EXPERTISE",
      desc: "Powered by certified professionals, advanced tools, and proven methodologies to deliver complex projects with confidence and precision.",
      img: "/experts.jpg",
    },
    {
      title: "TRUSTED GLOBAL INFRASTRUCTURE LEADER",
      desc: "Delivering transformative engineering solutions that power the future of cities, industries, and communities.",
      img: "/global.jpg",
    },
    {
      title: "ENGINEERING THE FUTURE OF GLOBAL MEGA PROJECTS",
      desc: "Delivering world-class infrastructure, smart cities, and sustainable solutions: trusted by governments, developers, and industries across regions.",
      img: "/mega.jpg",
    },
  ];
  return (
    <section className="relative min-h-[500px] h-[50vh] lg:h-[58vh]">
      <Carousel
        opts={{
          watchDrag: false, // Disable drag functionality
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {titles.map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[50vh] min-h-[500px] lg:h-[58vh] relative overflow-hidden">
                <div className="absolute  z-10 w-full top-1/2 -translate-y-1/2">
                  <div className="w-full mx-auto container">
                    <motion.h1
                      key={slides[activeIndex].title}
                      initial={{ x: 200, opacity:0 }}
                      animate={{ x: 0, opacity:1 }}
                      transition={{
                        delay: 0.2,
                        duration: 1.4,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      className="text-4xl lg:text-6xl !text-slate-50 font-[600] max-w-2xl"
                    >
                      {slides[activeIndex].title}
                    </motion.h1>
                    <motion.p
                      key={slides[activeIndex].desc}
                      initial={{ x: 200, opacity:0 }}
                      animate={{ x: 0, opacity:1 }}
                      transition={{
                        delay: 0.3,
                        duration: 1.4,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      className="text-slate-50 mt-3 max-w-2xl"
                    >
                      {slides[activeIndex].desc}
                    </motion.p>
                    <motion.button
                      key={slides[activeIndex].img}
                      initial={{ x: 200, opacity:0 }}
                      animate={{ x: 0, opacity:1 }}
                      transition={{
                        delay: 0.4,
                        duration: 1.4,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      className="bg-gradient-to-br mt-4 px-4 py-[.45rem] text-sm rounded-lg text-slate-50 flex items-center gap-2 from-[#387EF0] to-[#2651C2]"
                    >
                      Explore Our Services <ArrowUpRight />
                    </motion.button>
                  </div>
                </div>
                <BgLayer />
                <img
                  src={`/home-hero${slides[activeIndex].img}`}
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Overlay Info */}
      <div className="absolute hidden lg:block bottom-0 left-0 w-full bg-black/10 backdrop-blur-md z-10 border-slate-200">
        <ul className="max-w-6xl mx-auto grid grid-cols-5">
          {titles.slice(0, 5).map((title, idx) => (
            <li
              key={idx}
              className={`relative py-4 px-4 text-center border-slate-300 ${
                idx < 4 ? "border-r" : ""
              }`}
            >
              <span className="relative z-10 text-slate-50 block text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
              </span>
              {idx === activeIndex % 4 && (
                <>
                  <span
                    className="absolute bottom-0  left-0 h-1 z-0 w-full"
                    style={{
                      animation:
                        "fillBar 8s cubic-bezier(0.19, 1, 0.22, 1) forwards",
                      height: "100%",
                    }}
                    key={activeIndex}
                  >
                    <span className="absolute inset-0 w-full h-full  bg-gradient-to-r from-[#1A2980] via-[#2464da] to-[#1A2980]" />
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes fillBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Herosection;
