"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import {
  TreePalm,
  Building2,
  Droplets,
  Route,
  Landmark,
  Waves,
  Leaf,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";

export default function ConstructionManagementPage() {
  const principles = [
    {
      title: "Cultural Relevance",
      description:
        "We respect the local context, drawing from regional heritage, community values, and site-specific narratives to craft spaces that reflect the people they serve.",
      gradient: "from-[#1e3a8a] to-[#3b82f6]", // blue gradient
    },
    {
      title: "Ecological Performance",
      description:
        "Our landscapes are designed to adapt and endure. We apply measurable sustainability metrics to ensure long-term environmental viability.",
      gradient: "from-[#065f46] to-[#10b981]", // green gradient
    },
    {
      title: "People-Centered Design",
      description:
        "We prioritize accessibility, safety, and inclusivity, creating spaces where people gather, move, relax, and thrive.",
      gradient: "from-[#9d174d] to-[#ec4899]", // pink gradient
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Landscape Architecture
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
      <section className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            Our Design Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto text-lg mb-14"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl shadow-lg text-black`}
              >
                <div className=" w-full h-[230px] bg-red-300">
                  <Image
                    src={""}
                    className="w-full h-full object-cover"
                    alt={""}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6"
          >
            Services We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl text-center mx-auto text-lg mb-14"
          >
            We provide a comprehensive range of landscape and urban design
            solutions that prioritize sustainability, resilience, and community
            well-being.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-xl shadow-md p-6 bg-blue-50`}
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
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 container max-w-6xl ">
          <div className="bg-white p-6 rounded-xl grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5">
            <div className=" bg-blue-100 text-blue-800 h-[320px] rounded-xl w-full mb-5">
              <Image src={""} alt={""} className="" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-blue-900 mb-4">
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
              <h2 className="text-3xl font-semibold text-blue-900 mb-4">
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
            <div className=" bg-blue-100 text-blue-800 h-[320px] rounded-xl w-full mb-5">
              <Image src={""} alt={""} className="" />
            </div>
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Let's Shape Sustainable Landscapes Together"
        desc="Whether you’re planning a regional open space network or a small urban plaza, Al Yusr's Landscape Architecture team brings creative insight, technical rigor, and a deep understanding of place."
        btn="Contact Us Today"
      />
    </main>
  );
}
