import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const Marquee = () => {
  const Icons = [
    { title: "AutoCAD", img: "autocad.png" },
    { title: "Autodesk", img: "autodesk.webp" },
    { title: "ETABS", img: "etabs.png" },
    { title: "ETAP", img: "etap.png" },
    { title: "Gsuite", img: "Gsuite-logo.png" },
    { title: "HAP", img: "hap.avif" },
    { title: "Lumion", img: "lumion.png" },
    { title: "Microsoft Office", img: "msOffice.webp" },
    { title: "Primavera P6 (Oracle)", img: "p6Oracle.png" },
    { title: "Revit", img: "revit.jpg" },
    { title: "Microsoft Teams", img: "Teams.png" },
    { title: "Tekla", img: "Tekla.png" },
    { title: "V-Ray", img: "v-ray.png" },
  ];

  return (
    <section className="py-20">
      <h1 className="text-5xl text-center max-w-3xl mx-auto font-[600]">
        Powering Precision{" "}
        <span className="text-blue-500">Through Innovation</span>
      </h1>

      <div className="mt-7">
        {" "}
        <InfiniteMovingCards
          dir={"Icon"}
          items={Icons}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Marquee;
