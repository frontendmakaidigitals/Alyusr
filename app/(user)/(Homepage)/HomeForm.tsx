"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const HomeForm = () => {
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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    company: "",
    interest: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
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
          name: "",
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
    <div className="py-28">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-5xl font-[600] text-center">
          Get in <span className="text-blue-500">Touch with Us</span>
        </h1>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-[.8fr_1.2fr]  mt-12">
          <div className="w-full h-[350px] lg:rounded-l-xl overflow-hidden lg:h-[630px]">
            <img
              className="w-full h-full object-cover"
              src={"/contactImage.webp"}
              alt={""}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl p-10 lg:rounded-r-xl space-y-6 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">
              Enquiry Form
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <Label>Full Name</Label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Andrews"
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <Label>Contact</Label>
                <Input
                  name="phone"
                  type="number"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+971 234 5678"
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <Label>Company</Label>
                <Input
                  type="text"
                  placeholder="Your Company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-2 h-12 bg-slate-50 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
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
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
