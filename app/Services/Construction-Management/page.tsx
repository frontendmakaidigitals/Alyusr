"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  FileSearch,
  CalendarClock,
  Goal,
  Users,
  Ruler,
  ShieldAlert,
  UserCog,
  Hammer,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const specialCapabilities = [
  "Commercial Building Layouts",
  "Residential & Villa Project Oversight",
  "Institutional & Mixed-Use Developments",
  "Detailed Engineering Support",
  "Post-Construction Advisory & Handover Services",
];

const differentiators = [
  {
    title: "CEO-Led, Specialized Departments",
    desc: "Our leadership is directly involved in driving project excellence. Each department is led by domain experts, ensuring in-depth technical insight and fast, informed decision-making.",
    image: "/construction/ceo-led.jpg",
  },
  {
    title: "In-House Capabilities",
    desc: "We offer fully integrated services under one roof, allowing seamless collaboration, cost control, and faster delivery.",
    image: "/construction/in-house.jpg",
  },
  {
    title: "Class A Certified & Globally Recognized",
    desc: "Licensed in the Kingdom with Class A certification and multiple ISO standards, trusted by both government entities and private developers.",
    image: "/construction/certified.jpg",
  },
  {
    title: "Proven Track Record in Mega Projects",
    desc: "From large-scale urban infrastructure to complex engineering projects, we deliver with consistency, accountability, and measurable results.",
    image: "/construction/track-record.jpg",
  },
  {
    title: "Tech-Driven & Future-Ready",
    desc: "We leverage advanced tools like AutoCAD, Revit, Civil 3D, and GIS platforms alongside top-tier equipment to ensure every detail is executed with accuracy and innovation.",
    image: "/construction/tech.jpg",
  },
];

const keyResponsibilities = [
  {
    title: "Project Feasibility & Initial Studies",
    icon: FileSearch,
  },
  {
    title: "Defining Project Scope, Budgets, and Schedules",
    icon: CalendarClock,
  },
  {
    title: "Strategic Development Planning",
    icon: Goal,
  },
  {
    title: "Program & Resource Management",
    icon: Users,
  },
  {
    title: "Design Coordination & Buildability Review",
    icon: Ruler,
  },
  {
    title: "Risk Assessment and Mitigation",
    icon: ShieldAlert,
  },
  {
    title: "Project Team Coordination",
    icon: UserCog,
  },
  {
    title: "Construction Supervision",
    icon: Hammer,
  },
  {
    title: "Health, Safety & Environmental (HSE) Compliance",
    icon: ShieldCheck,
  },
  {
    title: "Quality Assurance & Final Handover",
    icon: BadgeCheck,
  },
];

const lifecyclePhases = [
  {
    title: "Project Feasibility & Analysis",
    image: "/images/lifecycle/feasibility.jpg",
  },
  {
    title: "Objective Setting & Stakeholder Alignment",
    image: "/images/lifecycle/stakeholder.jpg",
  },
  {
    title: "Budgeting, Scheduling & Scope Definition",
    image: "/images/lifecycle/budgeting.jpg",
  },
  {
    title: "Strategy Development & Planning",
    image: "/images/lifecycle/strategy.jpg",
  },
  {
    title: "Design Management & Risk Mitigation",
    image: "/images/lifecycle/design-risk.jpg",
  },
  {
    title: "Resource Allocation & Team Coordination",
    image: "/images/lifecycle/resource.jpg",
  },
  {
    title: "Progress Monitoring & Communication Flow",
    image: "/images/lifecycle/monitoring.jpg",
  },
  {
    title: "On-Site Construction Management",
    image: "/images/lifecycle/onsite.jpg",
  },
  {
    title: "Safety Compliance & Environmental Checks",
    image: "/images/lifecycle/safety.jpg",
  },
  {
    title: "Quality Control, Close-Out & Handover",
    image: "/images/lifecycle/quality.jpg",
  },
];

