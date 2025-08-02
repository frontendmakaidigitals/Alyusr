"use client";

import {
  Building2,
  Users,
  Compass,
  Globe,
  Brain,
  TreeDeciduous,
  Network,
} from "lucide-react";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
            <h1 className="text-2xl  text-slate-50">
            Leadership & Vision
            <br className="hidden sm:block" />
          </h1>
         <p className="mt-3 text-slate-200 text-6xl font-semibold">
            Guiding Innovation. Engineering the Future.
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="/Leadership & Vision 2/banner.jpg"
          alt="ALYUSR Engineering Hero Background"
        />
      </motion.div>

      {/* Leadership Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Leadership That Builds with Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At ALYUSR, leadership is about inspiring progress, driving
              innovation, and delivering value. Our CEO and department heads
              across engineering, planning, design, safety, and project
              management work collaboratively to embed quality, sustainability,
              and innovation in every project.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Deep technical expertise across disciplines</li>
              <li>✓ Streamlined structure that empowers teams</li>
              <li>✓ Collaborative and accountable project execution</li>
              <li>✓ High ethical and professional standards</li>
            </ul>
          </div>
          <div className="rounded-xl h-[450px] overflow-hidden">
            <img
              src="/Leadership & Vision 2/leadership.jpg"
              alt="Leadership at ALYUSR"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-sky-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="rounded-xl mb-4 h-[350px] overflow-hidden">
              <img
                src="/Leadership & Vision 2/leadership.jpg"
                alt="Leadership at ALYUSR"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We aim to be a driving force in the Kingdom’s transformation by
              providing high-impact engineering and consulting services that
              support national growth, infrastructure development, and quality
              of life.
            </p>
          </div>
          <div>
            <div className="rounded-xl h-[350px] mb-4 overflow-hidden">
              <img
                src="/Leadership & Vision 2/mission.jpg"
                alt="Leadership at ALYUSR"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver future-ready solutions in engineering, design, and
              project management. We create value from planning to delivery and
              long-term impact.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-6">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT BLOCK */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
              Our Commitment to <br className="hidden sm:inline" />
              <span className="text-sky-700">Vision 2030</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              We proudly align with the Kingdom’s Vision 2030, contributing to
              national initiatives in housing, infrastructure, urban
              development, and sustainability. Our projects are designed to
              support a thriving economy, a vibrant society, and an ambitious
              nation.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Whether we are shaping smart cities, supporting green
              infrastructure, or modernizing essential services, ALYUSR is
              committed to turning national goals into real-world outcomes.
            </p>
            <p className="text-gray-700 text-lg">
              As the Kingdom invests in infrastructure, smart cities, housing,
              and sustainability, ALYUSR delivers engineering solutions that
              support these goals across every sector. Our projects directly
              align with Vision 2030’s core pillars: a vibrant society, a
              thriving economy, and an ambitious nation.
            </p>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
            <img
              src="/Leadership & Vision 2/vision 2030.jpg"
              alt="Vision 2030 Project"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Vision 2030 Commitment */}
      <section className="py-20 px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How We Support Vision 2030
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="w-6 h-6 text-sky-700" />,
              title: "Urban Development & Housing",
              desc: "Designing livable communities and master plans that enhance life.",
            },
            {
              icon: <Network className="w-6 h-6 text-sky-700" />,
              title: "Infrastructure & Connectivity",
              desc: "Planning roads, utilities, and logistics hubs powering the future.",
            },
            {
              icon: <Globe className="w-6 h-6 text-sky-700" />,
              title: "Digital Transformation",
              desc: "Using BIM, GIS, and smart tools for efficient project delivery.",
            },
            {
              icon: <TreeDeciduous className="w-6 h-6 text-sky-700" />,
              title: "Sustainability & Environment",
              desc: "Green building, energy efficiency, and eco-focused design.",
            },
            {
              icon: <Brain className="w-6 h-6 text-sky-700" />,
              title: "Private Sector Enablement",
              desc: "Partnering with developers and PPPs for strategic growth.",
            },
            {
              icon: <Compass className="w-6 h-6 text-sky-700" />,
              title: "Nationwide Impact",
              desc: "From NEOM to Tabuk, delivering value that lasts for generations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <EngineeringCTA
        title="Nationwide Impact"
        desc="From Riyadh to NEOM, and from the Eastern Province to Tabuk, ALYUSR is helping reshape the Kingdom’s landscape, one project at a time. We partner with both public and private sector entities to deliver value, reduce environmental impact, and create long-lasting infrastructure for generations to come."
      />
    </div>
  );
}
