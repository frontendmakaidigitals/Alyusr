"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Landmark, Building2, Hospital, Train, Factory } from "lucide-react";

export default function Page() {
  const sections = [
    {
      title: "Capital Planning & Cost Modeling",
      items: [
        "Long-term investment strategy development",
        "Prioritization frameworks based on risk, value, and lifecycle cost",
        "Multi-year capital planning and budget forecasting",
        "Scenario modeling and impact analysis",
      ],
    },
    {
      title: "Portfolio Optimization",
      items: [
        "Strategic review of owned, leased, and surplus properties",
        "Space utilization and performance benchmarking",
        "Consolidation or divestment strategies",
        "Alignment with operational and organizational goals",
      ],
    },
    {
      title: "Sustainability & Resilience Advisory",
      items: [
        "Carbon footprint and energy performance evaluations",
        "Recommendations for green retrofitting and renewables",
        "Resilience planning for climate, seismic, or emergency risks",
        "Support for LEED, Estidama, and Vision 2030 compliance",
      ],
    },
    {
      title: "Smart Asset Management Systems",
      items: [
        "Digital asset registers and dashboards",
        "Integration of IoT sensors and predictive analytics",
        "Asset tagging, tracking, and real-time monitoring",
        "Data-driven decision-making tools and digital twins",
      ],
    },
  ];
  const supports = [
    {
      title: "Municipalities and Government Authorities",
      icon: Landmark,
    },
    {
      title: "Developers and Real Estate Owners",
      icon: Building2,
    },
    {
      title: "Healthcare and Educational Institutions",
      icon: Hospital,
    },
    {
      title: "Transportation and Infrastructure Operators",
      icon: Train,
    },
    {
      title: "Industrial and Energy Sector Clients",
      icon: Factory,
    },
  ];
  const points = [
    {
      title: "End-to-End Capability",
      desc: "From technical assessments to strategy and implementation, our integrated team covers every stage of asset advisory.",
      img: "/project-advisory/asset-advisory/end-to-end.webp",
    },
    {
      title: "ISO-Certified Excellence",
      desc: "Proven quality, safety, and data integrity across all services, supported by globally recognized certifications.",
      img: "/project-advisory/asset-advisory/iso-certified.webp",
    },
    {
      title: "Localized Insights, Global Standards",
      desc: "Deep expertise in regional regulations combined with alignment to Vision 2030 and international best practices.",
      img: "/project-advisory/asset-advisory/global-standard.webp",
    },
    {
      title: "Sustainability-Focused",
      desc: "Helping clients reduce environmental impact through green solutions, efficiency improvements, and future-ready strategies.",
      img: "/project-advisory/asset-advisory/Sustainability.webp",
    },
    {
      title: "Digital-First Approach",
      desc: "Empowering clients with intelligent dashboards, digital twins, and modern tools for smarter asset management.",
      img: "/project-advisory/asset-advisory/digital-first.webp",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Asset Advisory Services
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/asset-advisory/hero.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr Engineering Consulting, our Asset Advisory Services are
          designed to help clients make informed, future-ready decisions about
          their buildings, infrastructure, and real estate portfolios. From
          asset performance to lifecycle planning, we provide comprehensive
          insights that reduce risk, optimize value, and ensure long-term
          sustainability.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          Whether you&apos;re a government authority managing public assets, a
          developer looking to maximize ROI, or a city preparing for future
          demands, we turn data into direction and infrastructure into impact.
        </p>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Image */}
          <div className="h-[400px] w-full">
            <img
              src="/project-advisory/asset-advisory/role.webp" // 🔹 Replace with your actual image
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Role in the Asset Lifecycle
            </h2>

            <p className="text-gray-700 mb-6">
              We support clients across every stage of the asset management
              journey, from initial condition assessments to strategic capital
              planning and digital transformation. Our interdisciplinary teams
              offer deep technical expertise and advisory insight to help you
              answer key questions like real estate portfolio performance, the
              current deficiencies, or hidden risks, the total cost of ownership
              over the lifecycle, and which assets should be prioritized for
              upgrade or disposal, balancing sustainability and cost.
            </p>
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            Capital Planning & Cost Modeling
          </h2>
          <p className="text-center text-blue-700 max-w-2xl mx-auto mb-14">
            Building resilient, future-ready organizations through smart
            investment planning, portfolio optimization, sustainability, and
            digital asset management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-2xl border border-blue-100 hover:shadow-xl transition p-8"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-blue-700"
                    >
                      <span className="h-2 w-2 mt-2 rounded-full bg-blue-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Who We Support
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {supports.map((support, i) => (
              <div
                key={i}
                className="bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                <div className="p-4 rounded-full bg-blue-100 text-blue-700 mb-4">
                  <support.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium text-blue-800">
                  {support.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
            Why Choose Al Yusr for Asset Advisory?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center  bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="  w-full h-[230px] bg-white shadow-inner overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Future-Ready Assets"
        desc="Your assets are more than buildings; they are long-term investments, community anchors, and engines of productivity. Let Al Yusr Engineering Consulting help you unlock their full potential with intelligent advisory, strategic insight, and real-world action."
        btn="Contact Us Today"
      />
    </main>
  );
}
