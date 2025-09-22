"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { useState } from "react";
import { Building2, Network, Award, Lightbulb, Layers } from "lucide-react";

import { motion } from "motion/react";
export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sections = [
    {
      title: "1. Strategic & Program Advisory",
      points: [
        "Market analysis and feasibility studies",
        "Socio-political and legislative insight for complex approvals",
        "Guidance on procurement strategies and delivery models",
      ],
    },
    {
      title: "2. Financial & Commercial Structuring",
      points: [
        "Project financing strategy and investor engagement",
        "Traffic and revenue forecasting for transportation projects",
        "Cost modeling, risk allocation, and financial close assistance",
      ],
    },
    {
      title: "3. Technical Advisory",
      points: [
        "Engineering feasibility and design optimization",
        "Life-cycle cost assessment and value-for-money analysis",
        "Sustainable, future-proof design integration",
      ],
    },
    {
      title: "4. Procurement & Bid Support",
      points: [
        "Preparation of tender documentation",
        "Evaluation of bids and technical compliance checks",
        "Support during negotiations and contract award",
      ],
    },
    {
      title: "5. Operational Support",
      points: [
        "Asset performance monitoring",
        "Contract compliance reviews",
        "Refinancing and lifecycle extension planning",
      ],
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Public-Private{" "}
              <span className="text-blue-500">Partnerships (P3)</span>
            </h1>
            <p>
              As infrastructure funding gaps grow across the globe,
              Public-Private Partnerships (P3) have become an essential
              solution, bridging the gap between the vision of public sector
              agencies and the resources of private sector investors. These
              partnerships combine public oversight with private sector
              innovation, efficiency, and capital to deliver world-class
              infrastructure that communities need.
              <br /> <br />
              At Al Yusr Engineering Consulting, we help governments,
              concessionaires, developers, and investors structure and execute
              P3 projects that deliver exceptional value, minimize risk, and
              maximize long-term benefits.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/public-private/hero.webp"}
              className="object-cover w-full h-full "
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-full h-[450px] bg-slate-100">
            <img
              src="/Transportation-mobility/public-private/exp.webp" // replace with your image path
              alt="Our Experience"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="text-blue-500">Experience</span>
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Our expertise spans transportation, energy, buildings, water, and
              urban infrastructure. Leveraging decades of global and regional
              experience, we offer technical, economic, financial, and
              contractual advisory services to support every stage of a P3, from
              initial feasibility to operational delivery.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                Structuring financially viable deals that attract investment
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                Accelerating project delivery schedules
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                Designing innovative engineering solutions that optimize
                lifecycle costs
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                Helping public agencies achieve infrastructure goals without
                overstretching budgets
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What We Do
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Strategic & Program Advisory */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. Strategic & Program Advisory
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Market analysis and feasibility studies</li>
                <li>
                  Socio-political and legislative insight for complex approvals
                </li>
                <li>Guidance on procurement strategies and delivery models</li>
              </ul>
            </div>

            {/* Financial & Commercial Structuring */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2. Financial & Commercial Structuring
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Project financing strategy and investor engagement</li>
                <li>
                  Traffic and revenue forecasting for transportation projects
                </li>
                <li>
                  Cost modeling, risk allocation, and financial close assistance
                </li>
              </ul>
            </div>

            {/* Technical Advisory */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. Technical Advisory
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Engineering feasibility and design optimization</li>
                <li>Life-cycle cost assessment and value-for-money analysis</li>
                <li>Sustainable, future-proof design integration</li>
              </ul>
            </div>

            {/* Procurement & Bid Support */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                4. Procurement & Bid Support
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Preparation of tender documentation</li>
                <li>Evaluation of bids and technical compliance checks</li>
                <li>Support during negotiations and contract award</li>
              </ul>
            </div>

            {/* Operational Support */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5. Operational Support
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Asset performance monitoring</li>
                <li>Contract compliance reviews</li>
                <li>Refinancing and lifecycle extension planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Why Choose Al Yusr for P3 Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Multi-Sector Expertise */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Multi-Sector Expertise
                </h3>
                <p className="text-gray-700">
                  Experience in transportation, buildings, utilities, energy,
                  and more
                </p>
              </div>
            </div>

            {/* Integrated Advisory */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-2xl">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Integrated Advisory
                </h3>
                <p className="text-gray-700">
                  We combine engineering, financial, and policy expertise in one
                  team
                </p>
              </div>
            </div>

            {/* Strong Industry Relationships */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 rounded-2xl">
                <Network className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Strong Industry Relationships
                </h3>
                <p className="text-gray-700">
                  Network of investors, developers, and government agencies
                </p>
              </div>
            </div>

            {/* Proven Track Record */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-yellow-100 rounded-2xl">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Proven Regional & Global Track Record
                </h3>
                <p className="text-gray-700">
                  Involvement in award-winning P3 projects
                </p>
              </div>
            </div>

            {/* Innovation with Accountability */}
            <div className="flex items-start space-x-4 md:col-span-2">
              <div className="p-3 bg-red-100 rounded-2xl">
                <Lightbulb className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Innovation with Accountability
                </h3>
                <p className="text-gray-700">
                  Solutions that balance creativity, compliance, and community
                  needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Delivering Value Through Collaboration"
        desc="A successful P3 is more than a contract; it’s a long-term relationship built on trust, shared goals, and clear accountability. At Al Yusr, we act as a bridge between public vision and private capability, ensuring every partnership results in infrastructure that is financially viable, socially impactful, and built to last."
        btn="Contact Us Today"
      />
    </main>
  );
}
