"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Building, Users, Footprints } from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const steps = [
    {
      title: "Physical Layout",
      desc: "The design and structure of the built environment (e.g., corridors, entrances, exits, escalators).",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      img: "/Transportation-mobility/pedestrian-movement/Physical.webp", // mall/hallway
    },
    {
      title: "Pedestrian Volume",
      desc: "The number of people entering, exiting, or moving through the space during a specific time period.",
      icon: <Users className="w-8 h-8 text-green-600" />,
      img: "/Transportation-mobility/pedestrian-movement/Pedestrian Volume.webp", // crowded street
    },
    {
      title: "Pedestrian Behavior",
      desc: "Includes walking speed, crowd response, group dynamics, personal space preferences, and more.",
      icon: <Footprints className="w-8 h-8 text-purple-600" />,
      img: "/Transportation-mobility/pedestrian-movement/Behavior.webp", // people walking
    },
  ];
  const variables = [
    {
      title: "Time-Based Movement",
      desc: "Simulate peak vs. off-peak operations to understand crowd flow throughout the day.",
      img: "/Transportation-mobility/pedestrian-movement/Time-Based Movement.webp", // busy metro crowd
    },
    {
      title: "Walking Speeds",
      desc: "Account for diverse user groups, elderly individuals, people with children, passengers with luggage, etc.",
      img: "/Transportation-mobility/pedestrian-movement/walking footpath.webp", // people walking different speeds
    },
    {
      title: "User Footprint & Space Needs",
      desc: `Consider how much physical space people occupy, including:
        - Luggage or bicycles
        - Cultural preferences for personal space
        - Situational crowd tolerance (e.g., elevators, platforms)`,
      img: "/Transportation-mobility/pedestrian-movement/user-spce.webp", // crowd in station
    },
  ];

  const cases = [
    {
      title: "Emergency Evacuation Modelling",
      desc: "Plan for standard evacuations or blocked-exit scenarios to ensure safety.",
    },
    {
      title: "Capacity Planning & Future Growth",
      desc: "Anticipate how increased footfall in the coming years will impact space performance.",
    },
    {
      title: "Design Comparisons",
      desc: "Test multiple layout or infrastructure options and determine which is most efficient.",
    },
    {
      title: "Operational Planning for Events",
      desc: "Simulate special events, peak holiday hours, or crowd surges for better staffing and signage.",
    },
    {
      title: "Construction Phasing & Disruption Management",
      desc: "Assess the impact of temporary barriers or phased openings on pedestrian access.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-blue-500">Pedestrian Movement</span>{" "}
              Planning
            </h1>
            <p>
              At Al Yusr, we help shape spaces that move people, safely,
              comfortably, and efficiently. Our Pedestrian Movement Planning
              service leverages advanced dynamic modelling to simulate
              real-world human behavior and crowd flows within various built
              environments. Whether it’s a metro station, airport terminal,
              shopping mall, stadium, or public plaza, we offer data-driven
              insights to optimize pedestrian traffic and prevent congestion.
              <br /> <br />
              By simulating how people move, wait, and interact within a space,
              we support architects, urban planners, developers, and operators
              in making informed decisions that enhance user experience and
              public safety.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/pedestrian-movement/hero.webp"}
              className="w-full h-full object-cover"
              alt={"pedestrian movement"}
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              How It Works: Dynamic Pedestrian Simulation
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We use dynamic modelling software to replicate human movement
              patterns in different scenarios. Each simulation is built on three
              essential components:
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Key Variables We Analyze
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our simulations are based on real-life variability, allowing for
              more accurate insights and design planning:
            </p>
          </div>

          {/* Grid with images */}
          <div className="grid md:grid-cols-3 gap-8">
            {variables.map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="/Transportation-mobility/pedestrian-movement/planning.webp" // replace with your choice
              alt="Measurable Outcomes"
              className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Measurable Outcomes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our models produce quantitative results that guide space design
              and operational planning:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Space Utilization Rates",
                "Density & Crowding Levels",
                "Queuing Behavior & Wait Times",
                "Flow Rates & Directional Movement",
                "Walk Time & Clearance Time",
                "Congestion Mapping",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Use Cases & Scenarios
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our pedestrian modelling services are applicable at every stage of
              the project, from concept to post-occupancy evaluation.
            </p>
          </div>

          {/* Grid of Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-blue-500">Al Yusr?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            With deep expertise in urban design, infrastructure planning, and
            simulation modelling, Al Yusr delivers practical, high-impact
            pedestrian movement insights tailored to your project goals. Our
            analysis helps you design inclusive, efficient, and future-ready
            spaces where people feel safe and confident moving.
          </p>
        </div>
      </section>
      <EngineeringCTA
        title="Need expert pedestrian planning for your next development?"
        desc=" Contact Al Yusr today to simulate smarter movement, reduce crowd risk, and enhance the usability of your space."
        btn="Contact Us Today"
      />
    </main>
  );
}
