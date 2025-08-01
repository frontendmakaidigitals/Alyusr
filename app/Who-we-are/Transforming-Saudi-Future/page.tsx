"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Saudi’s Future
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Engineering Progress. Empowering Vision 2030.
          </p>
          <p className="text-lg text-gray-600">
            At ALYUSR Engineering Consulting, we are proud to shape the
            Kingdom’s bold transformation under Vision 2030. Our work is rooted
            in national priorities—driving sustainable development, urban
            expansion, and infrastructure excellence.
          </p>
        </motion.div>
      </section>

      {/* Building the Kingdom */}
      <section className="bg-gray-50 py-20 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Building the Kingdom of Tomorrow
          </motion.h2>
          <p className="text-gray-600 mb-12">
            Our teams work across sectors to help transform Saudi Arabia into a
            global hub of innovation, connectivity, and opportunity.
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "A Thriving Economy",
                desc: "Empowering local talent, fostering entrepreneurship, and building infrastructure for tourism, trade, and investment.",
              },
              {
                title: "An Ambitious Nation",
                desc: "Partnering with government and private entities to elevate standards in delivery, safety, and sustainability.",
              },
              {
                title: "A Vibrant Society",
                desc: "Designing inclusive spaces that enhance quality of life, preserve culture, and promote well-being.",
              },
            ].map(({ title, desc }, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="relative bg-white py-24 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900"
          >
            Our Contribution to Vision 2030
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-10 text-left text-gray-700 text-base md:text-lg leading-relaxed"
          >
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Urban and regional planning for residential and commercial
                  communities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Infrastructure engineering for roads, drainage, and utilities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Smart city integration and digital engineering</span>
              </li>
            </ul>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Green building design and environmental compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Project and construction management for giga/mega projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Strategic consulting for Vision-aligned goals</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Local Roots */}
      <section className="bg-gray-50 py-20 px-6 lg:px-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Local Roots, Global Vision
          </h2>
          <p className="text-gray-600 text-lg">
            With headquarters in Riyadh and projects across the Kingdom, ALYUSR
            unites local expertise and global standards to deliver world-class
            outcomes. Our team of architects, planners, engineers, and advisors
            is dedicated to engineering a sustainable, smart, and strong nation.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-6 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Join us in building a future that reflects the ambition, innovation,
            and heritage of the Kingdom. Let’s engineer the next chapter of
            Saudi Arabia, together.
          </p>
          <Link
            href="/services"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
