"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative bg-sky-100 py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold mb-4">In-House Capabilities</h1>
          <p className="text-lg text-gray-700">
            <strong className="text-sky-700">
              Expertise You Can Trust. Delivery You Can Count On.
            </strong>
            <br />
            At ALYUSR Engineering Consulting, we proudly deliver all major
            services in-house, ensuring tighter control over timelines,
            budgets, and quality at every stage of the project lifecycle.
            <br />
            Our multidisciplinary teams work side by side, sharing resources,
            tools, and knowledge under one roof to offer clients a seamless and
            efficient experience.
            <br />
            Whether it's feasibility studies, architectural design, engineering,
            or project supervision, we don’t outsource the core. We own it.
          </p>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-10">
            What Sets Our In-House Model Apart?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-8 text-base text-gray-700">
            {[
              {
                title: "No Third-Party Dependency",
                desc: "All critical services are executed by ALYUSR’s internal teams, reducing risk and ensuring quality control from start to finish.",
              },
              {
                title: "Integrated Collaboration",
                desc: "Architects, engineers, planners, and consultants work together in real-time, minimizing delays and communication gaps.",
              },
              {
                title: "End-to-End Delivery",
                desc: "We cover every phase of the project: design, documentation, permitting, supervision, and post-construction support, within our firm.",
              },
              {
                title: "Streamlined Project Management",
                desc: "Clients benefit from a single point of contact and clear accountability throughout the project lifecycle.",
              },
            ].map((item, index) => (
              <li key={index}>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="bg-sky-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            Core In-House Capabilities Include:
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 list-disc pl-5">
            {[
              "Urban & Regional Planning",
              "Architectural & Interior Design",
              "Structural, MEP, and Infrastructure Engineering",
              "Landscape & Public Realm Design",
              "Environmental and Sustainability Studies",
              "Project Management & Construction Supervision",
              "Permitting & Code Compliance",
              "Digital Engineering (BIM, Simulation, GIS)",
              "Cost and Risk Management Consulting",
            ].map((capability, index) => (
              <li key={index}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOOLS & CERTIFICATIONS */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            Tools & Certifications That Power Our Work
          </h2>
          <div className="text-base text-gray-700 space-y-4">
            <p>
              <strong>Software Platforms:</strong> AutoCAD, Revit, Civil 3D, GIS
            </p>
            <p>
              <strong>Survey & Design Equipment:</strong> Trimble, Topcon, Leica Total Stations
            </p>
            <p>
              <strong>Quality Standards:</strong> ISO 9001, ISO 14001, ISO 45001, ISO 21500, ISO 31000
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-sky-100 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            Why It Matters to Our Clients
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-base text-gray-700 list-disc pl-5">
            {[
              "Faster response times",
              "Better coordination and design accuracy",
              "Lower project risk and reduced cost overruns",
              "Higher accountability and transparency",
              "Quick, end-to-end service",
            ].map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Your Project. Our People. One Team.
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            With fully in-house capabilities, ALYUSR offers clients unmatched efficiency,
            precision, and project confidence. We're not just consultants, we’re your
            engineering partner from concept to completion.
          </p>
          <button className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 transition">
            Start a Project With Us
          </button>
        </div>
      </section>
    </div>
  );
}
