"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";

import { motion } from "motion/react";
import {
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Users,
  Lightbulb,
  Landmark,
} from "lucide-react";
export default function Page() {
  const services = [
    {
      title: "Climate Action Planning",
      description:
        "We support clients in creating climate action and adaptation plans tailored to their unique environmental, economic, and social contexts. Our plans incorporate emissions reduction pathways, adaptation measures, and financing strategies to ensure sustainable and achievable implementation.",
      image:
        "/Environment-Sustainability/climate-response/climate-action-plan.webp", // replace with license-free image
    },
    {
      title: "Climate Risk & Vulnerability Assessments",
      description:
        "Our team conducts risk assessments that evaluate vulnerabilities across infrastructure, communities, and ecosystems. These assessments guide decision-makers in prioritizing investments and strengthening resilience to floods, heatwaves, droughts, and severe weather events.",
      image: "/Environment-Sustainability/climate-response/climate-risk.webp",
    },
    {
      title: "Climate Finance & Policy Advisory",
      description:
        "We help clients access climate finance mechanisms and align projects with international standards such as the Paris Agreement, UN SDGs, and Green Climate Fund requirements. Our advisory ensures climate initiatives attract the political support and funding they need.",
      image:
        "/Environment-Sustainability/climate-response/Climate Finance.webp",
    },
    {
      title: "Resilient Infrastructure & Design",
      description:
        "From coastal protection systems to flood-resilient urban planning, we integrate climate considerations into infrastructure design and development. Our goal is to create assets that can withstand future climate shocks while remaining cost-effective and sustainable.",
      image:
        "/Environment-Sustainability/climate-response/Resilient Infrastructure.webp",
    },
    {
      title: "Knowledge Sharing & Global Collaboration",
      description:
        "Leveraging our global climate response platform, we connect experts across geographies to share emerging science, innovative tools, and best practices. This ensures that our clients benefit from the latest international experience and lessons learned.",
      image:
        "/Environment-Sustainability/climate-response/Knowledge Sharing.webp",
    },
  ];
  const benefits = [
    "Reduced risks from extreme weather events and climate-driven disruptions.",
    "Increased access to international climate finance and funding mechanisms.",
    "Strengthened community trust through transparent, inclusive engagement.",
    "Sustainable infrastructure investments with long-term cost savings.",
    "Future-proof strategies aligned with global climate commitments.",
  ];
  const reasons = [
    {
      icon: Globe2,
      title: "Global Expertise, Local Impact",
      desc: "We bring international climate science and adapt it to local contexts.",
    },
    {
      icon: ShieldCheck,
      title: "Proven Resilience Strategies",
      desc: "Trusted by governments and private sectors across critical projects.",
    },
    {
      icon: Users,
      title: "Interdisciplinary Teams",
      desc: "Experts in engineering, planning, policy, and environmental science working together.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      desc: "Leveraging cutting-edge tools, modeling, and frameworks to solve complex climate challenges.",
    },
    {
      icon: Landmark,
      title: "Financing & Policy Support",
      desc: "Helping projects secure climate finance and align with global standards.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Climate Response Services
            </h1>
            <p>
              Climate change is one of the defining challenges of our time, with
              impacts already being felt through rising temperatures, extreme
              weather, sea-level rise, and shifting ecosystems. While the
              challenge is long-term, the need for immediate action is urgent.
              At Al Yusr, we help governments, organizations, and communities
              define climate challenges clearly, design effective strategies,
              and implement sustainable solutions that not only protect people
              and assets but also secure long-term resilience.
              <br /> <br /> Our approach combines science, engineering, policy,
              and stakeholder engagement to ensure climate initiatives gain
              public trust, political support, and financing. By bringing
              together global expertise and local insights, we deliver climate
              solutions that are practical, future-ready, and measurable.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Environment-Sustainability/climate-response/climate.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl text-center">
            Our Climate Response Services
          </h2>

          <div className="mt-12 space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 items-center gap-8 rounded-2xl bg-white p-6 shadow-sm border border-slate-200 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container ">
          <h2 className="text-4xl lg:text-5xl text-center max-w-3xl mx-auto font-bold tracking-tight text-slate-900">
            Key Benefits of Our Climate Response Services
          </h2>
          <div className="mt-10 max-w-5xl mx-auto">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {benefits.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 bg-blue-50 rounded-lg p-3"
                >
                  <BadgeCheck className="h-6 w-6 shrink-0 text-white fill-green-500 mt-0.5" />
                  <span className="text-lg leading-7 text-slate-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Al Yusr for Climate Response?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
              >
                <reason.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Build Climate Resilience Together"
        desc="Climate change demands immediate action and long-term vision. Partner with Al Yusr to develop practical, science-based, and sustainable solutions that protect your assets, your community, and the generations to come."
        btn="Contact Us Today"
      />
    </main>
  );
}
