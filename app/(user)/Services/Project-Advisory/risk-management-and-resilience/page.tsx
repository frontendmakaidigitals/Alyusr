"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { BadgeCheck } from "lucide-react";
export default function Page() {
  const points = [
    "Protect critical assets and infrastructure",
    "Minimize operational and financial risks",
    "Strengthen business continuity and emergency response",
    "Align with sustainability and national safety goals",
    "Support community well-being and disaster recovery",
  ];
  const items = [
    {
      title: "Asset and Vulnerability Assessments",
      desc: "Identify the most critical assets and pinpoint where your system is most at risk.",
      img: "/project-advisory/risk-management/assessment.webp",
    },
    {
      title: "Threat Analysis",
      desc: "Evaluate physical, environmental, digital, and operational threats to your organization.",
      img: "/project-advisory/risk-management/Threat.webp",
    },
    {
      title: "Resilience Planning",
      desc: "Develop recovery strategies that ensure continuity in operations, transportation, and utilities after a crisis.",
      img: "/project-advisory/risk-management/Resilience.webp",
    },
    {
      title: "Cost-Benefit & Impact Modeling",
      desc: "Assign value to resilience investments and support informed capital planning.",
      img: "/project-advisory/risk-management/Cost-Benefit.webp",
    },
    {
      title: "Holistic Systems Thinking",
      desc: "Integrate resilience across human, natural, economic, and social systems.",
      img: "/project-advisory/risk-management/holistic.webp",
    },
  ];
  const services = [
    {
      title: "Critical Infrastructure Protection",
      desc: "Safeguard essential systems such as water, energy, transport, and healthcare from disruptions.",
      img: "/project-advisory/risk-management/Protection.webp",
    },
    {
      title: "Climate Change Adaptation",
      desc: "Build infrastructure that withstands rising sea levels, storms, and heatwaves.",
      img: "/project-advisory/risk-management/Climate Change.webp",
    },
    {
      title: "Cybersecurity Resilience",
      desc: "Mitigate digital threats and secure data, systems, and operational networks.",
      img: "/project-advisory/risk-management/Cybersecurity.webp",
    },
    {
      title: "Disaster Risk Reduction & Hazard Mitigation Planning",
      desc: "Identify disaster-prone areas and develop targeted plans to reduce risk.",
      img: "/project-advisory/risk-management/Disaster Risk Rediction.webp",
    },
    {
      title: "Disaster Recovery Services",
      desc: "Respond swiftly post-crisis with damage assessments, engineering support, and recovery strategies.",
      img: "/project-advisory/risk-management/Disaster Risk.webp",
    },
    {
      title: "Physical Security & Hardening",
      desc: "Strengthen buildings and facilities against physical threats, criminal activity, and vandalism.",
      img: "/project-advisory/risk-management/Security.webp",
    },
    {
      title: "Emergency Preparedness Training",
      desc: "Equip organizations with readiness strategies and protocols to respond quickly and effectively.",
      img: "/project-advisory/risk-management/Emergency Preparedness.webp",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-800">
          Process Simulation Models
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/risk-management/hero.webp"}
          className="w-full h-full object-cover"
          alt={"hero"}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, we empower governments, developers, and businesses to
          prepare for the unexpected. Our risk management and resilience
          services are designed to protect your assets, ensure continuity, and
          support sustainable growth, no matter the challenge.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          From climate-related threats to physical and digital risks, we help
          clients identify vulnerabilities and take strategic actions that
          enhance their resilience and long-term performance. Whether it’s
          mitigating the impact of natural disasters or strengthening critical
          infrastructure, our goal is to create safe, stable, and future-ready
          environments.
        </p>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Risk & Resilience Matters
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Investing in resilience today can save millions tomorrow. With
            increasing threats from climate change, cyber risks, natural
            hazards, and geopolitical uncertainty, it&apos;s critical to:
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex bg-sky-50 p-3 rounded-lg items-start gap-3"
              >
                <BadgeCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
            Our <span className="text-blue-500">Approach</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our risk and resilience services are grounded in real-world data,
            global best practices, and local insight. We provide:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
            <span className="text-blue-500">Representative</span> Services
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide specialized solutions to strengthen resilience and
            safeguard communities, organizations, and critical systems.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Post-Disaster Response & Recovery
            </h2>
            <p className="text-gray-700 mb-6">
              When disaster strikes, Al Yusr is ready. Our team provides
              immediate on-ground support to assess damage, restore
              functionality, and help communities recover. We’ve supported
              clients across:
            </p>

            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">
                  <BadgeCheck className="text-white fill-green-500" />
                </span>{" "}
                Floods & storm surges
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">
                  <BadgeCheck className="text-white fill-green-500" />
                </span>{" "}
                Wildfires & earthquakes
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">
                  <BadgeCheck className="text-white fill-green-500" />
                </span>{" "}
                Infrastructure failures
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">
                  <BadgeCheck className="text-white fill-green-500" />
                </span>{" "}
                Terrorist attacks & civil unrest
              </li>
            </ul>

            <p className="text-gray-700">
              With our multidisciplinary teams, we deliver engineering,
              environmental, forensic, and reconstruction services to restore
              stability and prevent future risks.
            </p>
          </div>

          {/* Image */}
          <div className="relative bg-orange-100 w-full h-[430px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/project-advisory/risk-management/Disaster Risk.webp"
              alt="Post-Disaster Response"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Build Resilience with Al Yusr"
        desc="Let us help you protect what matters most. Contact Al Yusr today to learn how our risk management and resilience services can support your strategic goals, safeguard your assets, and ensure you're ready for tomorrow."
        btn="Contact Us Today"
      />
    </main>
  );
}
