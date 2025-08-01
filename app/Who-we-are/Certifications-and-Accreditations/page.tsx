import {
  BadgeCheck,
  Building2,
  Globe,
  Leaf,
  ShieldCheck,
  Layers,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-slate-50 text-gray-800">
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold mb-6">
            Certifications & Accreditations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At ALYUSR Engineering Consulting, certifications are more than just
            credentials; they reflect our ongoing commitment to delivering
            high-quality, safe, and sustainable engineering solutions. We
            proudly meet both national and international standards, ensuring
            that every project we take on is executed with precision,
            compliance, and care.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sky-800 mb-4">
              Class A Certificate: Engineering Excellence Recognized Nationally
            </h2>
            <p className="text-gray-700 mb-4">
              ALYUSR holds the prestigious Class A Certificate in engineering
              consultancy, a top-tier classification issued by regulatory
              authorities in Saudi Arabia.
            </p>
            <p className="text-gray-700 mb-6">
              This certification confirms our capability to handle large-scale,
              complex, and high-value projects across urban development,
              infrastructure, architectural design, and engineering supervision.
              It reflects our:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Proven technical competence",
                "Strong project delivery record",
                "Highly qualified multidisciplinary team",
                "Full compliance with national engineering codes and regulations",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/certifications/class-a.jpg"
              alt="Class A Certification"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-sky-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            International ISO Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "ISO 9001:2015",
                desc: "Quality Management",
                img: "/certifications/iso-9001.jpg",
              },
              {
                label: "ISO 14001:2015",
                desc: "Environmental Management",
                img: "/certifications/iso-14001.jpg",
              },
              {
                label: "ISO 45001:2018",
                desc: "Occupational Health & Safety",
                img: "/certifications/iso-45001.jpg",
              },
              {
                label: "ISO 31000:2018",
                desc: "Risk Management",
                img: "/certifications/iso-31000.jpg",
              },
              {
                label: "ISO 21500:2021",
                desc: "Project Management Framework",
                img: "/certifications/iso-21500.jpg",
              },
            ].map((iso, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl shadow hover:shadow-md transition overflow-hidden"
              >
                <div className="h-32 w-full bg-gray-100">
                  <img
                    src={iso.img}
                    alt={iso.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-sky-700 mb-1">
                    {iso.label}
                  </h3>
                  <p className="text-gray-600 text-sm">{iso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Global Memberships & Registrations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-6 h-6 text-green-600" />,
                title: "USGBC – LEED Member",
                desc: "Supporting sustainable building and green design practices",
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-600" />,
                title: "ISOCARP Member",
                desc: "Active in global urban planning dialogue and innovation",
              },
              {
                icon: <BadgeCheck className="w-6 h-6 text-sky-600" />,
                title: "D-U-N-S Registered™",
                desc: "Trusted identity verified by Dun & Bradstreet",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
                title: "Facilitiesline – Gold Member",
                desc: "Certified readiness for large-scale project delivery",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-sky-50 border border-sky-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
