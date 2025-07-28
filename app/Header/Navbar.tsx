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

  const [isMenuShowing, setIsMenuShowing] = useState(false);
  return (
    <header className=" bg-[#000000] relative">
      <div className="flex  justify-between items-center container mx-auto">
        <Logo />

        {/* Menu Starts from here */}

        <ul className="flex  justify-between items-center gap-6">
          {menu.map((site, idx) => (
            <li
              onMouseEnter={() => {
                setCurrIdx(idx);
                "services" in site && site.services
                  ? setIsMenuShowing(true)
                  : setIsMenuShowing(false);
              }}
              onMouseLeave={() => {
                setCurrIdx(null);
                setIsMenuShowing(false);
              }}
              key={idx}
              className={cn(
                ` flex px-4  py-5 items-center gap-2`,
                idx === currIdx ? "bg-[#144273] text-white" : "text-white"
              )}
            >
              {site.label}
              {"services" in site && site.services ? (
                <ChevronDown className="size-3" />
              ) : null}

              <AnimatePresence mode="wait">
                {"services" in site &&
                site.services &&
                isMenuShowing &&
                currIdx === idx ? (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ ease: [0.19, 1, 0.22, 1], duration: 0.7 }}
                    className="w-full  absolute top-full z-30 left-0  bg-[#144273]"
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{ opacity: 1, transition: { delay: 0.3 } }}
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
