export const ProjectsData = [
  {
    id: "1717430400123",
    category: "fullstack",
    isLive: true,
    title: "Hive",
    subTitle: "Interactive Multi-Vendor E-commerce Platform",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1786375800/hive_4_esbe6i.webp",

    techStack: {
      techStackPrev: [
        "TypeScript",
        "Next.js",
        "Zustand",
        "Next Auth",
        "Shadcn Ui",
        "Formik",
      ],
      techStackFull: [
        "TypeScript",
        "Next.js",
        "Zustand",
        "Next Auth",
        "Shadcn Ui",
        "Formik",
        "Yup",
        "Tanstack Query",
        "Tailwind CSS",
        "swiper.js",
        "Geolocation API",
      ],
    },

    liveLink: "https://hive.bd/",
    description:
      "Hive is a scalable multi-vendor e-commerce platform where sellers manage their own stores under one system. It supports guest and registered orders, real-time order tracking and uses geolocation to show branch-wise products based on the customer's location. With a merchant panel, custom authentication and flexible purchase plans, Hive is built for speed, accessibility, and SEO — delivering a smooth shopping experience.",
    keyFeatures: [
      {
        title: "User Friendly Interface",
        feature:
          "A clean and simple design that makes it easy for both customers and vendors to navigate, search products, and manage their tasks without confusion. It also uses geolocation to detect the user's location and show relevant branch-wise products automatically.",
      },
      {
        title: "Vendor Management",
        feature:
          "Created an efficient onboarding workflow so new sellers can sign up and get their store running with minimal friction.",
      },
      {
        title: "Live Order & Delivery Tracking",
        feature:
          "Customers can track their orders in real time from purchase to delivery, giving them full visibility and reducing support queries.",
      },
      {
        title: "Performance Optimization",
        feature:
          "Optimized the platform for speed, accessibility, and SEO, achieving Google Lighthouse scores of 90% for Performance, 100% for Best Practices and 95% for SEO.",
      },
    ],
    contributions: {
      organization: "Bigmode Technologies",
      role: "Frontend Developer",
      description:
        "I worked as a Frontend Developer on this project, building a user-friendly UI with TypeScript, Next.js and shadcn/ui, along with a geolocation package to show branch-wise products based on user location. I also focused on performance optimization, accessibility and SEO, helping the platform achieve Google Lighthouse scores of 90% Performance, 100% Best Practices and 95% SEO.",
    },
  },

  {
    id: "17174304004577",
    category: "fullstack",
    isLive: true,
    title: "Mates",
    subTitle: " Driver Network & Job Dispatch Platform",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1786384913/limoz_2_mvl2qx.webp",

    techStack: {
      techStackPrev: [
        "TypeScript",
        "Next.js",
        "Next Auth",
        "WebSocket",
        "Shadcn Ui",
        "Formik",
      ],
      techStackFull: [
        "TypeScript",
        "Next.js",
        "Next Auth",
        "WebSocket",
        "Shadcn Ui",
        "Formik",
        "Yup",
        "Tanstack Query",
        "Tailwind CSS",
        "swiper.js",
        "Swagger",
        "Figma to HTML",
      ],
    },

    liveLink: "https://app.limoz.co/",
    description:
      "Mates is a  B2B SaaS platform that connects chauffeurs, limousine operators, and fleet owners in one collaborative network. Users can find and bid on live jobs, dispatch extra bookings to trusted driver groups, and manage the full job lifecycle with real-time notifications, chat, billing, and fleet management — all in a fast, mobile-friendly platform.",
    keyFeatures: [
      {
        title: "Live Job Marketplace & Bidding System",
        feature:
          "Drivers can browse live dispatched jobs and bid using points or a custom offer price, with countdown timers and auction/incremental bidding modes.",
      },
      {
        title: "Smart Job Dispatch Engine",
        feature:
          "Operators can post job details (pickup, vehicle type, target group, pricing mode) and dispatch jobs instantly or schedule them later, with draft save and preview options.",
      },
      {
        title: "Real-Time Notifications & Chat",
        feature:
          "WebSocket is used to send live job updates and notifications, and also powers a real-time chat system between users.",
      },
      {
        title: "Billing & Fund Management",
        feature:
          "The platform supports subscriptions, account top-up, credit transfer between drivers, withdrawals, and detailed statements — all in one wallet system.",
      },
    ],
    contributions: {
      organization: "Bigmode Technologies",
      role: "Frontend Developer",
      description:
        "I contributed around 90% of the frontend development for this project. Since the platform is highly functional and logic-heavy, I built it closely following the client's requirements and Figma design, with strong focus on performance and SEO. I also implemented a clean, reusable code structure and worked on the real-time notification and chat system using WebSocket.",
    },
  },

  {
    id: "1717430400789",
    category: "fullstack",
    title: "Car Doctor",
    subTitle: "Car Servicing & Auto Parts Platform",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1786368285/apprelix_3_egxfzo.webp",
    clientTech: [
      "React",
      "Next.js",
      "Tailwind",
      "shadcn ui",
      "Origin ui",
      "Aos",
    ],
    serverTech: ["Node.js", "Express.js", "MongoDB", "Next Auth"],
    github: "https://github.com/Md-Shorif-200/Card-Doctor-Next.js",
    liveLink: "https://car-doctor-ruby.vercel.app/",
    description:
      "Car Doctor is a modern, user-friendly platform connecting car owners with reliable services and auto parts, offering a seamless experience with secure authentication via NextAuth..",
    keyFeatures: [
      {
        title: "Service Booking ",
        feature:
          "Users can view detailed information of a specific car service, book the service, and update or delete their bookings.",
      },
      {
        title: "Service Management",
        feature:
          "Admins can add, update, and delete car service data efficiently.",
      },
      {
        title: "Secure Authentication ",
        feature:
          "Authentication and user management implemented securely using NextAuth.",
      },
    ],
  },
  {
    id: "1717430401012",
    category: "fullstack",
    title: "Smart Task",
    subTitle: "Task Management Web app",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1763805963/Capture-17_hdiotj.png",
    clientTech: ["React", "Next.js", "Tailwind", "Aos"],
    serverTech: ["Node.js", "Express.js", "MongoDB", "firebase"],
    github: "https://github.com/Md-Shorif-200/smart-task-manager",
    liveLink: "https://smart-task-iota.vercel.app/",
    description:
      "Smart Task Manager is a lightweight web app for organizing teams, managing projects, and assigning tasks efficiently. It helps track workload, auto-balance tasks based on capacity, and keeps a clear activity log for smooth team collaboration.",
    keyFeatures: [
      {
        title: "Smart Task Assignment",
        feature:
          "Checks member workload, warns on overload, and supports quick auto-assign.",
      },
      {
        title: "Auto Reassignment",
        feature:
          "Redistributes excess tasks with one click while keeping high-priority tasks in place.",
      },
      {
        title: "Overview Dashboard",
        feature:
          "Shows project totals, task counts, member workload, and recent reassignments.",
      },
    ],
  },
  {
    id: "1717430401345",
    category: "fullstack",
    title: "roadForge",
    subTitle: "Roadmap & Feedback Platform",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1762153768/Capture-4_fbmihg.png",
    clientTech: ["React", "Tailwind", "Aos", "Tanstack query", "firebase"],
    serverTech: ["Node.js", "Express.js", "MongoDB"],
    clientGithub: "https://github.com/Md-Shorif-200/Road-Forge-Client",
    serverGithub: "https://github.com/Md-Shorif-200/Road-Forge-Server",
    liveLink: "https://road-forge.web.app/",
    description:
      "With a user-friendly interface and secure authentication, users can log in to upvote roadmap items and actively engage in discussions through comments and replies.",
    keyFeatures: [
      {
        title: "Upvote Interaction",
        feature:
          "Users can upvote each roadmap item only once to express their support, helping prioritize the most valuable features.",
      },
      {
        title: "Threaded Commenting",
        feature:
          "Supports nested replies up to three levels, allowing users to engage in structured and meaningful discussions under each roadmap item.",
      },
      {
        title: "Filtering ",
        feature:
          "Roadmap items can be filtered by status like 'Planned', 'In Progress , or 'Completed' to ensure better clarity and smoother navigation.",
      },
    ],
  },
  {
    id: "1717430401678",
    category: "frontend",
    isLive: true,
    title: "AMYRAH",
    subTitle: "AI Research & Services Website",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1772908627/amyra_fic7du.webp",
    clientTech: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Aos",
      "sweper.js",
    ],
    serverTech: [],
    github: "",
    liveLink: "https://amayrahrnd.com/",
    description:
      "AMYRAH (Advanced Machine Intelligence & Yield-Driven Research for All-Scale Horizon) is a research-driven AI platform focused on developing and validating intelligent solutions. The website highlights its core offerings, including AI Proof-of-Concept (PoC) services, practical training programs, and research-based intellectual property assets. It aims to help organizations and researchers turn real-world data into effective AI applications. Currently, the website is static, with plans to evolve into a fully dynamic platform in the future.",
    keyFeatures: [
      {
        title: "",
        feature: "",
      },
      {
        title: "",
        feature: "",
      },
      {
        title: "",
        feature: "",
      },
    ],
  },
  {
    id: "1717430401901",
    category: "frontend",
    title: "Swat Babymall",
    subTitle: "Modern Baby Shopping Platform",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1762277349/Capture-8-min_its4zm.png",
    clientTech: [
      "React",
      "Tailwind",
      "React Router",
      "React Select",
      "daisy ui",
    ],
    serverTech: [],
    github: "https://github.com/Md-Shorif-200/swat-babymall",
    liveLink: "https://swat-babymall.vercel.app/",
    description:
      "Swat BabyMall is a modern, responsive e-commerce site for baby essentials, featuring a clean, interactive interface. The front-end is complete, with backend and order processing planned for future updates.",
    keyFeatures: [
      {
        title: "",
        feature: "",
      },
      {
        title: "",
        feature: "",
      },
      {
        title: "",
        feature: "",
      },
    ],
  },

  {
    id: "1717430402234",
    category: "frontend",
    title: "gyan",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1762277350/Capture-11-min_menqgq.png",
    clientTech: [
      "html",
      "css",
      "bootstrap",
      "javascript",
      "jquery",
      "slick slider",
    ],
    serverTech: [],
    github: "https://github.com/Md-Shorif-200/gyan-course-website",
    liveLink: "https://gyan-online-course.netlify.app/",
    description:
      "gyan is a beautifully designed, fully responsive and  static website that showcases online courses with a modern look and smooth browsing experience.",
    keyFeatures: [
      {
        title: "",
        feature: "",
      },
      {
        title: "",
        feature: "",
      },
      {
        title: "",
        feature: "",
      },
    ],
  },

  {
    id: "1717430402567",
    category: "frontend",
    title: "Rinterio",
    subTitle: "",
    image:
      "https://res.cloudinary.com/dxg4xodmg/image/upload/v1762277350/Capture-13-min_guwcul.png",
    clientTech: ["html", "css", "Tailwind", "daisy ui"],
    serverTech: [],
    github: "https://github.com/Md-Shorif-200/ph-assignment-3",
    liveLink: "https://rinterio-200.netlify.app/",
    description:
      "This is a beautifully designed, fully responsive website where users can explore various luxurious and elegant apartments.",
    keyFeatures: [
      {
        title: "",
        feature: "",
      },
      {
        title: "",
        feature: "",
      },
      {
        title: "",
        feature: "",
      },
    ],
  },
];
