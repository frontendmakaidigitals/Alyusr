"use client";

import React, { useEffect, useState } from "react";
import BgLayer from "../app_chunks/BgLayer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Editor } from "@/components/blocks/editor-00/editor";
const Industry = () => {
  interface Blog {
    id: string | number;
    title: string;
    content: string;
    image?: string;
    author?: string;
    [key: string]: any;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-5xl text-center font-semibold">
          Industry <span className="text-blue-500">Insights</span> and{" "}
          <span className="text-blue-500">Case</span> Studies
        </h1>
        <h2 className="text-center mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          In-depth articles on engineering trends, smart infrastructure,
          sustainability, and Vision 2030 impact.
        </h2>
        <Carousel
          opts={{ align: "start" }}
          setApi={setApi}
          className="w-full mt-12"
        >
          <CarouselContent className="lg:px-5">
            {blogs.map((item, idx) => {
              return (
                <CarouselItem
                  key={idx}
                  className={`relative w-full basis-1/1  lg:basis-1/3 h-[400px] ${
                    idx < 3 ? "mb-[120px]" : ""
                  } rounded-xl`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover "
                  />
                  <BgLayer />
                  <div className="absolute bottom-0 translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-[90%] left-1/2 transform -translate-x-1/2">
                    <div className="mb-4 flex items-center gap-2 text-blue-600">
                      <h2 className="text-2xl text-slate-600 mt-8 font-semibold w-full text-center">
                        {item.title}
                      </h2>
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      {item.content ? (
                        <Editor
                          editorSerializedState={
                            typeof item.content === "string"
                              ? JSON.parse(item.content)
                              : item.content
                          }
                          readOnly
                          clampLines={2}
                          blogPage={false}
                        />
                      ) : null}
                    </div>
                    <div className="w-full flex justify-center">
                      {" "}
                      <Link
                        href={`/blogs/${encodeURIComponent(
                          item.title.toLowerCase().replace(/\s+/g, "-")
                        )}`}
                        className="text-black font-[600] hover:underline text-sm"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="mt-7 lg:mt-0 flex justify-end gap-2">
          <button
            disabled={!canScrollPrev}
            onClick={() => api?.scrollPrev()}
            className="bg-blue-500 disabled:bg-slate-400 text-white p-2 rounded-full"
          >
            <ArrowLeft />
          </button>
          <button
            disabled={!canScrollNext}
            onClick={() => api?.scrollNext()}
            className="bg-blue-500 disabled:bg-slate-400 text-white p-2 rounded-full"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industry;
