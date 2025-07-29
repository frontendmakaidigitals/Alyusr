"use client";
import React, { useState } from "react";
import Logo from "../app_chunks/Logo";
import { siteConfig } from "../utils/site";
import type { SiteConfig } from "../utils/site";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import WhoWeAre from "./Who-we-are";
import WhyAlYusr from "./Why-al-yusr";
import WhatWeDo from "./What-we-do";

const Navbar = () => {
  const [currIdx, setCurrIdx] = useState<null | number>(null);
  const menu: SiteConfig["navItems"] = siteConfig.navItems;
  const [prevIdx, setPrevIdx] = useState<null | number>(null);
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const direction =
    prevIdx === null || currIdx === null
      ? null
      : currIdx > prevIdx
      ? "right"
      : "left";
  console.log(direction, prevIdx);
  return (
    <header className=" bg-[#000000] relative">
      <div className="flex  justify-between items-center container mx-auto">
        <Logo />

        {/* Menu Starts from here */}

        <ul className="flex  justify-between items-center">
          {menu.map((site, idx) => (
            <li
              onMouseEnter={() => {
                setPrevIdx(currIdx);
                setCurrIdx(idx);
                "services" in site && site.services
                  ? setIsMenuShowing(true)
                  : setIsMenuShowing(false);
              }}
              onMouseLeave={() => {
                setCurrIdx(null);
                setIsMenuShowing(false);
                setPrevIdx(null);
              }}
              key={idx}
              className={cn(
                ` flex px-6  py-5 items-center gap-2`,
                idx === currIdx ? "bg-[#144273] text-white" : "text-white"
              )}
            >
              {site.label}
              {"services" in site && site.services ? (
                <ChevronDown className="size-3" />
              ) : null}

              <AnimatePresence mode="wait">
                {isMenuShowing ? (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                      ease: [0.19, 1, 0.22, 1],
                      duration: 0.3,
                      delay: 0.25,
                    }}
                    className="w-full  absolute top-full z-30 left-0  bg-[#1A1A1A]"
                  >
                    {currIdx === idx ? (
                      <motion.div
                        key={`${idx}-content`}
                        initial={{
                          x:
                            direction === "right"
                              ? 50
                              : direction === "left"
                              ? -50
                              : 0,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.4,
                            ease: [0.19, 1, 0.22, 1],
                            delay:.25
                          },
                        }}
                        exit={{ opacity: 0 }}
                        className="container mx-auto py-10"
                      >
                        {menu[idx].label === "Who We Are" &&
                        "services" in menu[idx] ? (
                          <WhoWeAre
                            data={menu[idx].services}
                            wideCard={menu[idx].wideCard}
                            imgCard={menu[idx].imgCard}
                          />
                        ) : null}

                        {menu[idx].label === "Why Al Yusr" &&
                        "services" in menu[idx] ? (
                          <WhyAlYusr
                            data={menu[idx].services}
                            tabs={menu[idx].tabs}
                          />
                        ) : null}
                        {menu[idx].label === "What We Do" &&
                        "services" in menu[idx] ? (
                          <WhatWeDo
                            data={menu[idx].services}
                            locationsData={menu[idx].locationsData}
                          />
                        ) : null}
                      </motion.div>
                    ) : null}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
