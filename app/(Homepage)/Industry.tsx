"use client";
import React from "react";
import { User, Building2, Hammer } from "lucide-react";
import BgLayer from "../app_chunks/BgLayer";

const Industry = () => {
  const Industries = [
    {
      img: "https://images.pexels.com/photos/21391305/pexels-photo-21391305.jpeg", // Add a valid image path
      title: "Owners / Developers",
      icon: User,
      desc: "We work with owners to develop their digital data and BIM management program that defines their content.",
    },
    {
      img: "https://images.pexels.com/photos/5453857/pexels-photo-5453857.jpeg", // Add a valid image path
      title: "Consultants",
      icon: Building2,
      desc: "We ensure the transition fromold and faulty system to modern and more reliable BIM programs.",
    },
    {
      img: "https://images.pexels.com/photos/6196229/pexels-photo-6196229.jpeg", // Add a valid image path
      title: "Contractors",
      icon: Hammer,
      desc: "With BIMLEAD, contractors can optimize their construction processes, improve collabration with other.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-semibold">
          Industry <span className="text-blue-500">Insights</span> and{" "}
          <span className="text-blue-500">Case</span> Studies
        </h1>
        <h2 className="text-center mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          In-depth articles on engineering trends, smart infrastructure,
          sustainability, and Vision 2030 impact.
        </h2>

        <ul className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {Industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx} className="relative w-full h-[400px]   rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover "
                />
                <BgLayer />
                <div className="absolute bottom-0 translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-[90%] left-1/2 transform -translate-x-1/2">
                  <div className="mb-4 flex items-center gap-2 text-blue-600">
                    <Icon className="w-20 h-20 p-2 text-white bg-blue-500 rounded-full left-1/2 -translate-x-1/2 absolute top-0 -translate-y-1/2" />

                    <h2 className="text-2xl text-slate-600 mt-8 font-semibold w-full text-center">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 text-center">
                    {item.desc}
                  </p>
                  <div className="w-full flex justify-center">
                    {" "}
                    <button className="text-black font-[600] hover:underline text-sm">
                      Read more
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Industry;