export default function ConstructionManagementPage() {
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Construction Management
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
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 w-full text-lg">
          At <strong>Al Yusr</strong> Engineering Consulting, we provide
          construction and project management services for the engineering and
          architectural sectors. Backed by decades of experience and a
          commitment to best practices, our expert team ensures every project is
          managed with precision, from initial planning to final handover.
        </p>{" "}
        <p className="mt-2 text-lg">
          Our structured approach follows globally recognized standards. We make
          sure projects are completed on schedule, within budget, and to the
          highest quality and safety standards.
        </p>
      </section>
      {/* Features */}
      <section className="container my-20">
        <motion.h2 className="text-5xl font-semibold text-center mb-12">
          Our Key <span className="text-blue-500">Responsibilities</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyResponsibilities.map((item, i) => {
            const Icon = item.icon; // Extract the icon component
            return (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-xl shadow hover:shadow-md border overflow-hidden"
                initial="hidden"
                whileInView="visible"
                custom={i}
              >
                <div className="p-6 flex flex-col items-start gap-4">
                  <Icon className="w-12 h-12 text-blue-500" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-sm max-w-3xl mx-auto text-center">
          We act as the central point of communication between clients,
          consultants, authorities, and contractors, ensuring easy collaboration
          at every stage.
        </p>
      </section>
      <section className="bg-white py-20 px-6 text-gray-900">
        <div className="flex  items-center gap-5">
          <div>
            <motion.h2 className="text-5xl font-bold mb-2 text-start">
              Full <span className="text-blue-500">Project Lifecycle</span>{" "}
              Expertise
            </motion.h2>

            <motion.p
              className="text-start "
              initial="hidden"
              whileInView="visible"
              custom={0}
            >
              Our project managers are equipped to handle every stage of the
              construction life cycle. From concept to commissioning, we apply a
              proactive, organized, and flexible methodology that ensures smooth
              execution and long-term success.
            </motion.p>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full min-w-4xl"
          >
            <CarouselContent className="-ml-4">
              {lifecyclePhases.map((phase, i) => (
                <CarouselItem
                  key={i}
                  className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 pl-4" // <-- spacing added
                >
                  <div className="bg-blue-50 h-full relative shadow-sm">
                    <div className="w-full h-[400px] overflow-hidden rounded-lg">
                      <Image
                        src={
                          "https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg"
                        }
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                        alt={""}
                      />
                    </div>
                    <h3 className="font-semibold absolute text-xl max-w-[90%] text-slate-50 p-4 bottom-0  left-0">
                      {phase.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl font-semibold text-center mb-6"
          initial="hidden"
          whileInView="visible"
        >
          <span className="text-blue-500">Technical Strength</span> of Al Yusr
        </motion.h2>
        <motion.p
          className="text-center max-w-5xl container mb-10"
          initial="hidden"
          whileInView="visible"
        >
          With a Class A license in Saudi Arabia, ISO certifications, and a team
          of in-house engineers, architects, and planners, Al Yusr delivers
          smart solutions that adapt to complex construction challenges. Whether
          it's a high-rise, industrial plant, or civic infrastructure project,
          our approach ensures client satisfaction at every milestone.
        </motion.p>

        <motion.h3
          className="text-2xl text-sky-700 font-semibold mb-6"
          initial="hidden"
          whileInView="visible"
        >
          Special Capabilities
        </motion.h3>
        <ul className="grid md:grid-cols-2 gap-6">
          {specialCapabilities.map((cap, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg"
              initial="hidden"
              whileInView="visible"
              custom={i}
            >
              <BadgeCheck className="text-blue-600 mt-1" />
              <span>{cap}</span>
            </motion.li>
          ))}
        </ul>
      </section>
      <section className="py-16 container">
        <motion.h2
          className="text-5xl font-semibold text-center mb-3"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          What <span className="text-blue-500">Sets Us</span> Apart
        </motion.h2>
        <motion.p
          className="text-center max-w-4xl mx-auto mb-12 text-gray-600"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            },
          }}
        >
          At Al Yusr Engineering Consulting, we go beyond traditional project
          management. Our strength lies in our ability to integrate vision,
          precision, and innovation into every phase of the construction
          lifecycle.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1, duration: 0.6 },
                },
              }}
              className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="h-[250px] w-full relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
