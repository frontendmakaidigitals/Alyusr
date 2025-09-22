"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Building2,
  AlertTriangle,
  LineChart,
  Leaf,
  FileText,
  BadgeCheck,
} from "lucide-react";

export default function Page() {
  const capabilities = [
    {
      icon: Building2,
      title: "Engineering & Infrastructure Design",
      desc: "Creating resilient buildings, transportation, and energy systems.",
    },
    {
      icon: AlertTriangle,
      title: "Disaster Risk Assessment",
      desc: "Identifying and analyzing natural and man-made hazards.",
    },
    {
      icon: LineChart,
      title: "Climate Modeling & Analytics",
      desc: "Leveraging data-driven simulations to predict future risks.",
    },
    {
      icon: Leaf,
      title: "Sustainability Integration",
      desc: "Embedding eco-friendly and long-term resilience strategies.",
    },
    {
      icon: FileText,
      title: "Policy & Advisory Support",
      desc: "Guiding governments and organizations on adaptation policies and investments.",
    },
  ];
  const services = [
    {
      title: "Natural Disaster Preparedness Review",
      desc: "We assess the current readiness of organizations, cities, and communities to face natural disasters. Our reviews identify strengths, gaps, and opportunities to improve emergency response and recovery systems.",
      img: "/Environment-Sustainability/climate-adaptation/natural-disaster.webp",
    },
    {
      title: "Hazard Modeling",
      desc: "Using advanced data tools and simulations, we forecast the potential impact of climate hazards such as floods, storms, and droughts. This helps decision-makers plan effectively and reduce risks before they occur.",
      img: "/Environment-Sustainability/climate-adaptation/hazard.webp",
    },
    {
      title: "Vulnerability Assessment",
      desc: "We evaluate risks to critical assets, infrastructure, and communities by analyzing exposure and sensitivity to climate threats. The results guide tailored strategies to protect people and property.",
      img: "/Environment-Sustainability/climate-adaptation/Assessment.webp",
    },
    {
      title: "Hazard Mitigation Planning",
      desc: "Our experts design proactive strategies that minimize the impact of disasters. By reducing vulnerabilities in advance, we help safeguard investments and ensure faster recovery after events.",
      img: "/Environment-Sustainability/climate-adaptation/Hazard Mitigatio.webp",
    },
    {
      title: "Business Continuity Planning/Updates",
      desc: "We develop and update plans that ensure operations continue during and after disruptions. From emergency response to long-term recovery, our strategies help organizations remain resilient and agile.",
      img: "/Environment-Sustainability/climate-adaptation/Business plan.webp",
    },
    {
      title: "Climate Adaptation & Resilience Planning",
      desc: "We create long-term adaptation strategies for cities, regions, and organizations. These plans integrate sustainability, resilience, and climate projections to build stronger and more adaptive systems.",
      img: "/Environment-Sustainability/climate-adaptation/climate-adaption.webp",
    },
    {
      title: "Resilient Infrastructure Design/Build",
      desc: "Our engineers and planners design infrastructure capable of withstanding extreme weather and long-term climate changes. From resilient transport networks to flood-proof facilities, we build systems that protect communities and economies.",
      img: "/Environment-Sustainability/climate-adaptation/infrastructure Design.webp",
    },
  ];
  const benefits = [
    {
      title: "Reduced Risk",
      desc: "Minimize financial losses and protect critical assets.",
    },
    {
      title: "Sustainable Growth",
      desc: "Build climate-ready communities and organizations.",
    },
    {
      title: "Resilient Cities & Infrastructure",
      desc: "Design systems that withstand shocks.",
    },
    {
      title: "Cost Efficiency",
      desc: "Lower long-term costs through proactive adaptation.",
    },
    {
      title: "Global Expertise, Local Insight",
      desc: "Solutions tailored to regional needs, backed by global best practices.",
    },
  ];
  const reasons = [
    {
      title: "Proven Experience",
      desc: "Trusted partner for governments and businesses worldwide.",
    },
    {
      title: "Global Reach",
      desc: "Adaptation strategies designed for both developed and emerging markets.",
    },
    {
      title: "Cutting-Edge Tools",
      desc: "Advanced modeling, risk analysis, and resilience frameworks.",
    },
    {
      title: "Collaborative Mindset",
      desc: "We work hand-in-hand with clients, communities, and stakeholders.",
    },
    {
      title: "Future-Focused",
      desc: "Solutions built to adapt not just to today’s risks, but tomorrow’s uncertainties.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Climate Adaptation Services
            </h1>
            <p>
              Climate change is one of the most urgent challenges of our time,
              demanding immediate and long-term solutions. Increasingly severe
              events like floods, wildfires, droughts, and superstorms threaten
              lives, communities, and economies, costing over $250 billion
              annually in global damages.
              <br /> <br /> At Al Yusr, we provide end-to-end climate adaptation
              solutions that identify vulnerabilities, build resilience, and
              prepare communities and businesses to thrive in a changing
              environment. Our services combine engineering expertise,
              environmental science, and strategic planning to deliver adaptive
              and sustainable solutions that protect both people and assets.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/climate-adaptation/climate-adaptions.webp"
              }
              className="w-fulll h-full object-cover"
              alt={"climate adaptation hero"}
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center">
            Our Capabilities
          </h2>
          <p className="mt-4 text-slate-600 text-center max-w-3xl mx-auto">
            We bring a multidisciplinary skillset to climate adaptation,
            ensuring solutions are practical, scalable, and future-ready.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <cap.icon className="w-10 h-10 text-green-600 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center">
            Climate Adaptation Services
          </h2>
          <p className="mt-4 text-slate-600 text-center max-w-3xl mx-auto">
            Practical, data-driven, and future-ready solutions to build
            resilience against climate risks.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[230px] lg:h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-slate-900">
            Benefits of Partnering with Al Yusr
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Why Choose Al Yusr?
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <BadgeCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Adapt today for a safer tomorrow."
        desc=" Partner with Al Yusr to protect your assets, people, and communities from the impacts of climate change. Let’s design resilience together."
        btn="Contact Us Today"
      />
    </main>
  );
}
