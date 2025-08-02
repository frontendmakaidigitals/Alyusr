"use client";
import React from "react";
import {
  ShieldCheck,
  Users,
  Activity,
  AlertTriangle,
  Award,
  ClipboardCheck,
  CheckCircle,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/app_chunks/CTA";
const safetyPrograms = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "Leadership-Driven Safety Culture",
    desc: "Senior managers and project heads lead all safety efforts to ensure visibility, resource allocation, and improvement.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Employee Participation & Awareness",
    desc: "All staff are engaged in planning, audits, toolbox talks, and encouraged to report hazards and suggest improvements.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-indigo-600" />,
    title: "Training & Safety Orientation",
    desc: "Every employee undergoes safety training relevant to their role and site, with regular refreshers.",
  },
  {
    icon: <Activity className="w-6 h-6 text-orange-600" />,
    title: "Risk-Based Planning",
    desc: "Risk assessments and mitigation strategies are integrated into every project phase.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-rose-600" />,
    title: "Incident Prevention & Response",
    desc: "A robust system for reporting, investigating, and correcting incidents with root cause analysis.",
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-pink-600" />,
    title: "Fit-for-Duty Policy",
    desc: "Employees must be mentally and physically ready for work. Health programs support wellness.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-sky-600" />,
    title: "Contractor & Partner Integration",
    desc: "Subcontractors align with ALYUSR’s safety systems, with joint inspections and shared KPIs.",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-600" />,
    title: "Recognition & Rewards",
    desc: "Exceptional safety performance is celebrated with awards and internal recognition.",
  },
];

export default function SafetyCommitmentsPage() {
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
    <section className="bg-gray-50">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Safety Commitments
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-6xl font-semibold">
            Expertise You Can Trust. Delivery You Can Count On.
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
         src={'/safety commitments/umit-yildirim-9OB46apMbC4-unsplash.jpg'}
          alt="ALYUSR Engineering Hero Background"
        />
      </motion.div>
      <section className="relative overflow-hidden">
        {/* Gradient background fixed here */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-sky-200/40 to-transparent pointer-events-none" />

        {/* SECTION 1: Image Right */}
        <div className="relative z-10 py-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">
            {/* Text */}
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-tighter mb-4">
                Our Commitment to Safety
              </h1>
              <p className="text-lg text-gray-700">
                At ALYUSR Engineering Consulting, safety is more than a policy;
                it is a core value embedded into our culture, our people, and
                our projects. We are committed to ensuring the physical, mental,
                and environmental well-being of every team member, client, and
                community we work with.
                <br />
                From project planning to execution, we apply proactive risk
                management strategies to identify, reduce, and eliminate
                hazards. Our approach is guided by international safety
                standards, including ISO 45001, and reinforced by strong
                leadership, clear procedures, and empowered teams.
              </p>
              <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </button>
            </div>
            {/* Image */}
            <div className="h-[450px] w-full">
              <img
                src="/safety commitments/sandy-millar-yvpexJFLTSU-unsplash.jpg"
                alt="Safety Image"
                className="w-full h-full object-cover rounded-lg"
              />
              <BgLayer />
            </div>
          </div>
        </div>

        {/* SECTION 2: Image Left */}
        <div className="relative z-10 py-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">
            {/* Image */}
            <div className="h-[450px] w-full order-last lg:order-first">
              <img
                src="/safety commitments/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg"
                alt="Safety Culture"
                className="w-full h-full object-cover rounded-lg"
              />
              <BgLayer />
            </div>
            {/* Text */}
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-tighter mb-4">
                Our Culture of Safety
              </h1>
              <p className="text-lg text-gray-700">
                Our internal safety culture is built on three pillars:{" "}
                <strong>Commitment</strong>, <strong>Accountability</strong>,
                and <strong>Participation</strong>. We train and encourage every
                employee to play an active role in maintaining a safe and
                healthy workplace, from the office to the job site. Our safety
                programs are designed to prevent incidents, improve performance,
                and promote continuous learning across all departments.
              </p>
              <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl py-20 px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Safety Commitments
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At ALYUSR Engineering Consulting, safety is a core value. We embed
            it in our culture, people, and projects — from planning to execution
            — following international standards like ISO 45001.
          </p>
        </div>

        {/* Safety Cards Grid */}
        {/* Safety Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {safetyPrograms.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-start gap-5 mb-4">
                {/* Icon container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 shadow-inner">
                  {item.icon}
                </div>

                {/* Title with underline effect on hover */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-700 transition">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-blue-200 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed tracking-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Certifications & Compliance"
        desc="ALYUSR is fully certified under ISO 45001:2018 – Occupational Health & Safety Management. All of our safety practices are aligned with local laws and international benchmarks to ensure consistent, high-standard outcomes."
      />
    </section>
  );
}
