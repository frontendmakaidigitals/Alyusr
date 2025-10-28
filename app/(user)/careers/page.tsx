// app/careers/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Coffee,
  HeartHandshake,
  ArrowDown,
  MapPin,
  Eye,
  X,
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Dubai, UAE",
    type: "Full-time",
    desc: "Work with React, Next.js, and Tailwind to craft amazing user experiences.",
  },
  {
    title: "Project Manager",
    location: "Riyadh, KSA",
    type: "Full-time",
    desc: "Lead cross-functional teams and deliver engineering excellence on time.",
  },
  {
    title: "Sustainability Consultant",
    location: "Abu Dhabi, UAE",
    type: "Full-time",
    desc: "Drive green initiatives and provide advisory for smart infrastructure projects.",
  },
];

const benefits = [
  { icon: Coffee, text: "Flexible Work Culture" },
  { icon: Users, text: "Collaborative Team" },
  { icon: HeartHandshake, text: "Inclusive Environment" },
  { icon: Briefcase, text: "Career Growth Opportunities" },
];

export default function CareersPage() {
  return (
    <main className="">
      <section className="grid max-w-7xl grid-cols-1 place-items-center gap-10 lg:grid-cols-2 container my-14">
        <h1 className="text-5xl lg:text-6xl font-[600] border-r border-slate-900/50 ">
          Join the company with the bold new vision.
        </h1>
        <div>
          {" "}
          <h2 className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </h2>
          <button className="text-slate-50 flex items-center gap-2 rounded-lg bg-blue-500 font-[600] px-5 py-[.6rem] mt-2">
            <ArrowDown className="" />
            Job openings
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 place-items-start lg:grid-cols-[1fr_.7fr_1fr] gap-12">
        <div className="w-full aspect-square rounded-[20px] overflow-hidden border-[2px] border-slate-900">
          <img
            alt={""}
            className="w-full h-full object-cover"
            src={
              "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
            }
          />
        </div>
        <div className="w-full aspect-square rounded-[20px] overflow-hidden border-[2px] border-slate-900">
          <img
            alt={""}
            className="w-full h-full object-cover"
            src={
              "https://images.pexels.com/photos/7709110/pexels-photo-7709110.jpeg"
            }
          />
        </div>
        <div className="w-full aspect-square rounded-[20px] overflow-hidden border-[2px] border-slate-900">
          <img
            alt={""}
            className="w-full h-full object-cover"
            src={
              "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg"
            }
          />
        </div>
      </section>
      <section className="mt-16">
        <CareersForm />
      </section>
    </main>
  );
}

function CareersForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null as File | null,
    message: "",
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];

      setForm({ ...form, [name]: file });
      if (file) {
        setPreviewUrl(URL.createObjectURL(file));
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRemoveResume = () => {
    setForm({ ...form, resume: null });
    setPreviewUrl(null);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // 🔹 You can integrate with Firebase, Nodemailer, or API route here
  };

  return (
    <section className="relative py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl lg:text-5xl font-bold text-start text-gray-800 mb-6">
          Let's begin our creative journey together
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <ul className="space-y-10">
            <li>
              <h2 className="text-2xl font-[600]">For Enquiry</h2>
              <p>M.yousif@alyusrco.com</p>
            </li>
            <li>
              <h2 className="text-2xl font-[600]">Contact</h2>
              <p>+966 54 154 0090</p>
            </li>
            <li>
              <h2 className="text-2xl font-[600]">Head office</h2>
              <p>Riyadh, Al Sahafa District – Olaya Street</p>
              <p>Kingdom of Saudi Arabia</p>
              <p>13321</p>
            </li>
            <li className="flex items-center gap-2">
              <Link
                className="flex items-center gap-2 hover:text-primary transition-colors"
                href="https://www.google.com/maps?q=Riyadh+Al+Sahafa+District+Olaya+Street"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="">
                  <MapPin className="fill-black size-7 stroke-white" />
                </span>
                View on maps
              </Link>
            </li>
          </ul>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                className="w-full px-3 py-[.7rem] border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                name="name"
                placeholder="Full Name"
                type="text"
                value={form.name}
                onChange={handleChange}
              />
              <input
                required
                className="w-full px-3 py-[.7rem] border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                name="email"
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full px-3 py-[.7rem] border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                name="phone"
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                required
                className="w-full px-3 py-[.7rem] border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                name="position"
                placeholder="Position You’re Applying For"
                type="text"
                value={form.position}
                onChange={handleChange}
              />
            </div>

            <textarea
              className="w-full px-3 resize-none py-[.7rem] border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              name="message"
              placeholder="Cover Letter / Additional Information"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Upload Resume
              </label>

              <label
                className="flex items-center justify-between gap-3 w-full px-3 py-[.7rem] border border-gray-300 rounded-xl bg-gray-50 cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 outline-none"
                htmlFor="resume"
              >
                <div className="flex flex-col text-sm text-gray-700">
                  {form.resume ? (
                    <span className="truncate max-w-[14rem]">
                      {form.resume.name}{" "}
                      <span className="text-xs text-gray-500">
                        ({Math.round(form.resume.size / 1024)} KB)
                      </span>
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      Click to upload or drag & drop
                    </span>
                  )}
                  <span className="text-xs text-gray-500">
                    PDF, DOC, DOCX — max 5MB
                  </span>
                </div>

                <input
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  id="resume"
                  name="resume"
                  required={!form.resume}
                  type="file"
                  onChange={handleChange}
                />

                {/* Action buttons */}
                {form.resume && (
                  <div className="flex items-center gap-2">
                    {previewUrl && (
                      <a
                        aria-label="View Resume"
                        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                        href={previewUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Eye className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      aria-label="Remove Resume"
                      className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                      type="button"
                      onClick={handleRemoveResume}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </label>
            </div>
            <button
              className="w-full cursor-pointer px-3 py-[.7rem] bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all"
              type="submit"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
