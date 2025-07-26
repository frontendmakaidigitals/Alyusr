"use client";
import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import BgLayer from "../app_chunks/BgLayer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
const Contact = () => {
  const [sectionTop, setSectionTop] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );
  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  const Interests = [
    "Business Inquiries",
    "Careers",
    "Investor Relations",
    "Media Inquiries",
    "General Inquiries",
  ];
  const locations = [
    "Please select",
    "Americas",
    "Europe, Middle East, India & Africa",
    "Australia/New Zealand",
    "Greater China",
    "Southeast Asia",
    "Not region-specific or relevant",
  ];
  return (
    <section>
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "55vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container mx-auto py-10">
          <h1 className="text-5xl font-[500] text-slate-50">Contact us</h1>
        </div>
        <BgLayer color="bg-black/50 z-20" />

        {/* Parallax image */}
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg"
          alt=""
        />
      </motion.div>

      {/* Contact Info + Form */}
      <div className="container mx-auto my-24 grid md:grid-cols-[1.2fr_0.8fr] gap-20 px-4">
        {/* Enquiry Form */}
        <div>
          {" "}
          <form className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-700">
              Enquiry Form
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {" "}
              <div className="">
                <Label>First Name</Label>
                <Input type="text" placeholder="John" className="mt-2 h-11" />
              </div>
              <div className="">
                <Label>Last Name</Label>
                <Input
                  type="text"
                  placeholder="Andrews"
                  className="mt-2 h-11"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {" "}
              <div className="">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  className="mt-2 h-11"
                />
              </div>
              <div className="">
                <Label>Contact</Label>
                <Input
                  type="number"
                  placeholder="+971 234 5678"
                  className="mt-2 h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {" "}
              <div className="">
                <Label>Company</Label>
                <Input
                  type="text"
                  placeholder="Your Company"
                  className="mt-2 h-11"
                />
              </div>
              <div className="">
                <Label>Interest</Label>
                <Select>
                  <SelectTrigger className="w-full mt-2 !h-11">
                    <SelectValue placeholder="Select your Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Your Interest</SelectLabel>
                      {Interests.map((interest, idx) => (
                        <SelectItem value={interest} key={idx}>
                          {interest}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Global Region</Label>
              <Select>
                <SelectTrigger className="w-full mt-2 !h-11 ">
                  <SelectValue placeholder="Select your Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    {locations.map((location, idx) => (
                      <SelectItem value={location} key={idx}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Message</Label>
              <Textarea rows={10} className="resize-none mt-2 h-32" />
            </div>

            <Button type="submit" variant="outline">
              Send Enquiry
            </Button>
          </form>
          <p className="mt-8">
            We&apos;re here to answer your questions, explore opportunities, and
            support your projects, every step of the way.
            <br /> Whether you're looking for engineering consultancy, design
            expertise, or project management services, our team is ready to
            assist you. <br />
            For project consultations, RFPs, or business partnerships, please
            reach out via email or use the enquiry form below.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-14 text-slate-900">
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              📍 Head Office – Saudi Arabia
            </h3>
            <p className="text-slate-900/80 leading-relaxed">
              <span className="font-semibold block">
                ALYUSR Engineering Consulting
              </span>
              Al Rawdah District, King Abdullah Road
              <br />
              Riyadh 13313 – 8119, Saudi Arabia
            </p>
            <div className="mt-4 space-y-2 text-slate-900/90">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" /> +966 11 494 4444
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" /> Fax: +966 11 494
                4440
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" /> info@alyusr.com.sa
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              🌍 International Offices
            </h3>
            <ul className="space-y-6 text-slate-900/80">
              <li className="flex items-start gap-4">
                <Image
                  src="/contact-flags/uk-flag.png"
                  alt="UK Flag"
                  width={40}
                  height={30}
                  className="rounded !w-16 shadow-sm"
                />
                <div>
                  <strong className="text-slate-900">United Kingdom</strong>
                  <br />
                  London Office
                  <br />
                  <Mail className="inline-block w-4 h-4 mr-1 text-blue-400" />
                  uk@alyusr.com.sa
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Image
                  src="/contact-flags/sri-lanka.png"
                  alt="Sri Lanka Flag"
                  width={40}
                  height={30}
                  className="rounded !w-16 shadow-sm"
                />
                <div>
                  <strong className="text-slate-900">Sri Lanka</strong>
                  <br />
                  Colombo Office
                  <br />
                  <Mail className="inline-block w-4 h-4 mr-1 text-blue-400" />
                  srilanka@alyusr.com.sa
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Image
                  src="/contact-flags/egypt-flag.png"
                  alt="Egypt Flag"
                  width={40}
                  height={30}
                  className="rounded !w-16 shadow-sm"
                />
                <div>
                  <strong className="text-slate-900">Egypt</strong>
                  <br />
                  Cairo Office
                  <br />
                  <Mail className="inline-block w-4 h-4 mr-1 text-blue-400" />
                  egypt@alyusr.com.sa
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
