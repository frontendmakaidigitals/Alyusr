"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import EngineeringCTA from "../app_chunks/CTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/app/globals.css";

gsap.registerPlugin(ScrollTrigger);

const offices = [
  {
    country: "Kingdom of Saudi Arabia (KSA)",
    color: "from-purple-600 to-pink-500",
    img: "/locations/ksa.webp",
    content:
      "Saudi Arabia is the foundation of our journey and the location of our headquarters. For decades, Al Yusr has played an important role in the Kingdom’s development, supporting projects that align with Vision 2030 and the nation’s ambitious transformation agenda. From large-scale infrastructure and energy projects to urban planning, architectural design, and engineering consultancy, our work helps shape the cities and communities of tomorrow. With a highly skilled local and international team, we have built long-standing partnerships with government ministries, private developers, and industrial leaders, making us one of the most trusted consultancy firms in the region. Our presence here is not just about delivering projects, it’s about contributing to the sustainable growth and prosperity of the Kingdom.",
  },
  {
    country: "United Kingdom (UK)",
    color: "from-indigo-600 to-blue-500",
    img: "/locations/uk.webp",
    content:
      "In the UK, Al Yusr taps into one of the world’s most advanced ecosystems of engineering, research, and sustainable design practices. Our UK office connects us to cutting-edge technologies and global best practices, enabling us to integrate innovation into every project we deliver. From strategic consulting and advanced engineering to sustainability-driven solutions, our UK presence strengthens our ability to provide clients with world-class expertise combined with local adaptability. Serving as a global bridge, our UK operations ensure that projects across the Middle East, Africa, and Asia benefit from the lessons, standards, and innovations developed in one of the most progressive markets in the world.",
  },
  {
    country: "Sri Lanka",
    color: "from-teal-600 to-emerald-500",
    img: "/locations/sriLanka.webp",
    content:
      "Our presence in Sri Lanka reflects our commitment to supporting regional development and nurturing talent in South Asia. With its growing demand for infrastructure, energy, and urban development projects, Sri Lanka provides Al Yusr with the opportunity to deliver cost-effective, sustainable, and technically sound solutions. Our team in Sri Lanka brings together local expertise with Al Yusr’s global network, enabling us to deliver high-value outcomes while building capacity within the local engineering and consultancy community. Beyond projects, our presence in Sri Lanka emphasizes collaboration, knowledge-sharing, and creating opportunities for local professionals to thrive in an increasingly interconnected global market.",
  },
  {
    country: "Egypt",
    color: "from-amber-600 to-orange-500",
    img: "/locations/egypt.webp",
    content:
      "Egypt is a hub of innovation and growth in North Africa, and Al Yusr is proud to contribute to its transformation journey. From transportation and infrastructure projects to urban redevelopment and energy solutions, our Egypt office supports the country’s ambitious plans for modernization and sustainable development. With a rapidly growing population and increasing demand for smart infrastructure, our role in Egypt is to deliver solutions that are resilient, scalable, and future-ready. By combining local market knowledge with global expertise, Al Yusr helps clients unlock new opportunities while overcoming challenges such as regulatory requirements, environmental considerations, and cost efficiency. Our work in Egypt underscores our belief that strategic engineering solutions can drive both economic growth and community well-being.",
  },
  {
    country: "United Arab Emirates (UAE)",
    color: "from-pink-600 to-rose-500",
    img: "/locations/uae.webp",
    content:
      "The UAE is more than just a regional office for Al Yusr; it is a hub that connects our operations across the Middle East and beyond. With its global outlook, strong infrastructure pipeline, and vision-driven leadership, the UAE provides us with a platform to deliver projects that are innovative, sustainable, and technologically advanced. From smart cities and digital infrastructure to engineering consultancy and project management, our UAE team supports both government initiatives and private sector developments. The country’s focus on sustainability, resilience, and global connectivity aligns perfectly with Al Yusr’s mission, making our UAE presence an essential driver of our regional and international growth.",
  },
];

export default function OurPresence() {
  return (
    <section className="relative overflow-hidden">
      {/* Heading */}
      <section className="text-start container my-10">
        <h1 className="text-4xl lg:text-5xl text-sky-800 font-bold">
          Our Presence
        </h1>
      </section>

      <section className="h-[500px] w-full">
        <Image
          width={900}
          height={400}
          src="https://images.pexels.com/photos/335394/pexels-photo-335394.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </section>

      <section className="max-w-5xl mx-auto mt-10">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          At Al Yusr, our strength lies in our ability to combine global
          expertise with local knowledge. With a strong footprint across Saudi
          Arabia, the United Kingdom, Sri Lanka, Egypt, and the United Arab
          Emirates, we are positioned to deliver engineering and consultancy
          services that meet the unique needs of every market. Each office
          reflects our commitment to innovation, sustainability, and excellence.
        </p>
      </section>

      {/* Office Cards */}
      <div className="container grid grid-cols-1 mt-16">
        {offices.map((office, idx) => (
          <OfficeCard
            length={offices.length}
            key={office.country}
            office={office}
            idx={idx}
          />
        ))}
      </div>

      <EngineeringCTA
        title="Partner With Us, Wherever You Are"
        desc="From the Middle East to Europe and beyond, our teams are ready to deliver innovative, sustainable, and future-ready engineering solutions tailored to your market."
      />
    </section>
  );
}

