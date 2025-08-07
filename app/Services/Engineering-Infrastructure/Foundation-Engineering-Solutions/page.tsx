"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import { motion } from "framer-motion";
import { HardDrive, BadgeCheck, Waves, Settings } from "lucide-react";

export default function ConstructionManagementPage() {
  const offerings = [
    {
      title: "Deep Foundations",
      desc: `We design and construct deep foundation systems that support high-rise towers, industrial sites, bridges, and offshore platforms.`,
      points: [
        "Drilled Shafts (Cased & Uncased)",
        "Oscillator & Rotator Shafts",
        "Large-Diameter Shafts (up to 14 ft wide, 300 ft deep)",
        "Reverse Circulation Drilling (RCD)",
        "Offshore & In-Water Foundations",
      ],
      img: "",
    },
    {
      title: "Micropile Systems",
      desc: `High-capacity small-diameter piles for underpinning existing structures or retrofitting in tight access areas.`,
      points: [
        "Minimal vibration and noise",
        "Fast installation with light equipment",
        "Effective in unstable or contaminated soils",
        "Flexible angle installation",
      ],
      img: "",
    },
    {
      title: "Ground Improvement Techniques",
      desc: `We improve soil conditions to enhance load-bearing and reduce settlement.`,
      points: [
        "Dynamic Compaction",
        "Vibroflotation & Stone Columns",
        "Jet Grouting & Pressure Grouting",
      ],
      img: "",
    },
    {
      title: "Slope Stabilization & Excavation Shoring",
      desc: `Safety-first solutions for hilly regions or deep excavation projects.`,
      points: [
        "Retaining Walls & Soil Nailing",
        "Sheet Piling & Soldier Piles",
        "Tie-Back Anchors & Bracing Systems",
        "Temporary & Permanent Solutions",
      ],
      img: "",
    },
  ];

  const features = [
    {
      title: "Proven Track Record",
      desc: "Decades of successful foundation projects across complex terrain.",
      icon: BadgeCheck,
    },
    {
      title: "Specialized Equipment",
      desc: "Full fleet including cranes, rotators, and advanced drilling tools.",
      icon: HardDrive, // Represents powerful, industrial tools
    },
    {
      title: "Offshore Expertise",
      desc: "Engineered solutions for marine and port developments.",
      icon: Waves, // Represents marine and offshore environments
    },
    {
      title: "Custom Approach",
      desc: "Every site has unique challenges; we engineer for precision and performance.",
      icon: Settings, // Represents customization and engineering
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Foundation Engineering
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
          At Al Yusr, we specialize in delivering advanced foundation
          engineering services that support the success of major infrastructure,
          industrial, and commercial projects across Saudi Arabia and beyond.
        </p>{" "}
        <p className="mt-2 text-lg text-center">
          Our expertise covers everything from deep foundation systems and
          ground improvement techniques to slope stabilization and offshore
          piling solutions. We understand that the foundation is the backbone of
          every structure, and our role is to ensure it is designed and built
          with absolute precision, durability, and resilience.
        </p>
        <p className="mt-2 text-lg text-center">
          Our expertise covers everything from deep foundation systems and
          ground improvement techniques to slope stabilization and offshore
          piling solutions. We understand that the foundation is the backbone of
          every structure, and our role is to ensure it is designed and built
          with absolute precision, durability, and resilience.
        </p>
      </section>

      {/* Features */}
      <section className="bg-sky-50 mt-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-900 mb-16">
            What We Offer
          </h2>

          <div className="space-y-16 container">
            {offerings.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 rounded-2xl text-black"
                >
                  {/* Image Block */}
                  <div
                    className={`h-[340px] bg-green-500 w-full ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } order-1`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Text Block */}
                  <div
                    className={`flex-1 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } order-2`}
                  >
                    <h3 className="text-3xl text-sky-800 font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black/90 mb-4">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <BadgeCheck className="w-5 h-5 text-green-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Why Choose Al Yusr?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-blue-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-800 rounded-full mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Built to Power Progress"
        desc="Whether we're energizing a new transit corridor, upgrading bridge control systems, or supporting water utility modernization, SCCI Electric is committed to powering progress through safe, smart, and sustainable electrical solutions."
        btn="Contact Us Today"
      />
    </main>
  );
}
