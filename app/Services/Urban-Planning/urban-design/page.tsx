"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/app_chunks/CTA";
import {
  Landmark,
  TreeDeciduous,
  TrainFront,
  Building,
  Users,
  Sparkle,
  Leaf,
  Brain,
  CloudSun,
} from "lucide-react";
import { motion } from "motion/react";
export default function ConstructionManagementPage() {
  const services = [
    {
      title: "Urban Masterplanning",
      desc: "Strategic design of cities, towns, and new communities that align with national goals such as Saudi Vision 2030. We focus on infrastructure, land use, transport, housing, and public amenities to guide long-term development.",
      icon: Landmark,
    },
    {
      title: "Public Realm Design",
      desc: "Designing attractive, safe, and accessible public spaces like streets, parks, and plazas that foster social interaction and enhance community life.",
      icon: TreeDeciduous,
    },
    {
      title: "Transit-Oriented Development",
      desc: "Developing integrated spaces around transportation hubs with housing, offices, shops, and leisure to encourage walkability, reduce traffic, and promote sustainability.",
      icon: TrainFront,
    },
    {
      title: "Urban Revitalization & Redevelopment",
      desc: "Transforming underdeveloped or aging areas into modern, vibrant, and economically thriving zones while preserving cultural heritage.",
      icon: Building,
    },
    {
      title: "Placemaking & Community Design",
      desc: "Creating unique, people-focused environments that reflect the identity and values of the local community while meeting modern needs.",
      icon: Users,
    },
  ];
  const capabilities = [
    {
      title: "Design Guidelines & Urban Policies",
      desc: "Developing regulatory frameworks that ensure consistent, high-quality development.",
      icon: <Sparkle className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Sustainable Urban Infrastructure",
      desc: "Embedding green solutions such as water-efficient landscaping, renewable energy planning, and smart city tech into design.",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Smart City Integration",
      desc: "Using digital tools, data, and analytics to improve mobility, energy use, and urban services.",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Climate-Responsive Urban Planning",
      desc: "Designing cities that can adapt to environmental changes, manage heat, and support biodiversity.",
      icon: <CloudSun className="w-8 h-8 text-yellow-600" />,
    },
  ];
  const reasons = [
    {
      title: "Integrated Expertise",
      desc: "We bring together architects, engineers, urban planners, and environmental consultants to deliver complete, cross-functional solutions.",
      img: "https://images.pexels.com/photos/8474027/pexels-photo-8474027.jpeg", // Replace with your image
    },
    {
      title: "Culturally Relevant",
      desc: "Our designs respect Saudi heritage while embracing innovation and global urban trends.",
      img: "https://images.pexels.com/photos/8774355/pexels-photo-8774355.jpeg",
    },
    {
      title: "Sustainability-Driven",
      desc: "We plan for long-term social, economic, and environmental health.",
      img: "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg",
    },
    {
      title: "Community-Focused",
      desc: "Every design centers on the needs of the people who live and work there.",
      img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
          Urban Design Services
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
        <p className="mt-3 text-center w-full text-lg">
          At Al Yusr, we believe that great urban design shapes how people live,
          work, and interact. As cities grow and evolve, so must the spaces that
          support them. Our Urban Design team works at the crossroads of
          architecture, infrastructure, and community to create places that are
          not only functional and beautiful but also deeply connected to their
          surroundings.
        </p>{" "}
        <p className="mt-2 text-lg text-center">
          We design cities that are walkable, green, inclusive, and
          future-ready. Our work transforms underused areas into vibrant
          districts, improves the quality of public spaces, and helps
          governments and developers build better, more liveable communities.
          From large-scale masterplans to neighborhood upgrades, we focus on
          creating environments that promote wellbeing, sustainability, and
          cultural identity.
        </p>
        <p className="mt-2 text-lg text-center">
          With expertise in both local Saudi landscapes and international
          planning standards, Al Yusr brings a thoughtful, holistic approach to
          every urban design project. Whether you are planning a new urban
          district or revitalizing an old neighborhood, we ensure every space is
          designed with people in mind.
        </p>
      </section>
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-500">Urban Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Building vibrant, inclusive, and forward-looking cities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all h-full"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-10">
            <span className="text-blue-500">Specialized</span> Capabilities
          </h2>
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 80 }}
                className="bg-gray-100 rounded-2xl p-8 text-left shadow-md"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-4">
        <div className=" container text-center mb-12">
          <h2 className="text-5xl font-bold">
            Why <span className="text-blue-500">Choose</span> Al Yusr for{" "}
            <span className="text-green-500">Urban Design</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Combining Saudi values with modern innovation to deliver sustainable
            and people-centric urban solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-3 text-left">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Let’s Plan the Future Together"
        desc="From idea to implementation, Al Yusr supports you at every step of your urban development journey. Whether it’s a city-wide vision or a community-scale design, we help you build a smarter, greener, and more connected future."
        btn="Contact Us Today"
      />
    </main>
  );
}
