"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  Users2,
  MapPinned,
  Building2,
  Camera,
  GraduationCap,
  Laptop,
  Languages,
  FileText,
  BarChart3,
  Handshake,
  BadgeCheck,
} from "lucide-react";
export default function Page() {
  const capabilities = [
    {
      title: "Community Visioning Sessions & Town Halls",
      icon: Users2,
    },
    {
      title: "Stakeholder Mapping & Strategy Development",
      icon: MapPinned,
    },
    {
      title: "Pop-up Installations & Tactical Urbanism Activations",
      icon: Building2,
    },
    {
      title: "Participatory Photography & Storytelling Workshops",
      icon: Camera,
    },
    {
      title: "Youth Engagement & School Programs",
      icon: GraduationCap,
    },
    {
      title: "Online Surveys & Virtual Forums",
      icon: Laptop,
    },
    {
      title: "Cultural & Linguistic Adaptation for Local Audiences",
      icon: Languages,
    },
    {
      title:
        "Inclusive Materials Design (Easy-to-read, multilingual, accessible)",
      icon: FileText,
    },
    {
      title: "Engagement Reporting & Feedback Analysis",
      icon: BarChart3,
    },
    {
      title: "Conflict Resolution & Consensus-Building",
      icon: Handshake,
    },
  ];

  const reasonsMatters = [
    "Builds public trust and project support",
    "Surfaces local knowledge and lived experiences",
    "Improves social impact and design relevance",
    "Reduces resistance and delays during implementation",
    "Creates long-term community ownership and pride",
  ];

  const reasonsChoose = [
    "Multilingual, culturally attuned engagement experts",
    "Creative outreach formats, both online and offline",
    "Deep understanding of local social dynamics and sensitivities",
    "Proven success across public, private, and mixed-use projects",
    "Strong alignment with Vision 2030’s citizen-centered development",
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Community Engagement
        </h1>
      </div>
      <section className=" w-full h-[500px] overflow-hidden">
        <Image
          src={"/urban-planning/community-engagement/hero.webp"}
          className="w-full h-full object-cover object-top "
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr Engineering Consulting, we believe that great projects are
          built with people, not just for them. Our Community Engagement
          services are designed to bring people into the conversation early,
          meaningfully, and creatively. We help our clients build trust, gather
          insights, and ensure that development reflects the needs, values, and
          aspirations of the communities it serves.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          Our experienced outreach practitioners specialize in translating
          complex planning, engineering, and environmental concepts into clear,
          relatable messages that resonate with everyday life. Through inclusive
          and transparent engagement processes, we help bridge the gap between
          technical planning and public understanding.
        </p>
      </section>
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
          <div>
            {" "}
            <h1 className="text-4xl lg:text-5xl font-[700]">
              <span className="text-blue-500">Engaging</span> People,{" "}
              <span className="text-blue-500">Empowering</span> Places
            </h1>
            <p className="mt-4">
              We approach engagement as more than just information sharing;
              it&apos;s about listening, learning, and co-creating. Whether
              we&apos;re designing public realm improvements, infrastructure
              upgrades, or master plans, we ensure that every voice has a place
              in shaping the future.
            </p>
            <p className="mt-2">
              From in-person workshops and stakeholder interviews to interactive
              digital tools, surveys, pop-up events, and visual storytelling,
              our outreach strategies are tailored to the unique context of each
              project. We prioritize accessibility, not only in physical terms
              but in how ideas and information are communicated, ensuring that
              all community members can participate meaningfully.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 ">
            <Image
              src={
                "/urban-planning/community-engagement/Empowering Places.webp"
              }
              alt={""}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Our Capabilities at a Glance
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Our team blends creativity with strategy to engage diverse
            communities effectively. We collaborate with public agencies,
            private developers, NGOs, and grassroots organizations to deliver
            measurable, inclusive results.
          </motion.p>

          {/* Grid */}
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                >
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                    <Icon size={32} />
                  </div>
                  <p className="text-gray-700 font-[700]">{cap.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="relative bg-green-400 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={
                "/urban-planning/community-engagement/innovative-engagement.webp"
              }
              alt="Innovating Engagement"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-blue-500">Innovating Engagement</span> for
              the Future
            </h2>
            <p className="text-muted-foreground">
              With over a decade of experience in Saudi Arabia and the wider
              region, Al Yusr is proud to be part of a new wave of
              community-first planning. We’ve helped introduce concepts like
              tactical urbanism, temporary placemaking, and creative
              consultation tools that make participation exciting and effective.
            </p>
            <p className="text-muted-foreground">
              From video diaries and mobile engagement units to pop-up parks, we
              bring innovation to every engagement effort because communities
              deserve more than checklists; they deserve experiences that
              reflect their importance in the process.
            </p>
          </div>

          {/* Image */}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Why Community Engagement Matters */}
          <div className="bg-sky-100 shadow-lg rounded-2xl p-8 border border-gray-900/10">
            <h2 className="text-4xl  font-bold mb-8 text-blue-700 border-b border-blue-700/20 pb-4">
              Why Community Engagement Matters
            </h2>
            <ul className="space-y-5 flex-grow">
              {reasonsMatters.map((reason, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-2 rounded-full ">
                    <BadgeCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Al Yusr for Community Engagement */}
          <div className="bg-green-100 shadow-lg rounded-2xl p-8 border border-gray-900/10">
            <h2 className="text-4xl font-bold mb-8 text-green-700 border-b border-green-700/20 pb-4">
              Why Choose Al Yusr for Community Engagement?
            </h2>
            <ul className="space-y-5 flex-grow">
              {reasonsChoose.map((reason, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="bg-green-100 p-2 rounded-full ">
                    <BadgeCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <EngineeringCTA
        title="Let’s Build with the Community, Not Around It"
        desc="If you’re planning a project that touches people’s lives, make sure their voices are part of the process from the start. At Al Yusr, we turn engagement into impact, helping clients gain insight, build consensus, and deliver with purpose."
        btn="Contact Us Today"
      />
    </main>
  );
}
