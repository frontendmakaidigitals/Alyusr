import { Building2, Ruler, Construction, TreePine, Cpu, Compass, Users } from "lucide-react";

const divisions = [
  {
    icon: <Building2 className="w-6 h-6 text-sky-600" />,
    title: "Engineering & Design Division",
    points: [
      "Structural Engineering",
      "MEP Design (Mechanical, Electrical, Plumbing)",
      "Infrastructure & Utility Networks",
      "Roads, Drainage & Hydrology",
      "Telecom & Low-Current Systems",
    ],
  },
  {
    icon: <Ruler className="w-6 h-6 text-rose-600" />,
    title: "Architecture & Urban Planning Division",
    points: [
      "Architectural & Interior Design",
      "Landscape Architecture",
      "Urban & Regional Planning",
      "Masterplanning & Land Use Studies",
      "Design Optimization & Value Engineering",
    ],
  },
  {
    icon: <Construction className="w-6 h-6 text-yellow-600" />,
    title: "Construction & Project Management Division",
    points: [
      "Project & Program Management",
      "Contract Administration",
      "Construction Supervision",
      "Permitting & Code Compliance",
      "Fire & Safety Engineering",
      "Site Investigations & Surveying",
    ],
  },
  {
    icon: <TreePine className="w-6 h-6 text-green-600" />,
    title: "Sustainability & Smart Solutions Division",
    points: [
      "Environmental & Sustainability Planning",
      "Green Building & LEED Advisory",
      "Smart Cities Integration",
      "Energy Efficiency & Resource Management",
      "Digital Twin & Performance Monitoring",
    ],
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-600" />,
    title: "Digital Engineering & BIM Division",
    points: [
      "Building Information Modeling (BIM)",
      "GIS & Geospatial Services",
      "3D Modeling & Simulation",
      "Data Analytics for Project Optimization",
      "Digital Design Reviews",
    ],
  },
  {
    icon: <Compass className="w-6 h-6 text-purple-600" />,
    title: "Strategy & Advisory Division",
    points: [
      "Feasibility Studies",
      "Policy & Strategic Planning",
      "Vision 2030 Alignment",
      "Risk & Cost Analysis",
      "Market Research & Opportunity Mapping",
    ],
  },
];

export default function Page() {
  return (
    <div className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Divisions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At ALYUSR Engineering Consulting, our strength lies in our structure. We operate through
            dedicated, expert-led divisions that work together to deliver smart, sustainable, and fully
            integrated engineering solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {divisions.map((division, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  {division.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {division.title}
                </h3>
              </div>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                {division.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Working Together to Build the Future
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each division operates with full autonomy and cross-functional coordination. This structure allows ALYUSR to stay agile, reduce delays, and deliver high-quality, end-to-end solutions for complex, multidisciplinary projects.
            <br />
            At ALYUSR, expertise isn’t just in one place; it’s in every part of our company.
          </p>
        </div>
      </div>
    </div>
  );
}
