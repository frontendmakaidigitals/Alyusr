"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Globe2, Scale, Share2, Layers, Cpu, BadgeCheck } from "lucide-react";

import { motion } from "motion/react";

export default function Page() {
  const differentiators = [
    {
      title: "Global Expertise, Local Impact",
      desc: "With more than 400 professionals across four continents, our air quality team is one of the largest and most experienced in the world. We provide tailored solutions that reflect both international best practices and local regulatory requirements.",
      icon: Globe2,
    },
    {
      title: "Technology-Neutral Solutions",
      desc: "As an independent consultancy, we provide objective, science-driven strategies without bias toward specific technologies or equipment. This ensures our clients receive solutions that are cost-effective, sustainable, and technically sound.",
      icon: Scale,
    },
    {
      title: "Knowledge Sharing & Best Practices",
      desc: "We actively contribute to trade associations, research institutions, and regulatory bodies, helping shape policies while staying at the forefront of industry developments. Our teams share best practices globally through technical networks and specialized leadership groups.",
      icon: Share2,
    },
    {
      title: "End-to-End Project Support",
      desc: "From permitting strategy during the design phase to ongoing compliance and emissions management, we provide full life-cycle support. This guarantees continuity, efficiency, and measurable impact throughout project operations.",
      icon: Layers,
    },
    {
      title: "Advanced Tools & Partnerships",
      desc: "Through collaborations with leading technology firms, we deliver cutting-edge compliance solutions, including air dispersion modeling, emissions control, and real-time monitoring platforms.",
      icon: Cpu,
    },
  ];

  const services = [
    {
      title: "Air Permitting & Compliance Strategy",
      desc: "We help clients navigate complex permitting processes with clarity, ensuring full compliance with regulatory requirements while minimizing costs and delays.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/air-permitting.webp",
    },
    {
      title: "Air Pollution Control Engineering",
      desc: "Our engineers design and implement cutting-edge emissions reduction systems, tailored to meet the unique needs of each industry sector.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Air-Pollution-Control.webp",
    },
    {
      title: "Ambient Monitoring & Source Testing",
      desc: "Through on-site monitoring and source testing, we measure air quality, identify pollution sources, and verify compliance with environmental standards.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Ambient Monitoring.webp",
    },
    {
      title: "Atmospheric Dispersion, Accidental Release & CFD Modeling",
      desc: "Using advanced simulation tools, we predict how pollutants disperse in different conditions, helping clients prepare for and mitigate potential risks.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Atmospheric-Dispersion.webp",
    },
    {
      title: "Carbon Management & Sustainability Advisory",
      desc: "We create practical carbon reduction strategies that align with international climate targets, enabling clients to meet sustainability commitments.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Carbon Management.webp",
    },
    {
      title: "Construction Impact Assessments",
      desc: "Our specialists evaluate air quality impacts during construction activities and provide solutions to mitigate dust, emissions, and other risks.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/construction.webp",
    },
    {
      title: "Emission Inventories & Mobile Source Studies",
      desc: "By tracking emissions from stationary facilities and mobile fleets, we provide the data needed for effective regulatory compliance and planning.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Emission Inventories.webp",
    },
    {
      title: "Health Risk Assessments",
      desc: "We assess the health impacts of air pollution on workers and surrounding communities, offering strategies to safeguard well-being and safety.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Health Risk.webp",
    },
    {
      title: "Indoor Air Quality & Occupational Safety Management",
      desc: "Our team ensures healthy indoor environments by monitoring air quality and managing workplace safety standards across industries.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Indoor Air Quality.webp",
    },
    {
      title: "Odor & Noise Modeling, Monitoring, and Control",
      desc: "We deliver technical solutions to reduce nuisance odors and noise pollution, helping clients protect community relations and meet compliance.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Odor-Noise Modeling.webp",
    },
    {
      title: "Expert Witness Testimony",
      desc: "Our experts provide credible, science-based insights to support clients in legal and regulatory cases related to air quality issues.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Expert Witness Testimony.webp",
    },
    {
      title: "Strategic Technical Support",
      desc: "We advise trade associations, governments, and private clients with customized strategies for policy development, compliance, and long-term planning.",
      img: "/Environment-Sustainability/Air-Quality-Assessment/Strategic Technical Support.webp",
    },
  ];
  const points = [
    "Proven track record in both developed and emerging markets.",
    "Objective, technology-neutral solutions tailored to your needs.",
    "Access to global expertise combined with local market knowledge.",
    "Full-service offering from permitting and design to compliance and monitoring.",
    "Strong partnerships with leading technology providers to deliver advanced solutions.",
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Air Quality Assessment Services
            </h1>
            <p>
              As air quality regulations become stricter and environmental
              sustainability rises in global importance, effective air quality
              management has never been more critical. Al Yusr partners with
              governments, industries, and organizations to develop and
              implement innovative compliance solutions that protect public
              health, improve environmental outcomes, and ensure regulatory
              alignment.
              <br /> <br /> From addressing long-standing challenges in
              developed nations to guiding emerging economies through new air
              quality concerns, our expertise spans every region and sector. By
              combining advanced technology, scientific rigor, and a deep
              understanding of business needs, we help our clients strike the
              right balance between operational efficiency and environmental
              responsibility.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/Air-Quality-Assessment/hero.webp"
              }
              className="w-full h-full object-cover"
              alt={"air quality hero"}
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Our Differentiators
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start bg-slate-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-700 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-center text-gray-900"
          >
            Our Services
          </motion.h2>

          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            Delivering comprehensive air quality and environmental consulting
            solutions, backed by science and global expertise.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl text-center mx-auto font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Al Yusr</span> for Air
            Quality Assessment?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start bg-blue-50 p-4 rounded-lg gap-3"
              >
                <span>
                  <BadgeCheck className="fill-green-500 text-white w-6 h-6  mt-1" />
                </span>
                <span className="text-gray-700 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EngineeringCTA
        title="Take the Next Step Toward Cleaner Air"
        desc=" At Al Yusr, we don’t just help you meet air quality standards,  we help you stay ahead of them. Contact us today to discuss how our air quality services can support your business, your community, and your sustainability goals."
        btn="Contact Us Today"
      />
    </main>
  );
}
