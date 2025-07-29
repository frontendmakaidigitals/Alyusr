"use client";
import React, { useState, useRef, useEffect } from "react";
import BgLayer from "../app_chunks/BgLayer";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
const services = [
  {
    title: "Air Quality Consulting and Engineering",
    img: "air-quality-consulting-and-engineering.webp",
  },
  {
    title: "Alternative Delivery Models",
    img: "alternative-delivery-models.webp",
  },
  {
    title: "Architecture and Design",
    img: "architecture-and-design.webp",
  },
  {
    title: "Architecture",
    img: "Architecture.webp",
  },
  {
    title: "Asset Advisory",
    img: "asset-advisory.webp",
  },
  {
    title: "Cities Solutions",
    img: "cities-solutions.webp",
  },
  {
    title: "Climate Adaptation",
    img: "climate-adaptation.webp",
  },
  {
    title: "Community Engagement",
    img: "community-engagement.webp",
  },
  {
    title: "Construction Management",
    img: "construction-management.webp",
  },
  {
    title: "Converged Resilience",
    img: "converged-resilience.webp",
  },
  {
    title: "Cost Management",
    img: "cost-management.webp",
  },
  {
    title: "Critical Infrastructure Protection",
    img: "critical-infrastructure protection.webp",
  },
  {
    title: "Digital EHSESG Solutions",
    img: "digital-ehsesg-solutions.webp",
  },
  {
    title: "Digital Infrastructure Services",
    img: "digital-infrastructure-services.webp",
  },
  {
    title: "Economics",
    img: "Economics.webp",
  },
  {
    title: "EHS Management Consulting and Compliance 2",
    img: "ehs-management-consulting-and-compliance-2.webp",
  },
  {
    title: "EHS Management Consulting and Compliance",
    img: "ehs-management-consulting-and-compliance.webp",
  },
  {
    title: "Electrical Contracting",
    img: "electrical-contracting.webp",
  },
  {
    title: "Engineering",
    img: "Engineering.webp",
  },
  {
    title: "Environmental and Social Impact Assessment and Permitting",
    img: "environmental-and-social-impact-assessment-and-permitting.webp",
  },
  {
    title: "Environmental Contracting 2",
    img: "environmental-contracting-2.webp",
  },
  {
    title: "Environmental Contracting",
    img: "environmental-contracting.webp",
  },
  {
    title: "Environmental Services 1",
    img: "environmental-services-1.webp",
  },
  {
    title: "Environmental Services 2",
    img: "environmental-services-2.webp",
  },
  {
    title: "Finance",
    img: "Finance.webp",
  },
  {
    title: "Foundations Contracting",
    img: "foundations-contracting.webp",
  },
  {
    title: "Geospatial Services",
    img: "geospatial-services.webp",
  },
  {
    title: "Ground Engineering 1",
    img: "ground-engineering-1.webp",
  },
  {
    title: "Ground Engineering 2",
    img: "ground-engineering-2.webp",
  },
  {
    title: "Industrial and Commercial Operations and Maintenance 2",
    img: "industrial-and-commercial-operations-and-maintenance-2.webp",
  },
  {
    title: "Industrial and Commercial Operations and Maintenance",
    img: "industrial-and-commercial-operations-and-maintenance.webp",
  },
  {
    title: "Interior Architecture",
    img: "interior-architecture.webp",
  },
  {
    title: "IT and Cybersecurity",
    img: "it-and-cybersecurity.webp",
  },
  {
    title: "Landscape Architecture",
    img: "landscape-architecture.webp",
  },
  {
    title: "Legacy Foundations",
    img: "legacy-foundations.webp",
  },
  {
    title: "Multinational Investment and Development 1",
    img: "multinational-investment-and-development-1.webp",
  },
  {
    title: "Multinational Investment and Development 2",
    img: "multinational-investment-and-development-2.webp",
  },
  {
    title: "Pedestrian Modelling (North America)",
    img: "pedestrian-modelling-(north-america).webp",
  },
  {
    title: "Pedestrian Modelling in Action",
    img: "pedestrian-modelling-in-action.webp",
  },
  {
    title: "Pedestrian Modelling",
    img: "pedestrian-modelling.webp",
  },
  {
    title: "People + Place Advisory",
    img: "people-+-place-advisory.webp",
  },
  {
    title: "Planning 2",
    img: "planning-2.webp",
  },
  {
    title: "Planning and Consulting",
    img: "planning-and-consulting.webp",
  },
  {
    title: "Planning",
    img: "Planning.webp",
  },
  {
    title: "Process Development & Implementation",
    img: "process-development-&-implementation.webp",
  },
  {
    title: "Program Management 2",
    img: "program-management-2.webp",
  },
  {
    title: "Program Management",
    img: "program-management.webp",
  },
  {
    title: "Public Private Partnerships",
    img: "public-private-partnerships.webp",
  },
  {
    title: "Rail Simulations",
    img: "rail-simulations.webp",
  },
  {
    title: "Remediation, Restoration and Redevelopment",
    img: "remediation,-restoration-and-redevelopment.webp",
  },
  {
    title: "Risk Management & Resilience",
    img: "risk-management-&-resilience.webp",
  },
  {
    title: "SCCI Electric",
    img: "scci-electric.webp",
  },
  {
    title: "Simulation Models",
    img: "simulation-models.webp",
  },
  {
    title: "Strategic Consulting",
    img: "strategic-consulting.webp",
  },
  {
    title: "Tunnels, Trenchless Technology and Underground Infrastructure",
    img: "tunnels,-trenchless-technology-and-underground-infrastructure.webp",
  },
  {
    title: "Urban Analytics",
    img: "urban-analytics.webp",
  },
  {
    title: "Urban Design",
    img: "urban-design.webp",
  },
  {
    title: "Urbanism + Planning",
    img: "urbanism-+-planning.webp",
  },
  {
    title: "Vertical Transportation Services (North America) 2",
    img: "vertical-transportation-services-(north-america)-2.webp",
  },
  {
    title: "Vertical Transportation Services (North America) 3",
    img: "vertical-transportation-services-(north-america)-3.webp",
  },
  {
    title: "Vertical Transportation Services (North America)",
    img: "vertical-transportation-services-(north-america).webp",
  },
  {
    title: "Visualization and Virtual Reality",
    img: "visualization-and-virtual-reality.webp",
  },
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
              <li key={idx} className="aspect-square w-full relative">
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
              </li>
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
