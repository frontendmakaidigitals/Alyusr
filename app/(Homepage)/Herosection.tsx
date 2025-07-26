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
    "Masterplan",
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
    <section className="relative max-h-[58vh]">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {titles.map((_, index) => (
            <CarouselItem key={index}>
              <div className="max-h-[58vh] relative overflow-hidden">
                <div className="absolute  z-10 w-full top-1/2 -translate-y-1/2">
                  <div className="w-full mx-auto container">
                    <h1 className="text-6xl !text-slate-50 font-[600] max-w-2xl">
                      {slides[activeIndex].title}
                    </h1>
                    <p className="text-slate-50 mt-3 max-w-2xl">
                      {slides[activeIndex].desc}
                    </p>
                    <button className="bg-gradient-to-br mt-4 px-4 py-[.45rem] text-sm rounded-lg text-slate-50 flex items-center gap-2 from-[#387EF0] to-[#2651C2]">
                      Explore Our Projects <ArrowUpRight />
                    </button>
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
      <div className="absolute bottom-0 left-0 w-full bg-black/10 backdrop-blur-md z-10 border-slate-200">
        <ul className="max-w-6xl mx-auto grid grid-cols-5">
          {titles.slice(0, 5).map((title, idx) => (
            <li
              key={idx}
              className={`relative py-4 px-4 text-center border-slate-300 ${
                idx < 3 ? "border-r" : ""
              }`}
            >
              <span className="relative z-10 text-slate-50 block text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
              </span>
              {idx === activeIndex % 4 && (
                <span
                  key={activeIndex} // force re-render animation
                  className="absolute bottom-0 left-0 h-1 z-0"
                  style={{
                    backgroundColor: "#323232",
                    animation:
                      "fillBar 8s cubic-bezier(0.19, 1, 0.22, 1) forwards",
                    width: "100%",
                    height: "100%",
                  }}
                />
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
