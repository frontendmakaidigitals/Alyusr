"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Users,
  Workflow,
  Building2,
  Cpu,
  Landmark,
  CheckCircle,
} from "lucide-react";
export default function Page() {
  const capabilities = [
    "Pre-Project Planning & Feasibility Studies",
    "Vision Development & Strategic Frameworks",
    "Master Planning & Land Use Strategy",
    "Urban and Regional Policy Analysis",
    "Phasing, Budgeting & Scheduling Plans",
    "Sustainability & Resilience Integration",
    "Development Control Regulations Review",
    "Coordination with Regulatory Authorities",
    "Stakeholder Engagement & Public Consultation",
    "Infrastructure & Utilities Planning",
  ];

  const lifecycle = [
    "Project Feasibility & Objective Setting",
    "Scope Development, Budgeting & Scheduling",
    "Development Strategy & Program Management",
    "Design Management & Constructability Review",
    "Risk Analysis, Mitigation & Monitoring",
    "Construction Phase Planning & Oversight",
    "Health, Safety, and Environmental (HSE) Planning",
    "Project Completion, Handover & Evaluation",
  ];

  const reasons = [
    {
      icon: Users,
      text: "Multidisciplinary team with expertise in engineering, economics, policy, and urban development",
    },
    {
      icon: Workflow,
      text: "End-to-end support from pre-development to post-construction",
    },
    {
      icon: Landmark,
      text: "Strong relationships with municipalities, ministries, and regulatory authorities",
    },
    {
      icon: Cpu,
      text: "Digital-first approach using BIM, GIS, and simulation tools",
    },
    {
      icon: Building2,
      text: "Deep understanding of Saudi Arabia’s regulatory environment and Vision 2030 goals",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Project Planning
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/project-planning/hero.webp"}
          className="w-full h-full object-cover "
          alt={"Project Planning"}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr Engineering Consulting, we provide end-to-end project
          planning services that lay the groundwork for successful, sustainable,
          and cost-effective development. From early feasibility studies to
          detailed execution strategies, our planning experts combine technical
          excellence with strategic insight to guide every phase of the project
          life cycle.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          Whether we’re supporting urban regeneration, infrastructure expansion,
          or private sector development, our planning team ensures your project
          is well-defined, future-ready, and aligned with both client goals and
          regulatory frameworks.
        </p>
      </section>
      <section className="py-16">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {" "}
            <h1 className="text-5xl lg:text-6xl font-[600]">
              Smart <span className="text-blue-500">Planning</span> for Smarter{" "}
              <span className="text-green-500">Development</span>
            </h1>
            <p className="mt-3">
              We take a strategic approach to project planning, integrating
              data, modeling, stakeholder consultation, and regulatory analysis
              to create strategies that drive performance and minimize risk. By
              merging urban planning principles with engineering precision, we
              help shape spaces and systems that are functional, resilient, and
              sustainable.
              <br /> <br />
              Our planning process involves both quantitative and qualitative
              analysis, along with advanced tools like GIS, BIM, and custom
              modeling platforms. This allows us to deliver solutions that
              support smart growth, environmental stewardship, and economic
              viability.
            </p>
          </div>
          <div className="h-[450px] w-full bg-slate-100">
            <Image
              src={"/project-advisory/project-planning/project-planning.webp"}
              alt={"smart planning"}
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Capabilities Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4">
              Our Capabilities at a Glance
            </h2>
            <p className="text-gray-600 mb-6">
              At Al Yusr, our project planning services go beyond traditional
              documentation. We work across scales, regional, citywide, and
              site-specific, delivering plans that are creative, practical, and
              deeply informed by policy, community input, and environmental
              responsibility.
            </p>
            <h3 className="text-lg font-semibold mb-4">
              Our services include:
            </h3>
            <ul className="space-y-3">
              {capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Life Cycle Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4">
              Project Life Cycle Leadership
            </h2>
            <p className="text-gray-600 mb-6">
              Our project managers follow global best practices. From concept to
              commissioning, we ensure every milestone is delivered on time,
              within budget, and to the highest quality standards. We manage
              project scope, risks, and communication with unmatched precision.
            </p>
            <h3 className="text-lg font-semibold mb-4">
              We plan across every stage of the life cycle:
            </h3>
            <ul className="space-y-3">
              {lifecycle.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 ">
        <div className="container text-center max-w-6xl">
          <h1 className="leading-[4.1rem] text-5xl lg:text-6xl font-[600] mb-3 bg-gradient-to-r from-blue-600 via-fuchsia-400 to-blue-600 bg-clip-text text-transparent">
            Sustainability at the Core
          </h1>
          <p className="text-white text-lg">
            Our planning approach aligns with Vision 2030 and exceeds global
            benchmarks. We go further by using in-house tools to measure
            long-term sustainability impact across social, environmental, and
            economic metrics. Whether we’re planning eco-districts, smart
            infrastructure, or city-scale strategies, we aim to deliver plans
            that work for today and adapt for tomorrow.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Al Yusr for{" "}
            <span className="text-blue-500">Project Planning?</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            We combine technical expertise, regulatory insight, and innovative
            tools to deliver planning strategies that align with client goals
            and national priorities.
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50/50  rounded-2xl p-5 flex flex-col items-center justify-center  border border-blue-400/20"
              >
                <div className="p-2 bg-blue-100 rounded-lg w-fit mb-4">
                  <item.icon className="w-10 h-10 text-blue-600 " />
                </div>
                <p className="text-gray-700 ">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Your Vision, Our Strategy"
        desc="From unlocking site potential to steering large-scale programs, Al Yusr delivers planning services that turn complex ideas into executable, high-impact solutions. If you're seeking a reliable partner to guide your next project with clarity, insight, and strategic excellence—we're ready to help."
        btn="Contact Us Today"
      />
    </main>
  );
}
