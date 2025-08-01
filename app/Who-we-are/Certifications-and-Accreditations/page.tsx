"use client";
import {
  BadgeCheck,
  Globe,
  Leaf,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
export default function Page() {
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
    <div className="bg-slate-50 text-gray-800">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Certifications & Accreditations
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
                At ALYUSR Engineering Consulting, certifications are more than
                just credentials; they reflect our ongoing commitment to
                delivering high-quality, safe, and sustainable engineering
                solutions. We proudly meet both national and international
                standards, ensuring that every project we take on is executed
                with precision, compliance, and care.
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
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto  grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold text-sky-800 mb-4">
              Class A Certificate: Engineering Excellence Recognized Nationally
            </h2>
            <p className="text-gray-700 mb-4">
              ALYUSR holds the prestigious Class A Certificate in engineering
              consultancy, a top-tier classification issued by regulatory
              authorities in Saudi Arabia.
            </p>
            <p className="text-gray-700 mb-6">
              This certification confirms our capability to handle large-scale,
              complex, and high-value projects across urban development,
              infrastructure, architectural design, and engineering supervision.
              It reflects our:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Proven technical competence",
                "Strong project delivery record",
                "Highly qualified multidisciplinary team",
                "Full compliance with national engineering codes and regulations",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <BadgeCheck className="w-5 h-5 text-sky-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3387892/pexels-photo-3387892.jpeg"
              alt="Class A Certification"
              fill
              className="object-cover w-full h-full object-center"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-sky-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
            International <span className="text-blue-600">ISO</span> Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "ISO 9001:2015",
                desc: "Quality Management",
                img: "https://images.pexels.com/photos/7564203/pexels-photo-7564203.jpeg",
              },
              {
                label: "ISO 14001:2015",
                desc: "Environmental Management",
                img: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
              },
              {
                label: "ISO 45001:2018",
                desc: "Occupational Health & Safety",
                img: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
              },
              {
                label: "ISO 31000:2018",
                desc: "Risk Management",
                img: "https://images.pexels.com/photos/7942430/pexels-photo-7942430.jpeg",
              },
              {
                label: "ISO 21500:2021",
                desc: "Project Management Framework",
                img: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
              },
            ].map((iso, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl shadow hover:shadow-md transition overflow-hidden"
              >
                <div className="h-[250px] w-full bg-gray-100">
                  <img
                    src={iso.img}
                    alt={iso.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-sky-700 mb-1">
                    {iso.label}
                  </h3>
                  <p className="text-gray-600 ">{iso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
            <span className="text-blue-500">Global</span> Memberships & Registrations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-12 h-12 text-green-600" />,
                title: "USGBC – LEED Member",
                desc: "Supporting sustainable building and green design practices",
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: "ISOCARP Member",
                desc: "Active in global urban planning dialogue and innovation",
              },
              {
                icon: <BadgeCheck className="w-12 h-12 text-sky-600" />,
                title: "D-U-N-S Registered™",
                desc: "Trusted identity verified by Dun & Bradstreet",
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-rose-600" />,
                title: "Facilitiesline – Gold Member",
                desc: "Certified readiness for large-scale project delivery",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-sky-50 border border-sky-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="  mb-6">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
