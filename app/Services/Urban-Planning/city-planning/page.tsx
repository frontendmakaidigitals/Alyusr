"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import {
  Building2,
  Star,
  Wrench,
  Globe2,
  Handshake,
  BadgeCheck,
} from "lucide-react";

import { Map, Leaf, Network, TreePine } from "lucide-react";
export default function ConstructionManagementPage() {
  const planningData = [
    {
      title: "Master Planning & Urban Design",
      desc: "Strategic frameworks for urban growth, integrating function, livability, and aesthetics.",
      image: "/images/master-planning.jpg",
      icon: Map,
      points: [
        "Mixed-use & residential master plans",
        "Industrial and logistics zones",
        "Transit-oriented development (TOD)",
        "Smart & sustainable community planning",
      ],
    },
    {
      title: "Sustainability & Climate Resilience",
      desc: "Resilient strategies that future-proof cities through eco-conscious infrastructure.",
      image: "/images/sustainability.jpg",
      icon: Leaf,
      points: [
        "Carbon-neutral strategies",
        "Green infrastructure & energy efficiency",
        "Urban heat mitigation",
        "Climate risk & adaptation planning",
      ],
    },
    {
      title: "Urban Analytics & Smart City Solutions",
      desc: "Data-driven planning tools that shape responsive and intelligent urban systems.",
      image: "/images/smart-city.jpg",
      icon: Network,
      points: [
        "GIS & geospatial mapping",
        "Mobility flow analysis",
        "Population & land use projections",
        "Smart city framework development",
      ],
    },
    {
      title: "Green Urbanism & Nature Integration",
      desc: "Harmonizing nature and urban life for healthier, more vibrant communities.",
      image: "/images/green-urbanism.jpg",
      icon: TreePine,
      points: [
        "Urban green corridors",
        "Biodiversity conservation zones",
        "Eco-sensitive zoning",
        "Landscape-driven planning",
      ],
    },
  ];

  const services = [
    {
      title: "Environmental Impact Assessments",
      image: "/images/environmental-impact.jpg",
    },
    {
      title: "Economic Development Strategies",
      image: "/images/economic-strategy.jpg",
    },
    {
      title: "Concept Architecture & Place Branding",
      image: "/images/place-branding.jpg",
    },
    {
      title: "Geospatial Intelligence & Mapping",
      image: "/images/geospatial.jpg",
    },
  ];

  const points = [
    {
      title: "In-House Experts",
      desc: "Specialists across planning, engineering, sustainability, and urban design – working collaboratively under one roof.",
      icon: Building2,
    },
    {
      title: "National-Level Project Experience",
      desc: "Delivery of landmark projects aligned with Vision 2030 priorities, from concept to execution.",
      icon: Star,
    },
    {
      title: "Integrated Technology Tools",
      desc: "Advanced use of BIM, GIS analytics, and digital modeling to support real-time decision-making.",
      icon: Wrench,
    },
    {
      title: "Sustainable Urban Futures",
      desc: "Designs and plans that prioritize measurable environmental, economic, and social impact.",
      icon: Globe2,
    },
    {
      title: "Cross-Sector Collaboration",
      desc: "Strong partnerships with government and private entities for unified planning outcomes.",
      icon: Handshake,
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          City Planning Services
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
          As cities across the world face the pressures of rapid population
          growth, climate change, and shifting economies, strategic city
          planning has never been more important. At Al Yusr, we bring together
          experts in urban design, infrastructure, environment, and economics to
          shape cities that are smart, inclusive, and sustainable.
        </p>{" "}
        <p className="mt-2 text-lg text-center">
          From concept to implementation, our city planning solutions are
          designed to create balanced, people-focused environments that improve
          quality of life, drive long-term economic growth, and protect natural
          resources. Whether it’s a new city district, a mixed-use development,
          or revitalizing an existing area, we provide clients with practical,
          future-ready urban strategies aligned with Vision 2030 and global
          sustainability goals.
        </p>
      </section>
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="container mb-16 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Urban <span className="text-blue-500">Planning</span> &{" "}
            <span className="text-green-500">Sustainable</span> Design
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive services that balance functionality, growth, and
            environmental responsibility.
          </p>
        </div>

        <div className="grid container grid-cols-1 lg:grid-cols-3 gap-10">
          {planningData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-lg  overflow-hidden">
                {/* Top image */}
                <div className="relative h-[300px] bg-slate-100 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full absolute bottom-0 translate-y-1/2 left-6">
                    <Icon className="text-blue-600 w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 mt-3 space-y-4">
                  <h3 className="text-xl font-semibold text-sky-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <ul className=" text-gray-700 space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="">
                          <BadgeCheck className="text-white fill-green-500" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="container text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-500">Supporting</span> Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 container">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative bg-slate-100 w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="container text-center mb-16">
          <h2 className="text-5xl  font-bold text-gray-900 mb-4">
            What <span className="text-blue-500">Sets Us</span> Apart?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering more than plans — we build purpose-driven, resilient
            cities with impact-focused partnerships and integrated expertise.
          </p>
        </div>

        <div className="grid container grid-cols-1 lg:grid-cols-4 gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 text-left flex flex-col gap-4"
              >
                <div className="bg-blue-100 p-3 w-fit rounded-md">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <EngineeringCTA
        title="Ready to Plan the Cities of the Future?"
        desc="Contact Al Yusr today to learn how we can help you plan, design, and deliver your next urban development or regeneration project. Together, we can build smarter, more resilient cities for generations to come."
        btn="Contact Us Today"
      />
    </main>
  );
}
