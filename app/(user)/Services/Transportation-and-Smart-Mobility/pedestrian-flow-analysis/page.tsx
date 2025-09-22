"use client";

import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Users,
  Map,
  Route,
  BarChart,
  Move,
  Clock,
  ClipboardList,
  AlertTriangle,
  TrendingUp,
  Hammer,
  ShieldCheck,
  Accessibility,
  Smile,
  Gauge,
  Video,
  BarChart3,
  FileText,
  Layers,
} from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const features = [
    {
      title: "Built Environment Layout",
      desc: "Stations, corridors, exits, gates, and more.",
      icon: Map,
    },
    {
      title: "Pedestrian Numbers",
      desc: "Covers both current and forecasted populations.",
      icon: Users,
    },
    {
      title: "Behavioral Patterns",
      desc: "Walking speeds, route choices, and reactions to crowding.",
      icon: Route,
    },
  ];

  const analysis = [
    {
      title: "Space Utilization",
      desc: "Measuring how effectively spaces are being used.",
      icon: BarChart,
    },
    {
      title: "Density & Congestion",
      desc: "Identifying bottlenecks by time and location.",
      icon: Move,
    },
    {
      title: "Queue Formation",
      desc: "Analyzing queue lengths, wait times, and service points.",
      icon: Users,
    },
    {
      title: "Flow Rates",
      desc: "Tracking speed and smoothness of pedestrian movement.",
      icon: Route,
    },
    {
      title: "Walk & Clearance Times",
      desc: "Calculating total navigation time under different scenarios.",
      icon: Clock,
    },
  ];

  const stages = [
    {
      title: "Design Optimization",
      icon: <ClipboardList className="w-10 h-10 text-blue-600" />,
      points: [
        "Compare multiple layout options before finalizing plans",
        "Understand how different architectural features impact flow",
      ],
    },
    {
      title: "Operational Planning",
      icon: <Users className="w-10 h-10 text-green-600" />,
      points: [
        "Forecast how crowds behave during regular operations",
        "Test staffing needs and queue management strategies",
      ],
    },
    {
      title: "Emergency Scenarios",
      icon: <AlertTriangle className="w-10 h-10 text-red-600" />,
      points: [
        "Evacuation route performance",
        "Behavior under blocked exits or emergency redirection",
      ],
    },
    {
      title: "Future-Proofing",
      icon: <TrendingUp className="w-10 h-10 text-purple-600" />,
      points: [
        "Predict the impact of growth in foot traffic for any target year",
        "Simulate outcomes of special events or temporary site changes",
      ],
    },
    {
      title: "Construction Phasing",
      icon: <Hammer className="w-10 h-10 text-orange-600" />,
      points: [
        "Assess pedestrian impact during partial closures or phased development",
      ],
    },
  ];
  const benefits = [
    {
      title: "Avoid costly redesigns",
      icon: <ShieldCheck className="w-6 h-6  text-blue-500" />,
    },
    {
      title: "Enhance safety and accessibility",
      icon: <Accessibility className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Improve user experience",
      icon: <Smile className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Maximize throughput and minimize delays",
      icon: <Gauge className="w-6 h-6 text-blue-500" />,
    },
  ];

  const deliverables = [
    {
      title: "Interactive simulation videos & heat maps",
      icon: <Video className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Data dashboards with key indicators",
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Recommendations for improvements",
      icon: <FileText className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Scenario comparison & growth modeling",
      icon: <Layers className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Pedestrian <span className="text-blue-500">Flow Analysis</span>
            </h1>
            <p>
              At Al Yusr, our Pedestrian Flow Analysis service uses dynamic
              simulation techniques to accurately model the movement of people
              through spaces, whether in buildings, transit hubs, urban areas,
              or event venues. By simulating real-world pedestrian behavior, we
              help architects, planners, and operators make informed decisions
              that enhance safety, efficiency, and user experience in both
              normal operations and emergency scenarios.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Transportation-mobility/pedestrian-flow-analysis/hero.webp"
              }
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            What Is{" "}
            <span className="text-blue-600">Pedestrian Flow Analysis?</span>
          </h2>

          {/* What It Is */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Pedestrian Flow Analysis is a data-driven simulation approach
                that recreates how people move through spaces under various
                conditions. By combining the built environment, pedestrian
                numbers, and behavioral patterns, we create realistic, virtual
                environments that allow stakeholders to test, analyze, and
                optimize space performance before, during, and after
                construction.
              </p>

              <div className="space-y-6">
                {features.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <item.icon className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image / Illustration */}
            <div className="w-full h-[400px] bg-slate-100 rounded-lg">
              <img
                src={
                  "/Transportation-mobility/pedestrian-flow-analysis/Pedestrian Flow Analysis.webp"
                }
                className="w-full h-full object-cover"
                alt={""}
              />
            </div>
          </div>

          {/* What We Analyze */}
          <div>
            <h3 className="text-4xl lg:text-5xl font-semibold text-gray-900 text-center mb-12">
              What <span className="text-blue-500">We Analyze</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analysis.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Applications Across All Stages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  {stage.icon}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {stage.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {stage.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Al Yusr for Pedestrian Simulation?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team combines human behavior modeling, engineering insights,
              and advanced simulation tools to deliver highly visual,
              data-backed insights. Whether for a transit hub, stadium,
              hospital, mall, or commercial tower, we help clients:
            </p>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  <span className="text-gray-800 font-medium">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div>
            <img
              src="/Transportation-mobility/pedestrian-flow-analysis/why-choose.webp"
              alt="Why Choose Al Yusr"
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container ">
          {/* Text Content */}
          <div className="">
            <h2 className="text-4xl lg:text-5xl text-center font-bold text-gray-900 mb-4">
              Deliverables You Can Expect
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {deliverables.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-lg mt-5"
                >
                  <span className="p-2 bg-blue-100 rounded-lg ">
                    {item.icon}
                  </span>
                  <span className="text-gray-800 font-medium">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Shaping Smarter, Safer Communities"
        desc="At Al Yusr, our Geo-Intelligence & Analysis services are more than just maps; they are powerful decision-making tools that help our clients create sustainable, secure, and future-ready environments."
        btn="Contact Us Today"
      />
    </main>
  );
}
