"use client";
import { ArrowUpRight, Circle } from "lucide-react";
import Link from "next/link";
import db from "@/data/db.json";
const DashboardPage = () => {
  const data = db;
  return (
    <div className="min-h-screen w-full ">
      <h1 className="text-2xl mb-3 font-[500]">
        <Circle className="inline-block size-[12px] fill-black align-middle" />{" "}
        Your Stats
      </h1>
      <div className="grid grid-cols-4  gap-7">
        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Blogs</h2>
          <p className="text-7xl mt-4">{data.blogs.length}</p>
          <Link
            href={"dashboard/Blogs"}
            className="flex items-center w-fit mt-6 gap-3 rounded-2xl bg-[#58000f] hover:bg-[#800000]  text-slate-50 px-4  py-2"
          >
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </Link>
        </div>

        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Queries</h2>
          <p className="text-7xl mt-4">{data.contacts.length}</p>
          <Link
            href={"/dashboard/Queries"}
            className="flex items-center w-fit mt-6 gap-3 rounded-2xl bg-[#58000f] hover:bg-[#800000]  text-slate-50 px-4  py-2"
          >
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
