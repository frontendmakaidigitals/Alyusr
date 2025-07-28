import React from "react";
import Link from "next/link";
interface dataProps {
  data: {
    label: string;
    submenu: {
      label: string;
      link: string;
    }[];
  }[];
  wideCard: { label: string; desc: string; img: string }[];
  imgCard: { button: string; img: string }[];
}

const WhoWeAre = ({ data, imgCard, wideCard }: dataProps) => {
  return (
    <div className="flex items-start justify-between w-full">
      <ul className="space-y-4 border-r pr-6 border-slate-100/50 min-w-[240px]">
        {data.map((site, idx) => (
          <li key={idx}>
            <ul className="space-y-2 text-sm 2xl:text-lg text-white/80">
              {site.submenu.map((subItem, subIdx) => (
                <li key={subIdx}>
                  <Link
                    href={subItem.link}
                    className="block border text-slate-200 border-lime-200 hover:bg-amber-300 hover:text-black rounded-full px-3 py-[.6rem] hover:underline"
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="w-full px-6">
        <p className="text-sm font-[500] italic text-white uppercase">
          Al Yusr is making global impact with saudi - vision 2030
        </p>
        <ul className="space-y-4 mt-5">
          {wideCard.map((card, idx) => (
            <li key={idx} className="flex items-center gap-2 2xl:gap-3">
              <div className="w-[150px] 2xl:w-[200px] 2xl:h-[130px] bg-gray-800 h-[100px] overflow-hidden">
                <img
                  src={card.img}
                  alt={""}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl text-yellow-100 font-[500]">
                  {card.label}
                </h2>
                <p className="text-sm 2xl:text-lg max-w-xs 2xl:max-w-lg">
                  {card.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ul className=" max-w-lg grid grid-cols-2 gap-3">
        {imgCard.map((img, idx) => (
          <li key={idx} className="relative">
            <button className="absolute bottom-3 whitespace-nowrap left-1/2 -translate-x-1/2 text-xs rounded-full py-[.4rem] bg-amber-100 text-black border- border-slate-900  px-4">
              {img.button}
            </button>
            <img
              src={img.img}
              alt={""}
              className="w-full h-full object-cover "
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhoWeAre;
