"use client";
import React, { useState, useRef, useEffect } from "react";
import BgLayer from "../app_chunks/BgLayer";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
const services = [
  {
    title: "Air Quality Consulting and Engineering",
    img: "Air Quality Consulting and Engineering.jpg",
  },
  {
    title: "Alternative Delivery Models",
    img: "Alternative Delivery Models.jpg",
  },
  { title: "Architecture and Design", img: "Architecture and Design.jpg" },
  { title: "Architecture", img: "Architecture.jpg" },
  { title: "Asset Advisory", img: "Asset Advisory.jpg" },
  { title: "Cities Solutions", img: "Cities Solutions.jpg" },
  { title: "Climate Adaptation", img: "Climate Adaptation.jpg" },
  { title: "Community Engagement", img: "Community Engagement.jpg" },
  { title: "Construction Management", img: "Construction Management.jpg" },
  { title: "Converged Resilience", img: "Converged Resilience.jpg" },
  { title: "Cost Management", img: "Cost Management.jpg" },
  {
    title: "Critical Infrastructure Protection",
    img: "Critical Infrastructure Protection.jpg",
  },
  { title: "Digital EHSESG Solutions", img: "Digital EHSESG Solutions.jpg" },
  {
    title: "Digital Infrastructure Services",
    img: "Digital Infrastructure Services.jpg",
  },
  { title: "Economics", img: "Economics.jpg" },
  {
    title: "EHS Management Consulting and Compliance 2",
    img: "EHS Management Consulting and Compliance 2.jpg",
  },
  {
    title: "EHS Management Consulting and Compliance",
    img: "EHS Management Consulting and Compliance.jpg",
  },
  { title: "Electrical Contracting", img: "Electrical Contracting.jpg" },
  { title: "Engineering", img: "Engineering.jpg" },
  {
    title: "Environmental and Social Impact Assessment and Permitting",
    img: "Environmental and Social Impact Assessment and Permitting.jpg",
  },
  {
    title: "Environmental Contracting 2",
    img: "Environmental Contracting 2.jpg",
  },
  {
    title: "Environmental Contracting",
    img: "Environmental Contracting.jpg",
  },
  { title: "Environmental Services 1", img: "Environmental Services 1.jpg" },
  { title: "Environmental Services 2", img: "Environmental Services 2.jpg" },
  { title: "Finance", img: "Finance.jpg" },
  { title: "Foundations Contracting", img: "Foundations Contracting.jpg" },
  { title: "Geospatial Services", img: "Geospatial Services.jpg" },
  { title: "Ground Engineering 1", img: "Ground Engineering 1.jpg" },
  { title: "Ground Engineering 2", img: "Ground Engineering 2.jpg" },
  {
    title: "Industrial and Commercial Operations and Maintenance 2",
    img: "Industrial and Commercial Operations and Maintenance 2.jpg",
  },
  {
    title: "Industrial and Commercial Operations and Maintenance",
    img: "Industrial and Commercial Operations and Maintenance.jpg",
  },
  { title: "Interior Architecture", img: "Interior Architecture.jpg" },
  { title: "IT and Cybersecurity", img: "IT and Cybersecurity.jpg" },
  { title: "Landscape Architecture", img: "Landscape Architecture.jpg" },
  { title: "Legacy Foundations", img: "Legacy Foundations.jpg" },
  {
    title: "Multinational Investment and Development 1",
    img: "Multinational Investment and Development 1.jpg",
  },
  {
    title: "Multinational Investment and Development 2",
    img: "Multinational Investment and Development 2.jpg",
  },
  {
    title: "Pedestrian Modelling (North America)",
    img: "Pedestrian Modelling (North America).jpg",
  },
  {
    title: "Pedestrian Modelling in Action",
    img: "Pedestrian Modelling in Action.jpg",
  },
  { title: "Pedestrian Modelling", img: "Pedestrian Modelling.jpg" },
  { title: "People + Place Advisory", img: "People + Place Advisory.jpg" },
  { title: "Planning 2", img: "Planning 2.jpg" },
  { title: "Planning and Consulting", img: "Planning and Consulting.jpg" },
  { title: "Planning", img: "Planning.jpg" },
  {
    title: "Process Development & Implementation",
    img: "Process Development & Implementation.jpg",
  },
  { title: "Program Management 2", img: "Program Management 2.jpg" },
  { title: "Program Management", img: "Program Management.jpg" },
  {
    title: "Public-Private Partnerships",
    img: "Public-Private Partnerships.jpg",
  },
  { title: "Rail Simulations", img: "Rail Simulations.jpg" },
  {
    title: "Remediation, Restoration and Redevelopment",
    img: "Remediation, Restoration and Redevelopment.jpg",
  },
  {
    title: "Risk Management & Resilience",
    img: "Risk Management & Resilience.jpg",
  },
  { title: "SCCI Electric", img: "SCCI Electric.jpg" },
  { title: "Simulation Models", img: "Simulation Models.jpg" },
  { title: "Strategic consulting", img: "Strategic consulting.jpg" },
  {
    title: "Tunnels, Trenchless Technology and Underground Infrastructure",
    img: "Tunnels, Trenchless Technology and Underground Infrastructure.jpg",
  },
  { title: "Urban Analytics", img: "Urban Analytics.jpg" },
  { title: "Urban Design", img: "Urban Design.jpg" },
  { title: "Urbanism + Planning", img: "Urbanism + Planning.jpg" },
  {
    title: "Vertical Transportation Services (North America) 2",
    img: "Vertical Transportation Services (North America) 2.jpg",
  },
  {
    title: "Vertical Transportation Services (North America) 3",
    img: "Vertical Transportation Services (North America) 3.jpg",
  },
  {
    title: "Vertical Transportation Services (North America)",
    img: "Vertical Transportation Services (North America).jpg",
  },
  {
    title: "Visualization and Virtual Reality",
    img: "Visualization and Virtual Reality.jpg",
  },
];
const Page = () => {
  const chunkArray = (arr: any[], chunkSize: number) => {
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
