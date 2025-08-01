"use client";
import {
  ShieldCheck,
  BookOpen,
  AlertTriangle,
  Lock,
  Handshake,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
export default function OurEthics() {
  const items = [
    {
      icon: <BookOpen className="w-5 h-5 text-sky-600" />,
      text: "Understanding the Code of Conduct",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-sky-600" />,
      text: "Recognizing conflicts of interest",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
      text: "Anti-bribery and anti-corruption policies",
    },
    {
      icon: <Lock className="w-5 h-5 text-sky-600" />,
      text: "Data protection and client confidentiality",
    },
    {
      icon: <Handshake className="w-5 h-5 text-sky-600" />,
      text: "Respect in the workplace",
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
  const ethicsTraining = [
    {
      img: "/images/code-of-conduct.jpg", // Replace with your own image path or Pexels/Unsplash CDN
      title: "Understanding the Code of Conduct",
    },
    {
      img: "/images/conflict-of-interest.jpg",
      title: "Recognizing Conflicts of Interest",
    },
    {
      img: "/images/anti-bribery.jpg",
      title: "Anti-Bribery & Anti-Corruption",
    },
    {
      img: "/images/data-protection.jpg",
      title: "Data Protection & Client Confidentiality",
    },
    {
      img: "/images/respect.jpg",
      title: "Respect in the Workplace",
    },
  ];

  const ethicsConduct = [
    "Compliance with local & international laws",
    "Fair treatment & anti-corruption principles",
    "Workplace safety & environmental responsibilities",
    "Client confidentiality & data protection",
    "Ethical decision-making across operations",
  ];
  return (
    <main className="bg-gray-50 text-gray-800">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Our Ethics
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-6xl font-semibold">
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
                At ALYUSR Engineering Consulting, we believe that ethical
                behavior is the foundation of long-term success. We are fully
                committed to upholding the highest standards of integrity,
                transparency, and compliance in everything we do, from how we
                deliver projects to how we engage with clients, employees,
                partners, and communities.
                <br /> Our reputation as a trusted engineering consultancy is
                built not only on the quality of our work, but also on the
                values that guide us. We hold ourselves accountable to both
                Saudi regulations and international standards, ensuring that our
                business practices are lawful, ethical, and respectful across
                all markets we operate in.
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
      <section className="">
        <div className="container">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-5xl text-start font-bold text-gray-900">
                Our Ethical Culture
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4 text-start">
                Our business culture is grounded in fairness, professionalism,
                and respect. Ethical decision-making is encouraged at every
                level of our organization, from executive leadership to field
                operations.
                <br /> We lead by example, taking a zero-tolerance approach to
                bribery, corruption, discrimination, and non-compliance. We
                actively promote a culture of accountability, where speaking up
                is encouraged, and doing the right thing is expected, always.
                <br /> All employees receive mandatory ethics and compliance
                training to help them identify, report, and avoid unethical
                behavior. Training includes:
              </p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className=""
              >
                <div className="text-start mt-4 space-y-4">
                  {ethicsTraining.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-start gap-2"
                    >
                      <div>
                        <BadgeCheck className="fill-green-500 stroke-white size-7" />
                      </div>
                      <p className="text-gray-800 font-medium">{item.title}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <div className="w-full bg-red-300 h-[500px]">
              <img />
            </div>
          </div>
        </div>
      </section>
      <section className="container grid grid-cols-1 lg:grid-cols-2 mt-14 gap-10 mb-20">
        <div className="w-full h-[500px] bg-green-500">
          <img />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-5xl font-semibold mb-6 text-gray-800 max-w-lg">
            Code of Ethics & Business Conduct
          </h3>
          <ul className="space-y-4  text-gray-700 pl-2">
            {ethicsConduct.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="">
                  <BadgeCheck className="fill-green-500 stroke-white size-7" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 text-sm">
            This code is shared with employees, consultants, and subcontractors
            to uphold a unified ethical standard across every project.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
