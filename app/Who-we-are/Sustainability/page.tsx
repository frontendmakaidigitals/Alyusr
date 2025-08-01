"use client";
import { Leaf, Globe, BarChart3, CheckCircle2, Users } from "lucide-react";
import {
  ShieldCheck,
  GraduationCap,
  ClipboardList,
  Workflow,
  AlertCircle,
  HeartPulse,
  Star,
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
          <h1 className="text-5xl font-bold text-slate-50">
            Safety Commitments
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Expertise You Can Trust. Delivery You Can Count On.
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

      {/* Why Sustainability Matters */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Why Sustainability Matters to Us
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
          <img
            src="/sustainability.jpg"
            alt="Sustainable city"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="bg-sky-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Safety Programs & Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {safetyPractices.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-sky-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-sky-100 p-2 rounded-full">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Initiatives */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Leading with Innovation and Expertise
          </h2>
          <ul className="space-y-5 text-gray-700 list-disc list-inside">
            <li>
              Developing low-carbon infrastructure tailored for the Middle
              East’s unique climate and environmental conditions
            </li>
            <li>
              Partnering with public and private sectors to embed energy
              resilience and reduce carbon footprints
            </li>
            <li>
              Implementing digital tools that measure and minimize environmental
              impact throughout project lifecycles
            </li>
          </ul>
        </div>
      </section>

      {/* Global Commitment */}
      <section className="bg-green-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Global Commitment</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Al Yusr supports international frameworks such as the Global
            Biodiversity Framework, pledging to help reverse nature loss by
            2030. Our projects and practices align with these commitments,
            ensuring our consultancy leads by example in environmental
            stewardship.
          </p>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Stay Informed with Our Insights
          </h2>
          <p className="text-gray-700">
            Discover how Al Yusr is helping clients transition to
            nature-positive practices, navigate carbon markets, and embrace
            climate-resilient infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
}
