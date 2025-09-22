"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Compass,
  Map,
  Landmark,
  BarChart3,
  Calendar,
  Leaf,
  FileCheck2,
  ShieldCheck,
  Users,
  Network,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";
export default function Page() {
  const services = [
    { title: "Pre-Project Planning & Feasibility Studies", icon: Compass },
    { title: "Vision Development & Strategic Frameworks", icon: Map },
    { title: "Master Planning & Land Use Strategy", icon: Landmark },
    { title: "Urban and Regional Policy Analysis", icon: BarChart3 },
    { title: "Phasing, Budgeting & Scheduling Plans", icon: Calendar },
    { title: "Sustainability & Resilience Integration", icon: Leaf },
    { title: "Development Control Regulations Review", icon: FileCheck2 },
    { title: "Coordination with Regulatory Authorities", icon: ShieldCheck },
    { title: "Stakeholder Engagement & Public Consultation", icon: Users },
    { title: "Infrastructure & Utilities Planning", icon: Network },
  ];

  const points = [
    "Multidisciplinary program leadership with Class A certification",
    "Proven track record across infrastructure, urban, and mixed-use developments",
    "Deep alignment with Vision 2030 priorities: sustainability, resilience, innovation",
    "Transparent governance and stakeholder engagement",
    "Technology-driven delivery: BIM, digital twins, analytics, and dashboards",
    "Global best practices tailored to local market needs",
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Program Management
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/project-management/hero.webp"}
          className="w-full h-full object-cover"
          alt={"Program Management Hero"}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr Engineering Consulting, we understand that managing today’s
          infrastructure programs is about more than just delivering on time and
          on budget. It&apos;s about aligning complex, multi-phase projects with
          broader strategic goals, environmental, economic, and social. Our
          Program Management services are designed to guide public and private
          sector clients through every step of their development journey,
          turning ambitious visions into sustainable, measurable outcomes.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          We bring clarity and direction to large-scale programs by
          understanding all the forces at play, from urban growth and regulatory
          requirements to climate resilience, digital transformation, and
          long-term asset performance.
        </p>
      </section>
      <section className="py-16">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {" "}
            <h1 className="text-5xl lg:text-6xl font-[600]">
              Outcome-Driven <span className="text-blue-500">Leadership</span>
            </h1>
            <p className="mt-3">
              We partner closely with clients to define success from the start,
              whether it’s lowering carbon emissions, improving community
              resilience, or maximizing return on investment. By aligning
              project goals with broader program benefits, we help clients move
              beyond project management toward true transformation.
              <br /> <br />
              Our role goes far beyond coordination; we become your trusted
              strategic partner, offering deep insight and oversight across the
              full lifecycle of your investment. With an emphasis on governance,
              communication, and accountability, we make sure every milestone
              moves you closer to meaningful impact.
            </p>
          </div>
          <div className="h-[450px] w-full bg-slate-100">
            <Image
              src={"/project-advisory/project-management/Leadership.webp"}
              alt={"Outcome Driven Leadership"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50/20 to-blue-400/10">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="text-blue-500">Capabilities</span> at a
              Glance
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At Al Yusr, our project planning services go beyond traditional
              documentation. We work across scales—regional, citywide, and
              site-specific—delivering plans that are creative, practical, and
              deeply informed by policy, community input, and environmental
              responsibility.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, icon: Icon }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white shadow-sm rounded-2xl hover:shadow-md transition"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={"/project-advisory/project-management/graph.webp"}
                alt="Built for Scale"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for Scale, Designed for Impact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We tailor every program team to the project’s scale, sector, and
                challenges, bringing in specialists in engineering, finance,
                legal, digital systems, and sustainability as needed. Whether
                managing a national infrastructure initiative or a portfolio of
                urban redevelopment projects, our teams offer the agility and
                insight to adapt to every challenge, while maintaining full
                alignment with client goals.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Digital-First Program Delivery
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach is fully integrated with Building Information
                Modeling (BIM), GIS, and custom digital dashboards to support
                transparency, coordination, and informed decision-making.
                Clients benefit from real-time insights, advanced forecasting
                tools, and robust data to track performance, mitigate risk, and
                adjust strategies when needed.
              </p>
            </div>
            {/* Image */}
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/project-advisory/project-management/digital.webp"
                alt="Digital Delivery"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-bl from-blue-50 to-blue-500/10">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl max-w-5xl mx-auto font-bold">
              Why Choose Al Yusr for{" "}
              <span className="text-blue-500">Program Management?</span>
            </h2>
          </div>

          {/* Points Grid */}
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex rounded-lg bg-white p-4 items-start gap-2"
              >
                <span className="mt-1">
                  <BadgeCheck className="w-7 h-7 text-white fill-green-500" />
                </span>
                <p className="text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Shaping Transformation Through Program Excellence"
        desc="At Al Yusr, we’re not just managing projects, we’re building legacies. Our program management solutions are designed to support long-term value, empower public institutions, and enable private clients to lead with confidence."
        btn="Contact Us Today"
      />
    </main>
  );
}
