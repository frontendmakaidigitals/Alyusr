"use client";
import type { SiteConfig } from "../utils/site";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../app_chunks/Accordion";
import { siteConfig } from "../utils/site";
import Logo from "../app_chunks/Logo";

import WhatWeDo from "./What-we-do";
import WhyAlYusr from "./Why-al-yusr";
import WhoWeAre from "./Who-we-are";

import { cn } from "@/lib/utils";
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
  const hoverAnimation = {
    initial: { scaleY: 0, opacity: 0, originY: 1 },
    hover: {
      scaleY: 1,
      opacity: 1,
      originY: 1,
      transition: {
        duration: 0.45,
        ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <header className=" bg-[#000000] relative z-50">
      <div className="flex py-3 lg:py-0 justify-between items-center container mx-auto">
        <Logo />

        {/* Menu Starts from here */}

        <ul className="lg:flex hidden text-sm justify-between items-center">
          {menu.map((site, idx) => (
            <li
              key={idx}
              className={cn(
                ` `,
                idx === currIdx ? " text-white" : "text-white",
              )}
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
            >
              {"services" in site && site.services ? (
                <motion.button
                  animate={"initial"}
                  className="relative  px-6 py-5 flex group items-center gap-2 overflow-hidden"
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.span
                    className="absolute inset-0 w-full bg-gradient-to-tr from-blue-700 to-sky-600 z-[10]"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    variants={hoverAnimation}
                  />

                  <span className="relative z-20 text-white">{site.label}</span>

                  {"services" in site && site.services ? (
                    <ChevronDown className="size-3 relative z-10 text-white" />
                  ) : null}
                </motion.button>
              ) : "href" in site && site.href ? (
                <Link className="cursor-pointer" href={site.href}>
                  <motion.span
                    animate={"initial"}
                    className="relative  px-6 py-5 flex group items-center gap-2 overflow-hidden"
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.span
                      className="absolute inset-0 w-full bg-gradient-to-tr from-blue-700 to-sky-600 z-[10]"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      variants={hoverAnimation}
                    />

                    <span className="relative z-20 text-white">
                      {site.label}
                    </span>

                    {"services" in site && site.services ? (
                      <ChevronDown className="size-3 relative z-10 text-white" />
                    ) : null}
                  </motion.span>
                </Link>
              ) : null}
              <AnimatePresence mode="wait">
                {isMenuShowing ? (
                  <motion.div
                    animate={{ height: "auto" }}
                    className="w-full  absolute top-full z-[50] left-0  bg-[#1A1A1A]"
                    exit={{ height: 0 }}
                    initial={{ height: 0 }}
                    transition={{
                      ease: [0.19, 1, 0.22, 1],
                      duration: 0.3,
                      delay: 0.25,
                    }}
                  >
                    {currIdx === idx ? (
                      <motion.div
                        key={`${idx}-content`}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.4,
                            ease: [0.19, 1, 0.22, 1],
                            delay: 0.25,
                          },
                        }}
                        className="container mx-auto py-10"
                        exit={{ opacity: 0 }}
                        initial={{
                          x:
                            direction === "right"
                              ? 50
                              : direction === "left"
                                ? -50
                                : 0,
                          opacity: 0,
                        }}
                      >
                        {menu[idx].label === "Who We Are" &&
                        "services" in menu[idx] ? (
                          <WhoWeAre
                            data={menu[idx].services}
                            imgCard={menu[idx].imgCard}
                            wideCard={menu[idx].wideCard}
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

        <MenuMobile menu={menu} />
      </div>
    </header>
  );
};

export default Navbar;

const MenuMobile = ({ menu }: { menu: SiteConfig["navItems"] }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // restore scroll
    }

    return () => {
      document.body.style.overflow = ""; // cleanup
    };
  }, [isOpen]);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="block lg:hidden">
      <button
        className="p-2 rounded-lg bg-slate-50/40"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="text-white" />
        ) : (
          <Menu className="text-white" />
        )}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ x: "0%" }}
            className="fixed z-50 bg-black w-screen h-[calc(100vh-86px)] left-0 top-[86px] p-6 overflow-y-auto"
            exit={{ x: "100%" }}
            initial={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            <Accordion collapsible className="space-y-4" type="single">
              {menu.map((item, idx) =>
                "services" in item && item.services ? (
                  <AccordionItem
                    key={idx}
                    className="border-b border-slate-700"
                    value={`item-${idx}`}
                  >
                    <AccordionTrigger className="text-white flex items-center justify-between">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      {item.label === "Who We Are" ? (
                        <div>
                          <WhoWeAre
                            data={item.services}
                            imgCard={item.imgCard}
                            wideCard={item.wideCard}
                            onNavigate={handleClose} // 👈 pass close handler
                          />
                        </div>
                      ) : null}

                      {item.label === "Why Al Yusr" ? (
                        <WhyAlYusr
                          data={item.services}
                          tabs={item.tabs}
                          onNavigate={handleClose} // 👈 pass close handler
                        />
                      ) : null}

                      {item.label === "What We Do" ? (
                        <WhatWeDo
                          data={item.services}
                          locationsData={item.locationsData}
                          onNavigate={handleClose} // 👈 pass close handler
                        />
                      ) : null}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  "href" in item &&
                  item.href && (
                    <div key={idx} className="border-b border-slate-700 py-3">
                      <Link
                        className="text-white text-base hover:text-sky-400"
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  )
                ),
              )}
            </Accordion>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
