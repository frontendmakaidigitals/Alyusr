"use client";

import {
  Landmark,
  Building2,
  ShieldCheck,
  Timer,
  ClipboardList,
  Eye,
  Users,
  Hammer,
  DollarSign,
  Cpu,
  Repeat,
  Layers3,
  Home,
  Sparkle,
  Leaf,
  Globe,
  BadgeCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
export default function Page() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-sky-900 text-white py-28 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Globally Certified Standards
          </h1>
          <p className="text-lg sm:text-xl">
            Engineering Excellence Backed by International Accreditation
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-gray-700 mb-8">
            At ALYUSR Engineering Consulting, our work meets and exceeds the
            highest international standards. Our certifications reflect our
            commitment to quality assurance, environmental responsibility,
            occupational health and safety, and project risk management across
            every service we deliver.
          </p>
          <p className="text-lg text-gray-700">
            With a globally aligned operating model and internationally
            certified methodologies, ALYUSR is equipped to manage large-scale,
            multidisciplinary projects with precision and accountability.
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS LIST */}
      <section className="bg-gradient-to-b from-white via-sky-50 to-white py-24 px-6 sm:px-10">
        <div className="container max-w-6xl mx-auto">
          {/* HEADLINE */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Trusted by Public & Private Sectors Alike
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ALYUSR delivers excellence to both government authorities and
              leading private developers — united by a commitment to compliance,
              innovation, and results.
            </p>
          </div>

          {/* GOVERNMENT BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-white border border-yellow-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6 text-sky-700" />
                <h3 className="text-xl font-semibold text-sky-800">
                  Preferred by Government Authorities
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                We proudly support Saudi Arabia’s public sector with end-to-end
                services in engineering, planning, sustainability, and program
                management.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm pl-1">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-1 text-sky-600" />
                  Transparent processes and compliance with Saudi building codes
                </li>
                <li className="flex items-start gap-2">
                  <Timer className="w-4 h-4 mt-1 text-sky-600" />
                  Timely project delivery aligned with national priorities
                </li>
                <li className="flex items-start gap-2">
                  <ClipboardList className="w-4 h-4 mt-1 text-sky-600" />
                  Experience with permitting, code approvals, and regulatory
                  frameworks
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="w-4 h-4 mt-1 text-sky-600" />
                  Deep understanding of Vision 2030 objectives and governance
                  models
                </li>
              </ul>
            </div>

            {/* PRIVATE BLOCK */}
            <div className="bg-gradient-to-br from-indigo-50 via-indigo-100 to-white border border-indigo-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-gray-800" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Trusted by Leading Private Developers
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                From real estate and hospitality to industrial and commercial
                sectors, ALYUSR delivers solutions to some of the region’s most
                ambitious private ventures.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm pl-1">
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 mt-1 text-sky-600" />
                  Agile project coordination and technical expertise
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 mt-1 text-sky-600" />
                  Value engineering and cost-effective designs
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 mt-1 text-sky-600" />
                  Integration of smart technologies and sustainability practices
                </li>
                <li className="flex items-start gap-2">
                  <Repeat className="w-4 h-4 mt-1 text-sky-600" />
                  Full lifecycle consulting, from feasibility to handover
                </li>
              </ul>
            </div>
          </div>

          {/* WHY CLIENTS CHOOSE ALYUSR */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Why Public & Private Clients Choose ALYUSR
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {[
              {
                img: "",
                text: "Class A License Holder — recognized for handling large-scale, complex projects",
              },
              {
                img: "",
                text: "ISO-Certified Processes — quality, environmental, and safety management",
              },
              {
                img: "",
                text: "In-House Multidisciplinary Teams — no third-party reliance",
              },
              {
                img: "",
                text: "Proven Portfolio — with successful projects across Saudi Arabia, UAE, Egypt, and the UK",
              },
              {
                img: "",
                text: "Culturally Aware & Vision-Aligned — engineering that reflects both heritage and future goals",
              },
            ].map((item, i) => {
              return (
                <div
                  key={i}
                  className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                >
                  <div className="relative h-[250px] w-full bg-sky-100">
                    <Image
                      src={item.img}
                      alt={item.text}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-center text-gray-800 text-lg font-semibold group-hover:text-sky-700 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
