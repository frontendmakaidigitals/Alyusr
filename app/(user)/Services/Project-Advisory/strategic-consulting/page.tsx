"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Calculator,
  Building2,
  FileBarChart2,
  Gem,
  Handshake,
  BadgeCheck,
} from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const services = [
    {
      title: "Business Transformation & Innovation",
      desc: "We analyze your current performance, processes, and market trends to develop future-proof operating models.",
      points: [
        "Strategic planning & scenario analysis",
        "Business process mapping and optimization",
        "Digital transformation and innovation roadmaps",
        "KPI frameworks and success metrics",
        "Visioning and value proposition development",
      ],
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg", // business meeting
    },
    {
      title: "Organizational Dynamics & Change Management",
      desc: "Our approach to organizational change starts with people. We co-create strategies with leadership teams and internal stakeholders to ensure alignment, adoption, and long-term success.",
      points: [
        "Stakeholder engagement & collaboration frameworks",
        "Organizational health and culture assessments",
        "Change readiness analysis",
        "Leadership alignment and communication strategies",
        "Implementation support and feedback loops",
      ],
      img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg", // teamwork
    },
    {
      title: "Place Strategies & Built Environment Alignment",
      desc: "We translate your organizational goals into physical, digital, and operational spaces that enable performance and support identity.",
      points: [
        "Workplace and facility strategy",
        "Location analysis and site selection",
        "Real estate portfolio optimization",
        "Spatial planning aligned with business operations",
        "Infrastructure planning for future growth",
      ],
      img: "https://images.pexels.com/photos/313705/pexels-photo-313705.jpeg", // city planning
    },
  ];
  const features = [
    {
      title: "Cost Intelligence",
      desc: "We leverage real project data and international benchmarks to provide realistic cost guidance.",
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Sector-Specific Expertise",
      desc: "From infrastructure to high-rise buildings, we understand your industry and its financial pressures.",
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Transparent Reporting",
      desc: "Our detailed, real-time cost tracking and reporting keep you in control at all times.",
      icon: <FileBarChart2 className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Value-Driven Design",
      desc: "We help you maximize ROI through efficient designs that don’t compromise on quality.",
      icon: <Gem className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "End-to-End Support",
      desc: "From initial planning to project handover, we’re with you every step of the way.",
      icon: <Handshake className="h-8 w-8 text-blue-600" />,
    },
  ];
  const capabilities = [
    "Cost Planning and Modeling",
    "Feasibility Cost Estimates",
    "Quantity Take-Off and Bill of Quantities (BOQ)",
    "Whole-Life Costing and Lifecycle Analysis",
    "Risk and Value Management",
    "Procurement Advice and Tender Evaluation",
    "Construction Cost Control",
    "Contract Management and Dispute Resolution",
    "Final Account Preparation",
    "Repair and Maintenance Budgeting",
    "Asset Valuation and Capital Planning",
  ];
  const team = [
    "Urban planners & architects",
    "Business and innovation strategists",
    "Organizational psychologists",
    "Data scientists & digital transformation experts",
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Strategic Consulting
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
          At Al Yusr, our Strategic Consulting practice is where design thinking
          meets business intelligence. We help organizations navigate
          complexity, adapt to change, and shape the future of the built
          environment by aligning vision, operations, and spatial strategy.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          From public sector transformation to private sector innovation, we
          work at the intersection of strategy, data, design, and human
          behavior, creating actionable pathways that lead to meaningful
          outcomes and sustainable value.
        </p>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Image */}
          <div className="h-full w-full">
            <img
              src="/images/our-approach.jpg" // 🔹 Replace with your actual image
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Design-Led Business Transformation
            </h2>

            <p className="text-gray-700 mb-6">
              We go beyond traditional consulting. At Al Yusr, we integrate
              design methodologies, data analytics, and change management
              principles to offer strategic solutions rooted in real-world
              feasibility and creative problem-solving. Our cross-functional
              team includes:
            </p>

            <ul className="space-y-4 mb-6">
              {team.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white mt-1">
                    <BadgeCheck className="fill-green-500" />
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700">
              This blend of expertise allows us to look beyond immediate
              problems and develop strategies that are future-ready,
              people-centric, and impact-driven.
            </p>
          </div>
        </div>
      </section>{" "}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Strategic Consulting Services
          </h2>
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-10 ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white mt-1">
                          <BadgeCheck className="fill-green-500" />
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Build the Future Together"
        desc="Whether you're shaping a new organization, reimagining your operations, or planning for smart growth, Al Yusr's Strategic Consulting team is your trusted partner for creating clarity, value, and vision."
        btn="Contact Us Today"
      />
    </main>
  );
}
