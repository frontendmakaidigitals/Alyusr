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
import Logo from "../app_chunks/Logo";

const Footer = () => {
  return (
    <footer className="bg-black overflow-hidden relative">
      <div className="container mx-auto relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[.5fr_1.5fr] gap-16 place-items-start">
          {/* Logo & About */}
          <div>
            <Logo />
            <p className="text-sm text-slate-50 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4 text-slate-50">
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
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
                    href: "/Services/HR-Services/Staffing-Solution",
                  },
                  {
                    title: "Architectural & Engineering Design",
                    href: "/Services/HR-Services/Hr-Operations",
                  },
                  {
                    title: "Urban & Regional Planning",
                    href: "/Services/HR-Services/Virtual-Admin-Support",
                  },
                  {
                    title: "Technical Support & Supervision",
                    href: "/Services/Organization-Consulting/Talent-Management",
                  },
                  {
                    title: "Safety & Risk Analysis",
                    href: "/Services/Career-Development/Career-advisory",
                  },
                  {
                    title: "Infrastructure Consulting",
                    href: "/Services/Career-Development/Career-advisory",
                  },
                  {
                    title: "Digital Engineering & BIM",
                    href: "/Services/Career-Development/Career-advisory",
                  },
                ].map(({ title, href }, i) => (
                  <li key={i}>
                    <Link href={href} className="hover:underline">
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
                  <Link href="/Locations/KSA" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/Locations/India" className="hover:underline">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/Locations/Egypt" className="hover:underline">
                    Why Al Yusr
                  </Link>
                </li>
                <li>
                  <Link href="/Locations/UAE" className="hover:underline">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link href="/Locations/UAE" className="hover:underline">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blogs" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/About" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="hover:underline">
                    Contact
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
                  <p className="max-w-[250px]">Marina Town, Dubai, UAE</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+966 537007028</span>
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
        <span className="text-blue-500">Alyusr Engineering</span>
      </div>
    </footer>
  );
}

export default Footer

