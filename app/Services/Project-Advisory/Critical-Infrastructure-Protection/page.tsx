"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import { motion } from "framer-motion";
import { BadgeCheck, Globe, Users, ShieldCheck, Lightbulb } from "lucide-react";

export default function ConstructionManagementPage() {
  const expertiseData = [
    {
      title: "Cybersecurity & Information Protection",
      desc: "We develop comprehensive cyber defense strategies for OT and IT systems, securing networks against unauthorized access, disruption, and data loss.",
      img: "/images/expertise/cybersecurity.jpg", // replace with actual image path
    },
    {
      title: "Physical Security Planning & Design",
      desc: "From perimeters to intrusion detection, we design layered protection systems with access control and blast mitigation.",
      img: "/images/expertise/physical-security.jpg",
    },
    {
      title: "Risk Assessment & Threat Modeling",
      desc: "We conduct vulnerability and risk analyses using simulation, GIS, and scenario planning to prioritize mitigation strategies.",
      img: "/images/expertise/risk-assessment.jpg",
    },
    {
      title: "Resilience Planning & Business Continuity",
      desc: "We help organizations prepare for and recover from cyber breaches, outages, and other disruptions with continuity planning.",
      img: "/images/expertise/resilience.jpg",
    },
    {
      title: "Integrated Systems & Smart Monitoring",
      desc: "We implement real-time monitoring and response systems with smart technologies for early warning and command control.",
      img: "/images/expertise/smart-monitoring.jpg",
    },
    {
      title: "Governance, Policy & Compliance",
      desc: "We support clients in navigating regulations and aligning strategies with standards like NIST, ISO, SAMA, and Vision 2030.",
      img: "/images/expertise/governance.jpg",
    },
  ];

  const sectors = [
    {
      title: "Government Ministries & Municipalities",
      img: "/images/sectors/government.jpg",
    },
    {
      title: "Airports, Ports & Transportation Systems",
      img: "/images/sectors/transport.jpg",
    },
    {
      title: "Energy & Utility Providers",
      img: "/images/sectors/energy.jpg",
    },
    {
      title: "Water & Wastewater Infrastructure",
      img: "/images/sectors/water.jpg",
    },
    {
      title: "Healthcare & Public Institutions",
      img: "/images/sectors/healthcare.jpg",
    },
    {
      title: "Data Centers & Communication Networks",
      img: "/images/sectors/datacenter.jpg",
    },
    {
      title: "Industrial & Petrochemical Facilities",
      img: "/images/sectors/industrial.jpg",
    },
  ];

  const reasons = [
    "Multidisciplinary teams combining cybersecurity, engineering, and emergency planning",
    "Integrated physical and digital security frameworks",
    "Proven track record in designing secure and resilient infrastructure",
    "Alignment with Vision 2030’s national resilience and smart infrastructure goals",
    "Local presence with global best practice insights",
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Critical Infrastructure Protection
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

      {/* Features */}
      <section className="bg-sky-50 mt-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols2 gap-10 container">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-900 mb-16">
              Securing the Foundations of Modern Life
            </h2>
            <p>
              In an era where digital systems and physical infrastructure are
              deeply intertwined, protecting critical infrastructure is no
              longer optional; it is essential. At Al Yusr Engineering
              Consulting, our Critical Infrastructure Protection (CIP) services
              provide an integrated, resilient approach to safeguarding the
              systems that support national security, public safety, economic
              stability, and everyday life.
            </p>
            <p>
              From power grids and water networks to transportation hubs, data
              centers, and government facilities, we help clients secure and
              sustain their most vital assets, ensuring they are prepared,
              protected, and resilient in the face of physical threats,
              cyberattacks, and natural disasters.
            </p>
          </div>
          <div>
            <img src={""} alt={""} className="" />
          </div>
        </div>
      </section>
      <section className="bg-sky-50 mt-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols2 gap-10 container">
          <div>
            <img src={""} alt={""} className="" />
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-900 mb-16">
              A Converged Approach to Resilience
            </h2>
            <p>
              Today’s critical infrastructure faces complex, multidimensional
              risks, many of which span both the physical and digital domains.
              Our approach recognizes that security is not just about barriers
              or firewalls; it’s about continuity, adaptability, and coordinated
              recovery.
            </p>
            <p>
              We develop strategies that align physical security, cyber
              protection, data integrity, emergency response, and governance
              into one cohesive framework, one that strengthens resilience and
              enables informed decision-making before, during, and after a
              crisis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Expertise Includes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-48 h-48 md:h-auto">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sectors We Serve
          </h2>

          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow hover:shadow-md transition overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={sector.img}
                    alt={sector.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold">{sector.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Al Yusr for Critical Infrastructure Protection?
          </h2>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 shadow hover:shadow-md transition"
              >
                <div>
                  <BadgeCheck className="text-blue-600 w-6 h-6 mt-1" />{" "}
                </div>
                <p className="text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Protecting What Matters Most"
        desc="In a world where threats are unpredictable and ever-evolving, resilience must be designed, not hoped for. At Al Yusr, we bring together strategy, security, and innovation to ensure that your critical infrastructure is prepared for the future."
        btn="Contact Us Today"
      />
    </main>
  );
}
