"use client";
import React, { useState, useRef, useEffect } from "react";
import BgLayer from "../app_chunks/BgLayer";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
const services = [
  { title: "Construction Management", img: "construction-management.webp" },
  { title: "Engineering Services", img: "engineering-services.webp" },
  { title: "Environmental Services", img: "environmental-services.webp" },
  { title: "IT and Cybersecurity", img: "it-and-cybersecurity.webp" },
  {
    title: "Planning & Advisory Solutions",
    img: "planning-and-advisory-solutions.webp",
  },
  {
    title: "Process Development & Implementation",
    img: "process-development-and-implementation.webp",
  },
  { title: "Project Planning", img: "project-planning.webp" },
  { title: "Community Engagement", img: "community-engagement.webp" },
  { title: "Program Management", img: "program-management.webp" },
  { title: "Architecture Design", img: "architecture-design.webp" },
  { title: "Process Simulation Models", img: "process-simulation-models.webp" },
  { title: "City Analytics", img: "city-analytics.webp" },
  { title: "Community Planning", img: "community-planning.webp" },
  { title: "EHS Management Consulting", img: "ehs-management-consulting.webp" },
  {
    title: "Structural Legacy Consulting",
    img: "structural-legacy-consulting.webp",
  },
  { title: "Landscape Architecture", img: "landscape-architecture.webp" },
  {
    title: "Visualization and Virtual Reality",
    img: "visualization-and-virtual-reality.webp",
  },
  {
    title: "SCCI Electrical Engineering",
    img: "scci-electrical-engineering.webp",
  },
  {
    title: "Vertical Transportation Services",
    img: "vertical-transportation-services.webp",
  },
  { title: "Pedestrian Flow Analysis", img: "pedestrian-flow-analysis.webp" },
  {
    title: "Commercial Operations and Maintenance",
    img: "commercial-operations-and-maintenance.webp",
  },
  {
    title: "Risk Management & Resilience",
    img: "risk-management-and-resilience.webp",
  },
  {
    title: "Pedestrian Movement Modeling",
    img: "pedestrian-movement-modeling.webp",
  },
  {
    title: "Alternative Delivery Models",
    img: "alternative-delivery-models.webp",
  },
  { title: "City Planning", img: "city-planning.webp" },
  { title: "Interior Architecture", img: "interior-architecture.webp" },
  { title: "Infrastructure Protection", img: "infrastructure-protection.webp" },
  {
    title: "Public-Private Partnerships",
    img: "public-private-partnerships.webp",
  },
  { title: "Engineering Economics", img: "engineering-economics.webp" },
  { title: "Urban Design", img: "urban-design.webp" },
  { title: "Ground Engineering", img: "ground-engineering.webp" },
  {
    title: "Tunnels and Underground Infrastructure",
    img: "tunnels-and-underground-infrastructure.webp",
  },
  { title: "Asset Advisory", img: "asset-advisory.webp" },
  { title: "Strategic Consulting", img: "strategic-consulting.webp" },
  {
    title: "Urban Policy & Development",
    img: "urban-policy-and-development.webp",
  },
  { title: "Climate Response", img: "climate-response.webp" },
  { title: "Rail Network Modeling", img: "rail-network-modeling.webp" },
  { title: "Air Quality Assessment", img: "air-quality-assessment.webp" },
  {
    title: "Land Recovery & Redevelopment",
    img: "land-recovery-and-redevelopment.webp",
  },
  {
    title: "Geo-Intelligence Analytics",
    img: "geo-intelligence-analytics.webp",
  },
  {
    title: "Foundation Engineering Solutions",
    img: "foundation-engineering-solutions.webp",
  },
  {
    title: "Smart Infrastructure & Digital Systems",
    img: "smart-infrastructure-and-digital-systems.webp",
  },
  {
    title: "Environmental Assessment and Permitting",
    img: "environmental-assessment-and-permitting.webp",
  },
  { title: "Unified Resilience", img: "unified-resilience.webp" },
  { title: "Climate Adaptation", img: "climate-adaptation.webp" },
  { title: "Cost Management", img: "cost-management.webp" },
  { title: "Urban Mobility", img: "urban-mobility.webp" },
  { title: "Environmental Contracting", img: "environmental-contracting.webp" },
  {
    title: "Digital EHS & ESG Solutions",
    img: "digital-ehs-and-esg-solutions.webp",
  },
  { title: "Electrical Contracting", img: "electrical-contracting.webp" },
  { title: "Multinational Investment", img: "multinational-investment.webp" },
];
const Page = () => {
  const chunkArray = (
    arr: { title: string; img: string }[],
    chunkSize: number
  ) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };
  console.log(services.length);
  const [visibleChunks, setVisibleChunks] = useState(1);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chunks = chunkArray(services, Math.ceil(services.length / 5));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && visibleChunks < chunks.length && !loading) {
          setLoading(true);
          setTimeout(() => {
            setVisibleChunks((prev) => Math.min(prev + 1, chunks.length));
            setLoading(false);
          }, 1200); // show loading for 500ms
        }
      },
      { threshold: 1.0 }
    );

    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, [visibleChunks, loading]);

  return (
    <main>
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-semibold text-blue-950 leading-tight">
              Services
            </h1>
            <h2 className=" text-xl text-slate-700 font-normal leading-relaxed">
              ALYUSR partners with public and private sector clients to solve
              their most complex engineering and development challenges,
              transforming ambitious visions into excellent results. Across
              Saudi Arabia and international markets, our expert teams push the
              boundaries of innovation and precision.
            </h2>
          </div>

          {/* Right Card Block */}
          <div className="lg:col-span-6">
            <div className="bg-blue-50/30 p-8 rounded-xl border border-blue-200/20 shadow-xs">
              <p className="text-lg text-slate-800 leading-relaxed">
                From national infrastructure to sustainable urban design, we
                deliver projects that make a lasting, positive impact on people,
                cities, and economies. We proudly contribute to the Kingdom’s
                Vision 2030 and global development goals, engineering
                residential communities, modern road networks, advanced drainage
                systems, LEED-certified facilities, and digital design models
                that define the next generation of infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <ul className="grid grid-cols-1 gap-1 lg:grid-cols-4">
          {chunks
            .slice(0, visibleChunks)
            .flat()
            .map((service, idx) => (
              <motion.li
                whileInView={{ scale: 1 }}
                initial={{ scale: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                key={idx}
                className="aspect-square w-full relative"
              >
                <h2 className="absolute z-10 bottom-3 left-3 text-xl font-medium text-slate-50">
                  {service.title}
                </h2>
                <BgLayer color="bg-slate-900/50" />
                <Image
                  width={300}
                  height={300}
                  src={`/services/${service.img}`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.li>
            ))}
          {loading &&
            Array.from({ length: 12 }).map((_, idx) => (
              <Skeleton
                key={`skeleton-${idx}`}
                className="aspect-square w-full "
              />
            ))}
        </ul>

        <div ref={bottomRef} className="h-10" />
      </section>
    </main>
  );
};

export default Page;
