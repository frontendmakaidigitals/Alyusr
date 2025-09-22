"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Lightbulb, Layers, Globe2, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import {
  PenTool,
  ClipboardCheck,
  Hammer,
  Users,
  Workflow,
  ShieldCheck,
  Cpu,
  Handshake,
} from "lucide-react";
export default function Page() {
  const services = [
    {
      title: "Design & Engineering",
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      points: [
        "Development of VT system design concepts",
        "Design drawings, detailed specifications, and cost estimates",
        "Equipment selection and performance benchmarking",
        "Multidisciplinary coordination with MEP, structural, and architectural teams",
        "Compliance with local codes, fire safety, and ADA standards",
        "Solutions for logistical challenges in building core and circulation",
      ],
    },
    {
      title: "Condition Assessments & Studies",
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
      points: [
        "Modernization strategies for aging equipment",
        "Elevator and escalator inspections and evaluations",
        "Performance audits and lifecycle cost analysis",
        "Product feasibility reviews and white papers on new tech",
        "Code compliance and ADA accessibility reviews",
      ],
    },
    {
      title: "Construction Phase Services",
      icon: <Hammer className="w-8 h-8 text-blue-600" />,
      points: [
        "Shop drawing and submittal reviews",
        "Construction progress monitoring and site inspections",
        "Review of RFIs, RFCs, and change orders",
        "Final field inspections and punch list development",
        "Acceptance inspections and contractor coordination",
        "Quality assurance and commissioning support",
      ],
    },
    {
      title: "Simulation & Pedestrian Flow Analysis",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      points: [
        "Vertical transportation simulation modeling",
        "Peak demand assessments & elevator wait time calculations",
        "Scenario planning for varying traffic levels",
        "Flow optimization to reduce congestion & improve UX",
      ],
    },
  ];
  const reasons = [
    {
      title: "End-to-End Expertise",
      icon: <Workflow className="w-8 h-8 text-blue-600" />,
      desc: "From feasibility studies to final commissioning, we offer full-service support under one roof.",
    },
    {
      title: "Code Compliance & Safety Focus",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      desc: "We ensure all designs meet the highest standards in safety, reliability, and accessibility.",
    },
    {
      title: "Technology-Driven Solutions",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      desc: "Our approach integrates smart controls, energy-efficient systems, and digital simulation tools.",
    },
    {
      title: "Interdisciplinary Collaboration",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      desc: "Seamless coordination with architects, engineers, and facility teams ensures fully integrated solutions.",
    },
    {
      title: "Client-Centric Delivery",
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      desc: "Our solutions are always tailored to your building type, usage patterns, and long-term goals.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-semibold">
              Vertical <span className="text-blue-600">Transportation</span>{" "}
              Services
            </h1>

            <p>
              In today’s fast-moving world, vertical transportation systems,
              elevators, escalators, and moving walkways are more than just
              utilities; they are essential to the functionality and efficiency
              of buildings and public infrastructure. From office towers to
              transit hubs, airports to hospitals, vertical mobility shapes how
              people interact with the built environment.
              <br /> <br />
              At Al Yusr, our dedicated Vertical Transportation (VT) team
              delivers integrated, forward-thinking solutions that enhance
              mobility, reduce downtime, and optimize space and energy
              performance. We support new installations, system modernizations,
              and refurbishments across a variety of sectors, always balancing
              cost-efficiency, user comfort, compliance, and cutting-edge
              technology.
            </p>
          </div>
          <div className="w-full h-[450px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/vertical-transportation/hero.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-4xl lg:text-5xl font-bold mb-6"
          >
            Our <span className="text-blue-600">Approach</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            We work closely with building owners, developers, architects,
            engineers, and facility managers to provide comprehensive support
            throughout every stage of the vertical transportation lifecycle. Our
            experts combine engineering precision with technological insight to
            design systems fully tailored to the specific movement patterns,
            constraints, and operational goals of each site.
          </motion.p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-4xl lg:text-5xl font-bold text-center mb-12"
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-4xl lg:text-5xl font-bold text-center mb-14"
          >
            Why Choose <span className="text-blue-600">Al Yusr</span> for
            Vertical Transportation?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  {reason.icon}
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Elevate Your Project with Smart Mobility Solutions"
        desc="Whether you're planning a new development, upgrading an existing system, or troubleshooting complex elevator performance issues, Al Yusr’s Vertical Transportation team is here to help."
        btn="Contact us today"
      />
    </main>
  );
}
