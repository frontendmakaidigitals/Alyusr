"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  Workflow,
  ShieldCheck,
  Cpu,
  Users,
  UserCheck,
  BadgeCheck,
} from "lucide-react";

export default function ConstructionManagementPage() {
  const services = [
    {
      title: "Design & Engineering",
      points: [
        "Development of VT system design concepts",
        "Design drawings, detailed specifications, and cost estimates",
        "Equipment selection and performance benchmarking",
        "Multidisciplinary coordination with MEP, structural, and architectural teams",
        "Compliance with local building codes, fire safety regulations, and ADA standards",
        "Solutions for logistical challenges in building core and vertical circulation",
      ],
    },
    {
      title: "Condition Assessments & Studies",
      points: [
        "Modernization strategies for aging equipment",
        "Elevator and escalator inspections and evaluations",
        "Performance audits and lifecycle cost analysis",
        "Product feasibility reviews and white papers on emerging technologies",
        "Code compliance and accessibility (ADA) reviews",
      ],
    },
    {
      title: "Construction Phase Services",
      points: [
        "Shop drawing and submittal reviews",
        "Construction progress monitoring and site inspections",
        "Review of RFIs, RFCs, and change orders",
        "Final field inspections and punch list development",
        "Acceptance inspections and contractor coordination",
        "Quality assurance reviews and commissioning support",
      ],
    },
    {
      title: "Simulation & Pedestrian Flow Analysis",
      points: [
        "Vertical transportation simulation modeling",
        "Peak demand assessments and elevator wait time calculations",
        "Scenario planning for different usage levels (e.g., peak office, event, or transit traffic)",
        "Flow optimization strategies to reduce congestion and improve user experience",
      ],
    },
  ];
  const features = [
    {
      title: "End-to-End Expertise",
      description:
        "From feasibility studies to final commissioning, we offer full-service support under one roof.",
      icon: Workflow,
    },
    {
      title: "Code Compliance and Safety Focus",
      description:
        "We ensure all designs meet the highest standards in safety, reliability, and accessibility.",
      icon: ShieldCheck,
    },
    {
      title: "Technology-Driven Solutions",
      description:
        "Our approach integrates smart controls, energy-efficient systems, and digital simulation tools.",
      icon: Cpu,
    },
    {
      title: "Interdisciplinary Collaboration",
      description:
        "Easy coordination with architects, civil engineers, and facility teams ensures fully integrated solutions.",
      icon: Users,
    },
    {
      title: "Client-Centric Delivery",
      description:
        "Our solutions are always tailored to your building type, usage patterns, and long-term operational goals.",
      icon: UserCheck,
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Vertical Transportation Services
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
          In today&apos;s fast-moving world, vertical transportation systems,
          elevators, escalators, and moving walkways are more than just
          utilities; they are essential to the functionality and efficiency of
          buildings and public infrastructure. From office towers to transit
          hubs, airports to hospitals, vertical mobility shapes how people
          interact with the built environment.
        </p>{" "}
        <p className="mt-2 text-lg text-center">
          We work closely with building owners, developers, architects,
          engineers, and facility managers to provide comprehensive support
          throughout every stage of the vertical transportation lifecycle. Our
          experts combine engineering precision with technological insight to
          design systems that are fully tailored to the specific movement
          patterns, constraints, and operational goals of each site.
        </p>
      </section>
      <section className="my-20">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-5xl font-semibold">
              Our <span className="text-blue-500">Approach</span>
            </h1>
            <p className="mt-3 text-lg">
              We work closely with building owners, developers, architects,
              engineers, and facility managers to provide comprehensive support
              throughout every stage of the vertical transportation lifecycle.
              Our experts combine engineering precision with technological
              insight to design systems that are fully tailored to the specific
              movement patterns, constraints, and operational goals of each
              site.
            </p>
          </div>
          <div className="h-[400px] w-full ">
            <img
              src={"/engineering/pexels-thisisengineering-3913031.jpg"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="bg-blue-50 py-20">
        <div className="container">
          <h2 className="text-5xl font-bold text-center  mb-12">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-blue-100"
              >
                <h3 className="text-3xl font-semibold text-sky-800 mb-4">
                  {service.title}
                </h3>
                <ul className=" space-y-2 text-gray-700">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="mt-[.17rem]">
                        <BadgeCheck className="w-5 h-5 fill-green-500 text-slate-50" />
                      </span>
                      {point}.
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className=" py-16">
        <div className="container">
          <h2 className="text-5xl max-w-5xl mx-auto font-bold text-center text-black mb-12">
            Why Choose Al Yusr for{" "}
            <span className="text-blue-500">Vertical Transportation?</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => {
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
        title="Built to Power Progress"
        desc="Whether we're energizing a new transit corridor, upgrading bridge control systems, or supporting water utility modernization, SCCI Electric is committed to powering progress through safe, smart, and sustainable electrical solutions."
        btn="Contact Us Today"
      />
    </main>
  );
}
