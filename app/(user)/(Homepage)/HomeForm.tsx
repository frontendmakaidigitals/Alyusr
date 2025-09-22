"use client";
import React, { useState } from "react";
import { toast } from "sonner";
const HomeForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        setForm({ name: "", phone: "", email: "", message: "" });
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
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-7 mt-12">
          <div className="w-full h-[350px] lg:h-[630px]">
            <img
              className="w-full h-full object-cover"
              src={"/contactImage.webp"}
              alt={""}
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-8 w-full">
            <div>
              <label className="">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 bg-slate-200 px-4 py-[.7rem] rounded-lg"
                placeholder="Enter full Name"
              />
            </div>
            <div>
              <label className="">Contact Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-1 bg-slate-200 px-4 py-[.7rem] rounded-lg"
                placeholder="Enter Phone"
                required
              />
            </div>
            <div>
              <label className="">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 bg-slate-200 px-4 py-[.7rem] rounded-lg"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label className="">Message</label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full mt-1 bg-slate-200 px-4 py-[.7rem] rounded-lg resize-none"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br px-6 py-[.45rem] text-sm rounded-lg text-slate-50 flex items-center gap-2 from-[#387EF0] to-[#2651C2]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
