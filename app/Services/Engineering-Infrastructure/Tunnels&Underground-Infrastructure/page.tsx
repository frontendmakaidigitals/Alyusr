"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  Layers,
  ScanSearch,
  Globe,
  ShieldCheck,
  MountainSnow,
} from "lucide-react";
export default function ConstructionManagementPage() {
  const reasons = [
    {
      title: "Full Lifecycle Support",
      description:
        "We provide end-to-end design and construction support for tunnel infrastructure, from feasibility through commissioning.",
      icon: Layers,
    },
    {
      title: "Advanced Modeling & BIM",
      description:
        "Our tunnel systems leverage cutting-edge modeling tools and BIM for accuracy, clash detection, and efficient coordination.",
      icon: ScanSearch,
    },
    {
      title: "Local Knowledge + Global Standards",
      description:
        "Our team combines deep regional understanding with international best practices for optimized solutions.",
      icon: Globe,
    },
    {
      title: "ISO-Certified Systems",
      description:
        "We follow ISO-certified safety, quality, and environmental systems for secure and compliant tunnel execution.",
      icon: ShieldCheck,
    },
    {
      title: "Geotechnical Risk Expertise",
      description:
        "We’ve delivered results in high-risk and geologically complex environments with tailored mitigation strategies.",
      icon: MountainSnow,
    },
  ];

  const services = [
    {
      title: "Planning, Feasibility & Program Management",
      desc: "We assess technical, environmental, and financial viability from the ground up, supporting public and private clients with:",
      points: [
        "Feasibility studies & route assessments",
        "Environmental impact evaluations",
        "Lifecycle cost analysis",
        "Project scheduling & risk management",
        "Program and construction oversight",
      ],
      image: "/images/services/planning.jpg",
    },
    {
      title: "Geotechnical & Geological Engineering",
      desc: "Our engineers conduct in-depth soil and rock investigations to optimize design parameters and minimize risk during construction. This includes:",
      points: [
        "Site investigations and borehole logging",
        "Groundwater studies and modeling",
        "Geotechnical risk assessment",
        "Settlement prediction and monitoring",
      ],
      image: "/images/services/geotechnical.jpg",
    },
    {
      title: "Tunnel Design & Engineering",
      desc: "We specialize in the design of tunnels for roadways, rail, stormwater, sewer, and utility systems, employing a variety of techniques such as:",
      points: [
        "Soft Ground Tunneling: EPB, slurry shield, hand-mining",
        "Rock Tunneling: Drill-and-blast, TBM-based design",
        "NATM/SEM: For complex geological conditions",
        "Cut-and-Cover & Trenchless Systems",
      ],
      image: "/images/services/tunnel-design.jpg",
    },
    {
      title: "Trenchless Technology Solutions",
      desc: "In urban and environmentally sensitive areas, we apply trenchless methods to reduce surface disruption:",
      points: [
        "Microtunneling",
        "Horizontal Directional Drilling (HDD)",
        "Pipe jacking",
        "Auger boring",
      ],
      image: "/images/services/trenchless.jpg",
    },
    {
      title: "Tunnel Inspection, Rehab & Asset Management",
      desc: "We help cities and operators extend the life of underground assets through:",
      points: [
        "Routine inspections and condition surveys",
        "Structural health monitoring (SHM)",
        "Leak detection and waterproofing",
        "Structural rehabilitation",
        "Asset tracking and lifecycle management",
      ],
      image: "/images/services/inspection.jpg",
    },
    {
      title: "Resident Engineering & Construction Support",
      desc: "Al Yusr provides full-time engineering support during construction, ensuring quality, compliance, and safety. Our services include:",
      points: [
        "Resident engineering and site supervision",
        "Contractor coordination",
        "QA/QC inspections",
        "Safety audits and progress reporting",
        "Change management and claim analysis",
      ],
      image: "/images/services/construction.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container   my-10">
        <h1 className="text-4xl max-w-3xl md:text-5xl font-bold mb-4 text-sky-800">
          Tunnels & Underground Infrastructure
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={
            "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg"
          }
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={500}
          height={200}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr Engineering Consulting, we deliver reliable, future-ready
          tunneling and underground infrastructure solutions that meet the
          growing demands of modern cities and complex industrial developments.
          Whether it’s transportation, utilities, water management, or energy
          distribution, we engineer below-ground systems with precision, safety,
          and resilience in mind.
        </p>{" "}
        <p className="mt-2 text-lg text-center">
          With extensive regional and international experience, our tunneling
          teams combine deep technical knowledge with advanced construction
          methodologies to deliver cost-effective solutions, even in the most
          geologically challenging conditions.
        </p>
      </section>

      {/* Features */}
      <section className="py-24 container space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">What We Do</h2>
          <p className="text-gray-700 text-lg">
            We offer services across the tunnel lifecycle, from early-stage
            feasibility studies to detailed design, construction supervision,
            and rehabilitation of aging assets.
          </p>
        </div>

        {services.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`${
                  isEven ? "order-1" : "order-1 lg:order-2"
                } w-full h-[300px] bg-slate-500 md:h-[380px] overflow-hidden rounded-2xl`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className={`${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                <h3 className="text-2xl font-semibold text-sky-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-800 mb-4">{item.desc}</p>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Why Choose Al Yusr?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-blue-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-800 rounded-full mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Build What’s Below the Surface"
        desc="From mega infrastructure to local utility tunnels, Al Yusr Engineering Consulting is your trusted partner in delivering efficient, resilient, and safe underground infrastructure."
        btn="Contact Us Today"
      />
    </main>
  );
}
