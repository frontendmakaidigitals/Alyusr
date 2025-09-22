"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  MonitorPlay,
  Building,
  DollarSign,
  Layers,
  Timer,
  ShieldCheck,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function Page() {
  const services = [
    {
      title: "Visualize Operations & Layouts",
      desc: "Bring your operations to life in 2D and 3D models for better clarity.",
      icon: <MonitorPlay className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Test Capital Improvement Strategies",
      desc: "Simulate various investment options to ensure better decisions.",
      icon: <Building className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Evaluate Cost-Benefit Scenarios",
      desc: "Understand financial trade-offs before committing resources.",
      icon: <DollarSign className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Optimize Resource Allocation",
      desc: "Boost facility throughput and maximize operational efficiency.",
      icon: <Layers className="w-10 h-10 text-orange-600" />,
    },
    {
      title: "Anticipate Congestion & Bottlenecks",
      desc: "Identify potential delays before they affect operations.",
      icon: <Timer className="w-10 h-10 text-red-600" />,
    },
    {
      title: "Improve Safety & Scheduling",
      desc: "Enhance worker safety and streamline shift planning.",
      icon: <ShieldCheck className="w-10 h-10 text-emerald-600" />,
    },
    {
      title: "Support Design & Engagement",
      desc: "Enable effective coordination with stakeholders and project teams.",
      icon: <Users className="w-10 h-10 text-purple-600" />,
    },
  ];
  const tools = [
    {
      name: "GMTS – General Marine Terminal Simulator",
      desc: "Simulates container terminal operations to compare physical layouts, operating modes, and equipment configurations. GMTS supports cost analysis, throughput assessment, and productivity benchmarking.",
      img: "/project-advisory/process-simulation/gms.webp",
    },
    {
      name: "BERTHA – Berth Capacity Analyzer",
      desc: "Analyzes variability in vessel arrivals, crane productivity, weather impacts, and maintenance shutdowns to determine terminal capacity. Tracks yard inventory in real-time and assists in estimating required handling equipment.",
      img: "/project-advisory/process-simulation/berth.webp",
    },
    {
      name: "RailOps – Rail Network Simulator",
      desc: "Simulates passenger and freight rail networks with detailed train, locomotive, and railcar modeling. Useful for analyzing train scheduling, terminal rules, and network scalability from digital layout plans.",
      img: "/project-advisory/process-simulation/rail-simulator.webp",
    },
    {
      name: "VNM – Vessel Network Model",
      desc: "Used for analyzing the capacity of harbors, ferry systems, or inland waterways. Accounts for dynamic conditions such as tides, vessel draft, fuel cost vs. speed, and environmental closures.",
      img: "/project-advisory/process-simulation/vessel.webp",
    },
    {
      name: "BulkSim – Bulk Terminal Simulator",
      desc: "Models solid or liquid bulk terminal operations with real-time 3D visualizations. Simulates storage, conveyance, berth access, and demand fluctuation with custom visuals to represent different commodities.",
      img: "/project-advisory/process-simulation/bulk-sim.webp",
    },
    {
      name: " VISSIM – Roadway & Terminal Access Simulation",
      desc: "Industry-leading software used to simulate terminal gates and surrounding road infrastructure. Ideal for visualizing traffic flow, access points, and integration with urban mobility networks. Offers immersive 3D graphics for stakeholder presentation and design evaluation.",
      img: "/project-advisory/process-simulation/roadway-sim.webp",
    },
  ];
  const sectors = [
    {
      title: "Seaport and Marine Terminal Planning",
      img: "/project-advisory/process-simulation/port.webp",
    },
    {
      title: "Rail and Intermodal Yard Optimization",
      img: "/project-advisory/process-simulation/railway.webp",
    },
    {
      title: "Bulk Material Handling Facilities",
      img: "/project-advisory/process-simulation/bulksim.webp",
    },
    {
      title: "Highway and Freight Corridor Analysis",
      img: "/project-advisory/process-simulation/highway-corridor.webp",
    },
    {
      title: "Urban Mobility & Smart Transportation Integration",
      img: "/project-advisory/process-simulation/smart-transportation.webp",
    },
    {
      title: "Operational Risk Modeling and Mitigation",
      img: "/project-advisory/process-simulation/risk.webp",
    },
  ];
  const points = [
    "In-house proprietary models tailored for regional infrastructure needs",
    "Expertise in transportation, logistics, marine, and rail simulations",
    "High-fidelity 3D visualizations for better decision-making",
    "Ability to test and refine designs before implementation",
    "Improved efficiency, cost savings, and risk reduction for clients",
    "Alignment with Vision 2030 for smarter infrastructure planning",
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Process Simulation Models
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/process-simulation/hero.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={"hero"}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr Engineering Consulting, we leverage advanced process
          simulation modeling to analyze, predict, and optimize the performance
          of complex infrastructure systems. These models are crucial tools in
          planning and decision-making, allowing us and our clients to test
          different operational scenarios, forecast performance, and visualize
          the impact of proposed improvements before a single move is made
          on-site.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          We offer both proprietary in-house simulation models and
          industry-standard commercial tools, enabling a comprehensive, flexible
          approach tailored to each client’s unique operational and spatial
          needs. Our models are used across sectors such as ports and marine
          terminals, intermodal and rail networks, bulk cargo handling, and
          transportation corridors, supporting smarter investment, improved
          efficiency, and reduced risk.
        </p>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Our Simulation Services at a Glance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            In-House Simulation Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{tool.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            <span className="text-blue-500">Application</span> Across Sectors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={sector.img}
                  alt={sector.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />
                <h3 className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg">
                  {sector.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Al Yusr for Simulation Modeling?
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <BadgeCheck className="w-6 h-6 text-white fill-green-500 shrink-0" />
                <p className="text-lg text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      );
      <EngineeringCTA
        title="Build with Confidence"
        desc="Whether you're developing a mega project or managing a complex infrastructure upgrade, Al Yusr’s cost management services help you stay on budget, reduce risk, and achieve lasting value."
        btn="Contact Us Today"
      />
    </main>
  );
}
