"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import { BadgeCheck } from "lucide-react";
import { LayoutGrid } from "lucide-react";

export default function Page() {
  const services = [
    {
      title: "Interior Design Concept Development",
      img: "/images/interior/concept.jpg",
    },
    {
      title: "Space Planning & Functional Zoning",
      img: "/images/interior/space-planning.jpg",
    },
    {
      title: "Material & Finish Selection",
      img: "/images/interior/materials.jpg",
    },
    {
      title: "Lighting Design & Visual Comfort Strategies",
      img: "/images/interior/lighting.jpg",
    },
    {
      title: "Furniture, Fixtures & Equipment (FF&E) Planning",
      img: "/images/interior/furniture.jpg",
    },
    {
      title: "Wayfinding & Environmental Branding",
      img: "/images/interior/wayfinding.jpg",
    },
    {
      title: "Custom Joinery & Millwork Detailing",
      img: "/images/interior/joinery.jpg",
    },
    {
      title: "Code & Accessibility Compliance",
      img: "/images/interior/compliance.jpg",
    },
    {
      title: "3D Visualization & Virtual Walkthroughs",
      img: "/images/interior/3d.jpg",
    },
    {
      title: "Construction Documentation & Site Coordination",
      img: "/images/interior/documentation.jpg",
    },
  ];

  const expertise = [
    {
      title: "Corporate & Workplace Environments",
      desc: "We design high-performance workplaces that boost productivity, support wellness, and reflect brand identity. From agile open-office layouts and executive suites to collaborative spaces and quiet zones, we help organizations foster innovation, employee satisfaction, and operational efficiency.",
      img: "/images/interior/corporate.jpg",
    },
    {
      title: "Retail & Mixed-Use Developments",
      desc: "Our interiors team creates retail and commercial environments that captivate visitors, support business objectives, and enhance footfall. We design immersive customer journeys by integrating spatial flow, display strategies, lighting, and visual merchandising.",
      img: "/images/interior/retail.jpg",
    },
    {
      title: "Hotels & Hospitality Spaces",
      desc: "We deliver interior environments that reflect luxury, comfort, and authenticity, turning every guest's stay into a memorable experience. Whether boutique or large-scale hospitality, we align design with cultural context, brand standards, and operational efficiency.",
      img: "/images/interior/hospitality.jpg",
    },
    {
      title: "Healthcare & Wellness Facilities",
      desc: "We design healthcare spaces that prioritize patient comfort, staff efficiency, and healing. Our approach blends functionality with softness, balancing infection control, accessibility, and aesthetics to support medical excellence and human dignity.",
      img: "/images/interior/healthcare.jpg",
    },
    {
      title: "Education & Cultural Institutions",
      desc: "We create inspiring learning and cultural environments for the next generation. Whether it’s a modern school, university building, or museum, we design interiors that foster creativity, knowledge-sharing, and community interaction.",
      img: "/images/interior/education.jpg",
    },
    {
      title: "Government & Civic Interiors",
      desc: "We support national and municipal entities in designing public-facing spaces that are secure, inclusive, and service-oriented. Our team works closely with regulatory bodies to ensure that civic interiors reflect transparency, functionality, and pride.",
      img: "/images/interior/government.jpg",
    },
    {
      title: "Luxury Residential Projects",
      desc: "We deliver bespoke residential interiors that blend comfort, style, and smart living. From high-end villas to branded apartments, our work reflects personal taste while maximizing functionality and spatial harmony.",
      img: "/images/interior/residential.jpg",
    },
  ];

  const points = [
    "Multinational team with regional insight and sector-specific experience",
    "Fully integrated design-to-delivery process",
    "Tailored interior solutions for branding, culture, and performance",
    "BIM-enabled design coordination and visualization",
    "Commitment to sustainability, wellness, and user comfort",
    "Proven success across corporate, hospitality, civic, and private sectors",
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Interior Architecture
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={
            "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg"
          }
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={500}
          height={200}
        />
      </section>

      <section className="bg-gray-50 ">
        <div className="container py-12 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-5xl text-sky-700 font-bold ">
              Creative, Contextual, Client-Focused
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Our design approach is grounded in balance and collaboration.
              Every project begins with understanding your brand, culture, and
              aspirations. We then bring together a team of creative designers,
              technical experts, and project managers to translate your vision
              into an integrated spatial experience.
              <br /> <br /> By aligning spatial planning with materials,
              lighting, acoustics, furniture, and user behavior, we create
              holistic interiors that reflect purpose and elevate the quality of
              life. Our process is hands-on, responsive, and continuous,
              ensuring continuity from concept through construction.
            </p>
          </div>
          <div className="w-full h-[400px] bg-red-300">
            <img src={""} alt={""} className="" />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-blue-600">Interior Architecture</span>{" "}
            Services
          </h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-blue-500">Areas of Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interior architecture tailored to every sector&apso;s unique demands
            — from healthcare to hospitality and everything in between.
          </p>
        </div>

        <div className="grid gap-14">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl text-sky-700 font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 ">
        <div className="container py-12 place-items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-5xl font-[700] text-sky-700">
              An Integrated Team From Day One
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              At Al Yusr, we structure our interior architecture teams to
              deliver cohesive, high-performance results. Designers, project
              managers, and technical specialists are assigned from project
              initiation and stay engaged through final delivery. This ensures
              design intent is preserved, technical details are executed
              correctly, and the project timeline stays on track.
              <br /> <br /> Our collaborative model guarantees that while each
              team member focuses on their area of expertise, they maintain
              accountability for the overall vision, quality, and outcome of the
              project.
            </p>
          </div>
          <div className="w-full h-[450px] bg-red-300">
            <img src={""} alt={""} className="" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50/50 to-white py-20 px-4">
        <div className="max-w-3xl container text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Why Choose Al Yusr for Interior Architecture?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Combining creativity with technical expertise, we deliver
            exceptional interior environments that elevate experience, express
            identity, and enhance functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-slate-100 p-3 rounded-xl"
            >
              <span>
                <BadgeCheck className="text-white fill-green-500 w-6 h-6 mt-1 shrink-0" />
              </span>
              <p className="text-lg leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Design the Future, Together"
        desc="If you’re looking for architecture that performs as beautifully as it looks, Al Yusr Engineering Consulting is your partner in delivering spaces that are visionary, responsible, and truly transformative."
        btn="Contact Us Today"
      />
    </main>
  );
}
