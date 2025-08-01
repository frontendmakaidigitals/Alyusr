'use client'
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
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Ethics</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At ALYUSR Engineering Consulting, ethical behavior is the foundation
            of our success. We are committed to integrity, transparency, and
            compliance in everything we do.
          </p>
        </div>

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