function OfficeCard({
  office,
  idx,
  length,
}: {
  office: { country: string; img: string; content: string };
  idx: number;
  length: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const img = wrapper.querySelector<HTMLImageElement>("img.img-project");
    if (!img) return;

    // Ensure image is hidden until reveal starts
    img.style.opacity = "0";

    // Use the resolved image URL from Next/Image
    const src = (img as HTMLImageElement).currentSrc || img.src;

    // Create 9 masks
    const initialClipPaths = [
      "polygon(0 0,0 0,0 0,0 0)",
      "polygon(33.33% 0,33.33% 0,33.33% 0,33.33% 0)",
      "polygon(66.66% 0,66.66% 0,66.66% 0,66.66% 0)",
      "polygon(0 33.33%,0 33.33%,0 33.33%,0 33.33%)",
      "polygon(33.33% 33.33%,33.33% 33.33%,33.33% 33.33%,33.33% 33.33%)",
      "polygon(66.66% 33.33%,66.66% 33.33%,66.66% 33.33%,66.66% 33.33%)",
      "polygon(0 66.66%,0 66.66%,0 66.66%,0 66.66%)",
      "polygon(33.33% 66.66%,33.33% 66.66%,33.33% 66.66%,33.33% 66.66%)",
      "polygon(66.66% 66.66%,66.66% 66.66%,66.66% 66.66%,66.66% 66.66%)",
    ];

    const finalClipPaths = [
      "polygon(0 0,33.33% 0,33.33% 33.33%,0 33.33%)",
      "polygon(33.33% 0,66.66% 0,66.66% 33.33%,33.33% 33.33%)",
      "polygon(66.66% 0,100% 0,100% 33.33%,66.66% 33.33%)",
      "polygon(0 33.33%,33.33% 33.33%,33.33% 66.66%,0 66.66%)",
      "polygon(33.33% 33.33%,66.66% 33.33%,66.66% 66.66%,33.33% 66.66%)",
      "polygon(66.66% 33.33%,100% 33.33%,100% 66.66%,66.66% 66.66%)",
      "polygon(0 66.66%,33.33% 66.66%,33.33% 100%,0 100%)",
      "polygon(33.33% 66.66%,66.66% 66.66%,66.66% 100%,33.33% 100%)",
      "polygon(66.66% 66.66%,100% 66.66%,100% 100%,66.66% 100%)",
    ];

    // Ensure wrapper is the stacking context
    wrapper.style.position = "relative";

    const masks: HTMLDivElement[] = [];
    for (let i = 0; i < 9; i++) {
      const mask = document.createElement("div");
      mask.className = "mask-tile";
      Object.assign(mask.style, {
        position: "absolute",
        inset: "0",
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: initialClipPaths[i],
        transform: "translateZ(0)",
        willChange: "clip-path",
        zIndex: "2",
      } as CSSStyleDeclaration);
      wrapper.appendChild(mask);
      masks.push(mask);
    }

    // Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top 75%",
        once: true,
      },
      defaults: { ease: "power4.out" },
      onComplete: () => {
        img.style.opacity = "1";
        masks.forEach((m) => m.remove());
        ScrollTrigger.refresh();
      },
    });

    // Optional: subtle image zoom-out while tiles reveal
    tl.fromTo(
      img,
      { scale: 1.08 },
      { scale: 1, duration: 0.4, ease: "power3.out" },
      0
    );

    const order = [[0], [1, 3], [2, 4, 6], [5, 7], [8]];
    order.forEach((group, i) => {
      tl.to(
        group.map((idx) => masks[idx]),
        {
          // map each element to its corresponding final clip-path
          clipPath: (index: number) => finalClipPaths[group[index]],
          duration: 0.9,
          stagger: 0.06,
        },
        i * 0.18
      );
    });

    // Cleanup
    return () => {
      tl.kill();
      masks.forEach((m) => m.remove());
    };
  }, [office.img]);

  return (
    <div
      className={`grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 ${
        length - 1 !== idx ? "border-b py-10 border-slate-500/30" : "pt-10"
      } overflow-hidden`}
    >
      {/* Image Wrapper */}
      <div
        ref={wrapperRef}
        className={`relative w-full h-[450px] overflow-hidden shadow-lg ${
          idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={office.img}
          alt={office.country}
          fill
          className="img-project object-cover w-full h-full"
          data-animate="true"
        />
      </div>

      {/* Content */}
      <div className={`${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
        <h2 className="text-4xl lg:text-5xl py-1 font-[600] mb-3 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
          <span className="text-5xl lg:text-6xl text-gray-700">0{idx + 1}</span>{" "}
          {office.country}
        </h2>
        <p className="text-gray-700 leading-relaxed">{office.content}</p>
      </div>
    </div>
  );
}
