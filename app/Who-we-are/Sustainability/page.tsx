"use client";
import { Users } from "lucide-react";
import {
  ShieldCheck,
  GraduationCap,
  ClipboardList,
  Workflow,
  AlertCircle,
  HeartPulse,
  Star,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
export default function Page() {
  const safetyPractices = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-sky-700" />,
      title: "Leadership-Driven Safety Culture",
      desc: "Senior managers actively champion all safety initiatives with visible commitment and ongoing improvement across all business units.",
    },
    {
      icon: <Users className="w-6 h-6 text-sky-700" />,
      title: "Employee Participation & Awareness",
      desc: "Staff engage in planning, inspections, audits, and toolbox talks. Hazard reporting and open communication are strongly encouraged.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-sky-700" />,
      title: "Training & Safety Orientation",
      desc: "Every employee receives role-based training. Safety knowledge is consistently reinforced from onboarding to senior levels.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-sky-700" />,
      title: "Risk-Based Planning",
      desc: "Pre-task risk assessments are conducted to mitigate exposure and ensure compliance at every stage of the project lifecycle.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-sky-700" />,
      title: "Contractor & Partner Integration",
      desc: "Subcontractors are held to ALYUSR's safety standards through joint inspections and shared performance goals.",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-sky-700" />,
      title: "Incident Prevention & Response",
      desc: "We track, investigate, and analyze incidents. Corrective actions are mandatory for all recordable events.",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-sky-700" />,
      title: "Fit-for-Duty Policy",
      desc: "All team members must report physically and mentally fit. Health and wellness programs support a safe workplace.",
    },
    {
      icon: <Star className="w-6 h-6 text-sky-700" />,
      title: "Recognition & Rewards",
      desc: "Outstanding safety behavior is rewarded through internal awards and milestones to promote a culture of excellence.",
    },
  ];
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Sustainability at Al Yusr Engineering Consultancy
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-6xl font-semibold">
            Our Commitment: Building a Sustainable Future Together
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="https://images.pexels.com/photos/7942430/pexels-photo-7942430.jpeg"
          alt="ALYUSR Engineering Hero Background"
        />
      </motion.div>

      <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
        {/* Background image */}

        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-sky-200/40 to-transparent" />

        {/* Container with text */}
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-tighter  mb-4">
                Heading
              </h1>
              <p className="text-lg text-gray-700">
                At Al Yusr Engineering Consultancy, we believe that true
                progress means leaving a positive, lasting impact on people and
                the planet. Our commitment to sustainability drives everything
                we do, helping clients and partners embed responsible practices
                that nurture communities, protect the environment, and create
                resilient infrastructure for generations to come.
              </p>

              <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </button>
            </div>
            <div className="h-[450px]">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
              <BgLayer />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sustainability Matters */}
      <section className="py-20 ">
        <div className="container  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
            alt="Sustainable city"
            className="rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-5xl font-semibold mb-4">
              Why <span className="text-blue-500">Sustainability</span> Matters
              to Us
            </h2>
            <p className="text-gray-700 mb-4">
              The world is changing, and so must the way we do business. From
              governments and cities to developers and asset owners, we all
              share a responsibility to transform our industries with
              sustainable solutions.
            </p>
            <p className="text-gray-700">
              At Al Yusr, we bring knowledge, innovation, and experience to
              support this journey, helping organizations align their goals with
              global environmental and social priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="container place-items-center grid grid-cols-1 lg:grid-cols-2 py-20 gap-10">
        <div className="">
          <h2 className="text-4xl font-semibold mb-6">
            Our Approach: Practical Roadmaps for Sustainable Success
          </h2>
          <p>
            Sustainability is not just a goal; it’s a journey. We provide
            actionable strategies for your organization’s needs, ensuring
            ambitions translate into measurable outcomes. Our Sustainable Legacy
            strategy focuses on:
          </p>

          <ul className="space-y-4 text-gray-700 mt-3">
            <li className="flex items-start gap-3">
              <div>
                {" "}
                <BadgeCheck className=" text-slate-50 fill-green-600 w-8 h-8" />
              </div>
              <span>
                Integrating Sustainable Development across all projects to build
                resilience and long-term value
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div>
                {" "}
                <BadgeCheck className=" text-slate-50 fill-green-600 w-8 h-8" />
              </div>
              <span>
                Enhancing Social Outcomes that improve community well-being and
                equity
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div>
                {" "}
                <BadgeCheck className=" text-slate-50 fill-green-600 w-8 h-8" />
              </div>
              <span>
                Achieving Net Zero Emissions through innovative design and
                energy solutions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div>
                {" "}
                <BadgeCheck className=" text-slate-50 fill-green-600 w-8 h-8" />
              </div>
              <span>
                Strengthening Governance to uphold ethical standards and
                transparency
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full h-[500px] bg-red-300 rounded-xl">
          <img />
        </div>
      </section>

      <section className="bg-blue-50 place-items-center grid grid-cols-1 lg:grid-cols-2 py-20 px-6">
        <div className="max-w-5xl mx-auto container">
          <h2 className="text-5xl font-semibold mb-4">
            Our <span className="text-blue-500">Global</span> Commitment
          </h2>
          <p className="text-gray-700 text-lg">
            Al Yusr supports international frameworks such as the Global
            Biodiversity Framework, pledging to help reverse nature loss by
            2030. Our projects and practices align with these commitments,
            ensuring our consultancy leads by example in environmental
            stewardship.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
          alt="Sustainable city"
          className="rounded-xl shadow-md"
        />
      </section>
      {/* Innovation & Initiatives */}
      <section className="container place-items-center grid grid-cols-1 lg:grid-cols-2 py-20 gap-10">
        <div className="w-full h-[500px] bg-red-300 rounded-xl">
          <img />
        </div>
        <div className="">
          <h2 className="text-4xl font-semibold mb-6">
            Leading with Innovation and Expertise
          </h2>
          <p>
            From low-carbon infrastructure to resilient energy solutions, Al
            Yusr embraces cutting-edge technology and innovative thinking. Our
            experts collaborate globally to solve complex challenges, delivering
            sustainable designs, tools, and solutions that meet today’s needs
            without compromising tomorrow.
          </p>
          <h2 className="font-[500] text-xl mt-3">Featured Initiatives:</h2>
          <ul className="space-y-4 text-gray-700 mt-3">
            <li className="flex items-start gap-3">
              <BadgeCheck className=" text-slate-50 fill-green-600 w-8 h-8" />
              <span>
                Developing low-carbon infrastructure tailored for the Middle
                East’s unique climate and environmental conditions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className=" text-slate-50 fill-green-600 w-8 h-8" />
              <span>
                Partnering with public and private sectors to embed energy
                resilience and reduce carbon footprints
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className=" text-slate-50 fill-green-600 w-8 h-8" />
              <span>
                Implementing digital tools that measure and minimize
                environmental impact throughout project lifecycles
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Global Commitment */}
    </div>
  );
}
