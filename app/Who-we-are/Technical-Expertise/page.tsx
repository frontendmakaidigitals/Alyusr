'use client'
import { CheckCircle, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
export default function TechnicalExpertisePage() {
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
    <main className="bg-gray-50 text-gray-800">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-50">
            Certifications & Accreditations
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Expertise You Can Trust. Delivery You Can Count On.
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

      <section className="py-16 px-6 bg-sky-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-sky-800 mb-4">
              Multidisciplinary Capabilities
            </h2>
            <ul className="space-y-4 text-gray-700">
              {[
                "Structural Engineering — Safe, efficient, and code-compliant structures",
                "Mechanical, Electrical & Plumbing (MEP) — Integrated, energy-efficient systems",
                "Infrastructure Design — Roads, utilities, and drainage with resilience",
                "Water, Drainage & Hydrology — Smart stormwater and hydraulic modeling",
                "Telecom & Low Current Systems — Secure connectivity and automation",
                "Urban & Regional Planning — Smart growth and community livability",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
              alt="Technical Experts Working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Advanced Tools & Technologies
          </h2>
          <p className="text-gray-700 mb-8">
            To deliver precision and speed, we rely on globally recognized tools
            such as:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-700">
            {[
              "AutoCAD",
              "Revit",
              "Civil 3D",
              "GIS Platforms",
              "BIM",
              "Topcon",
              "Trimble",
              "Leica Stations",
            ].map((tool, i) => (
              <li
                key={i}
                className="bg-sky-100 text-sky-800 font-medium rounded-lg px-4 py-2 text-center shadow-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 bg-sky-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Trusted by Public & Private Sectors
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our technical expertise has earned the trust of government agencies,
            developers, contractors, and industrial clients. From large-scale
            urban master plans to specialized facilities, we deliver tailored
            solutions aligned with national goals and international standards.
          </p>
        </div>
      </section>
    </main>
  );
}
