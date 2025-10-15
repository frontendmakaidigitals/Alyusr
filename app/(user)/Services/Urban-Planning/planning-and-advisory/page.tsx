"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";

import {
  BadgeCheck,
  Map,
  LineChart,
  Workflow,
  Cpu,
  BarChart4,
  Leaf,
  Users,
  MapPinned,
  FileCheck2,
  ClipboardList,
} from "lucide-react";
export default function ConstructionManagementPage() {
  const services = [
    {
      title: "Urban & Regional Master Planning",
      desc: "We craft development strategies for cities, districts, and regions, balancing growth with sustainability and quality of life.",
      img: "/urban-planning/planning-and-advisory/Master Planning.webp",
    },
    {
      title: "Site Analysis & Land Use Planning",
      desc: "Our team conducts detailed land studies, zoning analysis, and site suitability evaluations for optimized land development.",
      img: "/urban-planning/planning-and-advisory/Land Planning.webp",
    },
    {
      title: "Strategic & Economic Planning",
      desc: "We assess project viability, investment opportunities, and economic impact to guide both public and private sector decisions.",
      img: "/urban-planning/planning-and-advisory/Strategic.webp",
    },
    {
      title: "Sustainability & Resilience Advisory",
      desc: "Our experts integrate climate adaptation, environmental stewardship, and green building practices into all planning phases.",
      img: "/urban-planning/planning-and-advisory/saudi.webp",
    },
    {
      title: "Policy & Regulatory Support",
      desc: "We help clients align their projects with municipal regulations, permitting procedures, and national strategic agendas.",
      img: "/urban-planning/planning-and-advisory/Policy.webp",
    },
  ];
  const reasons = [
    {
      title: "Proven experience in large-scale regional planning",
      icon: MapPinned,
    },
    {
      title: "In-depth understanding of local regulations and global standards",
      icon: FileCheck2,
    },
    {
      title: "Strong stakeholder relationships and government liaison",
      icon: Users,
    },
    {
      title: "Emphasis on sustainability and long-term value",
      icon: Leaf,
    },
    {
      title: "End-to-end project advisory, from concept to execution",
      icon: ClipboardList,
    },
  ];

  const capabilities = [
    {
      title: "Geospatial & GIS Mapping",
      icon: Map,
    },
    {
      title: "Scenario & Forecast Modeling",
      icon: LineChart,
    },
    {
      title: "Urban Growth Simulation",
      icon: Workflow,
    },
    {
      title: "Digital Twin Environments",
      icon: Cpu,
    },
    {
      title: "Data-Driven Socioeconomic Analysis",
      icon: BarChart4,
    },
  ];

  const sections = [
    {
      title: "Integrated Team Collaboration",
      desc: `At ALYUSR, we believe that successful planning requires collaboration across a wide range of disciplines. Our planning experts work side by side with architects, engineers, environmental consultants, economists, and legal advisors to ensure a truly integrated approach. 
This teamwork allows us to address every aspect of a project, technical, regulatory, financial, and social, through a unified lens. By combining expertise from different fields, we create solutions that are not only visionary in scope but also realistic, cost-effective, and fully compliant with local and national regulations. 
This process leads to stronger outcomes, better coordination, and a smoother path from concept to execution. Whether it’s a complex urban development or a strategic infrastructure project, our interdisciplinary method ensures that every detail is thoughtfully considered and aligned with the project’s long-term goals.`,
      img: "/urban-planning/planning-and-advisory/team.webp",
    },
    {
      title: "Community & Stakeholder Engagement",
      desc: `We recognize that great planning is not done in isolation; it is shaped by the people it impacts. At ALYUSR, we are committed to inclusive planning that actively involves the voices of communities and stakeholders.
Through public consultation sessions, surveys, community workshops, and focus groups, we gather valuable insights from residents, local businesses, government bodies, and interest groups. These inputs help us understand the real needs, challenges, and aspirations of the people we serve. 
Our approach ensures that strategies are not just designed from the top down, but are informed by on-the-ground realities and lived experiences. This two-way dialogue builds trust, transparency, and stronger community ownership of development outcomes. Ultimately, it leads to more sustainable and widely supported solutions that enhance quality of life and create places people are proud to call home.`,
      img: "/urban-planning/planning-and-advisory/community.webp",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Planning and Advisory Solutions
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/urban-planning/planning-and-advisory/hero.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1100}
          height={700}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, we provide forward-thinking planning and advisory
          solutions to meet the evolving needs of cities, governments,
          developers, and industries. Our goal is to help clients create spaces
          that are economically viable, socially inclusive, and environmentally
          resilient.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          Whether you&apos;re planning a large-scale infrastructure project,
          designing a new city district, or reimagining an urban space, our
          advisory team delivers strategies that align with global best
          practices and national visions like Saudi Vision 2030. We combine
          in-depth research, local context, and innovative modeling tools to
          turn complex ideas into actionable plans.
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
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Advanced Analytics & Technology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          >
            We use cutting-edge tools to support evidence-based planning. These
            digital capabilities allow us to provide smarter, faster, and more
            accurate recommendations.
          </motion.p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white gap-3 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 flex items-start"
                >
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg mt-3 font-semibold">{cap.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-slate-100 h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg order-1 ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={section.img}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`order-2 ${index % 2 !== 0 ? "md:order-1" : ""}`}
              >
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {section.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Choose Al Yusr Planning Solutions?
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-start flex gap-3"
                >
                  <div className=" rounded-full">
                    <BadgeCheck
                      size={36}
                      className="fill-green-500 text-white"
                    />
                  </div>
                  <p className="text-gray-700 font-medium">{item.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Plan the Future Together"
        desc="Whether it’s a new master plan or a detailed development study, Al Yusr is your trusted planning and advisory partner."
        btn="Contact Us Today"
      />
    </main>
  );
}
