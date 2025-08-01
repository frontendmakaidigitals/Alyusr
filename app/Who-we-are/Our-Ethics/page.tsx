"use client";
import {
  ShieldCheck,
  FileText,
  AlertCircle,
  Scale,
  UserCheck,
  BookOpen,
  AlertTriangle,
  Lock,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
export default function OurEthics() {
  const items = [
    {
      icon: <BookOpen className="w-5 h-5 text-sky-600" />,
      text: "Understanding the Code of Conduct",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-sky-600" />,
      text: "Recognizing conflicts of interest",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
      text: "Anti-bribery and anti-corruption policies",
    },
    {
      icon: <Lock className="w-5 h-5 text-sky-600" />,
      text: "Data protection and client confidentiality",
    },
    {
      icon: <Handshake className="w-5 h-5 text-sky-600" />,
      text: "Respect in the workplace",
    },
  ];
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
            Our Ethics
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
                At ALYUSR Engineering Consulting, we believe that ethical
                behavior is the foundation of long-term success. We are fully
                committed to upholding the highest standards of integrity,
                transparency, and compliance in everything we do, from how we
                deliver projects to how we engage with clients, employees,
                partners, and communities.
                <br /> Our reputation as a trusted engineering consultancy is
                built not only on the quality of our work, but also on the
                values that guide us. We hold ourselves accountable to both
                Saudi regulations and international standards, ensuring that our
                business practices are lawful, ethical, and respectful across
                all markets we operate in.
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
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Ethical Culture Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Ethical Culture</h2>
            <p className="text-gray-700 mb-4">
              Our business culture is grounded in fairness, professionalism, and
              respect. We encourage ethical decision-making and hold a
              zero-tolerance approach to bribery, corruption, and
              discrimination.
            </p>
            <p className="text-gray-700">
              Speaking up is encouraged, and doing the right thing is
              expected—always.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <ShieldCheck className="text-sky-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Integrity is Non-Negotiable
            </h3>
            <p className="text-gray-700 text-sm">
              We act with honesty, uphold compliance, and hold ourselves
              accountable at all levels.
            </p>
          </div>
        </div>

        {/* Code of Ethics Cards */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Code of Ethics & Conduct
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-6 h-6 text-sky-600" />,
                title: "Legal Compliance",
                desc: "Following all applicable Saudi and international laws across all operations.",
              },
              {
                icon: <Scale className="w-6 h-6 text-sky-600" />,
                title: "Anti-Corruption & Bribery",
                desc: "Strict zero-tolerance for any form of bribery, fraud, or unfair advantage.",
              },
              {
                icon: <UserCheck className="w-6 h-6 text-sky-600" />,
                title: "Fair Treatment",
                desc: "Respecting diversity, equality, and inclusion across teams and projects.",
              },
              {
                icon: <AlertCircle className="w-6 h-6 text-sky-600" />,
                title: "Health, Safety & Environment",
                desc: "Committed to protecting people and the planet through ethical practices.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
                title: "Client Confidentiality",
                desc: "Safeguarding sensitive information and respecting privacy.",
              },
              {
                icon: <Scale className="w-6 h-6 text-sky-600" />,
                title: "Fair Competition",
                desc: "Upholding professional standards and transparent bidding.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Training and Governance */}
      </section>
      <section className="py-16 px-6 bg-sky-50 rounded-2xl shadow-inner">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Training & Awareness
            </h2>
            <p className="text-gray-700 text-base mb-6">
              All employees receive mandatory ethics and compliance training to
              help them identify, report, and avoid unethical behavior. Key
              areas include:
            </p>
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span>{item.icon}</span>
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
              alt="Ethics Training Illustration"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
