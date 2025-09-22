"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { useState } from "react";
import {
  CheckCircle,
  BarChart3,
  AlertTriangle,
  Zap,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

import { motion } from "motion/react";
export default function Page() {
  const tools = [
    {
      title: "Rail Traffic Controller (RTC) – Freight Network Analysis",
      desc: "The Rail Traffic Controller (RTC) by Berkeley Simulation Software is the industry’s standard for freight rail simulation. With its state-of-the-art automated dispatching logic, RTC efficiently simulates large and complex freight networks, rivaling even human dispatchers. From small terminals to international freight routes, RTC ensures stakeholders understand the operational implications before committing to costly investments.",
      img: "/Transportation-mobility/rail-network-modelling/Rail Traffic Controller.webp",
    },
    {
      title: "OpenTrack – Passenger Network Optimization",
      desc: "OpenTrack by OpenTrack Railway Technology Ltd. is the global benchmark for passenger rail simulation. It is ideal for analyzing streetcars, LRT, commuter rail, and high-speed rail systems. OpenTrack allows us to test multiple passenger service scenarios, ensuring on-time performance, passenger comfort, and operational efficiency.",
      img: "/Transportation-mobility/rail-network-modelling/Passenger Network Optimization.webp", // sample passenger train img
    },
    {
      title: "RailEST – Railway Electrification Simulation",
      desc: "Our in-house RailEST software specializes in train motion simulation and electrification system analysis. It models the performance of the most common systems: 750Vdc, 1500Vdc, 1x25kVac, and 2x25kVac, used in LRT, metro, commuter, and high-speed lines.",
      img: "/Transportation-mobility/rail-network-modelling/Railway Electrification.webp", // sample electrified rail img
    },
    {
      title: "RAILSIM – Train Performance & Traction Power Analysis",
      desc: "RAILSIM by SYSTRA is our go-to tool for analyzing track geometries and train performance. With its Train Performance Calculator (TPC), we can simulate how specific rolling stock operates over a given track design. Often, RAILSIM is paired with RTC or OpenTrack to deliver a comprehensive, multi-layered rail system analysis.",
      img: "/Transportation-mobility/rail-network-modelling/RAILSIM.webp", // sample rail system img
    },
    {
      title: "AnyLogic – Flexible Multi-Industry Rail Simulation",
      desc: "AnyLogic offers unmatched flexibility in rail operations modeling, allowing rapid model creation and 2D/3D visualizations.",
      img: "/Transportation-mobility/rail-network-modelling/railsim-modelling.webp", // sample flexible simulation img
    },
  ];

  const reasons = [
    {
      title: "Multi-Tool Expertise",
      desc: "Proficiency across RTC, OpenTrack, RailEST, RAILSIM, and AnyLogic.",
      img: "/Transportation-mobility/rail-network-modelling/multitoo.webp", // freight trains
    },
    {
      title: "Cross-Sector Experience",
      desc: "Freight, passenger, metro, high-speed rail, and mixed-use networks.",
      img: "/Transportation-mobility/rail-network-modelling/cross-sector.webp", // passenger
    },
    {
      title: "Global Standards, Local Insight",
      desc: "We merge international best practices with local requirements.",
      img: "/Transportation-mobility/rail-network-modelling/global-standards.webp", // metro / modern
    },
    {
      title: "End-to-End Support",
      desc: "From feasibility studies to final design validation.",
      img: "/Transportation-mobility/rail-network-modelling/support.webp", // planning
    },
  ];
  const services = [
    "Freight and Passenger Rail Capacity Analysis",
    "Service Planning & Timetable Optimization",
    "Electrification Load Flow Analysis",
    "Train Performance and Energy Use Modeling",
    "Rail Yard and Terminal Operations Simulation",
    "Infrastructure Upgrade Impact Assessment",
    "Multi-Scenario Planning for Future Network Growth",
  ];
  const benefits = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Evidence-Based Decision Making",
      desc: "Quantitative insights to guide infrastructure investments.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Risk Reduction",
      desc: "Identify operational bottlenecks before construction.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Optimized Performance",
      desc: "Fine-tune schedules, capacities, and electrical systems.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Future-Ready Planning",
      desc: "Model technology adoption, such as high-speed rail and autonomous operations.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-semibold">
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                Rail Network
              </span>{" "}
              Modeling & Simulation Services
            </h1>
            <p>
              At Al Yusr, we deliver advanced rail network modeling and
              simulation solutions to help our clients plan, optimize, and
              future-proof rail systems. Using a suite of world-leading
              simulation tools, we analyze everything from freight capacity to
              passenger scheduling, rail electrification, and traction power
              networks.
              <br /> <br />
              Our rail simulation capabilities enable stakeholders to make
              informed, evidence-based decisions on infrastructure investment,
              operational efficiency, and safety standards. Whether for
              high-speed passenger lines, urban transit, or heavy freight
              corridors, we provide actionable insights that minimize risk and
              maximize performance.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/rail-network-modelling/hero.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Rail Simulation
          </span>{" "}
          Tools & Capabilities
        </h2>
        <div className="space-y-20">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 h-[380px]">
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="rounded-2xl shadow-lg object-cover w-full h-full"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4">{tool.title}</h3>
                <p className="text-gray-700 leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Key Benefits of Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Rail Modeling
            </span>{" "}
            Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div>{item.icon}</div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-sky-600 bg-clip-text text-transparent">
              Al Yusr
            </span>{" "}
            for Rail Network Simulation?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-sky-600 bg-clip-text text-transparent">
              Rail Network
            </span>{" "}
            Modeling Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 bg-white rounded-2xl shadow hover:shadow-md transition"
              >
                <BadgeCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <p className="text-lg font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Plan Smarter and Build Better with Al Yusr"
        desc="Contact Al Yusr today to discuss how our rail simulation expertise can transform your project from concept to optimized reality."
        btn="Contact Us Today"
      />
    </main>
  );
}
