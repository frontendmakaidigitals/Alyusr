"use client";
import React from "react";

interface dataProps {
  data: {
    label: string;
    items: string[];
  }[];
  locationsData: { country: string; cities: string[] }[];
}
const WhatWeDo = ({ data, locationsData }: dataProps) => {
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
      <div className="w-[300px] h-[320px] relative" >
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-amber-100 text-black px-3 py-[.4rem] rounded-full text-xs border border-black">View All Services</button>
        <img
          src={
            "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
          }
          alt={""}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-md ">
        <h3 className="text-lg font-[500]">In These Locations </h3>
        <div className="mt-2 space-y-2">
          {locationsData.map((location, idx) => (
            <p key={idx}>{location.country}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
