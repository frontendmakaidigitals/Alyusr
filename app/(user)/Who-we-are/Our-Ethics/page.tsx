"use client";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import Link from "next/link";
const codeItems = [
  "Legal compliance requirements under local and international law",
  "Guidelines for ethical decision-making in daily operations",
  "Principles for fair treatment, anti-corruption, and anti-bribery",
  "Responsibilities related to environmental, health, and workplace safety",
  "Commitments to fair competition, client confidentiality, and data protection",
];

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
    <main className="">
      <section className="min-h-[85vh] py-12 lg:py-0 overflow-hidden relative">
        <BgLayer />
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-tighter  mb-4">
                Our <span className="text-blue-500">Ethics</span>
              </h1>
              <p className="text-lg text-gray-700">
                At ALYUSR Engineering Consulting, we believe that ethical
                behavior is the foundation of long-term success. We are fully
                committed to upholding the highest standards of integrity,
                transparency, and compliance in everything we do, from how we
                deliver projects to how we engage with clients, employees,
                partners, and communities. Our reputation as a trusted
                engineering consultancy is built not only on the quality of our
                work, but also on the values that guide us. We hold ourselves
                accountable to both Saudi regulations and international
                standards, ensuring that our business practices are lawful,
                ethical, and respectful across all markets we operate in.
              </p>

              <Link href={'/Contact'} className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </Link>
            </div>
            <div className="h-[450px] w-full bg-slate-100">
              <img
                src="/our division 2/heading.webp"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-sky-800 text-center mb-12"
          >
            Our Ethical Culture
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full bg-slate-100 lg:w-1/2 h-64 lg:h-[500px] relative rounded-xl overflow-hidden"
            >
              <Image
                src="/our-ethics.jpg" // replace with your image path
                alt="Ethical Culture"
                fill
                className="object-cover object-center w-full h-full rounded-xl"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <p>
                Our business culture is grounded in fairness, professionalism,
                and respect. Ethical decision-making is encouraged at every
                level of our organization, from executive leadership to field
                operations. We lead by example, taking a zero-tolerance approach
                to bribery, corruption, discrimination, and non-compliance.
              </p>
              <p>
                We actively promote a culture of accountability, where speaking
                up is encouraged, and doing the right thing is expected, always.
              </p>

              {/* Training & Awareness */}
              <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Training & Awareness
                </h3>
                <p className="mb-4">
                  All employees receive mandatory ethics and compliance training
                  to help them identify, report, and avoid unethical behavior.
                  Training includes:
                </p>
                <ul className="space-y-2">
                  {[
                    "Understanding the Code of Conduct",
                    "Recognizing conflicts of interest",
                    "Anti-bribery and anti-corruption policies",
                    "Data protection and client confidentiality",
                    "Respect in the workplace",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Training is regularly updated to reflect emerging risks and
                  global best practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-sky-800 text-center mb-12"
          >
            Code of Ethics & Conduct
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-700"
          >
            <p>
              ALYUSR follows a strict Code of Ethics and Business Conduct, which
              outlines:
            </p>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {codeItems.map((item, i) => (
                <li
                  key={i}
                  className="flex bg-sky-100 p-2 rounded-lg items-start gap-3"
                >
                  <BadgeCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              This code is shared with all employees, consultants, and
              subcontractors to ensure a consistent standard of ethical behavior
              throughout every project.
            </p>
          </motion.div>
        </div>
      </section>
      <EngineeringCTA
        title=" Governance & Oversight"
        desc="Our internal Ethics & Compliance Committee, led by senior management, ensures regular review of our ethics policies, incident reports, and internal audits. This committee works closely with department heads and legal advisors to implement improvements and ensure company-wide accountability."
      />
    </main>
  );
}
