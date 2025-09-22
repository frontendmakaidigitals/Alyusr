"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { BadgeCheck, Globe, Users, ShieldCheck, Lightbulb } from "lucide-react";
import {
  Shield,
  Lock,
  AlertTriangle,
  RefreshCcw,
  MonitorSmartphone,
  FileCheck,
  Building2,
  Plane,
  Factory,
  Droplet,
  HeartPulse,
  Server,
} from "lucide-react";

export default function ConstructionManagementPage() {
  const sectors = [
    {
      title: "Government Ministries & Municipalities",
      icon: <Building2 className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Airports, Ports & Transportation Systems",
      icon: <Plane className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Energy & Utility Providers",
      icon: <Lightbulb className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Water & Wastewater Infrastructure",
      icon: <Droplet className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Healthcare & Public Institutions",
      icon: <HeartPulse className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Data Centers & Communication Networks",
      icon: <Server className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Industrial & Petrochemical Facilities",
      icon: <Factory className="w-10 h-10 text-sky-600" />,
    },
  ];
  const expertiseData = [
    {
      title: "Cybersecurity & Information Protection",
      desc: "We develop comprehensive cyber defense strategies for operational technology (OT) and information systems, protecting networks from unauthorized access, disruption, and data loss. Our cybersecurity experts work closely with our engineers and planners to ensure secure-by-design infrastructure.",
      icon: <Lock className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Physical Security Planning & Design",
      desc: "From secure perimeters to intrusion detection systems, we design layered physical protection systems for facilities, transport systems, and high-value assets. This includes threat assessment, access control design, and blast mitigation solutions.",
      icon: <Shield className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Risk Assessment & Threat Modeling",
      desc: "We conduct vulnerability analyses and risk evaluations to identify critical weaknesses in infrastructure systems. Using simulation, GIS tools, and scenario planning, we help prioritize investments and mitigation strategies.",
      icon: <AlertTriangle className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Resilience Planning & Business Continuity",
      desc: "We prepare organizations to withstand and recover from disruptive events, whether cyber breaches, power outages, or geopolitical incidents. Our plans emphasize continuity of operations, emergency response, and post-event recovery protocols.",
      icon: <RefreshCcw className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Integrated Systems & Smart Monitoring",
      desc: "Using smart technologies and integrated platforms, we design real-time monitoring and response systems that support situational awareness, early warning, and coordinated command and control operations.",
      icon: <MonitorSmartphone className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Governance, Policy & Compliance",
      desc: "We help clients navigate regulatory frameworks and implement effective governance structures for security and resilience. Our strategies align with local, national, and international standards (e.g., NIST, ISO, SAMA, Vision 2030).",
      icon: <FileCheck className="w-10 h-10 text-sky-600" />,
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
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Critical Infrastructure Protection
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={
            "/Engineering-Infrastructure/infrastructure-protection/Critical.webp"
          }
          className="w-full h-full object-cover object-bottom"
          alt={"Hero"}
          width={1200}
          height={800}
        />
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-5xl font-bold text-sky-800 mb-6">
              Securing the Foundations of Modern Life
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              In an era where digital systems and physical infrastructure are
              deeply intertwined, protecting critical infrastructure is no
              longer optional; it is essential. At Al Yusr Engineering
              Consulting, our Critical Infrastructure Protection (CIP) services
              provide an integrated, resilient approach to safeguarding the
              systems that support national security, public safety, economic
              stability, and everyday life.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From power grids and water networks to transportation hubs, data
              centers, and government facilities, we help clients secure and
              sustain their most vital assets, ensuring they are prepared,
              protected, and resilient in the face of physical threats,
              cyberattacks, and natural disasters.
            </p>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 h-[450px]">
            <img
              src="/Engineering-Infrastructure/infrastructure-protection/Securing.webp"
              alt="Critical Infrastructure Protection"
              className="rounded-xl shadow-lg w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-1">
            <img
              src="/Engineering-Infrastructure/infrastructure-protection/Resilience.webp"
              alt="Converged Resilience"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="order-2">
            <h2 className="text-3xl lg:text-5xl font-bold text-sky-800 mb-6">
              A Converged Approach to Resilience
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Today’s critical infrastructure faces complex, multidimensional
              risks, many of which span both the physical and digital domains.
              Our approach recognizes that security is not just about barriers
              or firewalls; it’s about continuity, adaptability, and coordinated
              recovery.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We develop strategies that align physical security, cyber
              protection, data integrity, emergency response, and governance
              into one cohesive framework, one that strengthens resilience and
              enables informed decision-making before, during, and after a
              crisis.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-sky-800 mb-12 text-center">
            Our Expertise Includes:
          </h2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            {expertiseData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-sky-800 mb-12 text-center">
            Sectors We Serve
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-8"
              >
                <div className="mb-4">{sector.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {sector.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl lg:text-5xl font-bold text-sky-800 mb-12 text-center">
            Why Al Yusr for Critical Infrastructure Protection?
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reasons.map((reason, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <BadgeCheck className="w-6 h-6 text-slate-50  fill-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
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
