"use client";
import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, MapPinned, Earth } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { toast } from "sonner";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        initial={{ height: "120vh" }}
        animate={{ height: "55vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-10 container mx-auto py-16 flex flex-col justify-center items-center h-full max-w-4xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-5xl lg:text-6xl font-extrabold text-white text-center drop-shadow-md "
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-5 text-lg text-slate-100/90 text-center leading-relaxed"
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
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-top"
          src="https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg"
          alt="Contact Background"
        />
      </motion.div>

      {/* Contact Info + Form */}
      <div className="container mx-auto my-24 grid md:grid-cols-[1.2fr_0.8fr] gap-16 px-6">
        {/* Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl p-10 rounded-2xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">
              Enquiry Form
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label>Contact</Label>
                <Input
                  type={"number"}
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="phone"
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Label>Company</Label>
                <Input
                  type={"text"}
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
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
              <Textarea
                rows={6}
                className="resize-none mt-2 bg-slate-50 h-32 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={loading}
              className={`w-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-14 text-slate-900"
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
                <Phone className="w-4 h-4 text-blue-500" /> +966 11 494 4444
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" /> Fax: +966 11 494
                4440
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
                  style={{ backgroundColor: office.bg }}
                  className="flex items-center gap-5 border border-transparent rounded-2xl shadow-md p-3 hover:shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  {/* Flag image */}
                  <div className="h-[85px] flex items-stretch">
                    <Image
                      src={office.flag}
                      alt={`${office.country} Flag`}
                      width={300}
                      height={300}
                      className="rounded-lg h-full w-32 object-cover shadow-sm"
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
