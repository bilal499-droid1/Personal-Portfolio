import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad\nBilal",
  initials: "MSM",
  url: "https://portfolio-website-lemon-eight-46.vercel.app/",
  location: "ISLAMABAD, PAKISTAN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    `Full Stack Software Engineer & DevOps Engineer building scalable SaaS, AI-driven Web & Mobile Applications.

I specialize in Next.js, React.js, TypeScript, FastAPI, Django, Flask, LangChain & LangGraph, delivering production-ready systems with real business impact. From role-based SaaS platforms and Agentic AI applications to cloud infrastructure, CI/CD and automated deployments.`,
  summary:
    `I’m a **Full-Stack Software Engineer with 3+ years of hands-on experience** building scalable, high-performance web applications and digital products from concept to deployment.

I specialize in **MERN Stack, Next.js, React, TypeScript, Node.js, Django, and FastAPI**, developing custom web applications, SaaS platforms, REST APIs, real-time applications, secure authentication systems, and database-driven solutions.

**DevOps:** Docker, CI/CD with GitHub Actions, Linux Server Administration, Nginx, AWS (EC2, S3), Railway, Render, and Git Workflows. I handle application deployment, server configuration, production environments, and development-to-deployment workflows.

Beyond development, I focus on **clean architecture, maintainable code, performance optimization, responsive UI/UX, and reliable production systems**. I enjoy working in remote and Agile environments, collaborating with clients and teams, and taking ownership of projects from **idea to development, deployment, and ongoing improvement**.

I’m open to **remote, international, and freelance opportunities** where I can build impactful digital products, solve challenging technical problems, and create long-term value for clients.`,
  avatarUrl: "/mine.jpeg",

  skills: [
    "Frontend : Next.js, React.js, TypeScript, Tailwind CSS, Framer Motion",
    "Backend & APIs: Node.js, Express.js, FastAPI, REST API Design, Microservices",
    "AI & LLM Integration: Gemini AI, Prompt Engineering, LLM API Integration, NLP, TF-IDF, scikit-learn",
    "Databases & Storage: Firebase (Firestore, Auth, Storage), MongoDB, PostgreSQL, Cloudinary",
    "Dev Tools & Workflow: Git, GitHub, CI/CD, Agile/Scrum, Figma",
    "Cloud & Deployment: Firebase Hosting, Vercel, Cloud Functions",
    "DevOps: Docker, CI/CD (GitHub Actions), Linux Server Administration, Nginx, AWS (EC2, S3), Railway, Render, Git Workflows",
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
        url: "https://www.linkedin.com/in/muhammad-bilal-6a4661255",
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
    {
      company: "Hexler Tech",
      badges: ["Full Time"],
      href: "",
      location: "Onsite",
      title: "Full Stack Developer and DevOps Engineer",
      logoUrl: "/hexler.jpg",
      start: "June 2026",
      end: "Present",
      description:
        "Building and shipping full stack web applications end to end while owning the deployment side of delivery. Working across Next.js, React and Node.js on the product, and Docker, GitHub Actions CI/CD, Nginx and cloud infrastructure on the operations side to keep releases automated, reliable and production-ready.",
    },
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
    {
      school: "Emalah Foundation School & College",
      href: "",
      degree: "ICS",
      logoUrl: "/logo-20260111.webp",
      start: "2019",
      end: "2021",
    },
    {
      school: "F G Public Secondary School",
      href: "",
      degree: "Matriculation",
      logoUrl: "/fgschool.jpg",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Sugarloop Full Stack Ordering System",
      href: "https://api.sugarloop.pk",
      dates: "2026 - Present",
      active: true,
      description:
        "A full stack online ordering system built for Sugarloop, covering menu browsing, cart and checkout, order placement and order management through a REST API backend. Deployed on a live production domain with a custom server setup.",
      technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS", "REST API"],
      links: [
        {
          type: "Website",
          href: "https://api.sugarloop.pk",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bilal499-droid1/sugarloop-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/sugarloop-video.mp4",
    },
    {
      title: "Clinix.ai",
      href: "https://github.com/bilal499-droid1/FYP-MERN-PROJECT",
      dates: "Nov 2025 - june 2026",
      active: true,
      description:
        "Clinix.ai is an AI-powered healthcare platform that converts doctor-patient conversations into structured SOAP reports using Speech-to-Text and NLP, helping automate medical documentation and streamline clinical workflows.",
      technologies: ["React.js", "node.js", "Express.js", "TailwindCSS", "MongoDB", "GitHub Pages"],
      links: [
        {
          type: "Source",
          href: "https://github.com/bilal499-droid1/FYP-MERN-PROJECT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/fypvideo.mp4",
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
          href: "https://go-cart-store-git-main-mmohammadbilal56s-projects.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bilal499-droid1/GoCartStore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/gocartstore.mp4",
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
          href: "https://personal-portfolio-ten-tawny-15.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bilal499-droid1/Personal-Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/portfolioweb.mp4",
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
          href: "https://github.com/bilal499-droid1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/CareerAI.mp4",
    },
    {
      title: "Netflix Clone",
      href: "https://netflix-clone-ashy-eight-83.vercel.app/",
      dates: "July 2025 - Present",
      active: true,
      description:
        "A pixel-perfect Netflix Clone built with Next.js 15, TypeScript, and Tailwind CSS, featuring real-time data from TMDB API and Firebase Authentication. Includes multi-page navigation, search, watchlist, and responsive design that mirrors the Netflix experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "TMDB API"],
      links: [
        {
          type: "Website",
          href: "https://netflix-clone-ashy-eight-83.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/netflixClone.mp4",
    },
    // {
    //   title: "RangeFit Gym",
    //   href: "https://range-fit-gym-demo.vercel.app/",
    //   dates: "June 2025 - Present",
    //   active: true,
    //   description:
    //     "A comprehensive Full-Stack Web Application that modernizes gym operations by replacing traditional manual record-keeping with a digital management system.",
    //   technologies: [
    //     "Next.js",
    //     "React.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Firebase",
    //     "Framer Motion",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://range-fit-gym-demo.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "./rangeFit.mp4",
    // },
  ],
}
