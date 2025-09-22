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
      title: "Cost Planning & Budgeting",
      description:
        "Early-stage cost forecasts to guide design decisions and set realistic budgets.",
      img: "/project-advisory/cost-mangement/cost-management.webp",
    },
    {
      title: "Quantity Surveying",
      description:
        "Detailed measurement and cost control services throughout the project.",
      img: "/project-advisory/cost-mangement/quality.webp",
    },
    {
      title: "Feasibility & Financial Estimations",
      description:
        "Evaluate project viability, investment risks, and funding strategies.",
      img: "/project-advisory/cost-mangement/Feasibility.webp",
    },
    {
      title: "Procurement & Tender Support",
      description:
        "Market-driven strategies to get the best value from contractors and suppliers.",
      img: "/project-advisory/cost-mangement/support.webp",
    },
    {
      title: "Contract Management",
      description:
        "Monitor contracts, handle variations, and provide administration support.",
      img: "/project-advisory/cost-mangement/Contract_Management.webp",
    },
    {
      title: "Final Account & Close-Out",
      description:
        "Ensure a clean financial finish with accurate final accounts and cost reports.",
      img: "/project-advisory/cost-mangement/close-out.webp",
    },
  ];
  const points = [
    "Track costs with precision",
    "Manage risks before they affect the bottom line",
    "Avoid costly overruns",
    "Make informed decisions at every project stage",
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

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Cost Management Services
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/cost-mangement/cost-managemnt.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, we help clients make smart financial decisions throughout
          their project journey. Our cost management services are designed to
          provide accurate cost control, financial transparency, and strategic
          guidance, from project planning to completion. Whether it&apos;s a
          commercial tower, residential development, infrastructure project, or
          urban regeneration, we make sure your budget works harder and your
          investment delivers real value.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          We go beyond just estimating costs; we offer deep sector expertise,
          data-driven insights, and proactive risk management to help you
          control spending, reduce waste, and improve returns.
        </p>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center"
          >
            What <span className="text-blue-500">We Offer</span>
          </motion.h2>

          {/* Services Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 bg-sky-50 p-1 shadow-sm hover:shadow-md transition-shadow duration-200 max-w-sm mx-auto"
              >
                {service.img && (
                  <div className="relative bg-red-300 w-full h-60 rounded-lg overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-sky-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Image */}
          <div className="h-full w-full">
            <img
              src="/project-advisory/cost-mangement/our-approach.webp" // 🔹 Replace with your actual image
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Approach:{" "}
              <span className="text-blue-600">
                Strategic, Transparent, Precise
              </span>
            </h2>

            <p className="text-gray-700 mb-6">
              We combine local market knowledge, advanced cost benchmarking
              tools, and sector-specific insights to deliver tailored solutions
              for every client. Using real-time data and global best practices,
              we help clients:
            </p>

            <ul className="space-y-4 mb-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="h-2 w-2 mt-2 rounded-full bg-blue-600"></span>
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700">
              Our integrated teams include technical experts, cost analysts, and
              risk specialists who work side-by-side to align budgets with
              project goals, every step of the way.
            </p>
          </div>
        </div>
      </section>{" "}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Al Yusr</span> for Cost
            Management
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We bring clarity, control, and confidence to your project costs
            through expertise and transparency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start hover:shadow-xl transition"
            >
              <div className="p-3 rounded-xl bg-blue-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>{" "}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-blue-600">Cost Management</span>{" "}
            Capabilities
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise to support every phase of your project’s
            financial lifecycle.
          </p>
        </div>

        {/* Capabilities List */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition"
            >
              <BadgeCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Build with Confidence"
        desc="Whether you're developing a mega project or managing a complex infrastructure upgrade, Al Yusr’s cost management services help you stay on budget, reduce risk, and achieve lasting value."
        btn="Contact Us Today"
      />
    </main>
  );
}
