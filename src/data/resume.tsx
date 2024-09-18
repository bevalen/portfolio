import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Ben Valentin",
  initials: "BV",
  url: "https://benvalentin.me",
  location: "Cumming, GA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "US Marine turned tech entrepreneur. Passionate about building things and solving problems. Strategic thinker with a track record of consistently hitting ambitious goals.",
  summary:
    "Experienced entrepreneur and strategic thinker with a background in software engineering, sales, and marketing. As a former United States Marine, I am committed to achieving results and consistently hitting goals. I have founded and led multiple startups, including ValCinema, WedLaunch, and FilmFlow, where I built innovative products and grew revenues past $1M annually. My technical skills include Typescript, React/Next.js, and Python, among others. I thrive in fast-paced environments and excel in product management, agile development, team leadership, and operational management.",
  avatarUrl: "/me.png",
  skills: {
    Technical: [
      "HTML",
      "CSS",
      "JavaScript",
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "OpenAI",
      "Stripe",
      "Postgres",
      "Supabase",
      "No-code Prototyping",
    ],
    Sales: [
      "Sales Strategy",
      "Customer Relationship Management",
      "Sales Forecasting",
      "Lead Generation",
      "Negotiation Skills",
      "Cold Calling",
      "Sales Optimization",
      "Lead Qualification",
    ],
    Marketing: [
      "Marketing Automation",
      "Appointment Scheduling",
      "Digital Marketing",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Brand Development",
      "Digital Advertising",
      "Facebook Ads",
      "Meta Ads",
      "Google Ads",
      "Landing Page Design",
    ],
    Management: [
      "Team Management",
      "Talent Acquisition",
      "Operational Management",
      "Strategic Thinking",
      "Goal Setting",
      "Entrepreneurship",
      "Startup Leadership",
      "Business Strategy",
      "Problem-solving",
      "Adaptability",
      "Product Management",
      "Coding Project Management",
      "Version Control",
      "Agile Development",
      "Responsive Web Design",
      "SOP Development",
    ],
    Communication: [
      "Effective Listening",
      "Empathy",
      "Conflict Resolution",
      "Public Speaking",
      "Presentation Skills",
    ],
    Tools: [
      "Make (Integromat)",
      "Zapier",
      "Jira",
      "ClickUp",
      "Slack",
      "GitHub",
      "Netlify",
      "Vercel",
      "GoHighLevel",
      "Softr",
      "Webflow",
      "Medical EHR Systems",
    ],
    Misc: [
      "Typing: 108 WPM",
      "Ultra-Marathon Running",
      "Combat Medical Training",
      "Infantry Experience",
      "Professional Piano",
    ],
  },
  personality: {
    myers_briggs: {
      type: "ENTJ-A",
      title: "The Visionary",
      url: "https://www.crystalknows.com/personality-type/entj",
      description: "Strategic leaders with a drive for innovation and achievement.",
      attributes: ["Strategic", "Confident", "Efficient", "Charismatic", "Decisive"]
    },
    enneagram: {
      type: "8 Wing 7",
      title: "The Maverick",
      url: "https://www.crystalknows.com/enneagram/type-8",
      description: "Confident and assertive individuals who seek challenges and protect others.",
      attributes: ["Assertive", "Protective", "Energetic", "Adventurous", "Self-confident"]
    },
    disc_assessment: {
      type: "High D, Low I",
      title: "The Driver",
      url: "https://www.crystalknows.com/disc/di-personality-type",
      description: "Results-oriented problem-solvers who thrive on challenges and direct action.",
      attributes: ["Direct", "Results-oriented", "Decisive", "Competitive", "Independent"]
    }
  },
  funFacts: [
    "I completed a 100k ultramarathon and a 140-mile Ironman triathlon.",
    "I joined the military at the age of 26.",
    "I am one of seven siblings, with three brothers and three sisters.",
    "I grew up on a farm in Tennessee.",
    "I am the designated sourdough baker in my family.",
    "I initially studied music before transitioning to business."
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ben@benvalentin.me",
    tel: "+16787086066",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bevalen",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/benjamin-j-valentin/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ben@benvalentin.me",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "WedLaunch",
      href: "https://wedlaunch.com/",
      badges: [],
      location: "Atlanta, GA",
      title: "Founder & CEO",
      logoUrl: "/wedlaunch.png",
      start: "2023",
      end: "Present",
      description:
        "Wedding vendor marketing agency. Built the first instant-booking wedding vendor marketplace MVP using Next JS, Python, Tailwind CSS, Supabase, Stripe, OpenAI.",
    },
    {
      company: "GetDoctor",
      href: "https://getdoctor.com",
      badges: [],
      location: "Dunwoody, GA",
      title: "Head of Growth",
      logoUrl: "/getdoctor.jpg",
      start: "2021",
      end: "2023",
      description:
        "Medical tech startup improving patient intake experience. Automated appointment booking process and developed SOPs for product requirement documentation.",
    },
    {
      company: "FilmFlow, Inc",
      href: "https://filmflow.com",
      badges: [],
      location: "Cumming, GA",
      title: "Founder & CEO",
      logoUrl: "/filmflow.png",
      start: "2022",
      end: "2023",
      description:
        "AI tech startup enabling filmmakers to write screenplays with AI. Raised $200,000 from angel investors and produced the first AI-written short film.",
    },
    {
      company: "Metz-Kelly Holdings",
      href: "https://metzkelly.com",
      badges: [],
      location: "Cumming, GA",
      title: "Director of Operations",
      logoUrl: "/metzkelly.png",
      start: "2021",
      end: "2021",
      description:
        "Family business operating 35+ rental properties. Managed operations for 35+ properties and 100+ tenants.",
    },
    {
      company: "Band of Coders",
      href: "https://bandofcoders.com",
      badges: [],
      location: "Dunwoody, GA",
      title: "Head of Growth",
      logoUrl: "/bandofcoders.jpg",
      start: "2019",
      end: "2020",
      description:
        "Global software development firm. Spearheaded sales procedure optimization and managed 200+ contractors nationally.",
    },
    {
      company: "United States Marine Corps",
      href: "https://www.marines.com",
      badges: [],
      location: "Cumming, GA",
      title: "Infantry",
      logoUrl: "/usmc.png",
      start: "2019",
      end: "2023",
      description:
        "Infantry. Served 5 years with extensive training and experience in various operational environments.",
    },
    {
      company: "ValCinema",
      href: "https://valcinema.com",
      badges: [],
      location: "Cumming, GA",
      title: "Founder & CEO",
      logoUrl: "/valcinema.png",
      start: "2017",
      end: "2021",
      description:
        "National wedding photo + video company. Increased monthly revenue by 300% year over year and managed operations for 99+ weddings/month nationally.",
    },
    {
      company: "Coast to Coast Linens",
      href: "",
      badges: [],
      location: "West Palm Beach, FL",
      title: "Director of Operations",
      logoUrl: "",
      start: "2015",
      end: "2017",
      description:
        "Coast to Coast Linens is a national commercial linens company. During my time there I managed a team of 100+ employees and was responsible for all daily operations.",
    },
  ],
  education: [
    {
      school: "Florida School of Discipleship",
      href: "https://floridadiscipleship.com",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "",
      start: "2016",
      end: "2021",
    }
  ],
  projects: [
    {
      title: "Wedly",
      href: "https://bookwedly.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Wedly is the very first instant-booking wedding vendor marketplace that allows vendors to connect with brides and grooms.",
      technologies: [
        "Next.js",
        "Typescript",
        "Python",
        "PostgreSQL",
        "Supabase",
        "Tailwind",
        "Stripe",
        "OpenAI",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://bookwedly.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/wedly.jpg",
      video:
        "",
    },
    {
      title: "Sound Enterprises",
      href: "https://www.sound-enterprises.com/",
      dates: "September 2024",
      active: true,
      description:
        "Designed and deployed a custom-code marketing website that allows the administration team to update data dynamically using Airtable.",
      technologies: [
        "Next.js",
        "Tailwind",
        "Typescript",
        "Airtable",
        "ClickUp",
        "GoHighLevel",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.sound-enterprises.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sound-enterprises.jpg",
      video:
        "",
    },
    {
      title: "Quivr",
      href: "https://quivr.benvalentin.me",
      dates: "August 2024",
      active: true,
      description:
        "Quivr is a simple AI tool to help you find Bible verses that speak directly to your current circumstances.",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind",
        "OpenAI",
      ],
      links: [
        {
          type: "Website",
          href: "https://quivr.benvalentin.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bevalen/quivr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quivr.jpg",
      video: "",
    },
    {
      title: "LifeTrack Learning",
      href: "https://transcripts.lifetracklearning.com/",
      dates: "August 2024",
      active: false,
      description:
        "Developed a no-code rapid MVP for LifeTrack Learning to start offering a user friendly way for students to complete their highschool transcripts.",
      technologies: [
        "Softr",
        "Airtable",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://transcripts.lifetracklearning.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lifetrack.jpg",
      video: "",
    },
  ],
  references: [
    {
      name: "Wayne Craig",
      title: "Executive Vice President Global Sales and Marketing",
      company: "CAIRE Inc.",
      description:
        `I have had the pleasure of working with Ben Valentin on several projects, 
        and his ability to blend creativity with a process-oriented approach is exceptional. 
        Ben consistently delivers innovative solutions that enhance productivity, 
        while navigating complex challenges with ease. He is a skilled problem-solver, 
        able to streamline operations through his deep technical expertise and strategic mindset. 
        Ben is also an excellent communicator, making complex concepts accessible 
        and ensuring successful project outcomes. I highly recommend him to any organization 
        seeking to optimize through automation.`,
      image: "/wayne-craig.jpg",
      links: [
        {
          icon: <Icons.linkedin className="size-3" />,
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/waynecraig/",
        },
        {
          icon: <Icons.email className="size-3" />,
          title: "Email",
          href: "mailto:wcraigees@gmail.com",
        },
      ],
    },
    {
      name: "Bobby John",
      title: "Founder & CEO",
      company: "Band of Coders",
      description:
        "",
      image: "/bobby-john.jpg",
      links: [
        {
          icon: <Icons.linkedin className="size-3" />,
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/bobby-john-41530a/",
        },
        {
          icon: <Icons.phone className="size-3" />,
          title: "Phone",
          href: "tel:+17702868668",
        },
        {
          icon: <Icons.email className="size-3" />,
          title: "Email",
          href: "mailto:bobby@bandofcoders.com",
        },
      ],
    },
    {
      name: "Bennett Jared",
      title: "Founder & CEO",
      company: "MapleCross Wealth Management",
      description:
        "",
      image: "",
      links: [
        {
          icon: <Icons.phone className="size-3" />,
          title: "Phone",
          href: "tel:+19312672545",
        },
        {
          icon: <Icons.email className="size-3" />,
          title: "Email",
          href: "mailto:bennett.jared@maplecross.com",
        },
      ],
    },
    {
      name: "Marty Grusznis",
      title: "Founder & CEO",
      company: "Blu Couture",
      description:
        "",
      image: "",
      links: [
        {
          icon: <Icons.phone className="size-3" />,
          title: "Phone",
          href: "tel:+13366082724",
        },
        {
          icon: <Icons.email className="size-3" />,
          title: "Email",
          href: "mailto:Marty@g-folk.com",
        },
      ],
    },
  ],
} as const;