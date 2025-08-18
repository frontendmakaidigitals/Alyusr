"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import { Landmark, Building2, Hospital, Train, Factory, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";
import {
  Wrench,
  LineChart,
  Cpu,
  FlaskConical,
  RefreshCcw,
  Scale,
} from "lucide-react";

export default function Page() {
  const points = [
    "In-house process engineers, environmental experts, and project delivery teams",
    "End-to-end capabilities from concept to commissioning",
    "Strong focus on sustainability and regulatory alignment",
    "Advanced tools and modeling technologies",
    "Proven across industrial, energy, and environmental sectors",
  ];
  const capabilities = [
    { icon: Wrench, title: "Feasibility & Conceptual Studies" },
    { icon: LineChart, title: "Process Flow Design & Simulation" },
    { icon: Cpu, title: "Technology Evaluation & Selection" },
    { icon: FlaskConical, title: "Pilot & Demonstration Plant Design" },
    { icon: RefreshCcw, title: "Process Optimization & Retrofits" },
    { icon: Scale, title: "Regulatory Compliance Engineering" },
    { icon: Building2, title: "EPC Services" },
  ];
  const expertise = [
    {
      title: "Air Pollution Control",
      desc: "We design and implement systems for dust, gas, and particulate removal to meet environmental air quality standards.",
      img: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg", // smokestack/air pollution
    },
    {
      title: "Alternative Fuels & Clean Energy",
      desc: "Our engineers develop fuel conversion processes and support clients in transitioning to hydrogen, biomass, and other sustainable energy sources.",
      img: "https://images.pexels.com/photos/885350/pexels-photo-885350.jpeg", // clean energy
    },
    {
      title: "Carbon Capture & Sequestration (CCS)",
      desc: "We provide end-to-end solutions for CO₂ capture, storage, and integration into existing facilities, helping industries decarbonize responsibly.",
      img: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg", // carbon capture style
    },
    {
      title: "Long-Duration Energy Storage",
      desc: "We support energy resilience through advanced storage technologies that ensure grid stability and optimize renewable energy use.",
      img: "https://images.pexels.com/photos/159298/power-pole-dusk-sky-sunset-159298.jpeg", // energy storage
    },
    {
      title: "Water & Wastewater Treatment",
      desc: "From industrial reuse to zero liquid discharge, we create treatment systems that ensure water security and environmental protection.",
      img: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg", // water treatment
    },
    {
      title: "PFAS & Emerging Contaminant Removal",
      desc: "We offer tailored treatability studies and process design for challenging contaminants in air, soil, and water.",
      img: "https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg", // lab/contaminants
    },
    {
      title: "Solid Waste & Byproduct Management",
      desc: "We engineer solutions for waste minimization, recovery, and disposal that align with circular economy principles.",
      img: "https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg", // recycling waste
    },
  ];
  const services = [
    {
      title: "Process Hazard Analysis (PHA)",
      desc: "Risk assessment and safety systems design to ensure reliable and safe operations.",
      img: "https://images.pexels.com/photos/532500/pexels-photo-532500.jpeg", // safety/industry
    },
    {
      title: "Control Systems & Instrumentation",
      desc: "Fully integrated automation, monitoring, and SCADA systems for better performance and traceability.",
      img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg", // control systems
    },
    {
      title: "Brownfield Upgrades & Retrofits",
      desc: "Modernizing legacy systems with minimal disruption to improve efficiency and meet new regulations.",
      img: "https://images.pexels.com/photos/415945/pexels-photo-415945.jpeg", // upgrade/retrofit
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Process Development & Implementation
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
          At Al Yusr Engineering Consulting, we deliver advanced process
          solutions that combine the best of science, engineering, and
          sustainability. From concept to commissioning, we help industries,
          developers, and public entities optimize their operations, reduce
          environmental impact, and meet strict regulatory requirements. Whether
          addressing air pollution, energy storage, water treatment, or carbon
          capture, our process engineering services are tailored for long-term
          performance and compliance.
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
          <div className="h-full w-full">
            <img
              src="/images/our-approach.jpg" // 🔹 Replace with your actual image
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Smart Process Solutions from Start to Finish
            </h2>

            <p className="text-gray-700 mb-6">
              We apply engineering and scientific methods to identify, develop,
              and implement systems that solve real-world challenges,
              economically and sustainably. Our team includes process engineers,
              environmental specialists, chemists, and project managers who work
              collaboratively to turn complex industrial and infrastructure
              concepts into fully functional solutions.
              <br />
              From feasibility studies to turnkey delivery, we focus on creating
              systems that are innovative, compliant, and scalable. Our goal is
              to help clients transition to cleaner, more efficient, and
              future-ready operations.
            </p>
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Capabilities at a Glance
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our services span consulting, design, and implementation, supporting
            industrial, energy, infrastructure, and environmental sectors. With
            deep expertise in clean technology and a strong R&D focus, we help
            clients stay ahead of operational, environmental, and regulatory
            demands.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Areas of Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Specialized Engineering Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Al Yusr for Process Development?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <BadgeCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <p className="text-gray-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Build Better Processes Together"
        desc="Whether you’re launching a greenfield facility, upgrading an existing system, or facing environmental compliance challenges, Al Yusr Engineering Consulting is your reliable partner for intelligent process development and implementation."
        btn="Contact Us Today"
      />
    </main>
  );
}
