"use client";

import Link from "next/link";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import EngineeringCTA from "@/app/app_chunks/CTA";
export default function Page() {
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
    <div className="text-gray-900">
      {/* Hero Section */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-50">
            Transforming Saudi’s Future
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Engineering Progress. Empowering Vision 2030.
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="https://images.pexels.com/photos/7942430/pexels-photo-7942430.jpeg"
          alt="ALYUSR Engineering Hero Background"
        />
      </motion.div>
      <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
        {/* Background image */}

        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-sky-200/40 to-transparent" />

        {/* Container with text */}
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-tighter  mb-4">
                Heading
              </h1>
              <p className="text-lg text-gray-700">
                At ALYUSR Engineering Consulting, we are proud to play a vital
                role in shaping the Kingdom’s bold transformation under Saudi
                Vision 2030. Our work is rooted in national priorities,
                sustainable development, urban expansion, infrastructure
                excellence, and economic diversification. <br /> As a Class A
                certified firm, we are trusted partners on projects that define
                the future of Saudi Arabia, from smart cities and transportation
                networks to eco-friendly buildings and strategic advisory
                services that support long-term growth.
              </p>

              <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </button>
            </div>
            <div className="h-[450px]">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
              <BgLayer />
            </div>
          </div>
        </div>
      </section>
      {/* Building the Kingdom */}
      <section className="bg-gray-50 py-20 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Building the Kingdom of Tomorrow
          </motion.h2>
          <p className="text-gray-600 mb-12">
            Our teams work across sectors to help transform Saudi Arabia into a
            global hub of innovation, connectivity, and opportunity.
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "A Thriving Economy",
                desc: "Empowering local talent, fostering entrepreneurship, and building infrastructure for tourism, trade, and investment.",
              },
              {
                title: "An Ambitious Nation",
                desc: "Partnering with government and private entities to elevate standards in delivery, safety, and sustainability.",
              },
              {
                title: "A Vibrant Society",
                desc: "Designing inclusive spaces that enhance quality of life, preserve culture, and promote well-being.",
              },
            ].map(({ title, desc }, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="relative bg-white py-24 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900"
          >
            Our Contribution to Vision 2030
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-10 text-left text-gray-700 text-base md:text-lg leading-relaxed"
          >
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Urban and regional planning for residential and commercial
                  communities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Infrastructure engineering for roads, drainage, and utilities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Smart city integration and digital engineering</span>
              </li>
            </ul>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Green building design and environmental compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Project and construction management for giga/mega projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Strategic consulting for Vision-aligned goals</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Local Roots */}
      <section className="bg-gray-50 gap-5 grid grid-cols-1 lg:grid-cols-2 py-20 px-6 lg:px-24">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Local Roots, Global Vision
          </h2>
          <p className="text-gray-600 text-lg">
            With headquarters in Riyadh and projects across the Kingdom, ALYUSR
            unites local expertise and global standards to deliver world-class
            outcomes. Our team of architects, planners, engineers, and advisors
            is dedicated to engineering a sustainable, smart, and strong nation.
          </p>
        </motion.div>
        <img
          src={
            "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
          }
          alt={""}
          className=""
        />
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-6 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Join us in building a future that reflects the ambition, innovation,
            and heritage of the Kingdom. Let’s engineer the next chapter of
            Saudi Arabia, together.
          </p>
          <Link
            href="/services"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </section>
      <EngineeringCTA
        title="Partner With Us"
        desc="Join us in building a future that reflects the ambition, innovation, and heritage of the Kingdom. Let’s engineer the next chapter of Saudi Arabia, together."
        btn="Explore Our Services"
      />
    </div>
  );
}
