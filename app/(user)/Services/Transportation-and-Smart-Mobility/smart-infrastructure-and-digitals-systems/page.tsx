"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { ShieldCheck, Users, Cpu, Lock, Award } from "lucide-react";
import Image from "next/image";
export default function Page() {
  const capabilities = [
    {
      title: "Global & Local Connectivity",
      points: [
        "Fiber Networks: Submarine, terrestrial, and metro fiber systems",
        "Broadband Solutions: Nationwide and city-level broadband planning",
        "Funding & Policy Support: Strategy development, grant consulting, and compliance",
        "ICT Infrastructure: Voice, data, and video cabling; WAN, LAN, and PON systems",
      ],
      image:
        "/Transportation-mobility/smart-infrastructure/global-connectivity.webp",
    },
    {
      title: "Wireless & Satellite Communication",
      points: [
        "Cellular Networks: DAS, LTE, PLTE, AWS, 5G, 6G, CBRS, LoRaWAN",
        "Wi-Fi & WLAN solutions for campuses, transit hubs, and public spaces",
        "Public Safety Communications: P25, VHF/UHF radio systems for emergency response",
        "LEO Satellite Systems for remote and maritime connectivity",
      ],
      image: "/Transportation-mobility/smart-infrastructure/multi-network.webp",
    },
    {
      title: "Healthcare Technology Solutions",
      points: [
        "Smart Hospitals: Integrated operating rooms, nurse call systems, patient entertainment systems",
        "Safety & Security: Infant protection, RTLS, automated dispensing cabinets (ADC)",
        "Medical IoT: Device connectivity for better patient care and operational efficiency",
      ],
      image: "/Transportation-mobility/smart-infrastructure/healthcare.webp",
    },
    {
      title: "Security & Cyber Resilience",
      points: [
        "Physical Security Systems: Intrusion detection, CBRNE detection, access control, video surveillance",
        "Cybersecurity: OT security, ICS protection, compliance with global cybersecurity frameworks",
        "Risk Management: Threat modeling, penetration testing, disaster recovery planning",
      ],
      image: "/Transportation-mobility/smart-infrastructure/security.webp",
    },
    {
      title: "Smart Buildings & IoT",
      points: [
        "Building Automation Systems (BAS): Energy management, HVAC control, occupancy analytics",
        "Smart Building Integration: Sensor-driven operations and AI-enabled facility management",
        "Digital Twins: Real-time simulation of building performance for predictive maintenance",
        "IoT Integration: Connecting devices and systems for intelligent, automated environments",
      ],
      image:
        "/Transportation-mobility/smart-infrastructure/smart-buildings.webp",
    },
    {
      title: "Mission-Critical Technologies",
      points: [
        "24/7 Command & Control Centers: Real-time monitoring for transportation, security, and utilities",
        "Audiovisual & Integrated Experiences: Smart conference rooms, immersive multimedia, and public engagement systems",
        "Smart Systems Control: Unified platforms for infrastructure management",
      ],
      image:
        "/Transportation-mobility/smart-infrastructure/Mission-Critical.webp",
    },
  ];
  const reasons = [
    {
      icon: ShieldCheck,
      title: "End-to-End Service Delivery",
      desc: "From strategic planning and funding support to engineering, deployment, and long-term maintenance.",
    },
    {
      icon: Users,
      title: "Multidisciplinary Expertise",
      desc: "Telecom engineers, ICT specialists, cybersecurity experts, and smart city planners working as one team.",
    },
    {
      icon: Cpu,
      title: "Future-Ready Solutions",
      desc: "Designed to adapt to evolving technologies and regulatory changes.",
    },
    {
      icon: Lock,
      title: "Security First",
      desc: "We integrate physical and cyber resilience from the ground up.",
    },
    {
      icon: Award,
      title: "Proven Experience",
      desc: "Trusted by government agencies, infrastructure developers, and private enterprises across the GCC.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-semibold">
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                Smart
              </span>{" "}
              Infrastructure &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                Digital
              </span>{" "}
              Services
            </h1>
            <p>
              At Al Yusr Engineering Consulting, we design, engineer, manage,
              and operate digital infrastructure across its entire lifecycle,
              empowering cities, businesses, and communities to be more
              connected, intelligent, and resilient.
              <br /> <br />
              From fiber networks and wireless systems to smart buildings and
              cybersecurity, we deliver end-to-end digital solutions that meet
              today’s demands and prepare for tomorrow’s opportunities.
              <br /> <br />
              Our multidisciplinary experts collaborate with clients across the
              GCC and beyond to plan, design, deploy, and maintain digital
              ecosystems that drive efficiency, innovation, and long-term value.
              Whether it’s enhancing communication networks, integrating IoT, or
              enabling next-generation 5G and 6G connectivity, we deliver
              future-ready infrastructure that works seamlessly from day one.
            </p>
          </div>
          <div className="w-full h-[450px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/smart-infrastructure/hero.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Our <span className="text-blue-600">Digital Capabilities</span>
        </h2>

        <div className="space-y-24 container">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-800">
                  {cap.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  {cap.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12 mx-auto max-w-4xl">
            Why Choose <span className="text-blue-600">Al Yusr</span> for Smart
            Infrastructure?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Powering the Kingdom’s Digital Transformation"
        desc="Aligned with Saudi Vision 2030, Al Yusr’s Smart Infrastructure & Digital Services empower cities, businesses, and industries to embrace the Fourth Industrial Revolution, delivering not only connectivity but also sustainability, resilience, and smarter decision-making."
        btn="Contact Us Today"
      />
    </main>
  );
}
