"use client";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import BgLayer from "@/app/app_chunks/BgLayer";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Landmark,
  Building2,
  ShieldCheck,
  Timer,
  ClipboardList,
  Eye,
  Users,
  DollarSign,
  Cpu,
  Repeat,
} from "lucide-react";
import Image from "next/image";
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
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-50">
            Trusted by Government and Private Sectors
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Delivering Confidence Through Proven Performance
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg"
          alt="ALYUSR Engineering Hero Background"
        />
      </motion.div>

      {/* OVERVIEW SECTION */}
      <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
        <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold leading-tighter  mb-4">
              Heading
            </h1>
            <p className="text-lg text-gray-700">
              For over a decade, ALYUSR Engineering Consulting has been a
              trusted partner to some of the most prominent government entities,
              developers, and private organizations in the Kingdom of Saudi
              Arabia and beyond.
            </p>
            <p className="mt-3">
              Our Class A certification and ISO-accredited methodologies reflect
              our deep commitment to quality, safety, and accountability, making
              us a go-to choice for critical national infrastructure,
              high-impact private developments, and strategic consulting.
            </p>

            <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
              Discover Our Story <ArrowUpRight />
            </button>
          </div>
          <div className="h-[450px]">
            <img
              src="https://images.pexels.com/photos/2100942/pexels-photo-2100942.jpeg"
              alt="About Background"
              className=" w-full h-full object-cover"
            />
            <BgLayer />
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS LIST */}
      <section className="bg-gradient-to-b from-white via-sky-50 to-white py-24 px-6 sm:px-10">
        <div className="container max-w-6xl mx-auto">
          {/* HEADLINE */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Trusted by Public & Private Sectors Alike
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ALYUSR delivers excellence to both government authorities and
              leading private developers — united by a commitment to compliance,
              innovation, and results.
            </p>
          </div>

          {/* GOVERNMENT BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-white border border-yellow-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6 text-sky-700" />
                <h3 className="text-xl font-semibold text-sky-800">
                  Preferred by Government Authorities
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                We proudly support Saudi Arabia’s public sector with end-to-end
                services in engineering, planning, sustainability, and program
                management.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm pl-1">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-1 text-sky-600" />
                  Transparent processes and compliance with Saudi building codes
                </li>
                <li className="flex items-start gap-2">
                  <Timer className="w-4 h-4 mt-1 text-sky-600" />
                  Timely project delivery aligned with national priorities
                </li>
                <li className="flex items-start gap-2">
                  <ClipboardList className="w-4 h-4 mt-1 text-sky-600" />
                  Experience with permitting, code approvals, and regulatory
                  frameworks
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="w-4 h-4 mt-1 text-sky-600" />
                  Deep understanding of Vision 2030 objectives and governance
                  models
                </li>
              </ul>
            </div>

            {/* PRIVATE BLOCK */}
            <div className="bg-gradient-to-br from-indigo-50 via-indigo-100 to-white border border-indigo-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-gray-800" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Trusted by Leading Private Developers
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                From real estate and hospitality to industrial and commercial
                sectors, ALYUSR delivers solutions to some of the region’s most
                ambitious private ventures.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm pl-1">
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 mt-1 text-sky-600" />
                  Agile project coordination and technical expertise
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 mt-1 text-sky-600" />
                  Value engineering and cost-effective designs
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 mt-1 text-sky-600" />
                  Integration of smart technologies and sustainability practices
                </li>
                <li className="flex items-start gap-2">
                  <Repeat className="w-4 h-4 mt-1 text-sky-600" />
                  Full lifecycle consulting, from feasibility to handover
                </li>
              </ul>
            </div>
          </div>

          {/* WHY CLIENTS CHOOSE ALYUSR */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Why Public & Private Clients Choose ALYUSR
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {[
              {
                img: "https://images.pexels.com/photos/7430341/pexels-photo-7430341.jpeg",
                text: "Class A License Holder — recognized for handling large-scale, complex projects",
              },
              {
                img: "https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg",
                text: "ISO-Certified Processes — quality, environmental, and safety management",
              },
              {
                img: "https://images.pexels.com/photos/8482822/pexels-photo-8482822.jpeg",
                text: "In-House Multidisciplinary Teams — no third-party reliance",
              },
              {
                img: "https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg",
                text: "Proven Portfolio — with successful projects across Saudi Arabia, UAE, Egypt, and the UK",
              },
              {
                img: "https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg",
                text: "Culturally Aware & Vision-Aligned — engineering that reflects both heritage and future goals",
              },
            ].map((item, i) => {
              return (
                <div
                  key={i}
                  className="group border bg-blue-500 border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                >
                  <div className="relative h-[300px] w-full bg-sky-100">
                    <Image
                      src={item.img}
                      alt={item.text}
                      fill
                      className="object-cover  group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-center  text-gray-50 text-sm font-semibold group-hover:text-sky-50 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
