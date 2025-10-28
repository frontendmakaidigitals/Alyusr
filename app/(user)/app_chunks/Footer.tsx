"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Printer } from "lucide-react";

import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="bg-black overflow-hidden relative">
      <div className="container mx-auto relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[.5fr_1.5fr] gap-16 place-items-start">
          {/* Logo & About */}
          <div>
            <Logo />
            <p className="text-sm text-slate-50 mt-5">
              We deliver engineering and consulting solutions with global
              expertise
            </p>
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4 text-slate-50">
                <Link href="/" rel="noopener noreferrer" target="_blank">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="/" rel="noopener noreferrer" target="_blank">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="/" rel="noopener noreferrer" target="_blank">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Menus */}
          <div className="flex flex-col lg:flex-row gap-12 text-slate-50 w-full justify-end items-start">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  {
                    title: "Project Management",
                    href: "/Services/Project-Advisory/program-management",
                  },
                  {
                    title: "Architectural & Engineering Design",
                    href: "/Services/Urban-Planning/Architecture-Design",
                  },
                  {
                    title: "Urban Design",
                    href: "/Services/Urban-Planning/urban-policy",
                  },
                  {
                    title: "Technical Support & Supervision",
                    href: "/Services/Transportation-and-Smart-Mobility/it-and-cybersecurity",
                  },
                  {
                    title: "Safety & Risk Analysis",
                    href: "/Services/Project-Advisory/risk-management-and-resilience",
                  },
                  {
                    title: "Landscape Architecture",
                    href: "/Services/Urban-Planning/Landscape-Architecture",
                  },
                  {
                    title: "Rail Network",
                    href: "/Services/Transportation-and-Smart-Mobility/rail-network-modeling",
                  },
                ].map(({ title, href }, i) => (
                  <li key={i}>
                    <Link className="hover:underline" href={href}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:underline" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/Who-we-are/Company-Overview"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/Why-Al-Yusr/Trusted-by-Government-and-Private-Sectors"
                  >
                    Why Al Yusr
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/Services">
                    What We Do
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:underline" href="/blogs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/Contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/our-presence">
                    Our Presence
                  </Link>
                </li>
              </ul>
            </div>

            {/* Office Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Office</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1" />
                  <p className="max-w-[250px]">
                    {" "}
                    Al Rawdah District, King Abdullah Road Riyadh 13313 – 8119,
                    Saudi Arabia
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+966 11 494 4444</span>
                </div>
                <div className="flex items-center gap-2">
                  <Printer className="w-5 h-5" />
                  <span>+966 11 494 4440</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>info@alyusrco.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-dimondra-tealDark text-slate-50 text-sm text-center py-3 relative z-10">
        &copy; {new Date().getFullYear()} All Rights Reserved – Powered by{" "}
        <span className="text-blue-500">Insight Vision Marketing</span>
      </div>
    </footer>
  );
};

export default Footer;
