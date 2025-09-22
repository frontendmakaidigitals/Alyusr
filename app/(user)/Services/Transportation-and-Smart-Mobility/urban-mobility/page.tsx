"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Lightbulb, Layers, Globe2, CheckCircle2 } from "lucide-react";

import Image from "next/image";
export default function Page() {
  const items = [
    {
      title: "Travel Pattern Analysis",
      desc: "Understanding the way people move is the foundation of effective transportation planning. Our team collects and analyzes real-world movement data to identify travel trends, peak demand times, and changing commuter behavior.",
      points: [
        "Assessing the impact of remote work on public transit demand.",
        "Tracking growth in cycling, walking, and micro-mobility adoption.",
        "Identifying patterns in urban freight delivery to reduce congestion.",
      ],
      image: "/Transportation-mobility/urban-mobility/travel-pattern.webp",
    },
    {
      title: "Technology Integration",
      desc: "Emerging technologies like autonomous vehicles, electric mobility, and connected traffic systems are redefining city infrastructure needs.",
      points: [
        "Plan EV charging station networks.",
        "Integrate smart traffic signals for smoother flow.",
        "Develop infrastructure that can support driverless public transport.",
      ],
      image: "/Transportation-mobility/urban-mobility/tech-integeration.webp",
    },
    {
      title: "Shared Mobility Solutions",
      desc: "Shared mobility is transforming the way urban residents and visitors travel. We design frameworks that integrate:",
      points: [
        "Bike-sharing and e-bike networks for short trips.",
        "Car-sharing programs to reduce private car dependency.",
        "E-scooter and micro-mobility hubs in high-demand zones.",
      ],
      image: "/Transportation-mobility/urban-mobility/shared-mobility.webp",
    },
    {
      title: "Freight & Logistics Planning",
      desc: "E-commerce and same-day delivery services have significantly increased urban freight activity. Without proper planning, this can lead to traffic congestion, air pollution, and infrastructure strain.",
      points: [
        "Design last-mile delivery hubs to reduce inner-city truck traffic.",
        "Develop time-restricted delivery schedules for efficiency.",
        "Incorporate low-emission freight vehicles into urban supply chains.",
      ],
      image: "/Transportation-mobility/urban-mobility/freight-planning.webp",
    },
    {
      title: "Sustainable Transport Planning",
      desc: "Sustainability is no longer optional, it’s essential. Our transport planning integrates:",
      points: [
        "Low-carbon public transit systems.",
        "Pedestrian-first urban design.",
        "Cycling infrastructure that is safe and connected.",
        "Initiatives to reduce single-occupancy vehicle trips.",
      ],
      image:
        "/Transportation-mobility/urban-mobility/Sustainable-planning.webp",
    },
    {
      title: "Mobilitics™ Scenario Planning",
      desc: "One of our most powerful tools, Mobilitics™, enables long-term scenario testing for transportation and land use.",
      points: [
        "Simulate policy changes and their impact on mobility.",
        "Assess infrastructure resilience against future challenges.",
        "Test different investment strategies before committing resources.",
      ],
      image: "/Transportation-mobility/urban-mobility/Scenario Planning.webp",
    },
  ];
  const reasons = [
    {
      title: "Forward-Looking Expertise",
      desc: "We anticipate changes before they disrupt your city.",
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Integrated Planning",
      desc: "We combine engineering, urban design, environmental science, and technology.",
      icon: <Layers className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Global Standards, Local Insight",
      desc: "Our team works with both international best practices and region-specific needs.",
      icon: <Globe2 className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Proven Results",
      desc: "Successful projects with governments, municipalities, and private developers.",
      icon: <CheckCircle2 className="w-10 h-10 text-emerald-600" />,
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-semibold">
              Urban <span className="text-blue-600">Mobility</span> Solutions
            </h1>

            <p>
              Transportation systems worldwide are undergoing a historic
              transformation. From connected and automated vehicles to
              sustainable shared mobility, from the growth of e-commerce freight
              traffic to shifts caused by remote work and flexible schedules,
              cities are rethinking how people and goods move.
              <br /> <br />
              At Al Yusr, we combine deep expertise, advanced analytics, and
              future-focused thinking to create transport networks that are
              adaptable, efficient, and sustainable. Our solutions are not just
              reactive; they are proactive frameworks designed to meet current
              demands while preparing for the technological and social changes
              of the next decade.
            </p>
          </div>
          <div className="w-full h-[450px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/urban-mobility/hero.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
          Our <span className="text-blue-600">Scope of Work</span>
        </h2>
        <div className="space-y-20">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 lg:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-blue-600">Al Yusr</span> for Urban
          Mobility?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {reasons.map((item, i) => (
            <div
              key={i}
              className=" gap-4 p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Build Smarter Cities Together"
        desc="Whether your goal is to reduce congestion, prepare for autonomous vehicles, or create more walkable, livable spaces, our team can deliver strategies that balance innovation with practicality."
        btn="Get in Touch Today"
      />
    </main>
  );
}
