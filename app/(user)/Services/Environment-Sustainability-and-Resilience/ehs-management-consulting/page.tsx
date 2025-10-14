"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { ShieldCheck, Globe2, Factory, FileCheck2 } from "lucide-react";

import Image from "next/image";
import { motion } from "motion/react";
export default function Page() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Dedicated EHS Consulting Practice",
      desc: "We conduct risk-based assessments to uncover key EHS issues, allocate resources efficiently, and create sustainable compliance programs tailored to your organization’s specific needs and scale.",
    },
    {
      icon: Globe2,
      title: "Deep Regulatory Knowledge & Global Reach",
      desc: "Our regional specialists ensure compliance with local EHS laws while aligning with international standards. This dual perspective helps clients manage risk seamlessly across multiple jurisdictions.",
    },
    {
      icon: Factory,
      title: "Industry-Specific Expertise",
      desc: "With extensive experience in oil and gas, power, chemicals, manufacturing, retail, and public sector operations, we bring valuable insights and technical expertise to address complex industry challenges.",
    },
    {
      icon: FileCheck2,
      title: "Certified Systems & Audit Readiness",
      desc: "We support ISO 14001, ISO 45001, ISO 50001, RC14001, and custom audit frameworks—ensuring ongoing performance measurement, improvement, and certification readiness.",
    },
  ];
  const services = [
    {
      title: "EHS Compliance Program Development & Implementation",
      desc: "Design and rollout of compliance frameworks aligned with local and international regulations.",
      img: "/Environment-Sustainability/ehs-management-consulting/Development-Implementation.webp", // Compliance / teamwork
    },
    {
      title: "Process Safety Management & Risk Evaluations",
      desc: "Hazard identification, siting studies, and safety system design for high-risk operations.",
      img: "/Environment-Sustainability/ehs-management-consulting/Process Safety Management.webp", // Safety / helmets
    },
    {
      title: "Industrial Hygiene Monitoring & Assessment",
      desc: "Workplace exposure assessments, monitoring plans, and control recommendations to protect worker health.",
      img: "/Environment-Sustainability/ehs-management-consulting/Industrial Hygiene Monitoring.webp", // Lab / monitoring
    },
    {
      title: "EHS Management Systems Support",
      desc: "Development, implementation, and optimization of environmental and occupational health management systems.",
      img: "/Environment-Sustainability/ehs-management-consulting/EHS Management.webp",
    },
    {
      title: "Global Regulatory Intelligence & Advisory",
      desc: "Ongoing updates and guidance on regional EHS laws and compliance strategies.",
      img: "/Environment-Sustainability/ehs-management-consulting/global-regulatory.webp",
    },
    {
      title: "EHS Training Development & Delivery",
      desc: "Customized training programs and workshops for employees, supervisors, and EHS professionals.",
      img: "/Environment-Sustainability/ehs-management-consulting/EHS Training Development .webp",
    },
    {
      title: "Third-Party Audit Program Management",
      desc: "Internal, external, and supplier audits aligned with international audit practices (including IAPC).",
      img: "/Environment-Sustainability/ehs-management-consulting/Third-Party Audit.webp",
    },
    {
      title: "Outsourced EHS Support",
      desc: "Al Yusr can function as your embedded EHS partner, supporting day-to-day compliance and strategic EHS initiatives.",
      img: "/Environment-Sustainability/ehs-management-consulting/Outsourced EHS Support.webp",
    },
    {
      title: "EHS Management Information Systems (EMIS)",
      desc: "Digital platforms for monitoring compliance metrics, reporting incidents, and improving decision-making.",
      img: "/Environment-Sustainability/ehs-management-consulting/EHS Management Systems.webp",
    },
    {
      title: "Mergers & Acquisitions Due Diligence",
      desc: "EHS risk evaluation for asset purchases, business acquisitions, and portfolio transitions.",
      img: "/Environment-Sustainability/ehs-management-consulting/Acquisitions Due.webp",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-blue-500">EHS Management</span> Consulting
            </h1>
            <p>
              At Al Yusr, we understand that protecting people and the
              environment is not just a regulatory obligation, it’s a necessity.
              Our Environmental, Health, and Safety (EHS) Management Consulting
              services are designed to help organizations reduce risk, enhance
              operational performance, and ensure long-term sustainability.
              <br /> <br />
              In today’s evolving regulatory landscape, stakeholders, from
              regulators to investors and communities, expect businesses to
              operate responsibly. Al Yusr provides a full spectrum of EHS
              consulting and compliance services that help clients across
              industries align with global best practices and local regulations
              while improving safety, minimizing environmental impact, and
              driving value creation.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/ehs-management-consulting/EHS Management.webp"
              }
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Environment-Sustainability/ehs-management-consulting/Our Approach.webp"
              alt="Our Approach"
              className="object-cover w-full h-full"
              width={200}
              height={200}
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Approach</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer practical, and cost-effective EHS solutions across
              corporate, regional, and facility levels. Whether you&apos;re
              building a new plant, improving existing systems, or navigating
              regulatory complexity, our experts partner with your team to
              assess, design, implement, and monitor EHS strategies that align
              with your business objectives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our consultants combine deep industry knowledge with hands-on
              technical experience to deliver outcomes that are both compliant
              and performance-driven. From developing corporate EHS policies to
              supporting facility-level programs, we help businesses proactively
              manage risk and embed safety and sustainability into their
              operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container mx-auto ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            What <span className="text-blue-600">Sets Us Apart</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className=" gap-4">
                  <div className="w-fit mb-5 p-3 bg-blue-100 rounded-xl text-blue-600">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We offer end-to-end EHS consulting support across the following key
            areas:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="bg-slate-100 w-full h-[240px]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Partner with Al Yusr for EHS Excellence"
        desc="With a strong presence in the region and access to a global network of regulatory and technical experts, Al Yusr is your trusted EHS consulting partner. We combine strategy, science, and compliance expertise to help organizations meet stakeholder expectations, maintain operational integrity, and protect the planet."
        btn="Contact Us Today"
      />
    </main>
  );
}
