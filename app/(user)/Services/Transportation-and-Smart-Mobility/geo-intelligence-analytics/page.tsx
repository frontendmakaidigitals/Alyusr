"use client";

import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Info,
  Database,
  BarChart3,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const reasons = [
    {
      title: "Stay Better Informed",
      desc: "Access accurate, real-time data for confident decision-making.",
      icon: Info,
    },
    {
      title: "Manage Assets Wisely",
      desc: "Optimize maintenance, operations, and investment strategies.",
      icon: Database,
    },
    {
      title: "Visualize Change",
      desc: "Track urban growth, environmental shifts, and infrastructure upgrades over time.",
      icon: BarChart3,
    },
    {
      title: "Predict & Plan",
      desc: "Model future scenarios for urban, environmental, and infrastructure planning.",
      icon: LineChart,
    },
    {
      title: "Enhance Safety & Resilience",
      desc: "Support disaster preparedness, emergency response, and security planning.",
      icon: ShieldCheck,
    },
  ];

  const capabilities = [
    {
      title: "Application Development",
      img: "/Transportation-mobility/geo-intelligence/app-dev.webp",
      points: [
        "Custom Desktop, Web, and Mobile GIS applications",
        "User-friendly interfaces for both technical and non-technical users",
        "Integration with existing enterprise systems for seamless operations",
      ],
    },
    {
      title: "Enterprise GIS Implementation",
      img: "/Transportation-mobility/geo-intelligence/gis.webp",
      points: [
        "Organization-wide GIS platforms for asset management, planning, and monitoring",
        "Needs assessment, design, and deployment tailored to specific client goals",
        "Migration from legacy systems to modern, cloud-enabled GIS solutions",
      ],
    },
    {
      title: "Data Creation, Analysis & Visualization",
      img: "/Transportation-mobility/geo-intelligence/Data-creation.webp",
      points: [
        "GIS Data Creation from satellite, aerial, and field survey sources",
        "Spatial Analysis to identify patterns, risks, and opportunities",
        "3D Visualization & Simulation for infrastructure planning, urban design, and public communication",
      ],
    },
    {
      title: "Remote Sensing & Mapping",
      img: "/Transportation-mobility/geo-intelligence/remote-mapping.webp",
      points: [
        "High-resolution imagery acquisition via satellites and aerial surveys",
        "Unmanned Aircraft Systems (UAS) for rapid, cost-effective mapping and inspection",
        "Topographic data collection for accurate terrain modeling",
      ],
    },
    {
      title: "Integration with Building Information Modeling (BIM)",
      img: "/Transportation-mobility/geo-intelligence/Integration with Building Information Modeling (BIM).webp",
      points: [
        "Link geospatial data with BIM models for enhanced planning and project execution",
        "Support for digital twins and smart city platforms",
      ],
    },
  ];

  const values = [
    {
      title: "Multi-Disciplinary Expertise",
      desc: "Our teams combine GIS specialists, urban planners, engineers, and data scientists.",
      img: "/Transportation-mobility/geo-intelligence/Multi-Disciplinary Expertise.webp",
    },
    {
      title: "Proven Global Experience",
      desc: "Hundreds of successful geospatial projects across government and industry sectors.",
      img: "/Transportation-mobility/geo-intelligence/global.webp",
    },
    {
      title: "Custom Solutions",
      desc: "We adapt tools and workflows to match your operational environment.",
      img: "/Transportation-mobility/geo-intelligence/soluitions.webp",
    },
    {
      title: "Advanced Technology",
      desc: "We leverage AI, IoT integration, and predictive analytics to enhance geospatial insights.",
      img: "/Transportation-mobility/geo-intelligence/advance-tech.webp",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Geo-<span className="text-blue-500">Intelligence</span> &{" "}
              <span className="text-blue-500">Analysis</span>
            </h1>
            <p>
              In today’s fast-moving, data-driven world, the ability to see,
              understand, and act on geographic information can transform
              decision-making. At Al Yusr Engineering Consulting, our
              Geo-Intelligence & Analysis services combine cutting-edge
              geospatial technology with deep domain expertise, empowering our
              clients to plan smarter, respond faster, and operate more
              efficiently.
              <br /> <br /> Whether the goal is to map complex infrastructure,
              predict environmental change, monitor assets, or support critical
              decision-making, we deliver end-to-end geospatial solutions that
              ensure accuracy, reliability, and strategic value.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/geo-intelligence/hero.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Why <span className="text-blue-500">Geo-Intelligence</span>{" "}
              Matters
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Our solutions help clients:
            </p>
          </div>

          {/* Grid of Reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl shadow-md border border-border p-6 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base text-muted-foreground leading-relaxed">
              Our clients include government agencies, municipalities,
              infrastructure developers, and private enterprises — all
              benefiting from the insight and foresight our geospatial
              intelligence delivers.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Our <span className="text-blue-500">Capabilities</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-md border border-border overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-[230px] bg-slate-100">
                  <img
                    src={cap.img}
                    alt={cap.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {cap.title}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {cap.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
      <EngineeringCTA
        title="Shaping Smarter, Safer Communities"
        desc="At Al Yusr, our Geo-Intelligence & Analysis services are more than just maps; they are powerful decision-making tools that help our clients create sustainable, secure, and future-ready environments."
        btn="Contact Us Today"
      />
    </main>
  );
}
