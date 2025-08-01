"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface dataProps {
  data: {
    label: string;
    items: string[];
  }[];
  locationsData: { country: string; cities: string[] }[];
}
const WhatWeDo = ({ data, locationsData }: dataProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <div className="flex items-start justify-between gap-9 w-full">
      <div>
        <div>
          <h3 className="text-lg font-[500]">Service We Provide</h3>
        </div>
        <div className="flex items-start gap-8">
          {data.map((service, idx) => (
            <ul key={idx} className="space-y-2 mt-2">
              <h3 className="font-[500] text-amber-100 whitespace-nowrap">
                {service.label}
              </h3>
              {service.items.map((item, id) => (
                <li className="text-sm whitespace-nowrap" key={id}>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="w-[300px] h-[320px] relative">
        <Link
          href={"/Services"}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-amber-100 text-black px-3 py-[.4rem] rounded-full text-xs border border-black"
        >
          View All Services
        </Link>
        <Image
          width={300}
          height={300}
          src={
            "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
          }
          alt={""}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-md">
        <h3 className="text-lg font-[500] text-white">In These Locations</h3>
        <div className="mt-2 space-y-2 text-white">
          {locationsData.map((location, idx) => (
            <div
              onMouseEnter={() => setCurrIndex(idx)}
              key={idx}
              className="relative w-fit"
            >
              <p
                className={`font-semibold flex items-center gap-2 ${
                  currIndex == idx ? "text-amber-100" : ""
                }`}
              >
                {location.country}{" "}
                {currIndex === idx ? (
                  <ChevronRight className="size-[14px]" />
                ) : null}
              </p>

              {/* Show cities only on hover */}
              {currIndex === idx &&
                location.cities.length > 0 &&
                location.cities[0] !== "" && (
                  <div className="absolute space-y-1 left-[120%] top-0 ml-4  text-white  rounded shadow-md">
                    {location.cities.map((city, cityIdx) => (
                      <p key={cityIdx} className="">
                        {city}
                      </p>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
