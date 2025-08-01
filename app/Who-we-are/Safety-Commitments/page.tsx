import React from "react";
import {
  ShieldCheck,
  Users,
  Activity,
  AlertTriangle,
  Award,
  ClipboardCheck,
  CheckCircle,
  HeartPulse,
} from "lucide-react";

const safetyPrograms = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "Leadership-Driven Safety Culture",
    desc: "Senior managers and project heads lead all safety efforts to ensure visibility, resource allocation, and improvement.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Employee Participation & Awareness",
    desc: "All staff are engaged in planning, audits, toolbox talks, and encouraged to report hazards and suggest improvements.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-indigo-600" />,
    title: "Training & Safety Orientation",
    desc: "Every employee undergoes safety training relevant to their role and site, with regular refreshers.",
  },
  {
    icon: <Activity className="w-6 h-6 text-orange-600" />,
    title: "Risk-Based Planning",
    desc: "Risk assessments and mitigation strategies are integrated into every project phase.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-rose-600" />,
    title: "Incident Prevention & Response",
    desc: "A robust system for reporting, investigating, and correcting incidents with root cause analysis.",
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-pink-600" />,
    title: "Fit-for-Duty Policy",
    desc: "Employees must be mentally and physically ready for work. Health programs support wellness.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-sky-600" />,
    title: "Contractor & Partner Integration",
    desc: "Subcontractors align with ALYUSR’s safety systems, with joint inspections and shared KPIs.",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-600" />,
    title: "Recognition & Rewards",
    desc: "Exceptional safety performance is celebrated with awards and internal recognition.",
  },
];

export default function SafetyCommitmentsPage() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Safety Commitments
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At ALYUSR Engineering Consulting, safety is a core value. We embed
            it in our culture, people, and projects — from planning to execution
            — following international standards like ISO 45001.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {safetyPrograms.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-emerald-700 mb-2">
            Certified for Safety
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            ALYUSR is fully certified under ISO 45001:2018 – Occupational Health
            & Safety Management. All practices align with Saudi regulations and
            international benchmarks.
          </p>
        </div>
      </div>
    </section>
  );
}
