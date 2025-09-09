import React from "react";
import Link from "next/link";
import Image from "next/image";

interface dataProps {
  data: {
    label: string;
    submenu: {
      label: string;
      link: string;
    }[];
  }[];
  wideCard: { label: string; desc: string; img: string; link: string }[];
  imgCard: { button: string; img: string }[];
}

const WhoWeAre = ({ data, imgCard, wideCard }: dataProps) => {
  return (
    <section className="w-full  text-white ">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr] gap-8 items-start">
        {/* Left Side Navigation */}
        <ul className="space-y-4">
          {data.map((section, idx) => (
            <li key={idx}>
              <ul className="space-y-2 text-sm 2xl:text-base text-white/90">
                {section.submenu.map((item, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      href={`/Who-we-are/${item.link}`}
                      className="block w-full text-center border border-blue-300 hover:bg-gradient-to-br from-[#06b6d4]
via-[#2563eb]
to-[#6366f1]  hover:text-white rounded-full px-4 py-2 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Center Content */}
        <div className="space-y-6">
          <p className="text-sm font-medium italic uppercase tracking-wide">
            Al Yusr is making global impact with Saudi - Vision 2030
          </p>
          <ul className="space-y-6">
            {wideCard.map((card, idx) => (
              <li key={idx}>
                <Link
                  href={`/Who-we-are/${card.link}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-[120px] h-[100px] 2xl:w-[150px] 2xl:h-[120px] overflow-hidden rounded-md bg-gray-800 shrink-0">
                    <Image
                      src={card.img}
                      alt={card.label}
                      width={150}
                      height={120}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-200 mb-1">
                      {card.label}
                    </h3>
                    <p className="text-sm 2xl:text-base text-white/80 max-w-md leading-snug">
                      {card.desc}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-full">
          {imgCard.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden group w-full h-[280px]"
            >
              <Image
                src={img.img}
                alt={img.button}
                width={700}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white whitespace-nowrap text-sm font-medium px-5 py-2 rounded-full border border-black shadow-md">
                {img.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
