"use client";
import React, { useState, useRef, useEffect } from "react";
import BgLayer from "../app_chunks/BgLayer";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
const services = [
  {
    title: "Air Quality Consulting and Engineering",
    img: "Air Quality Consulting and Engineering.webp",
  },
  {
    title: "Alternative Delivery Models",
    img: "Alternative Delivery Models.webp",
  },
  { title: "Architecture and Design", img: "Architecture and Design.webp" },
  { title: "Architecture", img: "Architecture.webp" },
  { title: "Asset Advisory", img: "Asset Advisory.webp" },
  { title: "Cities Solutions", img: "Cities Solutions.webp" },
  { title: "Climate Adaptation", img: "Climate Adaptation.webp" },
  { title: "Community Engagement", img: "Community Engagement.webp" },
  { title: "Construction Management", img: "Construction Management.webp" },
  { title: "Converged Resilience", img: "Converged Resilience.webp" },
  { title: "Cost Management", img: "Cost Management.webp" },
  {
    title: "Critical Infrastructure Protection",
    img: "Critical Infrastructure Protection.webp",
  },
  { title: "Digital EHSESG Solutions", img: "Digital EHSESG Solutions.webp" },
  {
    title: "Digital Infrastructure Services",
    img: "Digital Infrastructure Services.webp",
  },
  { title: "Economics", img: "Economics.webp" },
  {
    title: "EHS Management Consulting and Compliance 2",
    img: "EHS Management Consulting and Compliance 2.webp",
  },
  {
    title: "EHS Management Consulting and Compliance",
    img: "EHS Management Consulting and Compliance.webp",
  },
  { title: "Electrical Contracting", img: "Electrical Contracting.webp" },
  { title: "Engineering", img: "Engineering.webp" },
  {
    title: "Environmental and Social Impact Assessment and Permitting",
    img: "Environmental and Social Impact Assessment and Permitting.webp",
  },
  {
    title: "Environmental Contracting 2",
    img: "Environmental Contracting 2.webp",
  },
  {
    title: "Environmental Contracting",
    img: "Environmental Contracting.webp",
  },
  { title: "Environmental Services 1", img: "Environmental Services 1.webp" },
  { title: "Environmental Services 2", img: "Environmental Services 2.webp" },
  { title: "Finance", img: "Finance.webp" },
  { title: "Foundations Contracting", img: "Foundations Contracting.webp" },
  { title: "Geospatial Services", img: "Geospatial Services.webp" },
  { title: "Ground Engineering 1", img: "Ground Engineering 1.webp" },
  { title: "Ground Engineering 2", img: "Ground Engineering 2.webp" },
  {
    title: "Industrial and Commercial Operations and Maintenance 2",
    img: "Industrial and Commercial Operations and Maintenance 2.webp",
  },
  {
    title: "Industrial and Commercial Operations and Maintenance",
    img: "Industrial and Commercial Operations and Maintenance.webp",
  },
  { title: "Interior Architecture", img: "Interior Architecture.webp" },
  { title: "IT and Cybersecurity", img: "IT and Cybersecurity.webp" },
  { title: "Landscape Architecture", img: "Landscape Architecture.webp" },
  { title: "Legacy Foundations", img: "Legacy Foundations.webp" },
  {
    title: "Multinational Investment and Development 1",
    img: "Multinational Investment and Development 1.webp",
  },
  {
    title: "Multinational Investment and Development 2",
    img: "Multinational Investment and Development 2.webp",
  },
  {
    title: "Pedestrian Modelling (North America)",
    img: "Pedestrian Modelling (North America).webp",
  },
  {
    title: "Pedestrian Modelling in Action",
    img: "Pedestrian Modelling in Action.webp",
  },
  { title: "Pedestrian Modelling", img: "Pedestrian Modelling.webp" },
  { title: "People + Place Advisory", img: "People + Place Advisory.webp" },
  { title: "Planning 2", img: "Planning 2.webp" },
  { title: "Planning and Consulting", img: "Planning and Consulting.webp" },
  { title: "Planning", img: "Planning.webp" },
  {
    title: "Process Development & Implementation",
    img: "Process Development & Implementation.webp",
  },
  { title: "Program Management 2", img: "Program Management 2.webp" },
  { title: "Program Management", img: "Program Management.webp" },
  {
    title: "Public-Private Partnerships",
    img: "Public-Private Partnerships.webp",
  },
  { title: "Rail Simulations", img: "Rail Simulations.webp" },
  {
    title: "Remediation, Restoration and Redevelopment",
    img: "Remediation, Restoration and Redevelopment.webp",
  },
  {
    title: "Risk Management & Resilience",
    img: "Risk Management & Resilience.webp",
  },
  { title: "SCCI Electric", img: "SCCI Electric.webp" },
  { title: "Simulation Models", img: "Simulation Models.webp" },
  { title: "Strategic consulting", img: "Strategic consulting.webp" },
  {
    title: "Tunnels, Trenchless Technology and Underground Infrastructure",
    img: "Tunnels, Trenchless Technology and Underground Infrastructure.webp",
  },
  { title: "Urban Analytics", img: "Urban Analytics.webp" },
  { title: "Urban Design", img: "Urban Design.webp" },
  { title: "Urbanism + Planning", img: "Urbanism + Planning.webp" },
  {
    title: "Vertical Transportation Services (North America) 2",
    img: "Vertical Transportation Services (North America) 2.webp",
  },
  {
    title: "Vertical Transportation Services (North America) 3",
    img: "Vertical Transportation Services (North America) 3.webp",
  },
  {
    title: "Vertical Transportation Services (North America)",
    img: "Vertical Transportation Services (North America).webp",
  },
  {
    title: "Visualization and Virtual Reality",
    img: "Visualization and Virtual Reality.webp",
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
