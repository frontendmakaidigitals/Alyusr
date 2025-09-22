"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Map,
  Leaf,
  Layers,
  Bus,
  Network,
  Database,
  BadgeCheck,
} from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const tools = [
    {
      title: "GIS-Based Urban Dashboards",
      icon: Map,
    },
    {
      title: "Carbon Footprint & Energy Use Simulators",
      icon: Leaf,
    },
    {
      title: "Scenario-Based Urban Growth Models",
      icon: Layers,
    },
    {
      title: "Mobility and Transit Analytics Tools",
      icon: Bus,
    },
    {
      title: "Digital Twin Integration for Urban Systems",
      icon: Network,
    },
    {
      title: "BIM-GIS Data Convergence Platforms",
      icon: Database,
    },
  ];

  const focusAreas = [
    {
      title: "Low-Carbon, High-Performance Developments",
      desc: "Tools and metrics to reduce carbon emissions, optimize energy use, and improve operational performance in urban environments.",
      img: "/Transportation-mobility/city-analytics/low-carbon.webp",
    },
    {
      title: "Strategic Energy & Emissions Planning",
      desc: "Integrated modeling of energy demand, renewable potential, and emissions forecasting to support sustainable urban transitions.",
      img: "/Transportation-mobility/city-analytics/Emissions Planning.webp",
    },
    {
      title: "Sustainable Infrastructure",
      desc: "Assessing infrastructure needs using lifecycle, cost-benefit, and environmental impact data for smarter investments.",
      img: "/Transportation-mobility/city-analytics/sustainable-infra.webp",
    },
    {
      title: "Climate Resilience & Risk Modeling",
      desc: "Identifying and mitigating climate-related risks (heat, flooding, water stress) through spatial and temporal data analysis.",
      img: "/Transportation-mobility/city-analytics/Climate Resilience.webp",
    },
    {
      title: "Smart City Systems & Integration",
      desc: "Building digital frameworks for connected services, mobility, utilities, waste, and governance, to improve citizen experience.",
      img: "/Transportation-mobility/city-analytics/smart-city.webp",
    },
    {
      title: "Interactive Online Planning Tools",
      desc: "Custom dashboards and GIS platforms for engaging stakeholders and visualizing the impact of planning scenarios in real time.",
      img: "/Transportation-mobility/city-analytics/technology.webp",
    },
  ];

  const points = [
    "Expertise in urban strategy, digital platforms, and environmental data",
    "Proven solutions for smart cities, energy transition, and green infrastructure",
    "Multidisciplinary teams combining planners, engineers, and data analysts",
    "Tailored dashboards and tools for public engagement and decision support",
    "Aligned with Saudi Vision 2030 and global climate goals",
  ];

  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Data-Driven Planning for{" "}
              <span className="text-blue-500">Smarter Cities</span>
            </h1>
            <p>
              At Al Yusr Engineering Consulting, our City Analytics services
              empower urban planning through the strategic integration of data,
              technology, and design. We help cities transform information into
              insight, enabling smarter decisions, more resilient
              infrastructure, and sustainable growth. <br /> <br /> By combining
              cutting-edge analytics with urban expertise, we support the
              planning and development of future-ready communities that are
              efficient, inclusive, and aligned with long-term national goals
              like Saudi Arabia’s Vision 2030.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/city-analytics/hero.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
          {/* Image Left */}
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/city-analytics/visualizing.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>

          {/* Content Right */}
          <div className="w-full space-y-2">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Where <span className="text-green-500">Strategy</span> Meets{" "}
              <span className="text-blue-500">Technology</span>
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              We lead the way in applying analytics and simulation tools to
              real-world urban challenges. Our specialists develop
              performance-based models, interactive planning tools, and digital
              dashboards to visualize trends, test scenarios, and measure
              outcomes across a city’s lifecycle, from land use and energy to
              mobility, infrastructure, and climate resilience.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our City Analytics services support both public and private sector
              clients in making informed, data-driven decisions, ensuring urban
              development is not only visionary but also measurable and
              actionable.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Our <span className="text-blue-500">Focus Areas</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className=" rounded-2xl shadow-md overflow-hidden border border-border"
              >
                <div className="bg-slate-100 w-full h-[250px]">
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-xl mb-1 font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.desc}
                  </p>
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
              <span className="text-blue-500">Tools</span> We Use
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl shadow-md p-8 border border-border flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-blue-100  rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {tool.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Why Choose Al Yusr for City Analytics?
            </h2>
          </div>

          {/* Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-md border border-border"
              >
                <div className="flex-shrink-0">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <p className="text-base text-muted-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Turning Urban Data into Action"
        desc="In a rapidly urbanizing world, the cities that succeed are the ones that plan with intelligence and act with insight. Al Yusr’s City Analytics services enable governments, developers, and planners to create better outcomes, economically, environmentally, and socially."
        btn="Contact Us Today"
      />
    </main>
  );
}
