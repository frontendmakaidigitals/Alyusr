"use client";
import React, { useState, useRef, useEffect } from "react";
import BgLayer from "../app_chunks/BgLayer";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import Link from "next/link";
const services = [
  {
    title: "Construction Management",
    link: "/Engineering-Infrastructure/Construction-Management",
    img: "construction-management.webp",
  },
  {
    title: "Engineering Services",
    link: "/Engineering-Infrastructure/Engineering-Services",
    img: "Engineering.webp",
  },
  {
    title: "Environmental Services",
    link: "/Environment-Sustainability-and-Resilience/environmental-services",
    img: "environmental-contracting-2.webp",
  },
  {
    title: "IT and Cybersecurity",
    link: "/Transportation-and-Smart-Mobility/it-and-cybersecurity",
    img: "it-and-cybersecurity.webp",
  },
  {
    title: "Planning & Advisory Solutions",
    link: "/Transportation-and-Smart-Mobility/planning-and-advisory",
    img: "Planning.webp",
  },
  {
    title: "Process Development & Implementation",
    link: "/Project-Advisory/project-planning",
    img: "process-development-implementation.webp",
  },
  {
    title: "Project Planning",
    link: "/Project-Advisory/process-development-and-implementation",
    img: "planning-2.webp",
  },
  {
    title: "Community Engagement",
    link: "/Urban-Planning/community-engagement",
    img: "community-engagement.webp",
  },
  {
    title: "Program Management",
    link: "/Project-Advisory/program-management",
    img: "program-management.webp",
  },
  {
    title: "Architecture Design",
    link: "/Urban-Planning/Architecture-Design",
    img: "Architecture.webp",
  },
  {
    title: "Process Simulation Models",
    link: "/Project-Advisory/process-simulation-models",
    img: "simulation-models.webp",
  },
  {
    title: "City Analytics",
    link: "/Transportation-and-Smart-Mobility/city-analytics",
    img: "cities-solutions.webp",
  },
  {
    title: "Community Planning",
    link: "/Urban-Planning/Community-Planning",
    img: "Planning.webp",
  },
  {
    title: "EHS Management Consulting",
    link: "/Environment-Sustainability-and-Resilience/ehs-management-consulting",
    img: "ehs-management-consulting-and-compliance-2.webp",
  },
  {
    title: "Structural Legacy Consulting",
    link: "/Engineering-Infrastructure/Structural-Legacy-Consulting",
    img: "strategic-consulting.webp",
  },
  {
    title: "Landscape Architecture",
    link: "/Urban-Planning/Landscape-Architecture",
    img: "landscape-architecture.webp",
  },
  {
    title: "Visualization and Virtual Reality",
    link: "/Urban-Planning/visualization-and-virtual-reality",
    img: "visualization-and-virtual-reality.webp",
  },
  {
    title: "SCCI Electrical Engineering",
    link: "/Engineering-Infrastructure/SCCI-Electric",
    img: "scci-electric.webp",
  },
  {
    title: "Vertical Transportation Services",
    link: "/Engineering-Infrastructure/Vertical-Transportation-Services",
    img: "vertical-transportation-services-(north-america)-2.webp",
  },
  {
    title: "Pedestrian Flow Analysis",
    link: "/Transportation-and-Smart-Mobility/pedestrian-flow-analysis",
    img: "pedestrian-modelling-(north-america).webp",
  },
  {
    title: "Commercial Operations and Maintenance",
    link: "/Project-Advisory/commercial-operations-and-maintenance",
    img: "industrial-and-commercial-operations-and-maintenance-2.webp",
  },
  {
    title: "Risk Management & Resilience",
    link: "/Project-Advisory/risk-management-and-resilience",
    img: "risk-management-resilience.webp",
  },
  {
    title: "Pedestrian Movement Modeling",
    link: "/Transportation-and-Smart-Mobility/pedestrian-movement-modeling",
    img: "pedestrian-modelling-in-action.webp",
  },
  {
    title: "Alternative Delivery Models",
    link: "/Engineering-Infrastructure/Alternative-Delivery-Models",
    img: "alternative-delivery-models.webp",
  },
  {
    title: "City Planning",
    link: "/Urban-Planning/city-planning",
    img: "program-management.webp",
  },
  {
    title: "Interior Architecture",
    link: "/Urban-Planning/city-planning",
    img: "interior-architecture.webp",
  },
  {
    title: "Infrastructure Protection",
    link: "/Engineering-Infrastructure/infrastructure-protection",
    img: "critical-infrastructure-protection.webp",
  },
  {
    title: "Public-Private Partnerships",
    link: "/Transportation-and-Smart-Mobility/public-private-partnerships",
    img: "public-private-partnerships.webp",
  },
  {
    title: "Engineering Economics",
    link: "/Project-Advisory/engineering-economics",
    img: "Economics.webp",
  },
  {
    title: "Urban Design",
    link: "/Urban-Planning/urban-design",
    img: "urban-design.webp",
  },
  {
    title: "Ground Engineering",
    link: "/Engineering-Infrastructure/Ground-Engineering",
    img: "ground-engineering-1.webp",
  },
  {
    title: "Tunnels and Underground Infrastructure",
    link: "/Engineering-Infrastructure/Tunnels&Underground-Infrastructure",
    img: "tunnels-trenchless-technology-and-underground-infrastructure.webp",
  },
  {
    title: "Asset Advisory",
    link: "/Project-Advisory/asset-advisory",
    img: "asset-advisory.webp",
  },
  {
    title: "Strategic Consulting",
    link: "/Project-Advisory/strategic-consulting",
    img: "strategic-consulting.webp",
  },
  {
    title: "Urban Policy & Development",
    link: "/Urban-Planning/urban-policy",
    img: "urban-design.webp",
  },
  {
    title: "Climate Response",
    link: "/Environment-Sustainability-and-Resilience/climate-response",
    img: "climate-adaptation.webp",
  },
  {
    title: "Rail Network Modeling",
    link: "/Transportation-and-Smart-Mobility/rail-network-modeling",
    img: "rail-simulations.webp",
  },
  {
    title: "Air Quality Assessment",
    link: "/Environment-Sustainability-and-Resilience/air-quality-assessment",
    img: "air-quality-consulting-and-engineering.webp",
  },
  {
    title: "Land Recovery & Redevelopment",
    link: "/Environment-Sustainability-and-Resilience/land-recovery-and-redevelopment",
    img: "remediation-restoration-and-redevelopment.webp",
  },
  {
    title: "Geo-Intelligence Analytics",
    link: "/Transportation-and-Smart-Mobility/geo-intelligence-analytics",
    img: "geospatial-services.webp",
  },
  {
    title: "Foundation Engineering Solutions",
    link: "/Engineering-Infrastructure/Foundation-Engineering-Solutions",
    img: "foundations-contracting.webp",
  },
  {
    title: "Smart Infrastructure & Digital Systems",
    link: "/Transportation-and-Smart-Mobility/smart-infrastructure-and-digitals-systems",
    img: "smart solutions.webp",
  },
  {
    title: "Environmental Assessment and Permitting",
    link: "/Environment-Sustainability-and-Resilience/environmental-assessment",
    img: "environmental-contracting.webp",
  },
  {
    title: "Unified Resilience",
    link: "/Environment-Sustainability-and-Resilience/unified-resilience",
    img: "risk-management-&-resilience.webp",
  },
  {
    title: "Climate Adaptation",
    link: "/Environment-Sustainability-and-Resilience/climate-adaptation",
    img: "climate-adaptation.webp",
  },
  {
    title: "Cost Management",
    link: "/Project-Advisory/cost-management",
    img: "cost-management.webp",
  },
  {
    title: "Urban Mobility",
    link: "/Transportation-and-Smart-Mobility/urban-mobility",
    img: "urbanism-+-planning.webp",
  },
  {
    title: "Environmental Contracting",
    link: "/Environment-Sustainability-and-Resilience/environmental-contracting",
    img: "environmental-and-social-impact-assessment-and-permitting.webp",
  },
  {
    title: "Digital EHS & ESG Solutions",
    link: "/Environment-Sustainability-and-Resilience/ehs-and-esg-solutions",
    img: "digital-ehsesg-solutions.webp",
  },
  {
    title: "Electrical Contracting",
    link: "/Engineering-Infrastructure/infrastructure-protection",
    img: "electrical-contracting.webp",
  },
  {
    title: "Multinational Investment",
    link: "/Urban-Planning/Interior-Architecture",
    img: "multinational-investment-and-development-1.webp",
  },
];
const Page = () => {
  const chunkArray = (
    arr: { title: string; link: string; img: string }[],
    chunkSize: number
  ) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };
  const [visibleChunks, setVisibleChunks] = useState(1);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chunks = chunkArray(services, Math.ceil(services.length / 5));
  const { inView, ref } = useInView();
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
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-blue-950 leading-tight">
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
          <div className="lg:col-span-6">
            <div className="bg-blue-50/30 p-8 rounded-xl border border-blue-200/20 shadow-xs">
              <p className="text-lg text-slate-800 leading-relaxed">
                From national infrastructure to sustainable urban design, we
                deliver projects that make a lasting, positive impact on people,
                cities, and economies. We proudly contribute to the Kingdom’s
                Vision 2030 and global development goals, engineering
                residential communities, modern road networks, advanced drainage
                systems, LEED-certified facilities, and digital design models
                that define the nxt generation of infrastructure.
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
                animate={{ scale: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
                viewport={{ once: true }}
                ref={ref}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  delay: 0.1 * idx,
                }}
                key={idx}
                className="aspect-square w-full relative"
              >
                <Link href={`/Services${service.link}`}>
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
                </Link>
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
