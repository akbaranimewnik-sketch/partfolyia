export const portfolioData = {
  personal: {
    name: "Jaloliddin",
    fullName: "Jaloliddin",
    birthDate: "2013-yil 4-avgust",
    age: "13 yosh",
    role: "Frontend & Software Dasturchi",
    location: "O'zbekiston",
    status: "Yangi loyihalar va amaliyot uchun ochiq",
    bio: "Salom! Men Jaloliddinman — 2013-yilda tug'ilgan yosh va intiluvchan dasturchiman. Dasturlash foundation (C++, Python) hamda Frontend (HTML5, CSS3, JavaScript, React.js) yo'nalishlarini muvaffaqiyatli tugatganman. Mantiqiy fikrlash, algoritmlar va zamonaviy chiroyli veb-ilovalarni yaratishga katta qiziqishim bor.",
    resumeUrl: "#",
    email: "jaloliddin.dev@gmail.com",
    telegram: "https://t.me/jaloliddin_dev",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    stats: [
      { label: "Tug'ilgan sana", value: "2013.08.04" },
      { label: "O'zlashtirilgan Tillar", value: "4+" },
      { label: "Tamomlangan Bosqichlar", value: "2 ta" },
      { label: "Yaratilgan Loyihalar", value: "10+" },
    ]
  },

  skills: [
    {
      category: "Frontend Yo'nalishi",
      items: [
        { name: "React.js", level: 90, desc: "Komponentlar, Hooks, SPA" },
        { name: "JavaScript (ES6+)", level: 88, desc: "DOM, Funksiyalar, Asinxronlik" },
        { name: "HTML5 & Semantic Web", level: 95, desc: "Toza semantik tuzilma" },
        { name: "CSS3 & Tailwind CSS", level: 92, desc: "Responsive va zamonaviy dizayn" },
      ]
    },
    {
      category: "Foundation & Algoritmlar",
      items: [
        { name: "Python", level: 85, desc: "OOP, Skriptlar, Algoritmlar" },
        { name: "C++", level: 82, desc: "Mantiq, xotira, ma'lumotlar tuzilmasi" },
        { name: "Algoritmlar & Mantiq", level: 85, desc: "Problem solving, masalalar yechish" },
        { name: "Git & GitHub", level: 80, desc: "Versiyalar nazorati va repozitoriylar" },
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "React & Tailwind Portfolio",
      category: "Web App",
      description: "React va Tailwind CSS yordamida yaratilgan zamonaviy, tezkor va to'liq moslashuvchan shaxsiy portfolio veb-sayti.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Python & C++ Mantiqiy Masalalar To'plami",
      category: "Foundation",
      description: "Algoritmlar, saralash usullari va matematika-mantiq masalalarini C++ va Python tillarida samarali yechimlari.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      tags: ["C++", "Python", "Algorithms", "Problem Solving"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Onlayn Do'kon Interfeysi",
      category: "E-Commerce",
      description: "Mahsulotlar katalogi, qidiruv tizimi, savatcha hisob-kitobi va buyurtma berish oynasiga ega frontend ilova.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 4,
      title: "Interaktiv Ob-Havo Ilovasi",
      category: "Web App",
      description: "API orqali real vaqtda turli shaharlarning harorati, shamoli va ob-havo holatini ko'rsatuvchi React ilovasi.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "API", "JavaScript", "CSS3"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Kalkulyator va Foydali Asboblar",
      category: "Web App",
      description: "JavaScript va React da yaratilgan funksional kalkulyator, valyuta konvertori va tezkor hisob-kitob vositasi.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "HTML5", "CSS3", "React"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 6,
      title: "Python Bilan Kichik O'yinlar va Botlar",
      category: "Foundation",
      description: "Python tilida mantiqiy konsol o'yinlari (so'z topish, son topish) va Telegram bot prototipi.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "OOP", "Logic Games"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: false
    }
  ],

  experience: [
    {
      period: "2024 - Hozirgacha",
      role: "Frontend Dasturlash (Tamomlangan)",
      company: "Amaliy Kurslar & Mustaqil Loyihalar",
      description: "HTML5, CSS3, JavaScript (ES6+), React.js va Tailwind CSS bo'yicha to'liq bosqichni muvaffaqiyatli tamomladim. Ko'plab amaliy veb-loyihalar, komponentlar va responsive interfeyslar yaratdim.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      period: "2023 - 2024",
      role: "Foundation Dasturlash (Tamomlangan)",
      company: "IT Ta'lim & Dasturlash Asoslari",
      description: "C++ va Python tillari yordamida dasturlashning poydevori, kompyuter mantig'i, algoritmlar, ma'lumotlar tuzilmasi va masalalar yechish bo'yicha to'liq kursni yakunladim.",
      technologies: ["C++", "Python", "Algoritmlar", "Problem Solving"]
    }
  ],

  services: [
    {
      title: "Frontend Veb-Ilovalar",
      description: "React va Tailwind CSS yordamida chiroyli, zamonaviy va tezkor veb-sahifalar yaratish.",
      icon: "Code"
    },
    {
      title: "Moslashuvchan (Responsive) Dizayn",
      description: "Veb-saytlarni barcha telefon, planshet va kompyuter ekranlariga mukammal moslashtirish.",
      icon: "Smartphone"
    },
    {
      title: "Python Dasturlash & Skriptlar",
      description: "Python yordamida algoritmlar, vazifalarni avtomatlashtirish va mantiqiy dasturlar yozish.",
      icon: "Cpu"
    },
    {
      title: "C++ Algoritmik Yechimlar",
      description: "Dasturlash poydevori, tezkor va optimallashgan mantiqiy algoritmlar ishlab chiqish.",
      icon: "Gauge"
    }
  ]
};
