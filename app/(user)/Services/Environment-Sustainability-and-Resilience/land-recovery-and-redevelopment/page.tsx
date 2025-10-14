"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import Image from "next/image";
import { Leaf, Users, Building2, Recycle, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const approaches = [
    {
      title: "Site-Specific Solutions",
      desc: "Every site is evaluated based on its geology, hydrology, and community context to create tailored strategies.",
      icon: <Building2 className="w-7 h-7 text-primary" />,
    },
    {
      title: "Stakeholder Engagement",
      desc: "We collaborate closely with regulators, industry leaders, and communities to achieve outcomes that foster trust and transparency.",
      icon: <Users className="w-7 h-7 text-primary" />,
    },
    {
      title: "Green & Sustainable Remediation",
      desc: "Our projects are designed to reduce carbon footprints, conserve resources, and enhance ecological resilience.",
      icon: <Leaf className="w-7 h-7 text-primary" />,
    },
    {
      title: "Future-Ready Redevelopment",
      desc: "Restoration strategies are aligned with redevelopment goals, ensuring the land can be safely reused for commercial, residential, or public purposes.",
      icon: <Recycle className="w-7 h-7 text-primary" />,
    },
  ];

  const services = [
    {
      title: "Baseline Field Studies",
      desc: "We conduct biological and ecological surveys to establish a strong foundation for environmental planning.",
      img: "/Environment-Sustainability/land-recovery/Baseline Field Studies.webp", // 🌿 nature survey
    },
    {
      title: "Cultural & Heritage Resources",
      desc: "Comprehensive assessments ensure that cultural heritage and Indigenous communities are respected and preserved.",
      img: "/Environment-Sustainability/land-recovery/Cultural-Heritage Resources.webp", // 🏛️ heritage site
    },
    {
      title: "Digital Analyses & Data Conveyance",
      desc: "Using drones, GIS mapping, and interactive platforms, we deliver digital environmental impact reports.",
      img: "/Environment-Sustainability/land-recovery/Digital Analyses-Data Conveyance.webp", // 🚁 drone mapping
    },
    {
      title: "Ecological Design, Implementation & Restoration",
      desc: "We restore habitats, design sustainable landscapes, and rehabilitate ecosystems for resilience.",
      img: "/Environment-Sustainability/land-recovery/Ecological Design.webp", // 🌱 eco restoration
    },
    {
      title: "Environmental & Social Impact Assessments",
      desc: "Legally compliant impact assessments balancing regulatory requirements with business objectives.",
      img: "/Environment-Sustainability/land-recovery/Environmental-Social.webp", // 📊 impact analysis
    },
    {
      title: "Environmental Planning, Mitigation & Monitoring",
      desc: "Strategies to minimize environmental impacts during construction and operation with ongoing monitoring.",
      img: "/Environment-Sustainability/land-recovery/Environmental-Planning.webp", // 🌍 planning
    },
    {
      title: "Environmental Policy Development",
      desc: "Crafting policies that align with regulations and global standards, supporting compliance & sustainability.",
      img: "/Environment-Sustainability/land-recovery/Environmental Policy.webp", // 📑 policy making
    },
    {
      title: "Regulatory Permitting & Negotiation",
      desc: "We work with regulatory bodies to secure permits, negotiate requirements, and resolve challenges early.",
      img: "/Environment-Sustainability/land-recovery/Regulatory Permitting.webp", // 📝 agreement
    },
    {
      title: "Siting, Feasibility Studies & Program Management",
      desc: "We assess feasibility, identify optimal locations, and provide management support for approvals.",
      img: "/Environment-Sustainability/land-recovery/Siting-Feasibility Studies.webp", // 🏗️ site planning
    },
    {
      title: "Stakeholder & Public Engagement",
      desc: "We foster transparent dialogue with stakeholders through workshops, consultations, and digital platforms.",
      img: "/Environment-Sustainability/land-recovery/Stakeholder-Public.webp", // 👥 engagement
    },
    {
      title: "Fate & Effects Transport / Dispersion Modeling",
      desc: "Using advanced modeling, we predict pollutant movement to evaluate risks and guide mitigation.",
      img: "/Environment-Sustainability/land-recovery/Fate-Effects.webp", // 🌊 modeling
    },
    {
      title: "Visual & Noise Impact Assessments",
      desc: "Analyzing visual and noise impacts, we provide solutions to reduce community concerns and improve acceptance.",
      img: "/Environment-Sustainability/land-recovery/Noise Impact Assessments.webp", // 🔊 noise impact
    },
    {
      title: "Resilience & Climate Change",
      desc: "Integrating climate change considerations into assessments to help projects adapt to long-term challenges.",
      img: "/Environment-Sustainability/land-recovery/climate-chnage.webp", // ☀️ climate resilience
    },
  ];
  const points = [
    {
      title: "Regenerative Remediation",
      desc: "We go beyond clean-up, creating ecological uplift and long-term community value.",
    },
    {
      title: "Global Knowledge Network",
      desc: "Access to technical practice networks that share innovations, solutions, and lessons learned across the world.",
    },
    {
      title: "Largest Remediation Expertise",
      desc: "Decades of experience handling complex contamination across multiple sectors.",
    },
    {
      title: "Innovative Tools",
      desc: "Our advanced modeling and subsurface analysis techniques (such as PRISM®) allow us to predict contaminant behavior with unmatched accuracy.",
    },
    {
      title: "Training & Education",
      desc: "We empower clients with knowledge on regulations, emerging contaminants, and sustainable practices.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600] text-gray-900">
              <span className="text-blue-500"> Land Recovery</span> and{" "}
              <span className="text-sky-500">Redevelopment</span>
            </h1>

            <p>
              Effectively addressing contaminated land is not only critical for
              ongoing business activities but also for the health of communities
              and ecosystems. At Al Yusr, we combine scientific rigor, proven
              methodologies, and innovative technologies to restore impaired
              sites safely and sustainably. Our goal is to transform
              environmental liabilities into valuable, productive assets that
              serve both business needs and public interests.
              <br /> <br />
              We work across industries and government sectors to manage a wide
              variety of contaminants, from legacy industrial pollution to
              emerging threats such as PFAS. Each project is approached with
              site-specific strategies that balance regulatory compliance,
              community expectations, and long-term redevelopment potential.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Environment-Sustainability/land-recovery/hero.webp"}
              className="w-full h-full object-cover"
              alt={"land recovery"}
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="text-blue-500">Approach</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              At Al Yusr, we don’t just remediate sites—we reimagine their
              potential. By integrating remediation with redevelopment planning,
              we maximize both environmental and economic value.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {approaches.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow"
              >
                {/* Icon */}
                <div className="flex-shrink-0  p-3 bg-blue-100 rounded-xl w-fit mb-5">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="bg-slate-100 w-full h-[240px]">
                  <Image
                    src={service.img}
                    width={400}
                    height={400}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
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

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-blue-500">Al Yusr?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted expertise, innovative tools, and a commitment to
              sustainable remediation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <span>
                  <BadgeCheck className="size-9 fill-green-500 text-white shrink-0" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Talk About Your Project"
        desc=" Al Yusr can help unlock the hidden potential of your contaminated sites. Contact us to discuss tailored solutions for remediation, restoration, and redevelopment."
        btn="Contact Us Today"
      />
    </main>
  );
}
