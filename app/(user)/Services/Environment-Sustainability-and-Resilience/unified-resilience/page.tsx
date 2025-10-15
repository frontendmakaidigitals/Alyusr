"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
export default function Page() {
  const focusAreas = [
    {
      title: "Communication Systems",
      desc: "We design and secure communication networks that stay functional even during emergencies. From satellite connectivity to redundant fiber systems, we ensure uninterrupted communication for critical operations.",
      img: "/Environment-Sustainability/Unified Resilience/Communication Systems.webp",
    },
    {
      title: "Information Technology & Cybersecurity",
      desc: "Our cybersecurity experts safeguard sensitive data and IT assets from evolving threats. We integrate proactive monitoring, defense mechanisms, and rapid recovery strategies to minimize downtime and data loss.",
      img: "/Environment-Sustainability/Unified Resilience/Information Technology.webp",
    },
    {
      title: "Business Systems",
      desc: "We help organizations protect and sustain essential business processes, ensuring financial, administrative, and operational functions remain uninterrupted. This reduces disruptions to clients, employees, and stakeholders.",
      img: "/Environment-Sustainability/Unified Resilience/Business Systems.webp",
    },
    {
      title: "Operational Technology & Industrial Control Systems (ICS)",
      desc: "Critical automation systems require specialized protection. We secure ICS and SCADA networks to prevent failures, sabotage, and cyber intrusions that could impact production or safety.",
      img: "/Environment-Sustainability/Unified Resilience/Operational Technology.webp",
    },
    {
      title: "Utilities & Energy Systems",
      desc: "Our engineers design resilient energy and water systems capable of withstanding disruptions. Whether it’s protecting power grids or securing water supply networks, we deliver reliable utility resilience.",
      img: "/Environment-Sustainability/Unified Resilience/Utilities-Energy Systems.webp",
    },
    {
      title: "Facility Automation",
      desc: "From smart buildings to advanced control systems, we integrate automation that enhances safety, efficiency, and continuity. These systems are designed to adapt quickly during crises or disruptions.",
      img: "/Environment-Sustainability/Unified Resilience/Facility Automation.webp",
    },
    {
      title: "Employee Safety",
      desc: "People are at the heart of resilience. We implement robust safety protocols, emergency response systems, and training programs to ensure employee protection in any scenario.",
      img: "/Environment-Sustainability/Unified Resilience/Employee Safety.webp",
    },
    {
      title: "Regulatory Compliance & Governance",
      desc: "We align resilience strategies with local and international regulations. Our governance frameworks ensure organizations meet compliance requirements while maintaining operational integrity.",
      img: "/Environment-Sustainability/Unified Resilience/Regulatory Compliance.webp",
    },
    {
      title: "Asset & Inventory Management",
      desc: "We provide systems for tracking, monitoring, and securing critical assets and inventory. This ensures resources are available and accounted for during both routine operations and crisis situations.",
      img: "/Environment-Sustainability/Unified Resilience/Asset-Inventory Management.webp",
    },
  ];

  const industries = [
    {
      title: "Oil & Gas",
      desc: "Securing energy facilities and pipelines.",
      img: "/Environment-Sustainability/Unified Resilience/Oil-Gas.webp",
    },
    {
      title: "Government & Defense",
      desc: "Supporting national resilience and emergency preparedness.",
      img: "/Environment-Sustainability/Unified Resilience/Government-Defense.webp",
    },
    {
      title: "Transportation",
      desc: "Keeping airports, ports, and rail networks operational.",
      img: "/Environment-Sustainability/Unified Resilience/Transportation.webp",
    },
    {
      title: "Energy & Utilities",
      desc: "Strengthening grid stability and power generation facilities.",
      img: "/Environment-Sustainability/Unified Resilience/Energy-Utilities.webp",
    },
    {
      title: "Engineering & Construction",
      desc: "Embedding resilience into infrastructure from the start.",
      img: "/Environment-Sustainability/Unified Resilience/Engineering-Construction.webp",
    },
    {
      title: "Financial Services",
      desc: "Protecting data integrity and operational continuity in high-stakes environments.",
      img: "/Environment-Sustainability/Unified Resilience/Financial Services.webp",
    },
    {
      title: "Manufacturing",
      desc: "Ensuring production systems are secure and adaptive.",
      img: "/Environment-Sustainability/Unified Resilience/Manufacturing.webp",
    },
  ];
  const points = [
    {
      title: "Integrated Approach",
      desc: "We break down silos between cyber, physical, and operational systems.",
    },
    {
      title: "Proven Expertise",
      desc: "Decades of engineering and consulting experience across critical industries.",
    },
    {
      title: "Future-Ready Solutions",
      desc: "Embedding flexibility to adapt to evolving risks and technologies.",
    },
    {
      title: "Commitment to Safety",
      desc: "Prioritizing people and communities alongside infrastructure.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Unified Resilience
            </h1>
            <h2 className="text-lg text-blue-400 font-[500]">
              Protecting Infrastructure, Enabling Continuity
            </h2>
            <p>
              At Al Yusr, we recognize that resilience today goes far beyond
              traditional risk management. In an increasingly complex world
              where physical, digital, and operational systems are
              interconnected, our Unified Resilience solutions safeguard
              organizations against disruption, whether from natural disasters,
              cyber threats, or operational breakdowns.
              <br /> <br />
              We bring together expertise across critical infrastructure,
              information systems, and governance frameworks to ensure that our
              clients can operate with continuity, adaptability, and confidence
              even in the face of unforeseen challenges.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/Unified Resilience/Manufacturing.webp"
              }
              className="w-full h-full object-cover"
              alt={"Unified Resillience"}
            />
          </div>
        </div>
      </section>
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Heading */}
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-16">
            Our <span className="text-primary">Areas of Focus</span>
          </motion.h2>

          {/* Grid */}
          <div className="max-w-6xl mx-auto grid gap-5 grid-cols-1 lg:grid-cols-3">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="bg-slate-100 w-full h-[240px]">
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container text-center">
          {/* Section Heading */}
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            <span className="text-blue-500">Industries</span> We Support
          </motion.h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg group h-[340px]"
              >
                {/* Background Image */}{" "}
                <Image
                  src={industry.img}
                  alt={industry.title}
                  fill
                  className=" object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12"
          >
            Why Choose <span className="text-blue-500">Al Yusr?</span>
          </motion.h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-blue-50 p-3 rounded-lg"
              >
                {/* Icon */}
                <div className="flex-shrink-0 text-white">
                  <BadgeCheck className="w-7 h-7 fill-green-500" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Build Resilience That Lasts"
        desc=" Let Al Yusr help you design and deliver unified resilience strategies that protect your assets, people, and operations."
        btn="Contact Us Today"
      />
    </main>
  );
}
