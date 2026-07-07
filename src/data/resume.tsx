import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad\nBilal",
  initials: "MSM",
  url: "https://portfolio-website-lemon-eight-46.vercel.app/",
  location: "ISLAMABAD, PAKISTAN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    `Full Stack Software Engineer building scalable SaaS & AI-driven Web and Mobile Applications. 
  
I specialize in Next.js, React.js, TypeScript and Node.js, Delivering production-ready Systems with real Business Impact. From role-based SaaS platforms to AI-Powered Mobile Apps.`,
  summary:
    `I’m a Full Stack Software Engineer with 1+ years of hands-on experience building end-to-end Web Applications using Next.js, React, TypeScript and Node.js.
    
  I’ve worked on scalable SaaS products and AI-powered Platforms, Designing Systems that Automate Workflows, Improve Efficiency and Deliver seamless User Experiences. My work includes real-time Applications, Secure Authentication Systems, Cloud-Based Architectures and API-driven Backends.

  Beyond development, I value clean Architecture, Maintainable Code and Performance-Optimized UI/UX. I enjoy collaborating in Remote and Agile Environments, Taking ownership from Idea to Deployment and Continuously learning Modern Technologies.
  
  Currently open to Remote, International and Freelance Opportunities where I can contribute to impactful products and grow with a strong Engineering Team.`,
  avatarUrl: "/mine.jpeg",

skills: [
  "Frontend : Next.js, React.js, TypeScript, Tailwind CSS, Framer Motion",
  "Backend & APIs: Node.js, Express.js, FastAPI, REST API Design, Microservices",
  "AI & LLM Integration: Gemini AI, Prompt Engineering, LLM API Integration, NLP, TF-IDF, scikit-learn",
  "Databases & Storage: Firebase (Firestore, Auth, Storage), MongoDB, PostgreSQL, Cloudinary",
  "Dev Tools & Workflow: Git, GitHub, CI/CD, Agile/Scrum, Figma",
  "Cloud & Deployment: Firebase Hosting, Vercel, Cloud Functions",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "bilalmk498@gmail.com",
    tel: "+923150058936",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bilal499-droid1/bilal499-droid1",
        icon: Icons.github,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/m___bilall/",
        icon: Icons.instagram,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/muhammad-bilal-6a4661255",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:bilalmk498@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        //url: "/Muhammad_Shaheer_Malik_Full_Stack_Resume.pdf",
        icon: Icons.resume,

        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "Upwork",
    //   href: "https://www.upwork.com/freelancers/~01817b3a08659da3c8",
    //   badges: [],
    //   location: "Remote",
    //   title: "Freelancer Web Developer",
    //   logoUrl: "/upwork.svg",
    //   start: "2022",
    //   end: " Ongoing",
    //   description:
    //     "As a full-stack web developer, I specialize in creating dynamic, responsive websites and applications using Next.js and Tailwind CSS, backed by robust databases like MongoDB and PostgreSQL. With experience on platforms like Upwork, I've successfully delivered high-quality solutions that meet clients' needs and exceed their expectations.",
    // },

    {
      company: "GDSC Nutech",
      badges: ["CO LEAD"],
      href: "",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/gdsc.png",
      start: "Sep 2023",
      end: "Feb 2024",
      description:
        "As the Co-Lead of GDSC CUI, I played a key role in leading web development initiatives, mentoring students, and organizing events to foster a collaborative learning environment. My focus was on guiding the team in building impactful projects using the latest web technologies, helping our university community grow in technical expertise and innovation.",
    },

    {
      company: "Hexler Tech",
      badges: ["Internship"],
      href: "",
      location: "Onsite",
      title: "Web Developer",
      logoUrl: "/hexler.jpg",
      start: "june 2025",
      end: "August 2025",
      description:
        "Completed an On-Site Internship where I Contributed to Designing, Developing, and Optimizing Web Applications. Gained Hands-On Experience in both Frontend and Backend Technologies, Improving System Functionality and User Experience. Strengthened Skills in Collaborative Development and Problem-Solving within a Professional Environment.",
    },
    
    {
      company: "Volioms Innovations ltd",
      badges: ["Internship"],
      href: "",
      location: "Onsite",
      title: "Web Developer",
      logoUrl: "/vol.jpg",
      start: "march 2025",
      end: "June 2025",
      description:
        "Completed an On-Site Internship where I Contributed to Designing, Developing, and Optimizing Web Applications. Gained Hands-On Experience in both Frontend and Backend Technologies, Improving System Functionality and User Experience. Strengthened Skills in Collaborative Development and Problem-Solving within a Professional Environment.",
    },
  ],
  education: [
    {
      school: "Nutech Univeristy Islamabad",
      href: "https://www.nutech.edu.pk/",
      degree: "Bachelors in Computer Science",
      logoUrl: "/nutech.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Clinix.ai",
      href: "https://github.com/bilal499-droid1/FYP-MERN-PROJECT",
      dates: "Nov 2025 - june 2026",
      active: true,
      description:
        "Clinix.ai is an AI-powered healthcare platform that converts doctor-patient conversations into structured SOAP reports using Speech-to-Text and NLP, helping automate medical documentation and streamline clinical workflows.",
      technologies: ["React.js", "node.js", "Express.js", "TailwindCSS", "MongoDB", "GitHub Pages"],
      links: [
      //  {
        //  type: "Website",
          //href: "https://malik-shaheer03.github.io/Traccar/",
          //icon: <Icons.globe className="size-3" />,
        //},
        {
          type: "Source",
          href: "https://github.com/bilal499-droid1/FYP-MERN-PROJECT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./fypvideo.mp4",
    },
    {
      title: "Ecommerce Store",
      href: "https://github.com/bilal499-droid1/GoCartStore",
      dates: "September 2025 ",
      active: true,
      description:
        "Developed an Ecommerce store for multi vendor to add store and sell different productss.",
      technologies: ["MERN", "TailwindCSS", "GitHub Pages"],
      links: [
        {
          type: "Website",
          href: "go-cart-store-git-main-mmohammadbilal56s-projects.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bilal499-droid1/GoCartStore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./gocartstore.mp4",
    },
    {
      title: "Portfolio Website",
      href: "",
      dates: "April 2025 - Present",
      active: true,
      description:
        "A personal portfolio website built with Next.js to showcase my projects and skills. The website features a sleek design, smooth navigation, and is fully responsive. Deployed on Vercel for fast, reliable performance and continuous integration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://shaheer-portfolio-omega.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/shaheer-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./PortfolioWebsite.mp4",
    },
    
    {
      title: "CareerAI - Career Guidance System",
      href: "https://career-guidance-system-inky.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "This AI-driven Career Guidance System leverages expert system principles to analyze user interests, skills, and goals, providing personalized and actionable career recommendations through a dynamic web interface.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Expert System"],
      links: [
        {
          type: "Website",
          href: "https://career-guidance-system-inky.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/career-guidance-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./CareerAI.mp4",
    },
    
    

    {
      title: "Netflix Clone",
      href: "https://netflix-clone-ashy-eight-83.vercel.app/",
      dates: "July 2025 - Present",
      active: true,
      description:
        "A pixel-perfect Netflix Clone built with Next.js 15, TypeScript, and Tailwind CSS, featuring real-time data from TMDB API and Firebase Authentication. Includes multi-page navigation, search, watchlist, and responsive design that mirrors the Netflix experience.",
      technologies: ["Next.js", "TypeScript" , "Tailwind CSS" , "Firebase" , "TMDB API"],
      links: [
        {
          type: "Website",
          href: "https://netflix-clone-ashy-eight-83.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/netflix-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./netflixClone.mp4",
    },

    {
      title: "RangeFit Gym",
      href: "https://range-fit-gym-demo.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A comprehensive Full-Stack Web Application that modernizes gym operations by replacing traditional manual record-keeping with a digital management system.",
      technologies: ["Next.js", "React.js", "TypeScript" , "Tailwind CSS" , "Firebase" , "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://range-fit-gym-demo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./rangeFit.mp4",
    },


  ],
} as const;
