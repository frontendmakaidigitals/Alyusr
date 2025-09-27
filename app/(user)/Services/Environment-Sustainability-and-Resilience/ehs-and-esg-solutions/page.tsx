"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CheckCircle,
  Globe,
  Users,
  Zap,
  Cpu,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
export default function Page() {
  const processSteps = [
    {
      title: "Strategy & Roadmap",
      desc: "We begin by aligning with your organizational goals, analyzing existing systems, and defining a long-term digital strategy that supports future growth and compliance.",

      img: "/Environment-Sustainability/esg-solutions/Strategy-Roadmap.webp",
    },
    {
      title: "Requirements & Gap Analysis",
      desc: "Through workshops and assessments, we translate business objectives into technical requirements, identifying where improvements or integrations are needed.",

      img: "/Environment-Sustainability/esg-solutions/requirements.webp",
    },
    {
      title: "Technology Selection",
      desc: "Using our knowledge of leading platforms, we help select the right-fit EHS/ESG software, avoiding costly over-customization while ensuring the solution meets your needs.",

      img: "/Environment-Sustainability/esg-solutions/Technology Selection.webp",
    },
    {
      title: "Design & Implementation",
      desc: "We configure and deploy systems that improve data visibility, automation, and integration with enterprise applications. Mobile-ready and user-friendly solutions ensure adoption.",

      img: "/Environment-Sustainability/esg-solutions/Design-Implementation.webp",
    },
    {
      title: "Interfaces & Dashboards",
      desc: "Our team creates web-based interfaces, mobile tools, and tailored dashboards that simplify workflows, reduce costs, and provide real-time insights for decision-making.",

      img: "/Environment-Sustainability/esg-solutions/Interfaces-Dashboards.webp",
    },
    {
      title: "Reporting & Analytics",
      desc: "We deliver advanced reporting and ESG dashboards that integrate seamlessly with your existing systems, ensuring compliance with global standards while providing investor-ready data.",

      img: "/Environment-Sustainability/esg-solutions/Reporting-Analytics.webp",
    },
    {
      title: "Change Management & Support",
      desc: "From training to post-implementation assistance, we ensure smooth transitions. Our flexible support model keeps your team empowered while providing ongoing expertise when needed.",

      img: "/Environment-Sustainability/esg-solutions/support.webp",
    },
  ];
  const differentiators = [
    {
      title: "Multidisciplinary Experts",
      desc: "Specialists in environment, health, safety, sustainability, and quality.",
      icon: CheckCircle,
    },
    {
      title: "Global Knowledge, Local Delivery",
      desc: "Experience across international standards while adapting to local regulatory needs.",
      icon: Globe,
    },
    {
      title: "End-User Focused",
      desc: "Systems designed with usability in mind to drive high adoption rates.",
      icon: Users,
    },
    {
      title: "Efficiency First",
      desc: "We configure commercial solutions instead of relying on costly custom development.",
      icon: Zap,
    },
    {
      title: "Future-Ready Platforms",
      desc: "Expertise in leveraging enterprise technologies, ESG reporting tools, and digital integration.",
      icon: Cpu,
    },
    {
      title: "Client Empowerment",
      desc: "We provide training so your teams remain self-sufficient, with our experts available for ongoing support.",
      icon: GraduationCap,
    },
  ];

  const points = [
    "Proven expertise in implementing digital EHS and ESG systems across industries.",
    "Ability to improve regulatory compliance, investor confidence, and sustainability outcomes.",
    "Tailored, data-driven strategies that transform compliance from a burden into an opportunity.",
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-blue-500">EHS</span> and{" "}
              <span className="text-blue-500">ESG</span> Solutions
            </h1>
            <p>
              At Al Yusr Engineering Consulting, we help organizations
              strengthen their Environmental, Health & Safety (EHS) and
              Environmental, Social & Governance (ESG) performance through
              integrated digital solutions. Our goal is simple: to make
              compliance seamless, sustainability measurable, and reporting
              transparent, so you can build trust with your people,
              stakeholders, and investors.
              <br /> <br />
              We combine technical excellence with a human-centered approach,
              ensuring systems are not only robust but also easy for your teams
              to adopt and use every day. From digital strategy to
              implementation and training, we deliver solutions that create
              meaningful impact across your operations.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Environment-Sustainability/esg-solutions/hero.webp"}
              className="w-full h-full object-cover"
              alt={"EHS and ESG"}
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-surface-50 to-white relative">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Our <span className="text-blue-500">Agile Process</span>
          </h2>

          <Carousel className="w-full ">
            <CarouselContent>
              {processSteps.map((step, i) => {
                return (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                    <div>
                      <div className="relative bg-slate-100 h-[220px] rounded-lg w-full mb-2">
                        <img
                          src={step.img}
                          alt={step.title}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <h2 className="text-xl mb-1 font-[500]">{step.title}</h2>

                      <p className="text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            Our <span className="text-blue-500">Differentiators</span>
          </motion.h2>

          <div className="grid max-w-6xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="h-full shadow-md hover:shadow-xl transition rounded-2xl border border-slate-200">
                  <div className="p-6 flex flex-col items-center text-center">
                    <item.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-blue-500">Al Yusr</span> for EHS &
            ESG?
          </motion.h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
            {points.map((point, i) => (
              <motion.div
                key={i}
                className="flex p-3 rounded-lg items-start gap-4 bg-blue-50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <span className="">
                  <BadgeCheck className="w-7 h-7 fill-green-600 text-white flex-shrink-0 mt-1" />
                </span>
                <p className="text-lg text-slate-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title=" Ready to strengthen your EHS and ESG systems?"
        desc=" Let Al Yusr help you build sustainable, transparent, and resilient operations."
        btn="Contact Us Today"
      />
    </main>
  );
}
