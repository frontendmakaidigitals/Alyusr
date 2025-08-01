"use client";

import {
  Globe,
  MapPin,
  Users,
  BadgeCheck,
  LayoutDashboard,
  Milestone,
} from "lucide-react";
import Image from "next/image";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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
          <h1 className="text-5xl font-bold text-slate-50">
            Company Overview
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Trusted Engineering Experts Supporting Saudi Vision 2030
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

      {/* Company Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-sky-800 mb-4">
              Company Overview
            </h2>
            <p className="text-gray-700 mb-4">
              With our head office in Riyadh and branches in the UK, Egypt, and
              Sri Lanka, we offer world-class services with local understanding.
              Our team includes highly skilled engineers, architects, and
              project managers using the latest technologies to deliver
              high-quality results.
            </p>
            <p className="text-gray-700">
              We support government and private sector clients from planning and
              design to supervision and handover. Our operations follow strict
              safety, quality, and sustainability standards aligned with Vision
              2030.
            </p>
            <p className="mt-4">
              At ALYUSR, we don’t just build projects, we build trust,
              innovation, and lasting impact.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
              alt="Company Overview"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          {" "}
          <div>
            <img
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
              alt="Company Overview"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-sky-800 mb-4">
              Our History
            </h2>
            <p className="text-gray-700 mb-4">
              ALYUSR was founded in Saudi Arabia with a vision to raise the
              standard of engineering consulting across the Kingdom and beyond.
              Built on deep industry knowledge, strong ethics, and technical
              innovation, the company has grown into a trusted name for
              large-scale infrastructure, urban development, and architectural
              design projects.
            </p>
            <p className="text-gray-700">
              From its early days delivering site studies and engineering plans,
              ALYUSR has evolved into a multi-disciplinary consultancy
              contributing directly to national transformation goals under
              Vision 2030. Today, our diverse portfolio spans government
              projects, private sector developments, and international
              partnerships.
            </p>
          </div>
        </div>
      </section>
      {/* Fast Facts */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold text-sky-800 text-center mb-12">
            Fast Facts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin className="text-sky-600 w-8 h-8" />,
                text: "Headquartered in Riyadh, with offices in UK, Egypt, and Sri Lanka",
              },
              {
                icon: <BadgeCheck className="text-green-600 w-8 h-8" />,
                text: "ISO-certified in Quality, Safety, Environment, Risk & PM",
              },
              {
                icon: <LayoutDashboard className="text-purple-600 w-8 h-8" />,
                text: "80+ major projects delivered across sectors",
              },
              {
                icon: <Globe className="text-blue-600 w-8 h-8" />,
                text: "Recognized by USGBC (LEED), ISOCARP, D-U-N-S Registered™",
              },
              {
                icon: <Users className="text-amber-600 w-8 h-8" />,
                text: "Full in-house services: Design, Engineering, Supervision, Digital",
              },
              {
                icon: <Milestone className="text-rose-600 w-8 h-8" />,
                text: "Supporting Saudi Vision 2030 in housing, infra & digital",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-sky-50 border border-sky-100 rounded-xl p-6 flex gap-4 items-start shadow hover:shadow-md transition"
              >
                {item.icon}
                <p className="text-gray-700 font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
