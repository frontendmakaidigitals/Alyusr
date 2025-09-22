"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Building2, Cpu, Leaf, Target, Globe2 } from "lucide-react";
export default function Page() {
  const categories = [
    {
      title: "Facility Management",
      desc: "Comprehensive support to maintain daily operations and enhance long-term facility value.",
      img: "/project-advisory/commercial-operations/Facility Management.webp",
      items: [
        "Routine & Preventive Maintenance",
        "Facility Engineering & Design Support",
        "Energy Management & Sustainability Solutions",
        "Audits & Asset Life-Cycle Planning",
        "Subcontractor Oversight & Vendor Management",
      ],
    },
    {
      title: "Hard Services",
      desc: "Hands-on maintenance and repairs handled by skilled, certified technicians.",
      img: "/project-advisory/commercial-operations/hard-services.webp",
      items: [
        "HVAC, Electrical & Mechanical Systems",
        "Robotics, Cranes & Hoists Maintenance",
        "Plumbing, Painting & Lighting",
        "Equipment Moves & Installations",
        "Wastewater Treatment & Environmental Systems",
      ],
    },
    {
      title: "Soft Services",
      desc: "Integrated non-technical support functions that improve workplace experience.",
      img: "/project-advisory/commercial-operations/pest-control.webp",
      items: [
        "Janitorial & Cleaning",
        "Landscaping & Pest Control",
        "Security & Reception",
        "Food Services & Vending",
        "Office Services & Elevators",
      ],
    },
    {
      title: "Production Maintenance",
      desc: "Optimizing factory output by ensuring reliable operation of production assets.",
      img: "/project-advisory/commercial-operations/product-maintainence.webp",
      items: [
        "Full-Line & Plant Maintenance",
        "Reactive, Preventive & Predictive Maintenance (PdM)",
        "Reliability-Centered Maintenance (RCM)",
        "Electrical & Mechanical Systems Support",
      ],
    },
    {
      title: "Workplace & Space Solutions",
      desc: "Enhancing functionality, comfort, and efficiency of office environments.",
      img: "/project-advisory/commercial-operations/Space Solutions.webp",
      items: [
        "Space Planning & Capital Improvements",
        "Project & Furniture Management",
        "Benchmarking & Utilization Analytics",
      ],
    },
    {
      title: "Logistics & Supply Chain Services",
      desc: "Complete logistical support to streamline operations and reduce downtime.",
      img: "/project-advisory/commercial-operations/Logistics.webp",
      items: [
        "Global Logistics & Warehousing",
        "Customs Management & Material Preservation",
        "Procurement & MRO Systems",
        "Expediting & Inspection Services",
        "Laydown Yard & Packing Operations",
      ],
    },
    {
      title: "Field Support",
      desc: "Deployment of skilled personnel across disciplines to meet urgent or complex needs.",
      img: "/project-advisory/commercial-operations/Field Support.webp",
      items: [
        "Construction & Plant Operations",
        "Process Safety Management & Quality Control",
        "Shutdowns, Outages & Turnarounds",
        "Commissioning, Testing & Start-up Support",
      ],
    },
    {
      title: "Integrated Management Support",
      desc: "Ensuring seamless, efficient operations through centralized process oversight.",
      img: "/project-advisory/commercial-operations/Support.webp",
      items: [
        "Finance & Accounting Integration",
        "Risk & SH&E (Safety, Health & Environment) Programs",
        "Hazardous Material Handling",
        "Helpdesk & IT Services",
        "Quality & Performance Management Systems",
      ],
    },
  ];
  const reasons = [
    {
      title: "Industry-Certified Teams",
      desc: "Deep technical knowledge and proven expertise across disciplines.",
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Technology-Driven Solutions",
      desc: "Harnessing IoT, CMMS, and predictive analytics for smarter outcomes.",
      icon: <Cpu className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Sustainable Practices",
      desc: "Reducing environmental impact while optimizing energy costs.",
      icon: <Leaf className="w-10 h-10 text-emerald-600" />,
    },
    {
      title: "Tailored Programs",
      desc: "Aligned with your business goals, compliance, and industry needs.",
      icon: <Target className="w-10 h-10 text-orange-600" />,
    },
    {
      title: "Global Standards, Local Execution",
      desc: "Trusted by both commercial enterprises and government clients.",
      icon: <Globe2 className="w-10 h-10 text-purple-600" />,
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Commercial Operations & Maintenance
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/commercial-operations/hero.webp"}
          className="w-full h-full object-cover object-top"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          In today’s fast-paced industries, critical facilities and production
          environments require precision, reliability, and expert care. Al Yusr
          offers commercial operations and maintenance services that meet the
          unique demands of each client, ensuring maximum uptime, operational
          efficiency, and long-term asset performance.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          Whether it’s an industrial plant, corporate campus, R&D facility, or
          high-tech warehouse, our integrated service approach helps clients
          focus on their core business while we manage the infrastructure that
          keeps it running.
        </p>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-14">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{cat.desc}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Al Yusr?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Ready to elevate your facility operations?"
        desc="Partner with Al Yusr to ensure peak performance, long-term reliability, and smarter asset management."
        btn="Contact Us Today"
      />
    </main>
  );
}
