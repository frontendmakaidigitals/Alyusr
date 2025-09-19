"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import Image from "next/image";
const Process = () => {
  const processes = [
    {
      title: "Research",
      description:
        "We begin by thoroughly analyzing your goals, audience, and market trends to uncover insights that shape a strong foundation for your project.",
      image: "/process/process1.svg",
    },
    {
      title: "Design",
      description:
        "Our creative team transforms ideas into user-centric, visually compelling designs that balance aesthetics with intuitive functionality.",
      image: "/process/process2.svg",
    },
    {
      title: "Development",
      description:
        "We bring the designs to life with clean, efficient, and scalable code—ensuring performance, security, and flexibility.",
      image: "/process/process3.svg",
    },
    {
      title: "Testing",
      description:
        "Rigorous testing across devices and environments guarantees reliability, usability, and a seamless user experience.",
      image: "/process/process4.svg",
    },
    {
      title: "Launch",
      description:
        "Your project goes live with a smooth rollout, ensuring stability, visibility, and an impactful first impression.",
      image: "/process/process5.svg",
    },
    {
      title: "Maintenance",
      description:
        "We provide ongoing monitoring, updates, and enhancements to keep your project secure, optimized, and future-ready.",
      image: "/process/process6.svg",
    },
  ];
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();
    api.on("select", update);

    return () => {
      api.off?.("select", update);
    };
  }, [api]);

  return (
    <section className="bg-white py-20 px-6 text-gray-900">
      <div className="flex  items-center gap-5">
        <div>
          <motion.h2 className="text-5xl font-bold mb-2 text-start">
            The <span className="text-blue-500">Process we</span> Follow
          </motion.h2>

          <motion.p
            className="text-start "
            initial="hidden"
            whileInView="visible"
            custom={0}
          >
            Our project managers are equipped to handle every stage of the
            construction life cycle. From concept to commissioning, we apply a
            proactive, organized, and flexible methodology that ensures smooth
            execution and long-term success.
          </motion.p>
        </div>

        <div>
          <div className="my-6 flex justify-end gap-2">
            <button
              disabled={!canScrollPrev}
              onClick={() => api?.scrollPrev()}
              className="bg-blue-500 disabled:bg-slate-400 cursor-pointer text-white p-2 rounded-full"
            >
              <ArrowLeft />
            </button>
            <button
              disabled={!canScrollNext}
              onClick={() => api?.scrollNext()}
              className="bg-blue-500 disabled:bg-slate-400 cursor-pointer text-white p-2 rounded-full"
            >
              <ArrowRight />
            </button>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi}
            className="w-full min-w-4xl "
          >
            <CarouselContent className="-ml-4 ">
              {processes.map((phase, i) => (
                <CarouselItem
                  key={i}
                  className="basis-1/2 pt-5 relative lg:basis-2/5"
                >
                  <motion.h2 className="text-6xl z-10 left-8 text-white/80 font-bold absolute top-0 -translate-y-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)]">
                    {i + 1}
                  </motion.h2>

                  <div className="bg-blue-50 h-full relative shadow-sm">
                    <div className=" h-[410px] w-full overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 w-full h-full bg-black/10" />
                      <Image
                        src={phase.image}
                        className="w-full h-full object-contain"
                        width={400}
                        height={400}
                        alt={""}
                      />
                    </div>
                    <h3 className="font-semibold hidden absolute text-xl max-w-[90%] text-slate-50 p-4 bottom-0  left-0">
                      {phase.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>{" "}
        </div>
      </div>
    </section>
  );
};

export default Process;
