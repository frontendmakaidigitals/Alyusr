"use client";

import EngineeringCTA from "@/app/app_chunks/CTA";
import { MountainSnow, Landmark, Waves, BadgeCheck } from "lucide-react";
import Image from "next/image";

const specializedExpertise = [
  {
    title: "Ground Engineering",
    desc: "We conduct soil investigation, geotechnical assessments, and foundation design to ensure stability and suitability for complex sites.",
    icon: MountainSnow,
  },
  {
    title: "Facade Engineering",
    desc: "We offer smart building envelope design that balances aesthetics, thermal performance, and environmental standards like LEED and Estidama.",
    icon: Landmark,
  },
  {
    title: "Coastal & Marine Engineering",
    desc: "Our services include shoreline protection, flood risk analysis, and infrastructure for marinas, ports, and coastal cities.",
    icon: Waves,
  },
];

const reasonsToChoose = [
  "In-house multidisciplinary teams, no third-party outsourcing",
  "Class A certified and ISO-compliant engineering processes",
  "Trusted by leading developers, ministries, and city authorities",
  "Proven across diverse sectors and project scales",
  "Future-ready technology with BIM, GIS & digital engineering tools",
];

const services = [
  {
    title: "Structural Engineering",
    desc: "We deliver safe, resilient, cost‑efficient structures through detailed analysis and innovative design. From high‑rise buildings to bridges and industrial facilities, our solutions prioritize structural integrity and long‑term performance.",
    pexelsUrl: "/engineering/structure.jpg",
  },
  {
    title: "MEP (Mechanical, Electrical & Plumbing) Engineering",
    desc: "Our team designs integrated MEP systems that ensure energy efficiency, safety, and smooth operations. We handle complex HVAC, lighting, fire safety, water systems, and more, fully coordinated across design disciplines.",
    pexelsUrl: "/engineering/electrical.jpg",
  },
  {
    title: "Building Information Modeling (BIM)",
    desc: "Using platforms like Revit and Navisworks, we offer BIM modeling, clash detection, quantity take‑offs, and 5D simulation. This enables enhanced collaboration, reduced design conflicts, and smarter construction sequencing.",
    pexelsUrl: "/engineering/blueprint.jpg",
  },
  {
    title: "Infrastructure & Roads Engineering",
    desc: "We provide design and consultancy for roads, highways, drainage, water supply, utilities, and public infrastructure systems. Our civil engineers ensure regulatory compliance and future‑ready design.",
    pexelsUrl: "/engineering/roads.jpg",
  },
  {
    title: "Telecom & Low‑Current Systems",
    desc: "From ICT systems to fire alarms, access control, CCTV, and structured cabling, we deliver end‑to‑end low‑voltage engineering systems that power modern developments.",
    pexelsUrl: "/engineering/telecom.jpg",
  },
];

export default function ConstructionManagementPage() {
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Engineering Services
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/engineering/banner.jpg"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={500}
          height={200}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr Engineering Consulting, we offer a variety of engineering
          services that support every phase of your project, from early-stage
          planning to post-construction support. With deep-rooted expertise and
          a multidisciplinary team, we help planners, architects, and project
          managers deliver infrastructure that performs, lasts, and leads.
        </p>{" "}
        <p className="mt-3 text-center text-lg">
          At Al Yusr Engineering Consulting, we offer a full spectrum of
          engineering services designed to bring complex ideas to life with
          accuracy, innovation, and reliability. From structural design and MEP
          systems to infrastructure development and BIM-led coordination, our
          work supports some of the most ambitious developments across the
          region.
        </p>
      </section>
      {/* Features */}
      <section className="my-20">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-5xl font-semibold">
              Our <span className="text-blue-500">Capabilities</span> at a
              Glance
            </h1>
            <p className="mt-3">
              We provide specialized engineering solutions for commercial,
              residential, mixed-use, industrial, hospitality, and
              government-led projects. Our Class A license and ISO
              certifications reinforce our commitment to quality, safety, and
              excellence.
              <br /> With decades of experience and a highly skilled in-house
              team, we work alongside architects, planners, and project managers
              to deliver efficient, future-ready solutions. Our engineers
              combine technical expertise with a deep understanding of local
              regulations, sustainability goals, and construction best practices
              to ensure every project is built to last.
              <br /> Whether it’s designing resilient buildings, smart
              infrastructure, or high-performance systems, we are committed to
              delivering engineering excellence at every stage of the project
              life cycle. With ISO-certified methodologies and a track record of
              delivering on time and within budget, Al Yusr stands as a trusted
              partner for public and private sector developments across the GCC
              and beyond.
            </p>
          </div>
          <div className="h-[500px] w-full ">
            <img
              src={"/engineering/pexels-thisisengineering-3913031.jpg"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Our <span className="text-blue-500">Core Services</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              At Al Yusr Engineering Consulting, we deliver a multidisciplinary
              range of services to shape high-performance, future-ready
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300"
              >
                <div className="h-[260px] w-full relative">
                  <Image
                    src={service.pexelsUrl}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Specialized <span className="text-blue-500">Expertise</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our focused engineering disciplines ensure technical depth in
              delivering resilient, innovative, and sustainable infrastructure
              solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedExpertise.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <item.icon className="text-blue-500 w-8 h-8 shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[500px] w-full ">
            <img
              src={"/engineering/project-delivery.jpg"}
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-5xl font-semibold">
              Integrated, BIM-Led{" "}
              <span className="text-blue-500">Project Delivery</span>
            </h1>
            <p className="mt-3">
              Our engineering approach is fully BIM-integrated and coordinated
              across all disciplines, enabling us to deliver multidisciplinary
              engineering packages that reduce errors, improve timelines, and
              optimize resources.
              <br />
              <br />
              At Al Yusr Engineering Consulting, we believe that true
              engineering excellence goes beyond technical design; it’s about
              coordination, precision execution, and future-ready solutions.
              That’s why we integrate Building Information Modeling (BIM) across
              all stages of our engineering projects. BIM is more than just 3D
              modeling; it’s a digital ecosystem that brings together
              architects, engineers, consultants, and contractors on a single,
              intelligent platform.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Why Choose <span className="text-blue-500">Al Yusr</span> for
              Engineering Services?
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our approach is built on precision, credibility, and
              results—making us the preferred choice across the region.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reasonsToChoose.map((reason, i) => (
              <li
                key={i}
                className="flex items-start bg-blue-50 rounded-lg p-4 shadow-sm"
              >
                <BadgeCheck className="text-blue-600 mt-1 mr-3 w-5 h-5 shrink-0" />
                <span className="text-gray-800 text-sm">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EngineeringCTA
        title="Need Engineering Experts? Let’s Talk."
        desc={
          "Whether it’s a high-rise tower, an infrastructure masterplan, or a complex facility, Al Yusr Engineering Consulting is your trusted partner for dependable engineering solutions."
        }
        btn="Contact Us"
      />
    </main>
  );
}
