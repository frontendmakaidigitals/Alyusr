"use client";
import Image from "next/image";
import { Leaf, Globe, BadgeCheck, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import BgLayer from "@/app/app_chunks/BgLayer";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function CertificationsPage() {
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
      {/* HERO SECTION */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-50">
            Globally Certified Standards
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Engineering Excellence Backed by International Accreditation
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-top"
          src="https://www.poynter.org/wp-content/uploads/2019/03/shutterstock_285251927.jpg"
          alt="ALYUSR Engineering Hero Background"
        />
      </motion.div>
      {/* OVERVIEW SECTION */}
      <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
        {/* Background image */}

        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-sky-200/40 to-transparent" />

        {/* Container with text */}
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold text-sky-800 leading-tighter  mb-4">
                Certified for Global Excellence
              </h1>
              <p className="text-lg text-gray-700">
                At ALYUSR Engineering Consulting, our work meets and exceeds the
                highest international standards. Our certifications reflect our
                commitment to quality assurance, environmental responsibility,
                occupational health and safety, and project risk management
                across every service we deliver.
              </p>
              <p className="mt-3">
                With a globally aligned operating model and internationally
                certified methodologies, ALYUSR is equipped to manage
                large-scale, multidisciplinary projects with precision and
                accountability.
              </p>

              <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </button>
            </div>
            <div className="h-[450px]">
              <img
                src="https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
              <BgLayer />
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS LIST */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-24 px-6 sm:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Certifications Include
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Backed by international standards, these certifications form the
              backbone of our quality, safety, and risk management systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Class A Engineering License – KSA",
                desc: "Recognized by Saudi authorities as a top-tier firm authorized to lead and manage major government and private projects across the Kingdom.",
              },
              {
                title: "ISO 9001: Quality Management Systems",
                desc: "Ensures consistent delivery of high-quality services and client satisfaction.",
              },
              {
                title: "ISO 14001: Environmental Management Systems",
                desc: "Demonstrates our commitment to sustainable practices and environmental responsibility.",
              },
              {
                title: "ISO 45001: Occupational Health & Safety",
                desc: "Protects our people and stakeholders through proactive safety planning and risk prevention.",
              },
              {
                title: "ISO 31000: Risk Management",
                desc: "Guides strategic risk assessment and mitigation throughout the project lifecycle.",
              },
              {
                title: "ISO 21500: Project Management Guidelines",
                desc: "Aligns our project delivery with globally accepted best practices in planning, execution, and control.",
              },
            ].map((cert, i) => (
              <div
                key={i}
                className="bg-white border border-sky-100 p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-10 h-10 bg-sky-100 text-sky-600 flex items-center justify-center rounded-lg font-bold text-sm">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-sky-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL MEMBERSHIPS */}
      <section className="relative bg-gradient-to-br from-sky-100 via-white to-sky-50 py-24 px-6 sm:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Global Accreditations & Memberships
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our global accreditations reflect ALYUSR’s dedication to
              world-class practices, sustainability, and verified credibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {[
              {
                title: "LEED & USGBC Member",
                desc: " Supporting green building and sustainable design through Leadership in Energy and Environmental Design.",
                icon: Leaf,
              },
              {
                title: "ISOCARP Member",
                desc: "Part of the International Society of City and Regional Planners, enhancing global knowledge exchange in urban development.",
                icon: Globe,
              },
              {
                title: "D-U-N-S Registered",
                desc: "An international business verification standard that reflects operational transparency and financial credibility.",
                icon: BadgeCheck,
              },
              {
                title: "Gold Member – Facilitiesline",
                desc: " Recognized for supplier reliability, performance, and compliance in large-scale development frameworks.",
                icon: Star,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="relative bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* Floating Icon */}
                  <div className="absolute -top-6 left-6 bg-white shadow-md w-14 h-14 rounded-full flex items-center justify-center text-sky-700">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section>
        <div className="my-24 container">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why It Matters to{" "}
            <span className="text-blue-500"> Our Clients</span>
          </h3>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full px-4" // Add horizontal padding to avoid edge cuts
          >
            <CarouselContent className="gap-4 px-10">
              {" "}
              {/* optional spacing between cards */}
              {[
                {
                  title: "Strategic Alignment",
                  img: "https://images.pexels.com/photos/1181615/pexels-photo-1181615.jpeg",
                },
                {
                  title: "Streamlined Oversight",
                  img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
                },
                {
                  title: "Consistent Quality",
                  img: "https://images.pexels.com/photos/7564203/pexels-photo-7564203.jpeg",
                },
                {
                  title: "Client Trust",
                  img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                },
              ].map((point, i) => (
                <CarouselItem
                  key={i}
                  className="group md:basis-1/2 !p-0 lg:basis-1/3 bg-slate-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="group border bg-blue-500 border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                    <div className="relative h-[300px] w-full bg-sky-100">
                      <Image
                        src={point.img}
                        alt={point.title}
                        fill
                        className="object-cover  group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-center text-gray-50 text-sm font-semibold group-hover:text-sky-50 transition-colors duration-300">
                        {point.title}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-900 text-white text-center px-6">
        <h3 className="text-3xl font-semibold mb-4">
          Certified to Deliver. Committed to Excellence.
        </h3>
        <p className="max-w-3xl mx-auto mb-8">
          At ALYUSR, we don&apos;t just follow global standards; we embed them
          into everything we do. These certifications are not just badges;
          they&apos;re our promise to clients, partners, and the communities we
          serve.
        </p>
        <button className="bg-white text-sky-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Explore Our Services
        </button>
      </section>
    </div>
  );
}
