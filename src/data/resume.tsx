import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad\nShaheer\nMalik",
  initials: "MSM",
  url: "https://shaheer-portfolio-omega.vercel.app/",
  location: "ISLAMABAD, PAKISTAN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Software Developer and Full Stack Developer Passionate About Building User-Friendly Web Experiences With Modern Technologies.",
  summary:
    "I'm a passionate Software Developer specializing in Python, Java, C++, Web Development (React.js, Node.js, Express.js, Node.js), and Mobile App Development (Flutter). I also bring experience in Cloud Computing (AWS), Database Management (MongoDB, Firebase) and UI/UX Design (Figma).",
  avatarUrl: "/mine.png",
  skills: [
    "Programming Language: Java, Python, C++",
    "Software Development: OOP, DSA",
    "Web Development: JavaScript, TypeScript, React.js, Next.js, Express.js, Node.js",
    "Mobile App Development: Flutter",
    "Database Management: MongoDB, Firebase",
    "Styling & UI: Tailwind CSS, Material UI (MUI)",
    "Mobile Development: Flutter",
    "UI/UX Design: Figma"
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "shaheermalik03@gmail.com",
    tel: "+923150058936",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/malik-shaheer03",
        icon: Icons.github,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/malik_shaheer03",
        icon: Icons.instagram,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/malik-shaheer03",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:shaheermalik03@gmail.com",
        icon: Icons.email,

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
      company: "GDSC CUI",
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
      company: "Pakistan Television Corporation Limited",
      badges: ["Internship"],
      href: "",
      location: "Onsite",
      title: "Web Developer",
      logoUrl: "/ptv.png",
      start: "Aug 2025",
      end: "Oct 2025",
      description:
        "Completed an On-Site Internship where I Contributed to Designing, Developing, and Optimizing Web Applications. Gained Hands-On Experience in both Frontend and Backend Technologies, Improving System Functionality and User Experience. Strengthened Skills in Collaborative Development and Problem-Solving within a Professional Environment.",
    },
  ],
  education: [
    {
      school: "COMSATS Univeristy Islamabad",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelors in Software Engineering",
      logoUrl: "/Comsats.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Traccar",
      href: "https://malik-shaheer03.github.io/Traccar/",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "A car tracking and security system with a landing page, sign-in/signup, dashboard and Firebase integration.",
      technologies: ["React.js", "CSS", "Firebase", "GitHub Pages"],
      links: [
        {
          type: "Website",
          href: "https://malik-shaheer03.github.io/Traccar/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/Traccar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./Traccar.mp4",
    },
    {
      title: "SMST Dashboard",
      href: "https://malik-shaheer03.github.io/SMST-Dashboard-HTML-CSS/Dashboard/dashboard.html",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Developed a multi-screen dashboard with sections for video content, resources, account settings, and course enrollment.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      links: [
        {
          type: "Website",
          href: "https://malik-shaheer03.github.io/SMST-Dashboard-HTML-CSS/Dashboard/dashboard.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/SMST-Dashboard-HTML-CSS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./smstdash.mp4",
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
      title: "Flight Management System",
      dates: "Jul 2023 - Present",
      active: true,
      description:
        "Developed a C++-based Flight Management System using DSA and Prim’s Algorithm to calculate shortest travel routes between user-selected destinations with route options like Faisal Movers and Daewoo",
      technologies: ["C++", "DSA", "Prim’s Algorithm", "CLI-based Interface"],
      links: [
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/Flight-Management-System-DSA-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./flightmsDSA.mp4",
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
      title: "Lumina - Premium Wallpaper Collection",
      href: "https://lumina-two-ruby.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A Stunning Wallpaper Discovery Platform using Modern Web Technologies. This responsive Web App delivers a Cinematic browsing Experience with Advanced Features.",
      technologies: ["Next.js", "TypeScript" , "Material-UI" , "Tailwind CSS", "Pexels API"],
      links: [
        {
          type: "Website",
          href: "https://lumina-two-ruby.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/Lumina",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./Lumina.mp4",
    },
    {
      title: "SecureBank",
      href: "https://secure-bank-nine.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A Modern Banking Web App evolved from a first-semester Console Project into a secure, user-friendly Financial Platform. Built with Firebase and Real-Time Features, It Redefines Traditional Banking with a Sleek, Intuitive Interface.",
      technologies: ["React.js" , "Next.js", "TypeScript" , "Tailwind CSS" , "FireBase"],
      links: [
        {
          type: "Website",
          href: "https://secure-bank-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/SecureBank",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./SecureBank.mp4",
    },
    {
      title: "Netflix Clone",
      href: "https://netflix-clone-ashy-eight-83.vercel.app/",
      dates: "July 2025 - Present",
      active: true,
      description:
        "A pixel-perfect Netflix Clone built with Next.js 15, TypeScript, and Tailwind CSS, featuring real-time data from TMDB API and Firebase Authentication. Includes multi-page navigation, search, watchlist, and responsive design that mirrors the Netflix experience.",
      technologies: ["Next.js", "TypeScript" , "Tailwind CSS" , "FireBase" , "TMDB API"],
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
      href: "https://range-fit-gym.vercel.app/",
      dates: "Sep 2025 - Present",
      active: true,
      description:
        "A comprehensive Full-Stack Web Application that modernizes gym operations by replacing traditional manual record-keeping with a digital management system.",
      technologies: ["Next.js", "React.js", "TypeScript" , "Tailwind CSS" , "FireBase" , "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://range-fit-gym.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./rangeFit.mp4",
    },

  ],
} as const;
