import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";


export const DATA = {
  name: "Ben Valentin",
  initials: "BV",
  url: "https://benvalentin.me",
  resumeUrl: "https://resume.benvalentin.me",
  location: "Cumming, GA",
  locationLink: "https://www.google.com/maps/place/cumming",
  description:
    "US Marine turned tech entrepreneur. Passionate about building things and solving problems. Strategic thinker with a track record of consistently hitting ambitious goals.",
  summary:
    "Experienced entrepreneur and strategic thinker with a background in software engineering, sales, and marketing. As a United States Marine, I am committed to achieving results and consistently hitting goals. I have founded and led multiple startups, including ValCinema, WedLaunch, and FilmFlow, where I built innovative products and grew revenues past $1M annually. My technical skills include Typescript, React/Next.js, and Python, among others. I thrive in fast-paced environments and excel in product management, agile development, team leadership, and operational management.",
  avatarUrl: "/me.png",
  skills: {
    Technical: [
      { name: "HTML", description: "Proficient in semantic markup and accessibility best practices." },
      { name: "CSS", description: "Experienced with modern CSS techniques." },
      { name: "JavaScript", description: "Strong understanding of ES6+ features and asynchronous programming." },
      { name: "Typescript", description: "Extensive use in large-scale projects for type safety and improved developer experience." },
      { name: "React", description: "Advanced knowledge of hooks, context, and performance optimization techniques." },
      { name: "Next.js", description: "Skilled in server-side rendering, API routes, and static site generation." },
      { name: "Tailwind CSS", description: "Efficient in creating responsive and customized designs using utility classes." },
      { name: "Python", description: "Proficient in data manipulation, scripting, and backend development." },
      { name: "OpenAI", description: "Experienced in integrating and fine-tuning AI models for various applications." },
      { name: "Google Maps API", description: "Experienced in integrating and utilizing Google Maps API for location-based services and applications." },
      { name: "Stripe", description: "Implemented complex payment flows and subscription management systems." },
      { name: "Postgres", description: "Skilled in database design, optimization, and complex queries." },
      { name: "Supabase", description: "Utilized for real-time databases, authentication, and serverless functions." },
      { name: "Responsive Web Design", description: "Ensured optimal user experience across devices and screen sizes." },
      { name: "No-code Prototyping", description: "Rapid prototyping using tools like Zapier, Airtable and Softr." },
      { name: "Streamlit", description: "Developed interactive web applications for data manipulation and formatting using Streamlit." },
    ],
    Sales: [
      { name: "Sales Strategy", description: "Developed and executed comprehensive sales strategies for startups and established businesses." },
      { name: "Customer Relationship Management", description: "Implemented and managed CRM systems to improve customer retention and satisfaction." },
      { name: "Sales Forecasting", description: "Accurate revenue projections using data-driven methodologies." },
      { name: "Lead Generation", description: "Created and optimized multi-channel lead generation campaigns." },
      { name: "Negotiation Skills", description: "Skilled in sales negotiations and closing complex deals." },
      { name: "Cold Calling", description: "Experienced in effective outreach and building rapport quickly." },
      { name: "Sales Optimization", description: "Continuously improved sales processes using data analysis and A/B testing." },
      { name: "Lead Qualification", description: "Developed efficient systems for qualifying and prioritizing leads." },
    ],
    Marketing: [
      { name: "Marketing Automation", description: "Implemented automated marketing workflows to improve efficiency and lead nurturing." },
      { name: "Appointment Scheduling", description: "Optimized scheduling processes to increase customer engagement and reduce no-shows." },
      { name: "Digital Marketing", description: "Developed comprehensive digital marketing strategies across multiple channels." },
      { name: "Content Marketing", description: "Created and distributed valuable content to attract and retain target audiences." },
      { name: "Social Media Marketing", description: "Managed social media campaigns to increase brand awareness and engagement." },
      { name: "Email Marketing", description: "Designed and executed email campaigns with high open and click-through rates." },
      { name: "Brand Development", description: "Established and evolved brand identities for startups and established businesses." },
      { name: "Digital Advertising", description: "Managed and optimized digital ad campaigns across various platforms." },
      { name: "Facebook & Instagram Ads", description: "Created and optimized Facebook and Instagram ad campaigns for lead generation and sales." },
      { name: "Google Ads", description: "Managed Google Ads campaigns to drive traffic and conversions." },
      { name: "Landing Page Design", description: "Designed high-converting landing pages to support marketing campaigns." },
    ],
    Management: [
      { name: "Team Management", description: "Led and motivated cross-functional teams to achieve project goals." },
      { name: "Operational Management", description: "Streamlined business operations to improve efficiency and productivity." },
      { name: "Strategic Thinking", description: "Developed long-term strategies to drive business growth and innovation." },
      { name: "Goal Setting", description: "Established and tracked measurable objectives for individuals and teams." },
      { name: "Entrepreneurship", description: "Founded and grew multiple successful startups from concept to profitability." },
      { name: "Startup Leadership", description: "Guided early-stage companies through rapid growth and market challenges." },
      { name: "Business Strategy", description: "Formulated and executed business strategies to achieve competitive advantage." },
      { name: "Problem-solving", description: "Applied creative and analytical thinking to resolve complex business challenges." },
      { name: "Adaptability", description: "Quickly adjusted strategies and operations in response to market changes." },
      { name: "Product Management", description: "Oversaw product development from ideation to launch and iteration." },
      { name: "Coding Project Management", description: "Led software development projects using agile methodologies." },
      { name: "SOP Development", description: "Created and implemented standard operating procedures to improve consistency and efficiency." },
    ],
    Tools: [
      { name: "Make (Integromat)", description: "Automated complex workflows across multiple platforms and applications." },
      { name: "Zapier", description: "Created efficient integrations between various software tools and services." },
      { name: "Jira", description: "Managed software development projects and tracked team progress." },
      { name: "ClickUp", description: "Organized and streamlined team tasks and project management." },
      { name: "Slack", description: "Facilitated team communication and collaboration in remote work environments." },
      { name: "GitHub", description: "Managed version control and collaborative coding projects." },
      { name: "Netlify", description: "Deployed and hosted web applications with continuous integration." },
      { name: "Vercel", description: "Utilized for seamless deployment and hosting of Next.js applications." },
      { name: "GoHighLevel", description: "Implemented all-in-one marketing and sales platform for client management." },
      { name: "Softr", description: "Rapidly prototyped and deployed no-code web applications." },
      { name: "Webflow", description: "Designed and developed responsive websites without coding." },
      { name: "Medical EHR Systems", description: "Worked with various Electronic Health Record systems in healthcare settings." },
    ],
    Misc: [
      { name: "108 WPM Typing Speed", description: "Enhancing productivity in digital tasks." },
      { name: "Ultra-Marathon Running", description: "Demonstrated extreme endurance and mental toughness." },
      { name: "Combat Medical Training", description: "Acquired advanced first aid and emergency response skills." },
      { name: "Infantry Experience", description: "Developed leadership, teamwork, and strategic thinking in high-pressure environments." },
      { name: "Professional Piano", description: "Performed professionally, showcasing discipline and creativity." },
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
    website: "https://benvalentin.me",
    resumeUrl: "https://resume.benvalentin.me",
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
      location: "Cumming, GA",
      title: "Lead Developer",
      logoUrl: "/wedlaunch.png",
      start: "2023",
      end: "Present",
      description:
        "Wedding vendor marketing agency.",
      accomplishments: [
        "Designed, developed & launched Wedly, the wedding vendor marketplace for WedLaunch, using Next JS, Python, Stripe, Supabase, OpenAI & Google Maps API",
        "Implemented a custom CRM tailored for wedding vendors to streamline lead management.",
        "Designed and launched high-converting landing pages for multiple vendors, increasing lead generation.",
        "Automated follow-up processes to enhance client engagement and appointment scheduling.",
        "Implemented a fully managed marketing service that resulted in a 50% increase in client bookings.",
        "Created targeted marketing campaigns that improved vendor visibility and client acquisition.",
        "Provided ongoing support and training for vendors to maximize the effectiveness of their marketing tools."
      ]
    },
    {
      company: "Valentin Solutions",
      href: "https://benvalentin.me/",
      badges: [],
      location: "Cumming, GA",
      title: "Lead Developer",
      logoUrl: "/vgc.png",
      start: "2021",
      end: "Present",
      description:
        "Consulting company that helps business owners save time by automating their repetitive tasks.",
      accomplishments: [
        "Developed automated CSV formatting tools utilizing Python and Streamlit",
        "Created custom websites for clients using Next JS, Python, Stripe, Airtable, and Supabase",
        "Built rapid no-code MVP's for clients to test their product ideas",
        "Increased a client's proposal submission time from 7 days to under 24 hours",
        "Implemented full project management systems for custom furniture shops",
        "Implemented automated sales follow-up for clients",
        "Automated advertising campaign lead entry",
      ],
    },
    {
      company: "FilmFlow, Inc",
      href: "https://filmflow.ai/",
      badges: [],
      location: "Cumming, GA",
      title: "Lead Developer",
      logoUrl: "/filmflow.png",
      start: "2022",
      end: "2023",
      description: "FilmFlow is an AI tech startup that allows filmmakers to write their screenplay with AI.",
      accomplishments: [
        "Raised $200,000 from angel investors",
        "Built the entire application using React JS, implementing OpenAI functionality",
        "Developed and maintained scalable front-end architecture to support high traffic",
        "Collaborated with cross-functional teams to define, design, and ship new features",
        "Built & launched the MVP product within 30 days",
        "Acquired 300 pilot users",
        "Produced the first AI written short film"
      ]
    },
    {
      company: "GetDoctor",
      href: "https://getdoctor.co/",
      badges: [],
      location: "Dunwoody, GA",
      title: "Head of Growth",
      logoUrl: "/getdoctor.jpg",
      start: "2021",
      end: "2023",
      description: "GetDoctor is a medical tech startup focused on improving the patient intake experience.",
      accomplishments: [
        "Automated appointment booking process and developed SOPs for product requirement documentation.",
        "Introduced project management tools to keep the team organized.",
        "Made key hires in expanding the growth team.",
        "Rebuilt the marketing funnel for acquiring new clients.",
        "Built the CRM pipelines for the sales department.",
        "Successfully migrated the entire software team from Jira to ClickUp."
      ]
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
      description: "Metz-Kelly Holdings is a national multi-family real estate investment firm focused on innovative property acquisition systems.",
      accomplishments: [
        "Led the implementation of innovative property acquisition systems at a national multi-family real estate investment firm, resulting in the potential generation of over $100M in new property value.",
      ]
    },
    {
      company: "Band of Coders",
      href: "https://bandofcoders.com/",
      badges: [],
      location: "Dunwoody, GA",
      title: "Head of Growth",
      logoUrl: "/bandofcoders.jpg",
      start: "2019",
      end: "2020",
      description: "Band of Coders is a global software development firm",
      accomplishments: [
        "Spearheaded the formulation and optimization of Band of Coders' sales procedures",
        "Played a pivotal role in talent acquisition by strategically hiring key employees",
        "Engineered and implemented streamlined operational processes",
      ]
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
      description: "Served 5 years in the United States Marine Corps Infantry, gaining extensive training and experience in various operational environments.",
      accomplishments: [
        "Received a meritorious promotion at The School of Infantry and served as a team leader, demonstrating leadership and operational excellence.",
        "Completed the TCCC Combat Medical certification program, acquiring critical skills in emergency response and battlefield medicine.",
        "Achieved first-class physical fitness test scores.",
        "Achieved first-class marksmanship test scores.",
        "Promoted to Team Leader position within first year."
      ]
    },
    {
      company: "ValCinema",
      href: "https://valcinema.com/",
      badges: [],
      location: "Cumming, GA",
      title: "Founder & CEO",
      logoUrl: "/valcinema.png",
      start: "2017",
      end: "2021",
      description: "ValCinema is a national wedding photo + video company.",
      accomplishments: [
        "Founded ValCinema, a national wedding photo + video company and built a successful national online wedding business.",
        "Increased the monthly revenue by 300% year over year",
        "Developed operations to manage upwards of 99 weddings/month nationally",
        "Built a system to manage 300+ contractors nationally",
        "Developed procedures to manage up to 100+ weddings per month nationally",
        "Automated all marketing, lead-qualifying, and sales appointment scheduling",
        "Managed all copywriting for email marketing, web pages, sales material, etc."
      ]
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
        "Coast to Coast Linens is a national commercial linens company.",
      accomplishments: [
        "Managed a team of 100+ employees on a daily basis, responsible for all daily operations",
        "Ensured efficiency by training team members on best practices and workflows",
        "Fostered a culture of accountability to guarantee that tasks were completed effectively each day"
      ]
    },
  ],
  education: [
    {
      school: "Florida School of Discipleship (Masters Commission)",
      href: "https://mastersusa.com/",
      degree: "Studied Music & Ministry",
      logoUrl: "",
      start: "2011",
      end: "2015",
      description:
        "Masters Commission is hands on discipleship training school. I studied music and traveled nationally with a worship band.",
      accomplishments: [
        "Studied music and traveled nationally with a worship band",
      ]
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
    {
      title: "7-Minute Stories",
      href: "https://testimonies.benvalentin.me/",
      dates: "August 2024",
      active: false,
      description:
        "7-Minute Stories is an AI app that allows users to generate 7-minute versions of their testimony by answering a few questions.",
      technologies: [
        "Next JS",
        "OpenAI",
        "Tailwind",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://testimonies.benvalentin.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bevalen/7-Minute-Stories",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/testimonies.jpg",
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