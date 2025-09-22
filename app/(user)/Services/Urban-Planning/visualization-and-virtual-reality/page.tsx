"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Layers,
  Globe2,
  Zap,
  BadgeCheck,
} from "lucide-react";
export default function ConstructionManagementPage() {
  const services = [
    {
      title: "3D Visualization & Rendering",
      desc: "High-quality, photorealistic images that communicate design intent with precision, perfect for marketing, stakeholder approvals, and public presentations.",
      img: "/urban-planning/visualization/Visualization.webp",
    },
    {
      title: "Virtual Reality (VR) Experiences",
      desc: "Immersive, interactive environments that allow users to virtually 'walk through' a space, providing an unparalleled understanding of scale, flow, and spatial relationships.",
      img: "/urban-planning/visualization/Virtual Reality.webp",
    },
    {
      title: "Augmented Reality (AR) Integration",
      desc: "Overlay digital models on physical environments for real-time design reviews, public engagement, and field-based decision-making.",
      img: "/urban-planning/visualization/augumented.webp",
    },
    {
      title: "Fly-Through Animations & Walkthroughs",
      desc: "Dynamic video sequences that simulate movement through a space, enhancing storytelling and enabling better visualization of architectural features and infrastructure.",
      img: "/urban-planning/visualization/animations.webp",
    },
    {
      title: "Photomontages & Contextual Imagery",
      desc: "Blending proposed developments into real-world photographs to evaluate visual impact and ensure contextual alignment with surrounding environments.",
      img: "/urban-planning/visualization/Photomontages.webp",
    },
  ];
  const points = [
    "Design Concept Presentations",
    "Planning and Permitting Processes",
    "Community Engagement and Public Consultations",
    "Marketing and Investor Pitch Decks",
    "Technical Design Reviews",
  ];

  const features = [
    {
      icon: Users,
      title: "In-house team of visualization and VR specialists",
    },
    {
      icon: Zap,
      title:
        "Quick integration with architecture, planning, and engineering teams",
    },
    {
      icon: Layers,
      title:
        "Scalable solutions for small concept studies to city-scale master plans",
    },
    {
      icon: CheckCircle,
      title: "Proven impact on stakeholder approvals and public engagement",
    },
    {
      icon: Globe2,
      title:
        "Global experience with a strong understanding of regional aesthetics and cultural context",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl  md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Visualization and Virtual Reality
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/urban-planning/visualization/hero.webp"}
          className="w-full h-full object-cover"
          alt={"hero"}
          width={1200}
          height={700}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, we believe that design should not only be seen, it should
          be experienced. Our Visualization and Virtual Reality (VR) services
          bring ideas to life with striking clarity and realism, helping
          clients, stakeholders, and the public understand the full potential of
          a project before it’s built.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          From immersive VR walk-throughs to photorealistic 3D renders, our
          experts use cutting-edge technology to communicate the spatial,
          functional, and emotional impact of design in a way that static plans
          and drawings simply cannot. These tools enhance collaboration,
          streamline decision-making, and create a shared vision for project
          success.
        </p>
      </section>
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
          <div>
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
          <div className="w-full h-[400px] bg-red-300">
            <Image
              src={"/urban-planning/visualization/about1.webp"}
              alt={""}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className=" container ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            What <span className="text-blue-500">We Do</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Enhancing{" "}
              <span className="text-blue-500">
                Communication Across All Project
              </span>{" "}
              Stages
            </h2>
            <p className="text-gray-600">
              Whether it’s virtually showing passengers how a new transit
              station will look once reopened, or helping a client preview a
              yet-to-be-built residential tower, our visualization services
              build trust and alignment by making the abstract tangible.
            </p>

            <ul className="space-y-3">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className=" text-lg">
                    <BadgeCheck className="text-white fill-green-500" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[230px] lg:h-[420px]  rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={"/urban-planning/visualization/about2.webp"}
              alt="Visualization Communication"
              fill
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl text-center font-bold text-gray-900 mb-10">
            Why Choose <span className="text-blue-500">Al Yusr</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 mr-4">
                  <item.icon size={24} />
                </div>
                <p className="text-gray-700">{item.title}</p>
              </div>
            ))}
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
