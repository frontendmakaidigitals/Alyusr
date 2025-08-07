export const siteConfig = {
  name: "Alyusr",
  description: "",
  navItems: [
    {
      label: "Who We Are",
      services: [
        {
          label: "Overview",
          submenu: [
            
            { label: "Company Overview", link: "Company-Overview" },
            { label: "Our Divisions", link: "Our-Divisions" },
            { label: "Our Ethics", link: "Our-Ethics" },
            { label: "Safety Commitments", link: "Safety-Commitments" },
            { label: "Sustainability", link: "Sustainability" },
            { label: "Technical Expertise", link: "Technical-Expertise" },
          ],
        },
      ],
      tagLine: "Al Yusr is making global impact with saudi - vision 2030",
      wideCard: [
        {
          link: "Leadership-and-Vision",
          label: "Leadership & Vision",
          desc: "Al Yusr’s leadership drives innovation, excellence, and a clear vision for the Kingdom’s future. ",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Saudi_Vision_2030_logo.svg/1200px-Saudi_Vision_2030_logo.svg.png",
        },
        {
          link: "Transforming-Saudi-Future",
          label: "Transforming Saudi Future",
          desc: "Al Yusr is proudly shaping Saudi Arabia’s future through visionary engineering.",
          img: "https://images.pexels.com/photos/4614473/pexels-photo-4614473.jpeg",
        },
      ],
      imgCard: [
        {
          button: "Donwload Now",
          img: "/cover-page.jpg",
        },
        {
          button: "Get Expert Advise",
          img: "https://images.pexels.com/photos/5439438/pexels-photo-5439438.jpeg",
        },
      ],
    },
    {
      label: "What We Do",
      tagLine: "Services We Provide",
      services: [
        {
          label: "Design Solutions",
          items: [
            "Architecture and Design",
            "Structural & MEP Engineering",
            "Landscape Architecture",
            "Masterplanning",
            "Interior Architecture",
          ],
        },
        {
          label: "Project Advisory",
          items: [
            "Construction Management",
            "BIM Solutions",
            "Cost Management",
            "Simulation Models",
            "Partnership Advisory",
          ],
        },
        {
          label: "Sustainability Services",
          items: [
            "Social Impact Assessment",
            "Climate Adaptation",
            "Air Quality Consulting",
            "EHS Management",
            "Sustainability Advisory",
          ],
        },
      ],
      tagLine2: "In These Locations",
      locationsData: [
        {
          country: "Saudi Arabia",
          cities: ["Jeddah", "Riyyad", "Abha", "Hail", "Najran", "Tabuk"],
        },
        {
          country: "Egypt",
          cities: [""],
        },
        {
          country: "United Kingdom",
          cities: [""],
        },
        {
          country: "Sri Lanka",
          cities: [""],
        },
      ],
    },
    {
      label: "Why Al Yusr",
      tagLine: "Lorem Ipsum Dolor ",
      imgCard: "",
      contactNum: "",
      services: [
        {
          link: "Trusted-by-Government-and-Private-Sectors",
          label: "Trusted by Govt & Private Sectors",
          description:
            "Al Yusr operates with internationally recognized certifications, ensuring quality, safety, and sustainability",
          img: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg", // Replace with actual image path
        },
        {
          link: "Globally-Certified-Standards",
          label: "Globally Certified Standards",
          description:
            "Why Al Yusr is the trusted global Infrastructure leader. Why Al Yusr is the trusted global Infrastructure leader",
          img: "https://images.pexels.com/photos/6474498/pexels-photo-6474498.jpeg",
        },
        {
          link: "In-House-Capabilities",
          label: "In-House Capabilities",
          description:
            "Al Yusr delivers all major services in-house, ensuring full control, quality, and efficiency at every stage",
          img: "https://images.pexels.com/photos/33266/work-chinese-industrial-professional.jpg",
        },
        {
          link: "CEO-Led-Specialized-Departments",
          label: "CEO Led - Specialized Departments",
          description:
            "At Al Yusr, every department is guided by executive leadership to ensure expert oversight and exceptional delivery",
          img: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg",
        },
      ],
      tabs: [
        { label: "Architecture and Design", link: "/" },
        { label: "Environmental Contracting", link: "/" },
        { label: "Digital Infrastructure Services", link: "/" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Our Presence",
      href: "/our-presence",
    },
    {
      label: "Contact Us",
      href: "/Contact",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export type SiteConfig = {
  name: string;
  description: string;
  navItems: NavItem[];
  links: {
    github: string;
    twitter: string;
    docs: string;
    discord: string;
    sponsor: string;
  };
};

type NavItem = WhoWeAreNav | WhyAlYusrNav | WhatWeDoNav | SimpleLink;

type WhoWeAreNav = {
  label: "Who We Are";
  services: {
    label: string;
    submenu: { label: string; link: string }[];
  }[];
  tagLine: string;
  wideCard: { label: string; desc: string; img: string; link: string }[];
  imgCard: { button: string; img: string }[];
};

type WhatWeDoNav = {
  label: "What We Do";
  tagLine: string;
  tagLine2: string;
  services: {
    label: string;
    items: string[];
  }[];
  locationsData: {
    country: string;
    cities: string[];
  }[];
  imgCard: {
    label: string;
    img: string;
  };
};

type WhyAlYusrNav = {
  label: "Why Al Yusr";
  tagLine: string;
  contactNum: string;
  imgCard: string;
  services: {
    label: string;
    description: string;
    img: string;
    link: string;
  }[];
  tabs: {
    label: string;
    link: string;
  }[];
};

type SimpleLink = {
  label: string;
  href?: string;
};
