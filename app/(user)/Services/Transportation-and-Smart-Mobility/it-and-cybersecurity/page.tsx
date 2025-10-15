"use client";

import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { ShieldCheck, Layers, Award, Cpu } from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const values = [
    {
      title: "Multi-Disciplinary Expertise",
      desc: "Our teams combine GIS specialists, urban planners, engineers, and data scientists.",
      img: "/Transportation-mobility/it-and-cybersecurity/Multi-Disciplinary Expertise.webp",
    },
    {
      title: "Proven Global Experience",
      desc: "Hundreds of successful geospatial projects across government and industry sectors.",
      img: "/Transportation-mobility/it-and-cybersecurity/global.webp",
    },
    {
      title: "Custom Solutions",
      desc: "We adapt tools and workflows to match your operational environment.",
      img: "/Transportation-mobility/it-and-cybersecurity/soluitions.webp",
    },
    {
      title: "Advanced Technology",
      desc: "We leverage AI, IoT integration, and predictive analytics to enhance geospatial insights.",
      img: "/Transportation-mobility/it-and-cybersecurity/advance-tech.webp",
    },
  ];

  const solutions = [
    {
      title: "Cybersecurity Solutions",
      desc: "In an increasingly digital world, threats evolve daily. Al Yusr provides strategic and technical cybersecurity solutions to ensure the confidentiality, integrity, and availability of your systems, whether your data is in use, in motion, or at rest. We protect both IT and Operational Technology (OT) environments across government, infrastructure, and private sector organizations.",
      img: "/Transportation-mobility/it-and-cybersecurity/advance-tech.webp",
      points: [
        "Cyber Risk Assessment & Management",
        "Threat Detection & Incident Response",
        "Compliance with National & International Security Standards",
        "Security Operations Center (SOC) Integration",
        "Endpoint & Network Protection",
      ],
    },
    {
      title: "Cloud & Virtual Infrastructure",
      desc: "Al Yusr partners with leading cloud providers to offer secure, scalable, and compliant cloud solutions. From virtual data centers to multi-cloud management, we help clients transition smoothly into the cloud while maintaining the highest security and performance standards.",
      img: "/Transportation-mobility/it-and-cybersecurity/cloud-ingra.webp",
      points: [
        "Secure Cloud Architecture & Migration",
        "Application Hosting & Data Storage",
        "Cloud Cybersecurity Controls (Zero Trust, Encryption)",
        "Disaster Recovery & Business Continuity Solutions",
      ],
    },
    {
      title: "Integrated IT Solutions",
      desc: "Our expert team delivers IT infrastructure and software solutions designed for mission-critical operations. Whether designing new systems or upgrading legacy networks, we focus on availability, security, and performance.",
      img: "/Transportation-mobility/it-and-cybersecurity/Integrated IT Solutions .webp",
      points: [
        "Network Architecture & Operations",
        "IT Infrastructure & Cabling Design",
        "Systems Integration & Software Development",
        "Virtual Desktop Infrastructure (VDI)",
      ],
    },
    {
      title: "Industrial Control Systems (ICS) Security",
      desc: "Critical infrastructure, such as water, energy, and transportation, is vulnerable to cyber threats. We bridge the gap between engineering and cybersecurity by securing Industrial Control Systems (ICS), SCADA, and automation networks.",
      img: "/Transportation-mobility/it-and-cybersecurity/Industrial Control System.webp",
      points: [
        "ICS Vulnerability Assessments",
        "Secure Design of Control Systems",
        "Cyber-Physical System Integration",
        "OT Cybersecurity Policies & Procedures",
      ],
    },
    {
      title: "Secure Data Center Design & Deployment",
      desc: "Combining our engineering expertise with IT know-how, we deliver resilient and efficient data centers for sectors like healthcare, banking, public services, and defense. From design to commissioning, we ensure compliance, uptime, and scalability.",
      img: "/Transportation-mobility/it-and-cybersecurity/Data Center .webp",
      points: [
        "Tier III/IV Certified Infrastructure",
        "Redundant Power & Cooling Systems",
        "24/7 Security and Monitoring",
        "Energy-Efficient & Sustainable Systems",
      ],
    },
  ];

  const reasons = [
    {
      title: "Integrated Expertise",
      desc: "Across civil engineering, smart systems, and IT security.",
      icon: Layers,
    },
    {
      title: "Converged Resilience Approach",
      desc: "Aligning physical and digital safety for robust protection.",
      icon: ShieldCheck,
    },
    {
      title: "Proven Track Record",
      desc: "Trusted by government and critical infrastructure clients.",
      icon: Award,
    },
    {
      title: "Future-Ready Systems",
      desc: "Built with the latest technologies and global standards.",
      icon: Cpu,
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          {/* Image first on mobile, second on desktop */}
          <div className="w-full h-[230px] lg:h-[400px] bg-slate-100 rounded-lg order-1 lg:order-2">
            <img
              src={"/Transportation-mobility/it-and-cybersecurity/hero.webp"}
              className="w-full h-full object-cover"
              alt="IT & Cybersecurity"
            />
          </div>

          {/* Text second on mobile, first on desktop */}
          <div className="space-y-3 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-blue-500">IT</span> &{" "}
              <span className="text-sky-500">Cybersecurity</span> Services
            </h1>
            <p>
              At Al Yusr, we understand that information technology and
              cybersecurity are no longer support functions; they are the
              foundation of business continuity, operational efficiency, and
              national security. Our IT & Cybersecurity services are built to
              protect, streamline, and future-proof our clients’ digital
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              How <span className="text-blue-500">We Deliver</span> Value
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-md border border-border overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="bg-slate-100">
                  <img
                    src={val.img}
                    alt={val.title}
                    className="w-full h-44 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-20">
        <div className="container mx-auto px-6 lg:px-12 space-y-20">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {sol.title}
                </h3>
                <p className="text-base text-muted-foreground">{sol.desc}</p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                  {sol.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Why Choose <span className="text-blue-600">Al Yusr?</span>
          </h2>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all"
              >
                <item.icon className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Shaping Smarter, Safer Communities"
        desc="At Al Yusr, our Geo-Intelligence & Analysis services are more than just maps; they are powerful decision-making tools that help our clients create sustainable, secure, and future-ready environments."
        btn="Contact Us Today"
      />
    </main>
  );
}
