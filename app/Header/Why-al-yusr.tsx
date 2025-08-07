import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface dataProps {
  data: {
    label: string;
    description: string;
    img: string;
    link: string;
  }[];
  tabs: { label: string; link: string }[];
}
const WhyAlYusr = ({ data, tabs }: dataProps) => {
  return (
    <div className="flex justify-between items-start">
      <div className="space-y-2 pr-5 border-r border-slate-200/40">
        <div className=" w-sm h-[270px]">
          <img
            src={
              "https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg"
            }
            alt={""}
            className="w-full h-full object-cover"
          />
        </div>
        <p>+966 54 154 0090</p>
        <ul className="w-full flex items-center gap-4">
          <li>
            <button className="bg-amber-200 text-black px-4 py-[.4rem] font-[500]">
              Contact us
            </button>
          </li>
          <li>
            <button className="text-slate-50 bg-blue-500  px-4 py-[.4rem] font-[500]">
              Follow
            </button>
          </li>
          <li>
            <Instagram className="text-lg" />
          </li>
          <li>
            <Linkedin className="text-lg" />
          </li>
        </ul>
      </div>
      <div className="ml-5 flex flex-col items-end  justify-between w-full h-[340px]">
        <div>
          <p className="mb-2">
            Al Yusr is Proven and Certified to Shape the Kingdom
          </p>
          <ul className="w-full grid grid-cols-2 gap-4">
            {data.map((service, idx) => (
              <li key={idx}>
                <Link
                  href={`/Why-Al-Yusr/${service.link}`}
                  className="flex items-center gap-2 "
                >
                  <div className="w-[230px] h-[70px] overflow-hidden">
                    <Image
                      width={300}
                      height={300}
                      src={service.img}
                      alt={""}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg text-blue-300 font-[500]">
                      {service.label}
                    </h2>
                    <p className="text-xs">{service.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-start gap-5 w-full justify-between  mt-10">
          {tabs.map((tab, idx) => (
            <p
              className="border text-blue-300 border-blue-200/60 rounded-full px-4 py-[.4rem]"
              key={idx}
            >
              {tab.label}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyAlYusr;
