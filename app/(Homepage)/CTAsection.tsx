import React from "react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Download Our Brochures
        </h2>
        <p className="text-center text-lg max-w-2xl mx-auto text-slate-600 mb-10">
          Explore our company profile, project portfolio, and engineering
          services in detail. Available in three professionally crafted PDFs.
        </p>

        {/* Brochure Download Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a
            href="/brochures/company-profile.pdf"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
            download
          >
            Company Profile
          </a>
          <a
            href="/brochures/project-portfolio.pdf"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
            download
          >
            Project Portfolio
          </a>
          <a
            href="/brochures/services-overview.pdf"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
            download
          >
            Services Overview
          </a>
        </div>

        {/* Client Logos */}
        <div className="border-t border-slate-200 pt-10">
          <h3 className="text-2xl font-medium text-center mb-6">
            Trusted by Leading Clients
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Replace these img src with actual client logos */}
            <img src="/clients/client1.png" alt="Client 1" className="h-12" />
            <img src="/clients/client2.png" alt="Client 2" className="h-12" />
            <img src="/clients/client3.png" alt="Client 3" className="h-12" />
            <img src="/clients/client4.png" alt="Client 4" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
