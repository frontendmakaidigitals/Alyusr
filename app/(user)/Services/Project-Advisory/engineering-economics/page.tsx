"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Lightbulb, BarChart3, Wrench } from "lucide-react";

import { Building2, Bus, Hotel, Landmark, Zap, Scale } from "lucide-react";

export default function Page() {
  const services = [
    {
      title: "Feasibility Studies",
      desc: "Evaluate whether a project is viable, achievable, and sustainable based on demand, site constraints, design, and return expectations.",
      img: "/project-advisory/enigneering-economics/feasible-studies.webp",
    },
    {
      title: "Cost-Benefit Analysis (CBA)",
      desc: "Compare the total economic benefits against the projected costs to determine social value and justify public or private investment.",
      img: "/project-advisory/enigneering-economics/reduce-cost.webp",
    },
    {
      title: "Risk & Sensitivity Analysis",
      desc: "Assess uncertainties such as market fluctuations, inflation, and policy changes, and their potential impact on project performance.",
      img: "/project-advisory/enigneering-economics/risk.webp",
    },
    {
      title: "PPP Advisory",
      desc: "Support clients in structuring public-private partnership models, financial responsibilities, and risk-sharing frameworks.",
      img: "/project-advisory/enigneering-economics/ppp.webp",
    },
    {
      title: "Economic Impact Assessments",
      desc: "Measure how a project will affect jobs, income, investment, and regional growth.",
      img: "/project-advisory/enigneering-economics/Economic_Impact.webp",
    },
    {
      title: "Life-Cycle Cost Analysis (LCCA)",
      desc: "Calculate the total cost of ownership, including construction, operation, maintenance, and end-of-life to support long-term planning.",
      img: "/project-advisory/enigneering-economics/life-cycle.webp",
    },
    {
      title: "Real Estate & Market Studies",
      desc: "Analyze land use value, tenant mix, absorption rates, and development potential for strategic positioning.",
      img: "/project-advisory/enigneering-economics/real-estate-market.webp",
    },
    {
      title: "Capital Investment Planning",
      desc: "Help prioritize investments across portfolios based on ROI, urgency, social need, and budget alignment.",
      img: "/project-advisory/enigneering-economics/planning.webp",
    },
  ];
  const phases = [
    {
      title: "Early Planning & Concept Development",
      desc: "We help define the economic logic behind your project, identifying strengths, gaps, and opportunities to ensure smarter upstream planning.",
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Feasibility & Financial Analysis",
      desc: "This stage provides the financial clarity and justification required for investor engagement, stakeholder buy-in, or government approvals.",
      icon: <BarChart3 className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Design & Implementation Support",
      desc: "Economics must inform design. We work hand-in-hand with your engineers, architects, and planners to ensure optimal resource allocation. Our insights help balance technical ambition with economic logic.",
      icon: <Wrench className="w-10 h-10 text-orange-600" />,
    },
  ];
  const sectors = [
    {
      title: "Urban Development & Master Planning",
      desc: "Understanding ROI of public spaces, mixed-use developments, or economic zones.",
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Transport & Mobility Projects",
      desc: "Evaluating the impact and cost-recovery potential of rail, metro, airport, and highway systems.",
      icon: <Bus className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Real Estate & Hospitality",
      desc: "Identifying market gaps, positioning strategies, and development feasibility.",
      icon: <Hotel className="w-12 h-12 text-orange-600" />,
    },
    {
      title: "Tourism, Culture & Heritage",
      desc: "Supporting cultural investments with visitor projections, pricing models, and funding pathways.",
      icon: <Landmark className="w-12 h-12 text-red-600" />,
    },
    {
      title: "Utilities & Energy Projects",
      desc: "Advising on lifecycle cost planning, tariff design, and long-term sustainability.",
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
    },
    {
      title: "Public Sector & Policy Advisory",
      desc: "Helping governments assess the socio-economic impact of regulations, incentives, and capital programs.",
      icon: <Scale className="w-12 h-12 text-purple-600" />,
    },
  ];
  const points = [
    {
      title: "Multidisciplinary Insight",
      desc: "Our economists work alongside engineers, architects, urban planners, and sustainability experts, offering 360-degree advice.",
      img: "/project-advisory/enigneering-economics/Multidisciplinary Insight.webp",
    },
    {
      title: "Evidence-Based Approach",
      desc: "We don’t rely on assumptions. Every recommendation is backed by real data, sound logic, and proven tools.",
      img: "/project-advisory/enigneering-economics/evidence.webp",
    },
    {
      title: "Local Knowledge, Global Expertise",
      desc: "We understand GCC market dynamics, cost structures, and regulatory frameworks, including Saudi Vision 2030 priorities.",
      img: "/project-advisory/enigneering-economics/global.webp",
    },
    {
      title: "Pragmatic, Not Just Theoretical",
      desc: "Our deliverables are designed for action, supporting decision-making, funding applications, and investor engagement.",
      img: "/project-advisory/enigneering-economics/pragmatic.webp",
    },
    {
      title: "Focus on Long-Term Value",
      desc: "We go beyond 'Is this project affordable?' to 'How do we make this project thrive over decades?'",
      img: "/project-advisory/enigneering-economics/focus.webp",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Engineering Economics Services
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/enigneering-economics/hero.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            What We Do
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            We offer a set of engineering economics services that analyze
            projects through a multi-dimensional lens: technical, financial,
            regulatory, and social. Our services include:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            Our Role Across Project Phases
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            We bring value across all stages of the project development cycle:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-start"
              >
                <div className="mb-4">{phase.icon}</div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            Where We Add Value
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Our Engineering Economics services apply to a wide range of sectors:
          </p>

          <div className="space-y-16">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon or Image */}
                <div className="flex-shrink-0 bg-white shadow-lg rounded-2xl p-6">
                  {sector.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto font-bold text-center  mb-12">
            Why Choose <span className="text-blue-500">Al Yusr</span> for{" "}
            <span className="text-green-500">Engineering Economics?</span>
          </h2>

          <div className="grid gird-cols-1 lg:grid-cols-3 gap-5">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={point.img}
                  alt={point.title}
                  className="w-full h-[230px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Smart Economics for Smarter Cities"
        desc="At Al Yusr, we believe engineering economics is not just a technical exercise; it’s a strategic enabler. It connects vision to feasibility, ambition to accountability, and cost to real value. When your project needs clarity, credibility, and economic direction, we’re here to guide you through."
        btn="Contact Us Today"
      />
    </main>
  );
}
