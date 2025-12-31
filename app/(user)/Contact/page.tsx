"use client";
import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, MapPinned, Earth } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { toast } from "sonner";
import Image from "next/image";

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

const Contact = () => {
  const internationalOffices = [
    {
      country: "United Kingdom",
      city: "London Office",
      email: "uk@alyusr.com.sa",
      flag: "/contact-flags/uk.webp",
      bg: "#E8EAF6", // indigo 50
      text: "#1A237E", // indigo 900
    },
    {
      country: "Sri Lanka",
      city: "Colombo Office",
      email: "srilanka@alyusr.com.sa",
      flag: "/contact-flags/srilanka.webp",
      bg: "#FFF8E1", // amber 50
      text: "#FF6F00", // amber 900
    },
    {
      country: "Egypt",
      city: "Cairo Office",
      email: "egypt@alyusr.com.sa",
      flag: "/contact-flags/egypt.webp",
      bg: "#FFEBEE", // red 50
      text: "#B71C1C", // red 900
    },
  ];

  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100],
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

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    company: "",
    interest: "",
    location: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
          company: "",
          interest: "",
          location: "",
        });
        toast.success("Form submitted successfully!");
      } else {
        console.error("Failed to submit form:", res.statusText);
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {/* Hero Section */}
      <motion.div
        ref={sectionRef}
        animate={{ height: "55vh" }}
        className="w-full relative overflow-hidden"
        initial={{ height: "120vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="relative z-10 container mx-auto py-16 flex flex-col justify-center items-center h-full max-w-4xl">
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl lg:text-6xl font-extrabold text-white text-center drop-shadow-md "
            initial={{ y: 40, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            className="mt-5 text-lg text-slate-100/90 text-center leading-relaxed"
            initial={{ y: 40, opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We&apos;re here to answer your questions, explore opportunities, and
            support your projects every step of the way. Whether you&apos;re
            looking for engineering consultancy, design expertise, or project
            management services, our team is ready to assist you.
          </motion.p>
        </div>
        <BgLayer color="bg-black/60 z-[1]" />

        {/* Parallax Background */}
        <motion.img
          alt="Contact Background"
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-top"
          src="https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg"
          style={{ y: yTransform }}
        />
      </motion.div>

      {/* Contact Info + Form */}
      <div className="container mx-auto my-24 grid md:grid-cols-[1.2fr_0.8fr] gap-16 px-6">
        {/* Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <form
            className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl p-10 rounded-2xl space-y-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">
              Enquiry Form
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Label>First Name</Label>
                <Input
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Label>Email</Label>
                <Input
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label>Contact</Label>
                <Input
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  name="phone"
                  placeholder="phone"
                  type={"number"}
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Label>Company</Label>
                <Input
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  name="company"
                  placeholder="Company"
                  type={"text"}
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label>Interest</Label>
                <Select
                  value={form.interest}
                  onValueChange={(value) =>
                    setForm((prev) => ({ ...prev, interest: value }))
                  }
                >
                  <SelectTrigger className="w-full mt-2 !h-12 bg-slate-50">
                    <SelectValue placeholder="Select your Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Your Interest</SelectLabel>
                      {Interests.map((interest, idx) => (
                        <SelectItem key={idx} value={interest}>
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
              <Select
                value={form.location}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, location: value }))
                }
              >
                <SelectTrigger className="w-full mt-2 !h-12 bg-slate-50">
                  <SelectValue placeholder="Select your Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {locations.map((location, idx) => (
                      <SelectItem key={idx} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                className="resize-none mt-2 bg-slate-50 h-32 focus:ring-2 focus:ring-blue-500"
                rows={6}
              />
            </div>
            <Button
              className={`w-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={loading}
              size="lg"
              type="submit"
              variant="default"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      fill="currentColor"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Enquiry"
              )}
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-14 text-slate-900"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <h3 className="text-2xl flex items-center gap-2 font-semibold mb-3 text-sky-800">
              <MapPinned className="text-sky-800" /> Head Office – Saudi Arabia
            </h3>
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold block">
                ALYUSR Engineering Consulting
              </span>
              Al Rawdah District, King Abdullah Road
              <br />
              Riyadh 13313 – 8119, Saudi Arabia
            </p>
            <div className="mt-4 space-y-2 text-slate-800">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" /> +966 54 154 0090
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" /> info@alyusr.com.sa
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-5 text-sky-800">
              <Earth />
              International Offices
            </h3>
            <ul className="space-y-6">
              {internationalOffices.map((office, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 border border-transparent rounded-2xl shadow-md p-3 hover:shadow-lg transition-transform transform hover:-translate-y-1"
                  style={{ backgroundColor: office.bg }}
                >
                  {/* Flag image */}
                  <div className="h-[85px] flex items-stretch">
                    <Image
                      alt={`${office.country} Flag`}
                      className="rounded-lg h-full w-32 object-cover shadow-sm"
                      height={300}
                      src={office.flag}
                      width={300}
                    />
                  </div>

                  {/* Text section */}
                  <div className="">
                    <h4
                      className="text-xl font-[600] tracking-wide"
                      style={{ color: office.text }}
                    >
                      {office.country}
                    </h4>
                    <p
                      className="text-sm font-normal"
                      style={{ color: office.text, opacity: 0.85 }}
                    >
                      {office.city}
                    </p>
                    <div
                      className="mt-2 flex items-center text-sm font-medium"
                      style={{ color: office.text }}
                    >
                      <Mail className="w-4 h-4 mr-1 opacity-90" />
                      {office.email}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
