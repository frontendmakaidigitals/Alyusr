"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import {
  BadgeCheck,
  Clock,
  DollarSign,
  ShieldCheck,
  Users,
  Lightbulb,
} from "lucide-react";
export default function ConstructionManagementPage() {
  const models = [
    {
      title: "Design-Build (DB)",
      desc: "Combines design and construction into one contract and one team. This model speeds up timelines, simplifies communication, and ensures accountability.",
      image: "/images/model1.jpg",
    },
    {
      title: "Integrated Project Delivery (IPD)",
      desc: "A highly collaborative process where the owner, designers, and builders share responsibilities, risks, and rewards. This approach enhances transparency, reduces waste, and improves value delivery.",
      image: "/images/model2.jpg",
    },
    {
      title: "Public-Private Partnerships (PPP)",
      desc: "Private sector investment and expertise are used to finance, build, and operate public projects, reducing public risk while delivering high-quality assets.",
      image: "/images/model3.jpg",
    },
    {
      title: "Construction Management at Risk (CMAR)",
      desc: "Gives the owner more design control while ensuring budget certainty. The construction manager acts as a consultant during design and assumes construction risk during execution.",
      image: "/images/model4.jpg",
    },
    {
      title: "Progressive Design-Build",
      desc: "An evolving model where design and cost development happen collaboratively, allowing for flexibility and shared decision-making throughout the process.",
      image: "/images/model5.jpg",
    },
  ];

  const considerations = [
    "Speed is critical: Projects must start and finish faster.",
    "Budget predictability is essential.",
    "Collaboration is required between designers, builders, and owners.",
    "Risk sharing or risk transfer is beneficial.",
    "Long-term operation or financing needs are part of the project.",
  ];
  const advantages = [
    {
      title: "Faster Project Timelines",
      description:
        "Integrated approaches like Design-Build and Integrated Project Delivery allow for concurrent design and construction phases, speeding up overall completion.",
      icon: Clock,
    },
    {
      title: "Cost Certainty & Budget Control",
      description:
        "Alternative delivery reduces surprises. Fixed-price and performance-based contracts help maintain financial clarity from start to finish.",
      icon: DollarSign,
    },
    {
      title: "Reduced Risk Exposure",
      description:
        "Transfer of technical, financial, and operational risks to qualified private partners ensures clients can focus on long-term outcomes without micromanaging construction details.",
      icon: ShieldCheck,
    },
    {
      title: "Stronger Collaboration",
      description:
        "Seamless alignment between planners, designers, builders, and owners fosters real-time decision-making and minimizes delays.",
      icon: Users,
    },
    {
      title: "Increased Innovation",
      description:
        "The flexibility of these models encourages creative problem-solving, the adoption of new technologies, and more adaptive construction methods.",
      icon: Lightbulb,
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Alternative Delivery Models
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
          In today’s fast-moving development landscape, traditional project
          delivery methods can’t always keep up with growing demands for speed,
          cost-efficiency, and innovation. At Al Yusr, we offer Alternative
          Delivery Models that go beyond the conventional. These models help
          overcome funding challenges, reduce delays, and align every team under
          a common goal, delivering excellence with agility.
        </p>{" "}
        <p className="mt-2 text-lg text-center">
          Whether it&apos;s through Design-Build, Public-Private Partnerships,
          or Integrated Project Delivery, our strategies ensure easy
          collaboration between stakeholders, predictable outcomes, and greater
          project value from start to finish. We partner with clients early in
          the project life cycle to determine the most suitable method,
          maximizing efficiency while minimizing risk.
        </p>
      </section>
      <section className="bg-sky-50 mt-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 container">
          <div className="">
            <h2 className="text-5xl font-bold text-sky-900 mb-5">
              What Are Alternative Delivery Models?
            </h2>
            <p>
              Alternative Delivery Models (ADMs) are innovative methods of
              executing construction and infrastructure projects that integrate
              planning, design, financing, and construction in more flexible and
              collaborative ways. Unlike the traditional design-bid-build
              process, these approaches streamline workflows, reduce
              fragmentation, and encourage team alignment from day one.
            </p>
          </div>
          <div className="w-full h-[370px] bg-green-500">
            <img src={""} alt={""} className="" />
          </div>
        </div>
      </section>
      <section className="bg-white text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">
            Our <span className="text-blue-500">Core Delivery</span> Models
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model, idx) => (
              <div
                key={idx}
                className="bg-white border p-2 border-slate-500/10 rounded-xl transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="h-[280px] rounded-lg border border-slate-900/40 bg-slate-100 overflow-hidden w-full relative">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-blue-900 font-semibold mb-2">
                    {model.title}
                  </h3>
                  <p className="text-blue-950">{model.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 mt-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 container">
          <div className="w-full h-[400px] bg-orange-400">
            <img src={""} alt={""} className="" />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-sky-900 mb-16">
              What Are Alternative Delivery Models?
            </h2>
            <p>
              Alternative Delivery Models (ADMs) are innovative methods of
              executing construction and infrastructure projects that integrate
              planning, design, financing, and construction in more flexible and
              collaborative ways. Unlike the traditional design-bid-build
              process, these approaches streamline workflows, reduce
              fragmentation, and encourage team alignment from day one.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 text-gray-900 py-16">
        <div className="container">
          <h2 className="text-5xl max-w-4xl mx-auto font-bold text-center mb-10">
            When Should You Consider{" "}
            <span className="text-blue-500">Alternative Delivery?</span>
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-7 mx-auto max-w-5xl">
            {considerations.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 bg-white p-3 rounded-lg"
              >
                <BadgeCheck className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sky-50 mt-10 py-20">
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10 container">
          <div className="">
            <h2 className="text-5xl font-bold text-sky-900 mb-5">
              Our Value Proposition
            </h2>
            <p>
              At Al Yusr, we bring a unique blend of regional expertise,
              cross-disciplinary knowledge, and industry foresight to every
              project. Our team understands that no two developments are the
              same, which is why we customize delivery models that fit the
              project&apos;s goals, budget, timeline, and risk profile.
            </p>
            <p>
              With a proven track record in large-scale public and private
              sector developments, we offer guidance on selecting and
              implementing the most effective delivery method. Whether it&apos;s
              reducing delays, ensuring budget predictability, or enabling
              greater collaboration between stakeholders, our alternative
              delivery solutions are designed to drive better outcomes, reduce
              complexity, and deliver lasting value across the project
              lifecycle.
            </p>
          </div>
          <div className="w-full h-[400px] bg-green-500">
            <img src={""} alt={""} className="" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white text-gray-900">
        <div className="container">
          <h2 className="text-5xl max-w-5xl mx-auto font-bold text-center mb-14">
            <span className="text-green-600">Advantages</span> of{" "}
            <span className="text-blue-500">Alternative Delivery</span> Models
            with Al Yusr
          </h2>
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
            {advantages.map(({ title, description, icon: Icon }, idx) => (
              <div key={idx} className="flex bg-slate-100 rounded-xl p-5 items-start gap-5">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Partner with Al Yusr for Your Project Needs"
        desc="If your project needs a faster, more efficient delivery approach, talk to the Al Yusr team. We'll help you select and implement a model that reduces complexity and ensures measurable success."
        btn="Contact Us Today"
      />
    </main>
  );
}
