"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Leaf,
  MapPinned,
  Binoculars,
  Trees,
  FileText,
  ClipboardCheck,
  Recycle,
  SlidersHorizontal,
  Cpu,
  TestTubes,
  FlaskConical,
  ShieldCheck,
  BarChart3,
  Footprints,
  CloudSunRain,
  BadgeCheck,
} from "lucide-react";
export default function Page() {
  const services = [
    {
      icon: <Leaf className="h-6 w-6" aria-hidden />,
      title: "Ecological & Baseline Studies",
      accent: "bg-emerald-100 text-emerald-700 ring-emerald-200",
      items: [
        {
          label: "Field surveys and GIS mapping",
          icon: <MapPinned className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Biodiversity assessments",
          icon: <Binoculars className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Habitat and wildlife analysis",
          icon: <Trees className="h-4 w-4" aria-hidden />,
        },
      ],
    },
    {
      icon: <FileText className="h-6 w-6" aria-hidden />,
      title: "Environmental Impact Assessments (EIA)",
      accent: "bg-sky-100 text-sky-700 ring-sky-200",
      items: [
        {
          label: "Project-specific EIAs and Strategic EIAs",
          icon: <ClipboardCheck className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Environmental Management Plans (EMP)",
          icon: <ShieldCheck className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Regulatory approvals support",
          icon: <SlidersHorizontal className="h-4 w-4" aria-hidden />,
        },
      ],
    },
    {
      icon: <Recycle className="h-6 w-6" aria-hidden />,
      title: "Waste Management Consultancy",
      accent: "bg-amber-100 text-amber-700 ring-amber-200",
      items: [
        {
          label: "Integrated waste reduction and diversion strategies",
          icon: <Recycle className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Planning and policy recommendations",
          icon: <FileText className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Smart waste systems and digital permit platforms",
          icon: <Cpu className="h-4 w-4" aria-hidden />,
        },
      ],
    },
    {
      icon: <TestTubes className="h-6 w-6" aria-hidden />,
      title: "Remediation & Monitoring",
      accent: "bg-rose-100 text-rose-700 ring-rose-200",
      items: [
        {
          label: "Contaminated site remediation",
          icon: <FlaskConical className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Long-term monitoring and reporting",
          icon: <BarChart3 className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Groundwater and soil testing",
          icon: <TestTubes className="h-4 w-4" aria-hidden />,
        },
      ],
    },
    {
      icon: <CloudSunRain className="h-6 w-6" aria-hidden />,
      title: "Sustainability Advisory & Reporting",
      accent: "bg-violet-100 text-violet-700 ring-violet-200",
      items: [
        {
          label: "ESG integration and corporate sustainability strategies",
          icon: <ShieldCheck className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Carbon footprint analysis and reduction planning",
          icon: <Footprints className="h-4 w-4" aria-hidden />,
        },
        {
          label: "Climate resilience assessments",
          icon: <CloudSunRain className="h-4 w-4" aria-hidden />,
        },
      ],
    },
  ];
  const sections = [
    {
      title: "Smart Environmental Solutions",
      description:
        "We utilize the latest technology and digital tools to drive innovation in environmental consulting:",
      image:
        "/Environment-Sustainability/environmental-services/smart-env.webp", // Replace with your preferred license-free image
      reverse: false,
      items: [
        "Mobile field data collection applications",
        "Public comment management systems",
        "Nanotech-based remediation",
        "Blockchain-based waste tracking platforms",
      ],
      footer:
        "These innovations allow us to deliver cleaner, safer, and more efficient environmental outcomes while aligning with national sustainability goals, including Saudi Arabia’s Vision 2030.",
    },
    {
      title: "Our Technical Edge",
      description:
        "Al Yusr integrates advanced tools and scientific methods to deliver accurate, actionable insights:",
      image:
        "/Environment-Sustainability/environmental-services/Technical Edge.webp", // Replace with your preferred license-free image
      reverse: true,
      items: [
        "Remote Sensing & GIS Analysis",
        "Environmental Modeling Software",
        "Drone Surveys for Site Monitoring",
        "Real-Time Air & Water Quality Sensors",
        "Blockchain-Enabled Waste Tracking Systems",
      ],
      footer:
        "These tools ensure precision, transparency, and faster reporting for all environmental activities.",
    },
  ];
  const points = [
    "Trusted by government entities and private sector developers",
    "ISO-certified with a strong focus on health, safety, and the environment",
    "In-house experts across ecological, environmental, and sustainability domains",
    "Proven success on large-scale, multi-sector environmental projects",
    "Deep understanding of local regulations and international best practices",
  ];
  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Environmental Services
            </h1>
            <p>
              At Al Yusr Engineering Consulting, we offer a full range of
              environmental services that help public and private sector clients
              manage growth responsibly while protecting natural resources. From
              regulatory compliance to sustainability advisory, our solutions
              are designed to reduce risks, ensure environmental safety, and
              support long-term resilience.
              <br /> <br /> We understand the growing need for environmentally
              responsible development. That’s why we work closely with
              government agencies, developers, and industries to assess impact,
              restore sites, and integrate sustainable practices throughout the
              project lifecycle, from planning and construction to operations
              and redevelopment.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/environmental-services/hero.webp"
              }
              className="w-full h-full object-cover"
              alt={"Hero "}
            />
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
              <Leaf className="h-3.5 w-3.5" aria-hidden /> Sustainable Solutions
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              What We Offer
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Our services are tailored to meet the unique environmental
              challenges of each project while complying with local, regional,
              and international environmental regulations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((group) => (
              <article
                key={group.title}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus-within:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`inline-flex items-center justify-center rounded-xl p-2 ring-1 ${group.accent}`}
                  >
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    <span className="absolute inset-0" aria-hidden></span>
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">{item.icon}</div>
                      <p className="text-sm leading-6 text-slate-700">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* subtle hover gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl bg-gradient-to-t from-slate-50/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                section.reverse ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${
                  section.reverse ? "lg:col-start-2" : ""
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`relative ${
                  section.reverse ? "lg:col-start-1" : ""
                }`}
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  {section.description}
                </p>

                <ul className="mt-6 space-y-3 list-disc list-inside text-slate-700">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm leading-6">
                      {item}
                    </li>
                  ))}
                </ul>

                {section.footer && (
                  <p className="mt-6 text-sm text-slate-600">
                    {section.footer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container ">
          <h2 className="text-4xl lg:text-5xl text-center max-w-3xl mx-auto font-bold tracking-tight text-slate-900">
            Why Choose Al Yusr for Environmental Services?
          </h2>
          <div className="mt-10 max-w-5xl mx-auto">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 bg-blue-50 rounded-lg p-3"
                >
                  <BadgeCheck className="h-6 w-6 shrink-0 text-white fill-green-500 mt-0.5" />
                  <span className="text-lg leading-7 text-slate-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Shaping a Sustainable Tomorrow"
        desc="Whether it’s conducting impact studies, implementing air quality monitoring systems, or launching digital waste management tools, Al Yusr is committed to building a greener future. Our work helps clients make informed decisions, reduce environmental risks, and meet the growing demand for sustainable development."
        btn="Contact Us Today"
      />
    </main>
  );
}
