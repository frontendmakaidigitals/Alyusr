"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import BgLayer from "@/app/app_chunks/BgLayer";
const HeroSection = () => {
  const [sectionTop, setSectionTop] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );
  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  return (
    <section>
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "55vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container mx-auto py-10 flex flex-col justify-center items-center h-full max-w-3xl">
          <h1 className="text-6xl font-[500] text-slate-50 text-center">
            About Us
          </h1>
          <p className="mt-3 text-slate-50 text-center">
            We&apos;re here to answer your questions, explore opportunities, and
            support your projects, every step of the way. Whether you&apos;re
            looking for engineering consultancy, design expertise, or project
            management services, our team is ready to assist you. For project
            consultations, RFPs, or business partnerships, please reach out via
            email or use the enquiry form below.
          </p>
        </div>
        <BgLayer color="bg-black/50 z-20" />

        {/* Parallax image */}
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.2] inset-0 w-full h-full object-cover object-center"
          src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg"
          alt=""
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
