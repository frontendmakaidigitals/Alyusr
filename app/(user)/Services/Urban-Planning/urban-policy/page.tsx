"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Leaf, Globe2, Users, Lightbulb, GraduationCap } from "lucide-react";
export default function ConstructionManagementPage() {
  const services = [
    {
      title: "Site Assessments & Investigations",
      desc: "Identify pollutants and understand environmental risks.",
      img: "/urban-planning/urban-policy/Site-Investigation.webp",
    },
    {
      title: "Remediation & Cleanup Design",
      desc: "Plan safe, cost-effective, and sustainable cleanup strategies.",
      img: "/urban-planning/urban-policy/cleanup-design.webp",
    },
    {
      title: "Regulatory Guidance",
      desc: "Navigate complex environmental laws and secure approvals.",
      img: "/urban-planning/urban-policy/Regulatory.webp",
    },
    {
      title: "Restoration & Reuse Planning",
      desc: "Integrate site cleanup with future development goals.",
      img: "/urban-planning/urban-policy/Reuse Planning.webp",
    },
    {
      title: "Community Engagement",
      desc: "Build trust through transparent communication and stakeholder involvement.",
      img: "/urban-planning/urban-policy/Community Engagement.webp",
    },
  ];
  const points = [
    {
      icon: <Leaf className="w-10 h-10 text-white" />,
      title: "Regenerative Impact",
      desc: "We don’t just restore sites; we help create ecological and community value in the process.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-white" />,
      title: "Global Know-How, Local Expertise",
      desc: "Our team has managed urban redevelopment across the UAE and beyond.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Cross-Disciplinary Team",
      desc: "Engineers, environmental experts, policy planners, and designers work together for seamless results.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Innovation in Action",
      desc: "We use advanced tools and modeling techniques to understand land conditions, including strategies for subsurface prediction and contaminant movement.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: "Training & Education",
      desc: "We support our clients with up-to-date knowledge, webinars, and workshops to stay ahead of evolving regulations.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Urban Policy and Development
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/urban-planning/urban-policy/hero.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, we help cities and businesses redevelop and restore
          contaminated or underused land safely and effectively. Our goal is to
          turn these spaces into thriving, healthy, and economically useful
          parts of the community. With decades of global experience, our team
          handles complex urban redevelopment challenges using smart planning,
          environmental science, and a deep understanding of local and national
          policies.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          We don’t just clean up sites, we transform them into assets that
          support business growth, community health, and environmental
          protection.
        </p>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center"
          >
            What <span className="text-blue-500">We Offer</span>
          </motion.h2>

          {/* Services Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 bg-sky-50 p-1 shadow-sm hover:shadow-md transition-shadow duration-200 max-w-sm mx-auto"
              >
                {service.img && (
                  <div className="relative bg-red-300 w-full h-60 rounded-lg overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-sky-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Our Approach:{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Regenerative Redevelopment
              </span>
            </h2>
            <p className="text-gray-600 mb-6">
              We use a site-specific and science-based strategy to remediate
              land while considering community needs and environmental health.
              Our process blends:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Proven green remediation techniques",
                "Smart use of space for future development",
                "Risk reduction strategies that protect both people and ecosystems",
                "Technology and innovation to reduce time and cost",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className=" mt-1">
                    <BadgeCheck className="w-5 h-5 text-white fill-green-500" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[430px] bg-slate-200 rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={"/urban-planning/urban-policy/about.webp"} // Replace with your image path
              alt="Regenerative Redevelopment"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="text-center container mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Why Choose <span className="text-blue-500">Al Yusr</span>
          </motion.h2>
        </div>

        <div className="grid  grid-cols-1  lg:grid-cols-3 gap-10 container">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-sky-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 rounded-md p-2 bg-blue-500 w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl text-blue-800 font-bold mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Ready to Redevelop?"
        desc="Whether you're transforming industrial land, decommissioning facilities, or revitalizing urban zones, Al Yusr provides the expertise, tools, and vision to do it right."
        btn="Contact Us Today"
      />
    </main>
  );
}
