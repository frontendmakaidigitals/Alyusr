"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";

import { motion } from "motion/react";
import { BadgeCheck } from "lucide-react";
export default function ConstructionManagementPage() {
  const phases = [
    {
      title: "Research & Baseline Assessment",
      desc: "We begin by gathering data on the site, population trends, environmental conditions, existing infrastructure, and regulatory requirements. This foundation informs all future planning decisions.",
      step: "01",
      gradient: "bg-gradient-to-tr from-[#fce2db] via-[#f1c6d3] to-[#e4a3d4]",
    },
    {
      title: "Visioning & Conceptualization",
      desc: "Working with stakeholders, we define a shared vision and guiding principles. We then translate these into high-level spatial strategies and land use concepts.",
      step: "02",
      gradient: "bg-gradient-to-br from-[#f4f5db] to-[#d9dab0]",
    },
    {
      title: "Detailed Planning & Design Guidelines",
      desc: "We develop master plans, zoning strategies, mobility networks, public realm plans, and sustainability frameworks to guide long-term growth.",
      step: "03",
      gradient: "bg-gradient-to-b  from-[#dfdfde] to-[#f7f5f2]",
    },
    {
      title: "Policy, Phasing & Implementation Planning",
      desc: "We prepare actionable policies, phasing plans, and governance frameworks to enable efficient execution and long-term project success.",
      step: "04",
      gradient: "bg-gradient-to-tr from-[#f4cca4] to-[#d99879]",
    },
  ];

  const offerings = [
    {
      title: "Strategic Master Planning",
      desc: "Integrated land use plans that define the future shape, purpose, and scale of development.",
      img: "/images/master-planning.jpg",
    },
    {
      title: "Community-Centered Design",
      desc: "Plans that prioritize walkability, accessibility, cultural integration, and social well-being.",
      img: "/images/community-design.jpg",
    },
    {
      title: "Regulatory Planning & Zoning Support",
      desc: "Analysis and recommendations to align your development with local laws, environmental constraints, and growth policies.",
      img: "/images/regulatory.jpg",
    },
    {
      title: "Green Infrastructure & Public Realm",
      desc: "Nature-based solutions and inclusive spaces that enhance the quality of life and urban resilience.",
      img: "/images/green-infra.jpg",
    },
    {
      title: "Mobility & Connectivity Frameworks",
      desc: "Planning for inclusive transportation options, roads, public transit, pedestrian, and cycling networks.",
      img: "/images/mobility.jpg",
    },
    {
      title: "Economic & Social Sustainability",
      desc: "Creating communities that are economically viable and socially balanced across demographics.",
      img: "/images/sustainability.jpg",
    },
  ];

  const sustainablePoints = [
    "Climate resilience and water conservation",
    "Low-impact development",
    "Energy-efficient infrastructure",
    "Integrated mobility systems",
    "Culturally and ecologically sensitive land use",
  ];

  const experienceAreas = [
    "Urban expansion and new towns",
    "Regeneration of historic districts",
    "Industrial and logistics zones",
    "Tourism and coastal development areas",
    "Mixed-use and smart city districts",
  ];

  const points = [
    "In-depth knowledge of regional planning policies",
    "Multidisciplinary team with planning, design, and engineering capabilities",
    "Community-first and sustainability-driven approach",
    "Expertise in both greenfield and brownfield developments",
    "Commitment to quality, innovation, and long-term value",
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Community Planning
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
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, we believe that well-planned communities are the
          foundation of successful cities. Our Community Planning services focus
          on creating people-centered, sustainable environments that balance
          development with livability, functionality, and cultural identity.
          Whether it’s a new township, a revitalized district, or a strategic
          growth corridor, we help clients transform spaces into thriving
          communities with lasting impact.
        </p>{" "}
      </section>
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Planning Framework
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We structure our community planning process into clear, phased
            stages.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-7">
          {phases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 text-white shadow-xl ${item.gradient}`}
            >
              <div className="text-5xl font-bold text-black/60 shrink-0 mb-4">
                {item.step}
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-sky-50">
        <div className="container ">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition duration-300" />
                <div className="absolute bottom-0 p-6 text-white z-10">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
          >
            Community Engagement & Stakeholder Collaboration
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            We recognize that successful planning begins with listening. Al Yusr
            facilitates structured stakeholder consultations, public workshops,
            and digital engagement platforms to ensure that the community’s
            voice is part of every major planning decision. This approach gives
            transparency, builds trust, and results in spaces that genuinely
            reflect the needs and aspirations of their future users.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Sustainable Communities */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                Sustainable & Resilient Communities
              </h2>
              <p className="mb-6 text-gray-700">
                Every community we plan reflects our strong commitment to
                sustainability. Our strategies support:
              </p>
              <ul className="space-y-3 text-gray-800">
                {sustainablePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">
                      <BadgeCheck />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500">
                We incorporate global best practices such as the UN SDGs,
                LEED-ND, and Estidama frameworks into our projects.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/sustainability.jpg"
                alt="Sustainable Community"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Experience Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/experience.jpg"
                alt="Urban Development Experience"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
                Our Experience
              </h2>
              <p className="mb-6 text-gray-700">
                We have successfully supported public and private sector clients
                across:
              </p>
              <ul className="space-y-3 text-gray-800">
                {experienceAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">
                      <BadgeCheck />
                    </span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20 px-4 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          >
            Why Al Yusr?
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 text-left max-w-4xl mx-auto">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-blue-100 p-3 rounded-lg"
              >
                <BadgeCheck className="text-green-600 mt-1 shrink-0" />
                <span className="text-gray-700 text-lg">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EngineeringCTA
        title="Let’s Plan the Future Together"
        desc="From idea to implementation, Al Yusr supports you at every step of your urban development journey. Whether it’s a city-wide vision or a community-scale design, we help you build a smarter, greener, and more connected future."
        btn="Contact Us Today"
      />
    </main>
  );
}
