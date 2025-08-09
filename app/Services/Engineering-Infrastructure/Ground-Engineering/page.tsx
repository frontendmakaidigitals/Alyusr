"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import { motion } from "framer-motion";
import { BadgeCheck, Globe, Users, ShieldCheck, Lightbulb } from "lucide-react";

export default function ConstructionManagementPage() {
  const capabilities = [
    {
      title: "Desk Studies & Site Investigations",
      description:
        "We begin with a comprehensive understanding of your site. Our services include:",
      points: [
        "Desktop geological assessments",
        "Site reconnaissance & feasibility studies",
        "Planning and execution of ground investigations",
        "Soil and rock sampling, borehole drilling, and lab testing",
        "In-situ testing (SPT, CPT, pressuremeter, permeability)",
      ],
      image: "/images/capabilities/investigations.jpg",
    },
    {
      title: "Foundation Design & Earth Structures",
      description:
        "We design foundation systems that support long-term performance across variable soil conditions.",
      points: [
        "Shallow and deep foundation design",
        "Complex piled foundation systems",
        "Ground bearing and suspended slabs",
        "Retaining walls, embankments, and soil-structure interaction analysis",
        "Design of tunnels, shafts, and underground structures",
      ],
      image: "/images/capabilities/foundation.jpg",
    },
    {
      title: "Slope Stabilization & Soil Engineering",
      description:
        "Ensuring slope integrity is vital for roads, railways, reservoirs, and hillside developments.",
      points: [
        "Soil and rock slope design",
        "Stabilization techniques (nailing, anchors, geogrids)",
        "Landslide risk assessment and remediation",
        "Seepage control and erosion mitigation",
      ],
      image: "/images/capabilities/slope.jpg",
    },
    {
      title: "Groundwater & Geohazard Assessments",
      description:
        "Water, seismic activity, and soil behavior can compromise project timelines if not properly addressed. We offer:",
      points: [
        "Groundwater monitoring and modeling",
        "Hydrogeological mapping and aquifer assessments",
        "Earthquake risk analysis and liquefaction studies",
        "Karst terrain and sinkhole hazard evaluations",
        "Rockfall and landslide hazard mapping",
      ],
      image: "/images/capabilities/geohazard.jpg",
    },
    {
      title: "Ground Treatment & Earthworks Design",
      description:
        "We enhance ground behavior for safe, stable, and efficient construction:",
      points: [
        "Soil stabilization and improvement (lime/cement treatment)",
        "Ground compaction and grouting techniques",
        "Earthwork cut/fill balancing",
        "Reuse and conditioning of onsite material",
        "Dynamic compaction and vibroflotation",
      ],
      image: "/images/capabilities/earthworks.jpg",
    },
    {
      title: "Advanced Modeling & Simulation",
      description:
        "Using software and numerical tools, we simulate geotechnical behavior to optimize performance and cost.",
      points: [
        "Finite element and finite difference modeling",
        "Soil-structure interaction analysis",
        "3D slope stability models",
        "Seepage, thermal, and settlement modeling",
        "Performance-based design for infrastructure resilience",
      ],
      image: "/images/capabilities/modeling.jpg",
    },
  ];
  const whatSetsUsApart = [
    {
      title: "Proven Experience Across Sectors",
      desc: "Roads, railways, ports, energy, real estate, defense, and mining.",
      icon: BadgeCheck,
    },
    {
      title: "Specialized Regional Knowledge",
      desc: "Deep understanding of MENA geologies, including collapsible soils, sabkha, and expansive clays.",
      icon: Globe,
    },
    {
      title: "In-House Teams",
      desc: "Geotechnical engineers, soil scientists, hydrologists, and structural engineers working in synergy.",
      icon: Users,
    },
    {
      title: "Safety & Quality First",
      desc: "ISO-certified systems and rigorous QA/QC at every project stage.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation with Practicality",
      desc: "We combine advanced design with real-world constructability.",
      icon: Lightbulb,
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Ground Engineering Services
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
          At Al Yusr Engineering Consulting, we bring expert insight and proven
          methodology to address one of the most critical aspects of any
          construction project, the ground it stands on. From desert plains to
          coastal developments and high-risk flood zones, our Ground Engineering
          specialists design stable, safe, and cost-effective solutions tailored
          to complex geotechnical conditions across the Kingdom and beyond.
        </p>{" "}
        <p className="mt-2 text-lg text-center">
          Whether you’re building major transportation links, energy facilities,
          industrial complexes, or coastal infrastructure, we help reduce ground
          risk and unlock the full potential of your site.
        </p>
        <p className="mt-2 text-lg text-center">
          We work at the front lines of infrastructure, delivering smart,
          sustainable, and resilient geotechnical designs. Our team combines
          deep technical expertise, regional experience, and globally informed
          best practices to solve ground challenges with confidence and
          efficiency.
        </p>
      </section>

      {/* Features */}
      <section className="bg-sky-50 mt-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center  mb-16">
            What We <span className="text-blue-500">Offer</span>
          </h2>

          <div className="space-y-16 container">
            {capabilities.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 rounded-2xl text-black"
                >
                  {/* Image Block */}
                  <div
                    className={`h-[360px] bg-green-500 w-full ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } order-1`}
                  >
                    <img
                      src={item.image}
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
                    <h3 className="text-4xl text-sky-800 font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black/90 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span>
                            <BadgeCheck className="w-5 h-5 text-white fill-green-500" />
                          </span>
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
          <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">
            Why Choose Al Yusr?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whatSetsUsApart.map((item, index) => {
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
        title="Building Confidence from the Ground Up"
        desc="At Al Yusr, we understand that strong, sustainable infrastructure begins with solid ground. Whether you're working with uncertain subsurface conditions or challenging timelines, our Ground Engineering team is here to provide solutions that minimize risk, ensure safety, and drive performance from concept to construction."
        btn="Contact Us Today"
      />
    </main>
  );
}
