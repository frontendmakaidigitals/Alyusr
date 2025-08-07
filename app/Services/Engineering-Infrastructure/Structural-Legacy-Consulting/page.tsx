"use client";
import { motion } from "motion/react";
import EngineeringCTA from "@/app/app_chunks/CTA";
import {
  Wrench,
  Truck,
  GaugeCircle,
  LayoutTemplate,
  BadgeCheck,
} from "lucide-react";

import Image from "next/image";

export default function ConstructionManagementPage() {
  const expertise = [
    {
      title: "Deep Foundation Systems",
      description:
        "We advise on the selection, design, and implementation of deep foundation elements suitable for high-capacity, low-settlement requirements across various soil conditions.",
      items: [
        "Cased and Uncased Drilled Shafts",
        "Large Diameter Shafts (up to 14 ft wide, 300 ft deep)",
        "Oscillator/Rotator Shaft Systems",
        "Offshore and In-Water Foundation Systems",
      ],
    },
    {
      title: "Micropile Systems",
      description:
        "Specialized solutions for restricted access areas, seismic zones, and retrofitting of existing structures. Ideal for low-clearance, low-vibration environments.",
      items: [],
    },
    {
      title: "Slope Stabilization & Earth Retention",
      description:
        "We assess geologic and soil conditions to recommend slope stability strategies, shoring systems, and landslide risk mitigation solutions.",
      items: [
        "Retaining Walls",
        "Soil Nailing & Anchoring Systems",
        "Temporary & Permanent Shoring Designs",
      ],
    },
    {
      title: "Ground Improvement Techniques",
      description:
        "We offer guidance on methods to enhance soil properties, reduce settlement, and increase load-bearing capacity before construction begins.",
      items: [
        "Vibrocompaction",
        "Jet Grouting",
        "Preloading and Wick Drains",
        "Chemical Stabilization",
      ],
    },
    {
      title: "Reverse Circulation Drilling (RCD)",
      description:
        "Expert recommendations for using RCD techniques in large-scale foundation projects requiring high precision and minimal disturbance.",
      items: [],
    },
  ];
  const items = [
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      text: "Optimal equipment selection",
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      text: "Logistics planning",
    },
    {
      icon: <GaugeCircle className="w-6 h-6 text-white" />,
      text: "Equipment efficiency and performance benchmarks",
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 text-white" />,
      text: "On-site setup strategies",
    },
  ];
  const industries = [
    {
      title: "High-Rise and Super-Tall Buildings",
      image: "/images/industries/highrise.jpg",
    },
    {
      title: "Bridges and Transportation Infrastructure",
      image: "/images/industries/bridges.jpg",
    },
    {
      title: "Marine and Offshore Platforms",
      image: "/images/industries/marine.jpg",
    },
    {
      title: "Industrial Plants and Energy Facilities",
      image: "/images/industries/industrial.jpg",
    },
    {
      title: "Slope-Adjacent Residential and Commercial Developments",
      image: "/images/industries/slope.jpg",
    },
  ];
  const reasons = [
    "Decades of Field-Proven Expertise via Legacy Foundations",
    "Integrated Planning, Design, and Execution Advisory",
    "Access to Specialized Foundation Equipment Insights",
    "Customized Solutions for Challenging Geotechnical Profiles",
    "Emphasis on Safety, Durability, and Structural Resilience",
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Structural Legacy Consulting
        </h1>
      </div>
      <section className=" w-full h-[500px] bg-yellow-500 text-center ">
        <Image
          src={"/engineering/bannerjpg"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={500}
          height={200}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, our Structural Legacy Consulting services are designed to
          support infrastructure and development projects with deep technical
          insight, precision engineering, and a commitment to long-term
          performance. Utilizing the expertise of Legacy Foundations, a leading
          self-perform geotechnical and foundation contractor since the 1990s,
          we offer consulting solutions that ensure complex foundation and
          ground engineering challenges are met with confidence and success.
        </p>{" "}
        <p className="mt-3 text-center text-lg">
          From high-rise structures and industrial zones to offshore platforms
          and transportation corridors, our consulting team supports clients at
          every stage, planning, design review, equipment selection, contractor
          advisory, and performance optimization. We bring decades of
          field-tested knowledge, paired with modern modeling and geotechnical
          tools, to guide your projects from the ground up.
        </p>
      </section>

      <section className="py-20 px-6 md:px-10  text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Our <span className="text-blue-500">Core Expertise</span>
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {expertise.map((area, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="border border-slate-900/10 rounded-2xl grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 overflow-hidden"
                >
                  <div
                    className={`w-full h-[450px]  ${
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <img
                      src={
                        "https://images.pexels.com/photos/3309655/pexels-photo-3309655.jpeg"
                      }
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Block */}
                  <div
                    className={`p-6 ${
                      isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  >
                    <h3 className="text-3xl font-semibold mb-2 text-sky-800">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{area.description}</p>
                    {area.items.length > 0 && (
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {area.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-sky-900 mb-6">
            Specialized Equipment Advisory
          </h2>
          <p className="text-slate-950 mb-12 max-w-3xl mx-auto">
            With access to a diverse fleet, including foundation cranes,
            Lodrils, rotators, oscillators, and offshore drilling rigs, our team
            advises on:
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-blue-100 rounded-xl p-5 text-black border shadow"
              >
                <div className="bg-blue-400 p-2 rounded-lg">{item.icon}</div>
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Industries We Serve
          </h2>

          <div className="space-y-16 grid grid-cols-1 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={industry.title} className={``}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=" w-full bg-red-300 h-[240px] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover  shadow-md"
                    />
                  </motion.div>

                  <motion.div className=" w-full border mt-1 bg-blue-400 text-slate-50 rounded-xl p-2 ">
                    <h3 className="text-lg  font-semibold ">
                      {industry.title}
                    </h3>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20  bg-blue-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 container gap-8 place-items-center">
          <div>
            {" "}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-start text-sky-900 mb-10"
            >
              Why Partner with Al Yusr?
            </motion.h2>
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 text-blue-950"
                >
                  <BadgeCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg font-medium">{reason}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="h-[450px] bg-red-400 w-full">
            <img />
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Need Engineering Experts? Let’s Talk."
        desc={
          "Whether it’s a high-rise tower, an infrastructure masterplan, or a complex facility, Al Yusr Engineering Consulting is your trusted partner for dependable engineering solutions."
        }
        btn="Contact Us"
      />
    </main>
  );
}
