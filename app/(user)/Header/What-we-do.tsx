"use client";
import React, { useState } from "react";
import Link from "next/link";
interface dataProps {
  data: {
    label: string;
    items: { label: string; link: string }[];
  }[];
  locationsData: { country: string; cities: string[] }[];
  onNavigate?: () => void;
}
const WhatWeDo = ({ data, locationsData, onNavigate }: dataProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <div className="flex items-start justify-between gap-7 w-full">
      <div>
        <div>
          <h3 className="text-lg font-[500] hidden lg:block">
            Service We Provide
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {data.map((service, idx) => (
            <ul key={idx} className="space-y-2 mt-2">
              <h3 className="font-[500] text-blue-300 whitespace-nowrap">
                {service.label}
              </h3>
              <div className="space-y-3">
                {service.items.map((item, id) => (
                  <li className="text-sm text-white whitespace-nowrap" key={id}>
                    <Link
                      onClick={onNavigate}
                      href={`/Services/${
                        service.label === "Engineering & Infrastructure"
                          ? "Engineering-Infrastructure"
                          : service.label === "Urban Planning"
                          ? "Urban-Planning"
                          : service.label === "Transportation & Smart Mobility"
                          ? "Transportation-and-Smart-Mobility"
                          : service.label === "Project Advisory"
                          ? "Project-Advisory"
                          : service.label ===
                            "Environment, Sustainability & Resilience"
                          ? "Environment-Sustainability-and-Resilience"
                          : null
                      }/${item.link}`}
                    >
                      {" "}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          ))}
        </div>
      </div>
      {/*
       <div className="w-[280px] h-[420px] relative">
        <Link
          href={"/Services"}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-[.4rem] rounded-full text-xs border border-black"
        >
          View All Services
        </Link>
        <Image
          width={300}
          height={300}
          src={
            "https://images.pexels.com/photos/1109541/pexels-photo-1109541.webp"
          }
          alt={""}
          className="w-full h-full object-cover"
        />
      </div>
     
     */}
    </div>
  );
};

export default WhatWeDo;
