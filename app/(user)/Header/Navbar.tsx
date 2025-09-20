"use client";
import React, { useEffect, useState } from "react";
import Logo from "../app_chunks/Logo";
import { siteConfig } from "../utils/site";
import type { SiteConfig } from "../utils/site";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import WhoWeAre from "./Who-we-are";
import WhyAlYusr from "./Why-al-yusr";
import WhatWeDo from "./What-we-do";
import Link from "next/link";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../app_chunks/Accordion";
import { Menu, X } from "lucide-react";
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
                ` `,
                idx === currIdx ? " text-white" : "text-white"
              )}
            >
              {"services" in site && site.services ? (
                <motion.button
                  className="relative  px-6 py-5 flex group items-center gap-2 overflow-hidden"
                  initial="initial"
                  whileHover="hover"
                  animate={"initial"}
                >
                  <motion.span
                    variants={hoverAnimation}
                    className="absolute inset-0 w-full bg-gradient-to-tr from-blue-700 to-sky-600 z-[10]"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />

                  <span className="relative z-20 text-white">{site.label}</span>

                  {"services" in site && site.services ? (
                    <ChevronDown className="size-3 relative z-10 text-white" />
                  ) : null}
                </motion.button>
              ) : "href" in site && site.href ? (
                <Link href={site.href} className="cursor-pointer">
                  <motion.span
                    className="relative  px-6 py-5 flex group items-center gap-2 overflow-hidden"
                    initial="initial"
                    whileHover="hover"
                    animate={"initial"}
                  >
                    <motion.span
                      variants={hoverAnimation}
                      className="absolute inset-0 w-full bg-gradient-to-tr from-blue-700 to-sky-600 z-[10]"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
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
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                      ease: [0.19, 1, 0.22, 1],
                      duration: 0.3,
                      delay: 0.25,
                    }}
                    className="w-full  absolute top-full z-[50] left-0  bg-[#1A1A1A]"
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
                            delay: 0.25,
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
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-slate-50/40"
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
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed z-50 bg-black w-screen h-[calc(100vh-86px)] left-0 top-[86px] p-6 overflow-y-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {menu.map((item, idx) =>
                "services" in item && item.services ? (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-slate-700"
                  >
                    <AccordionTrigger className="text-white flex items-center justify-between">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      {item.label === "Who We Are" ? (
                        <div>
                          <WhoWeAre
                            data={item.services}
                            wideCard={item.wideCard}
                            imgCard={item.imgCard}
                            onNavigate={handleClose} // 👈 pass close handler
                          />
                        </div>
                      ) : null}

                      {item.label === "Why Al Yusr" ? (
                        <WhyAlYusr
                          onNavigate={handleClose} // 👈 pass close handler
                          data={item.services}
                          tabs={item.tabs}
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
                        href={item.href}
                        className="text-white text-base hover:text-sky-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  )
                )
              )}
            </Accordion>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
