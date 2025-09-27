"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  ShieldCheck,
  HardHat,
  Leaf,
  Clock,
  LineChart,
  BadgeCheck,
} from "lucide-react";

export default function Page() {
  const points = [
    {
      title: "Reduce Risk",
      desc: "Early identification of geotechnical and environmental risks prevents costly disruptions.",
      icon: ShieldCheck,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Improve Safety",
      desc: "Robust ground data reduces uncertainty and keeps construction teams safe.",
      icon: HardHat,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Protect the Environment",
      desc: "Early mitigation avoids ecological damage and regulatory penalties.",
      icon: Leaf,
      color: "text-green-600 bg-green-50",
    },
    {
      title: "Save Time & Costs",
      desc: "Integrated delivery eliminates the need for multiple subcontractors and delays.",
      icon: Clock,
      color: "text-red-600 bg-red-50",
    },
    {
      title: "Add Value",
      desc: "Better data informs better design, enabling cost-efficient and sustainable solutions.",
      icon: LineChart,
      color: "text-blue-600 bg-blue-50",
    },
  ];

  const services = [
    {
      title: "Ground Investigation & Data Capture",
      desc: "Early surveys, soil and groundwater testing, and advanced modeling to provide reliable data that guides design and construction.",
      image:
        "/Environment-Sustainability/Environmental Contracting/Ground Investigation.webp", // ground testing
    },
    {
      title: "Environmental Risk Assessment & Mitigation",
      desc: "Identification and remediation of contaminated land, invasive species management, and ecological protection measures to reduce risks and delays.",
      image:
        "/Environment-Sustainability/Environmental Contracting/Environmental Risk.webp", // environment protection
    },
    {
      title: "Specialist Contracting Services",
      desc: "Enabling works, site clearance, ground stabilization, and remediation of complex sites to prepare safe, compliant, and build-ready land.",
      image:
        "/Environment-Sustainability/Environmental Contracting/specialist-contracting.webp", // construction site
    },
    {
      title: "Regulatory & Compliance Management",
      desc: "Support with permitting, regulatory approvals, and stakeholder engagement to keep projects on track and compliant with environmental standards.",
      image:
        "/Environment-Sustainability/Environmental Contracting/Regulatory-Compliance.webp", // compliance meeting
    },
  ];

  const point = [
    {
      title: "Proven Expertise",
      desc: "Decades of experience in geotechnical and environmental contracting.",
    },
    {
      title: "Full Integration",
      desc: "One team managing ground, environmental, and safety risks.",
    },
    {
      title: "Strong Regulatory Relationships",
      desc: "Trusted partner to local and national authorities.",
    },
    {
      title: "Commitment to Safety & Sustainability",
      desc: "ISO-certified processes ensuring compliance and care for the environment.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-green-500">Environmental</span>{" "}
              <span className="text-blue-500">Contracting</span>
            </h1>
            <p>
              Ground risks and environmental challenges are among the leading
              causes of delays and cost overruns in major infrastructure
              projects. At Al Yusr Engineering Consulting, we recognize that the
              most effective way to prevent these issues is to address them
              early in the project lifecycle, before construction begins.
              <br /> <br />
              Our Environmental Contracting services provide a single,
              integrated solution that combines ground investigation,
              environmental risk management, and early mitigation strategies. By
              doing so, we ensure smooth transitions between design, approvals,
              and construction, while safeguarding both project delivery and
              environmental assets.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/Environmental Contracting/hero.webp"
              }
              className="w-full h-full objext-cover"
              alt={"Env contracting"}
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Environmental Contracting Matters
          </h2>

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {points.map((item, i) => (
              <li
                key={i}
                className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.color} mb-4`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl text-center font-bold text-gray-900 mb-12">
            <span className="text-blue-500">Our Services</span> at a Glance
          </h2>

          <div className="grid gap-2 grid-cols-1 lg:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden transition"
              >
                <div className="h-[200px] bg-slate-100 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Why Choose <span className="text-blue-600">Al Yusr</span>
          </h2>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {point.map((point, i) => (
              <div
                key={i}
                className="bg-white gap-3 p-5 rounded-2xl shadow-sm hover:shadow-md transition flex  items-start text-start"
              >
                <div className=" text-white mb-4">
                  <BadgeCheck
                    size={28}
                    strokeWidth={2.2}
                    className="fill-green-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Building Certainty from the Ground Up"
        desc="At Al Yusr, we believe that better data leads to better outcomes. By addressing ground and environmental risks at the earliest stages, we help clients deliver infrastructure projects that are safer, more sustainable, and more cost-efficient."
        btn="Contact Us Today"
      />
    </main>
  );
}
