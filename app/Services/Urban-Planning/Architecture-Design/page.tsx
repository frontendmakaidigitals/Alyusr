"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import { BadgeCheck } from "lucide-react";
import {
  Landmark,
  Building2,
  GraduationCap,
  HeartPulse,
  TrainFront,
  Palette,
  ShoppingBag,
  Factory,
  Server,
} from "lucide-react";

export default function Page() {
  const capabilities = [
    "Architectural Concept & Visioning",
    "Site & Contextual Analysis",
    "Schematic Design & Design Development",
    "Detailed Drawings & Specifications",
    "Code & Regulatory Compliance",
    "BIM-Based Modeling & Coordination",
    "Sustainability & LEED/Estidama Design Integration",
    "Façade Optimization & Passive Design Strategies",
    "Interior Architecture & Space Planning",
    "Construction Documentation & Supervision",
    "Heritage & Adaptive Reuse Design",
  ];
  const sectors = [
    {
      label: "Civic & Government",
      icon: <Landmark className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Commercial & Residential",
      icon: <Building2 className="w-6 h-6 text-green-600" />,
    },
    {
      label: "Education & Research",
      icon: <GraduationCap className="w-6 h-6 text-yellow-600" />,
    },
    {
      label: "Healthcare & Wellness",
      icon: <HeartPulse className="w-6 h-6 text-red-600" />,
    },
    {
      label: "Transportation & Infrastructure",
      icon: <TrainFront className="w-6 h-6 text-indigo-600" />,
    },
    {
      label: "Sports & Cultural Venues",
      icon: <Palette className="w-6 h-6 text-purple-600" />,
    },
    {
      label: "Retail & Hospitality",
      icon: <ShoppingBag className="w-6 h-6 text-pink-600" />,
    },
    {
      label: "Industrial & Logistics",
      icon: <Factory className="w-6 h-6 text-orange-600" />,
    },
    {
      label: "Tech & Data Centers",
      icon: <Server className="w-6 h-6 text-cyan-600" />,
    },
  ];
  const excellenceSections = [
    {
      title: "Focused on Design Excellence",
      image: "/images/design-excellence.jpg", // Replace with actual path
      description:
        "Our architects are problem solvers and storytellers. We design spaces that elevate quality of life, strengthen community identity, and support long-term operational success. Whether it’s a civic building, mixed-use development, residential tower, or educational campus, we approach every project with a commitment to design excellence.",
      bullets: [
        "Human behavior and cognitive performance",
        "Environmental performance and low-carbon strategies",
        "Wellness, daylighting, and thermal comfort",
        "Cultural sensitivity and local context",
        "Constructability and real-world building technologies",
      ],
    },
    {
      title: "Sustainable and Resilient by Design",
      image: "/images/sustainable-design.jpg",
      description:
        "In line with Vision 2030 and global environmental goals, Al Yusr’s architecture services are focused on minimizing environmental impact and maximizing building resilience. We design for:",
      bullets: [
        "Reduced embodied and operational carbon",
        "Energy efficiency and passive strategies",
        "Climate adaptability and resilience",
        "Water reuse and material efficiency",
        "Healthy, biophilic, and inclusive environments",
      ],
    },
    {
      title: "Digitally Driven Architecture",
      image: "/images/digital-architecture.jpg",
      description:
        "Our architects work with industry-leading Building Information Modeling (BIM) platforms, integrated with performance modeling tools that support carbon analysis, daylight simulations, facade design, and construction sequencing. This allows us to deliver high-performance buildings with optimized resources and reduced rework.",
      bullets: [
        "Streamlined design and delivery",
        "Integrated digital coordination",
        "Optimized resource usage",
        "Carbon and daylight performance modeling",
        "Precision across every project stage",
      ],
    },
  ];

  const points = [
    "In-house architects with regional insight and global perspective",
    "Class A licensed firm with multidisciplinary coordination",
    "Sustainability-first approach aligned with Vision 2030",
    "Digital design integration using BIM and advanced tools",
    "Recognized experience in delivering public and private sector landmarks",
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Architecture
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

      <section className="py-20 bg-sky-50">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div>
            {" "}
            <h1 className="text-5xl font-[600] text-sky-800">
              Design with Purpose
            </h1>
            <p className="mt-4">
              We believe architecture must respond to both its physical
              environment and its social purpose. That’s why our design process
              is rooted in collaboration, cultural awareness, and environmental
              responsibility. We listen closely to our clients and the
              communities they serve, balancing innovation with practicality to
              deliver designs that inspire, function, and last.
            </p>
            <p className="mt-2">
              From concept to construction, we lead projects with a clear design
              vision, blending aesthetics with performance. Our architecture
              team works side by side with engineers, planners, sustainability
              experts, and digital modelers to ensure every project is cohesive,
              efficient, and ready for the challenges of tomorrow.
            </p>
          </div>
          <div className="w-full h-[400px] bg-red-400">
            <img />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 ">
        <div className="container py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Capabilities at a Glance
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              With a multidisciplinary in-house team and access to global best
              practices, Al Yusr provides architectural design services that
              integrate form, function, and future-readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-sky-50 rounded-xl shadow-sm p-5 border border-sky-200 "
              >
                <BadgeCheck className="w-6 h-6 text-green-600 mt-1" />
                <span className="text-gray-800 text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          {excellenceSections.map((section, idx) => (
            <div
              key={section.title}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {section.title}
                </h3>
                <p className="text-lg text-gray-700">{section.description}</p>
                <ul className="space-y-3">
                  {section.bullets.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <BadgeCheck className="w-5 h-5 text-blue-600 mt-1" />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Where We Work
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Our architectural portfolio spans a wide range of sectors,
            including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div>{sector.icon}</div>
                <span className="text-gray-700 font-medium">
                  {sector.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-600 max-w-3xl">
            From iconic buildings to quiet community spaces, we bring the same
            level of care and excellence to every project we undertake.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-blue-600">Al Yusr</span> for
            Architecture?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 text-left">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <span>
                  <BadgeCheck className="w-6 h-6 text-green-600 mt-1" />
                </span>
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Design the Future, Together"
        desc="If you’re looking for architecture that performs as beautifully as it looks, Al Yusr Engineering Consulting is your partner in delivering spaces that are visionary, responsible, and truly transformative."
        btn="Contact Us Today"
      />
    </main>
  );
}
