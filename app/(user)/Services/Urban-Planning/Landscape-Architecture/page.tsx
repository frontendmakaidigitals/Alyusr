"use client";
import Image from "next/image";
import {
  TreePalm,
  Building2,
  Droplets,
  Route,
  Landmark,
  Waves,
} from "lucide-react";
import { motion } from "motion/react";

import EngineeringCTA from "@/app/(user)/app_chunks/CTA";

export default function ConstructionManagementPage() {
  const principles = [
    {
      title: "Cultural Relevance",
      description:
        "We respect the local context, drawing from regional heritage, community values, and site-specific narratives to craft spaces that reflect the people they serve.",
      gradient: "from-[#1e3a8a] to-[#3b82f6]",
      img: "/urban-planning/landscape/Cultural.webp",
    },
    {
      title: "Ecological Performance",
      description:
        "Our landscapes are designed to adapt and endure. We apply measurable sustainability metrics to ensure long-term environmental viability.",
      gradient: "from-[#065f46] to-[#10b981]",
      img: "/urban-planning/landscape/Ecological.webp",
    },
    {
      title: "People-Centered Design",
      description:
        "We prioritize accessibility, safety, and inclusivity, creating spaces where people gather, move, relax, and thrive.",
      gradient: "from-[#9d174d] to-[#ec4899]",
      img: "/urban-planning/landscape/People-Centered.webp",
    },
  ];
  const services = [
    {
      title: "Urban Parks & Open Space Design",
      description:
        "Planning and design of public parks, promenades, and recreation areas that foster community interaction and environmental benefits.",
      icon: <TreePalm className="w-12 h-12 text-blue-500" />,
      gradient: "from-green-600 to-green-400",
    },
    {
      title: "Corporate & Institutional Landscapes",
      description:
        "High-performance landscapes that enhance campuses, headquarters, and educational institutions while supporting wellness and placemaking.",
      icon: <Building2 className="w-12 h-12 text-blue-500" />,
      gradient: "from-indigo-600 to-indigo-400",
    },
    {
      title: "Green Infrastructure Integration",
      description:
        "Sustainable systems that manage stormwater, reduce urban heat, and enhance biodiversity, including rain gardens, bioswales, and permeable surfaces.",
      icon: <Droplets className="w-12 h-12 text-blue-500" />,
      gradient: "from-emerald-600 to-emerald-400",
    },
    {
      title: "Streetscapes & Mobility Corridors",
      description:
        "Pedestrian- and cyclist-friendly design solutions that support safe, active transportation within urban areas.",
      icon: <Route className="w-12 h-12 text-blue-500" />,
      gradient: "from-yellow-600 to-yellow-400",
    },
    {
      title: "Civic & Cultural Spaces",
      description:
        "Plazas, memorials, and cultural precincts that reflect local identity and invite public engagement.",
      icon: <Landmark className="w-12 h-12 text-blue-500" />,
      gradient: "from-pink-600 to-pink-400",
    },
    {
      title: "Resilient Coastal & Riverfront Landscapes",
      description:
        "Adaptive shoreline and floodplain strategies that mitigate risk and reconnect communities to water.",
      icon: <Waves className="w-12 h-12 text-blue-500" />,
      gradient: "from-blue-600 to-blue-400",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Landscape Architecture
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          alt={"hero"}
          className="w-full h-full object-cover object-bottom"
          height={700}
          src={"/urban-planning/landscape/hero.webp"}
          width={1200}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, our Landscape Architecture practice is rooted in the
          belief that public spaces are the heart of resilient, inclusive, and
          livable communities. We design thoughtful, multi-functional landscapes
          that connect people to their environment, balancing beauty, culture,
          and sustainability.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          From urban park systems and civic plazas to waterfronts, campuses, and
          intimate courtyards, our work transforms everyday spaces into
          meaningful destinations. With each project, we blend environmental
          systems, cultural identity, and human experience to deliver long-term
          value for our clients and communities.
        </p>
      </section>
      <section className="bg-gray-50 py-20 mt-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-blue-500">Design Philosophy</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto text-lg mb-14"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            We view landscape architecture not just as a design discipline, but
            as a catalyst for social, ecological, and economic transformation.
            Urban infrastructure has become our new landscape, integrating green
            stormwater management, flood control, active mobility, and natural
            habitat restoration into the core of public realm design.
          </motion.p>

          <div className="grid gap-10 md:grid-cols-3 text-left">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                className={`rounded-xl bg-blue-50 shadow-lg text-black`}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className=" w-full h-[230px] rounded-xl overflow-hidden bg-red-300">
                  <Image
                    alt={""}
                    className="w-full h-full object-cover"
                    height={400}
                    src={item.img}
                    width={400}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-[700] text-blue-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-500">Services</span> We Offer
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl text-center mx-auto text-lg mb-14"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            We provide a comprehensive range of landscape and urban design
            solutions that prioritize sustainability, resilience, and community
            well-being.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`rounded-xl shadow-md p-6 bg-blue-50`}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="mb-4 ">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-sky-800">
                  {service.title}
                </h3>
                <p className="text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-10 bg-blue-50">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 container  ">
          <div className="bg-white p-6 rounded-xl grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5">
            <div className=" bg-blue-100 text-blue-800 h-[400px] rounded-xl w-full mb-5">
              <Image
                alt={""}
                className="w-full h-full object-cover"
                height={800}
                src={"/urban-planning/landscape/Landscape Performance.webp"}
                width={800}
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-[700] text-blue-900 mb-4">
                Landscape Performance & Sustainability
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Al Yusr, we measure landscape performance to evaluate
                ecological, social, and economic impact over time. We integrate
                native planting, climate adaptation strategies, and low-impact
                maintenance systems to ensure that our landscapes are not only
                visually compelling but also environmentally responsible and
                enduring.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl place-items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-[700] text-blue-900 mb-4">
                Global Vision, Local Impact
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Working at all scales and across geographies, our projects span
                the Middle East, North Africa, and global markets. From regional
                greenway networks to urban courtyards, our multidisciplinary
                teams collaborate with architects, engineers, and planners to
                bring integrated and innovative solutions to life.
              </p>
            </div>
            <div className=" bg-blue-100 text-blue-800 h-[400px] rounded-xl w-full mb-5">
              <Image
                alt={""}
                className="w-full h-full object-cover"
                height={800}
                src={"/urban-planning/landscape/global-vision.webp"}
                width={800}
              />
            </div>
          </div>
        </div>
      </section>
      <EngineeringCTA
        btn="Contact Us Today"
        desc="Whether you’re planning a regional open space network or a small urban plaza, Al Yusr's Landscape Architecture team brings creative insight, technical rigor, and a deep understanding of place."
        title="Let's Shape Sustainable Landscapes Together"
      />
    </main>
  );
}
