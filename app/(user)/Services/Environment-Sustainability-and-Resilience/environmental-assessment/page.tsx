"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Globe2, Cpu, FileCheck, Users, BadgeCheck } from "lucide-react";

export default function Page() {
  const items = [
    {
      title: "Early Integration of Permitting",
      desc: "We engage during project design to anticipate requirements and reduce delays.",
      icon: FileCheck,
    },
    {
      title: "Technology-Driven Assessments",
      desc: "Drones, web-based tools, and digital impact analyses streamline data gathering and presentation.",
      icon: Cpu,
    },
    {
      title: "Stakeholder Engagement",
      desc: "Our team ensures transparent, inclusive consultations that foster trust and speed resolution.",
      icon: Users,
    },
    {
      title: "Global Expertise",
      desc: "With specialists across disciplines and geographies, we deliver consistent, high-quality solutions worldwide.",
      icon: Globe2,
    },
  ];
  const services = [
    {
      title: "Baseline Field Studies",
      desc: "We conduct biological and ecological surveys to establish a strong foundation for environmental planning. These studies identify sensitive habitats, species, and resources that must be protected during project development.",
      img: "/Environment-Sustainability/Environmental Assessment/Baseline Field Studies.webp",
    },
    {
      title: "Cultural & Heritage Resources",
      desc: "Our experts in archaeology, anthropology, and historic architecture provide comprehensive assessments, ensuring that cultural heritage and Indigenous communities are respected and preserved.",
      img: "/Environment-Sustainability/Environmental Assessment/Cultural-Heritage Resources.webp",
    },
    {
      title: "Digital Analyses & Data Conveyance",
      desc: "Using drones, GIS mapping, and interactive platforms, we deliver digital environmental impact reports that enhance transparency and speed up permitting processes.",
      img: "/Environment-Sustainability/Environmental Assessment/Digital Analyses-Data Conveyance.webp",
    },
    {
      title: "Ecological Design, Implementation & Restoration",
      desc: "We integrate science-based solutions to restore natural habitats, design sustainable landscapes, and rehabilitate ecosystems for long-term resilience.",
      img: "/Environment-Sustainability/Environmental Assessment/Ecological Design.webp",
    },
    {
      title: "Environmental & Social Impact Assessments",
      desc: "Our specialists prepare and deliver legally compliant impact assessments, balancing regulatory requirements with business objectives to keep projects on track.",
      img: "/Environment-Sustainability/Environmental Assessment/Environmental-Social.webp",
    },
    {
      title: "Environmental Planning, Mitigation & Monitoring",
      desc: "We design strategies to minimize environmental impacts during construction and operation, followed by ongoing monitoring to ensure compliance and sustainability.",
      img: "/Environment-Sustainability/Environmental Assessment/Environmental-Planning.webp",
    },
    {
      title: "Environmental Policy Development",
      desc: "Our team helps clients craft policies and strategies that align with local regulations and global environmental standards, supporting both compliance and sustainability goals.",
      img: "/Environment-Sustainability/Environmental Assessment/Environmental Policy.webp",
    },
    {
      title: "Regulatory Permitting & Negotiation",
      desc: "We work closely with regulatory bodies to secure permits, negotiate requirements, and resolve potential challenges early in the project lifecycle.",
      img: "/Environment-Sustainability/Environmental Assessment/Regulatory Permitting.webp",
    },
    {
      title: "Siting, Feasibility Studies & Program Management",
      desc: "We assess project feasibility, identify optimal locations, and provide end-to-end management support to streamline permitting and approvals.",
      img: "/Environment-Sustainability/Environmental Assessment/Siting-Feasibility Studies.webp",
    },
    {
      title: "Stakeholder & Public Engagement",
      desc: "Through workshops, consultations, and digital platforms, we foster transparent dialogue with stakeholders, ensuring community support and trust.",
      img: "/Environment-Sustainability/Environmental Assessment/Stakeholder-Public.webp",
    },
    {
      title: "Fate & Effects Transport / Dispersion Modeling",
      desc: "Using advanced modeling, we predict the movement of air, water, and soil pollutants to evaluate risks and guide mitigation measures.",
      img: "/Environment-Sustainability/Environmental Assessment/Fate-Effects.webp",
    },
    {
      title: "Visual & Noise Impact Assessments",
      desc: "We analyze how projects affect landscapes, views, and noise levels, providing solutions to reduce community impacts and improve acceptance.",
      img: "/Environment-Sustainability/Environmental Assessment/Noise Impact Assessments.webp",
    },
    {
      title: "Resilience & Climate Change",
      desc: "Our team integrates climate change considerations into environmental assessments, helping projects adapt to long-term environmental challenges.",
      img: "/Environment-Sustainability/Environmental Assessment/climate-chnage.webp",
    },
  ];
  const reasons = [
    {
      title: "Global Technical Network",
      desc: "A team of 4,000+ assessment and permitting professionals sharing best practices worldwide.",
    },
    {
      title: "Comprehensive Resources",
      desc: "End-to-end support from project feasibility and siting to monitoring and decommissioning.",
    },
    {
      title: "Cultural & Heritage Expertise",
      desc: "One of the largest global consultancies for archaeology, anthropology, and heritage management.",
    },
    {
      title: "Protected Species Specialists",
      desc: "Experts applying digital innovations to ensure compliance and biodiversity protection.",
    },
    {
      title: "Digital Assessments",
      desc: "Interactive, web-based impact reports that accelerate approvals and improve transparency.",
    },
    {
      title: "Proven Track Record",
      desc: "Successful delivery of large-scale environmental and permitting programs across diverse industries.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Environmental Assessment & Permitting
            </h1>
            <p>
              At Al Yusr, we deliver smarter, faster, and more reliable
              environmental assessment and permitting solutions that empower
              clients to move projects forward with confidence. By integrating
              innovative technologies, advanced data collection methods, and
              decades of global expertise, we help organizations understand and
              mitigate environmental and social impacts while achieving
              compliance with regulatory frameworks.
              <br /> <br />
              From using drones for real-time data collection to creating
              interactive digital assessments that improve decision-making, we
              are transforming the way environmental studies are performed. Our
              collaborative approach ensures that projects in energy,
              industrial, transportation, and government sectors not only meet
              permitting requirements but also strengthen stakeholder trust and
              community engagement.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/Environmental Assessment/hero.webp"
              }
              className="w-full h-full object-cover"
              alt={"environmental assesment hero"}
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Our <span className="text-blue-600">Approach</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-green-600">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-1 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 mt-1">
                  <h3 className=" text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Why Choose <span className="text-blue-600">Al Yusr</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="flex bg-slate-100 p-3 rounded-xl items-start space-x-4"
              >
                <span>
                  <BadgeCheck className="w-7 h-7 fill-green-500 text-white flex-shrink-0 mt-1" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Build Smarter and Greener Projects"
        desc="At Al Yusr, we go beyond compliance; we help you unlock approvals faster, reduce risks, and build trust with communities while protecting the environment. Whether you’re planning a new development, upgrading existing infrastructure, or restoring ecosystems, our Environmental Assessment & Permitting team has the expertise and technology to deliver results."
        btn="Contact Us Today"
      />
    </main>
  );
}
