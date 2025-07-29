"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
const GlobalSection = () => {
  const { ref, inView } = useInView({ amount: 0.9, once: true });

  return (
    <div className="py-20  bg-gradient-to-br from-[#ebf3ff] to-[#e2ecff]">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-12 container mx-auto">
        <div ref={ref} className="">
          <h1 className="text-6xl font-[500]">
            A Worldwide Footprint,{" "}
            <span className="text-blue-500">Globally Present</span>
          </h1>
          <p className="mt-5">
            ALYUSR Engineering Consulting proudly operates across multiple
            regions, reflecting its commitment to delivering world-class
            engineering solutions with local insight. Headquartered in Riyadh,
            Saudi Arabia, the company has expanded its footprint with strategic
            offices in Egypt, the United Kingdom, and Sri Lanka. This global
            presence enables ALYUSR to serve a diverse client base, adapt to
            international standards, and seamlessly manage projects across
            borders, while maintaining a deep understanding of local
            regulations, culture, and market dynamics.
          </p>
          <button className="mt-6 bg-gradient-to-br px-4 py-[.45rem] text-sm rounded-lg text-slate-50 flex items-center gap-2 from-[#387EF0] to-[#2651C2]">
            Explore Our Projects <ArrowUpRight />
          </button>
        </div>

        <motion.img
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          className="w-full object-contain h-[330px] xl:h-[520px] 2xl:h-[550px]"
          src={"/Global.png"}
        />
      </div>
    </div>
  );
};

export default GlobalSection;
