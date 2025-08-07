"use client";
import { useState, useEffect, useRef } from "react";
import BgLayer from "@/app/app_chunks/BgLayer";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  Building2,
  Leaf,
  Cpu,
  PencilRuler,
  ClipboardList,
  BarChart3,
  FileText,
  Users,
  ShieldCheck,
  GaugeCircle,
  Handshake,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      {/* HERO */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-50">
            CEO-Led Specialized Departments
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Leadership That Drives Excellence
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="https://images.pexels.com/photos/5717512/pexels-photo-5717512.jpeg"
          alt="ALYUSR Engineering Hero Background"
        />
      </motion.div>

      {/* WHAT SETS US APART */}
      <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
        {/* Background image */}

        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-sky-200/40 to-transparent" />

        {/* Container with text */}
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold text-sky-800 leading-tighter  mb-4">
                Departments Built for Precision
              </h1>
              <p className="text-lg text-gray-700">
                At ALYUSR Engineering Consulting, excellence starts at the top.
                Our operations are led directly by the CEO and executive
                leadership, ensuring each project is delivered with strategic
                direction, accountability, and industry insight.
              </p>
              <p className="mt-3">
                Our departmental structure is not only specialized, it’s
                leadership-driven. Every division operates under the close
                supervision of senior decision-makers who bring decades of
                technical experience and a deep understanding of Saudi Arabia’s
                development goals, including Vision 2030.
              </p>

              <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </button>
            </div>
            <div className="h-[450px]">
              <img
                src="https://images.pexels.com/photos/3783585/pexels-photo-3783585.jpeg"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
              <BgLayer />
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="relative py-24 sm:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              A Structure Designed for Success
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Each department within ALYUSR is built around a focused area of
              expertise, with dedicated leaders overseeing quality, innovation,
              and client satisfaction. This structure enables us to deliver
              fully integrated solutions across the entire project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {[
              {
                title: "Engineering & Infrastructure",
                description:
                  "Handles structural, MEP, hydrology, roads, and utilities design.",
                icon: Building2,
              },
              {
                title: "Architecture & Urban Design",
                description:
                  "Focuses on creative, sustainable, and culturally relevant design solutions.",
                icon: PencilRuler,
              },
              {
                title: "Project & Construction Management",
                description:
                  "Delivers end-to-end planning, execution, and supervision of complex projects.",
                icon: ClipboardList,
              },
              {
                title: "Environmental & Sustainability",
                description:
                  "Leads environmental impact studies, EHS compliance, and green certification strategies.",
                icon: Leaf,
              },
              {
                title: "Digital Engineering & Smart Solutions",
                description:
                  "Oversees BIM implementation, simulation models, GIS, and smart city tech.",
                icon: Cpu,
              },
              {
                title: "Advisory & Strategic Consulting",
                description:
                  "Provides feasibility studies, PPP frameworks, risk analysis, and Vision 2030 alignment.",
                icon: BarChart3,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="relative bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* Floating Icon */}
                  <div className="absolute -top-6 left-6 bg-white shadow-md w-14 h-14 rounded-full flex items-center justify-center text-sky-700">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOOLS & CERTIFICATIONS */}
      <section className="relative bg-white py-24 container">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Are Driven by Process & Backed by Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At ALYUSR, executive leadership is hands-on — present at every
            critical step of your project journey.
          </p>
        </div>

        <div className="relative pl-8 max-w-3xl mx-auto">
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-blue-200 w-1 h-full" />
          {[
            {
              title: "Proposal & Planning Review",
              icon: FileText,
              desc: "CEO ensures each proposal reflects our technical capability and strategic alignment.",
            },
            {
              title: "Client Briefings & Approvals",
              icon: Users,
              desc: "Direct involvement during major presentations, negotiations, and scope validations.",
            },
            {
              title: "Risk & Compliance Checks",
              icon: ShieldCheck,
              desc: "Executive oversight in assessing legal, regulatory, and operational risks.",
            },
            {
              title: "Performance Evaluations",
              icon: GaugeCircle,
              desc: "Key input on evaluating KPIs, resource productivity, and schedule adherence.",
            },
            {
              title: "Strategic Client Partnerships",
              icon: Handshake,
              desc: "Forges long-term, trust-based relationships with clients and government stakeholders.",
            },
          ].map(({ title, desc, icon: Icon }, i) => (
            <div key={i} className="relative mb-12">
              <div className="absolute -left-14 top-1/2 -translate-y-1/2 bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <Icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="bg-sky-50 rounded-xl p-6 shadow border border-sky-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="container max-4-xl text-center text-sm mt-20">
          **This CEO-led model guarantees that our clients receive high-level
          attention, consistent quality, and fast decision-making across all
          touchpoints.
        </p>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-sky-100 py-20 ">
        <div className="container ">
          <h2 className="text-5xl text-center font-semibold text-gray-800 mb-8">
            Why It Matters to <span className="text-blue-500">Our Clients</span>
          </h2>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full px-4" // Add horizontal padding to avoid edge cuts
          >
            <CarouselContent className="gap-4 px-10">
              {" "}
              {/* optional spacing between cards */}
              {[
                {
                  title: "Strategic Alignment",
                  img: "https://images.pexels.com/photos/1181615/pexels-photo-1181615.jpeg",
                },
                {
                  title: "Streamlined Oversight",
                  img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
                },
                {
                  title: "Consistent Quality",
                  img: "https://images.pexels.com/photos/7564203/pexels-photo-7564203.jpeg",
                },
                {
                  title: "Client Trust",
                  img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                },
              ].map((point, i) => (
                <CarouselItem
                  key={i}
                  className="group md:basis-1/2 !p-0 lg:basis-1/3 bg-slate-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={point.img}
                      alt={point.title}
                      fill
                      className="object-cover  w-full h-full"
                    />
                  </div>
                  <div className="p-5 bg-blue-500">
                    <p className="text-center text-white text-lg font-semibold group-hover:text-sky-100 transition-colors duration-300">
                      {point.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Your Project. Our People. One Team.
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            With fully in-house capabilities, ALYUSR offers clients unmatched
            efficiency, precision, and project confidence. We&apos;re not just
            consultants, we’re your engineering partner from concept to
            completion.
          </p>
          <button className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 transition">
            Start a Project With Us
          </button>
        </div>
      </section>
    </div>
  );
}
