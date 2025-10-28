"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import BgLayer from "../app_chunks/BgLayer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl text-center font-semibold">
          Industry <span className="text-blue-500">Insights</span> and{" "}
          <span className="text-blue-500">Case</span> Studies
        </h1>
        <h2 className="text-center mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          In-depth articles on engineering trends, smart infrastructure,
          sustainability, and Vision 2030 impact.
        </h2>

        {/* Carousel Section */}
        <Carousel
          className="w-full mt-12"
          opts={{ align: "start" }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-4">
            {blogs.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 sm:basis-11/12 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative h-[420px] rounded-xl overflow-hidden group">
                  <div className="absolute inset-0">
                    <Image
                      fill
                      alt={item.title}
                      className="object-cover"
                      src={`/api/uploads/${item.image}`}
                    />
                    <BgLayer />
                  </div>

                  {/* Card overlay content */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg p-5">
                    <h2 className="text-xl font-semibold text-slate-700 text-center mb-3 line-clamp-2">
                      {item.title}
                    </h2>

                    <div className="text-sm text-gray-600 line-clamp-2">
                      {item.content && (
                        <Editor
                          readOnly
                          clampLines={2}
                          editorSerializedState={
                            typeof item.content === "string"
                              ? JSON.parse(item.content)
                              : item.content
                          }
                        />
                      )}
                    </div>

                    <div className="w-full flex justify-center mt-3">
                      <Link
                        className="text-blue-600 font-semibold hover:underline text-sm"
                        href={`/blogs/${encodeURIComponent(
                          item.title.toLowerCase().replace(/\s+/g, "-"),
                        )}`}
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Buttons */}
        <div className="mt-7 flex justify-end gap-2">
          <button
            className="bg-blue-500 disabled:bg-slate-400 text-white p-2 rounded-full"
            disabled={!canScrollPrev}
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft />
          </button>
          <button
            className="bg-blue-500 disabled:bg-slate-400 text-white p-2 rounded-full"
            disabled={!canScrollNext}
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industry;
