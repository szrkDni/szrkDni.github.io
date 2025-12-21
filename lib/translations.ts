export type Language = 'hu' | 'en'

export const translations = {
  hu: {
    nav: {
      home: 'Kezdőlap',
      about: 'Rólam',
      tech: 'Technológiák',
      projects: 'Projektek',
      contact: 'Kapcsolat',
    },
    hero: {
      greeting: 'Üdvözöllek,',
      name: 'Szarka Dániel',
      title: 'Mérnökinformatikus Hallgató',
      subtitle: 'Mérnöki szemlélettel ötvözöm a szoftveres intelligenciát a fizikai valósággal.',
      cta: 'Tekintsd meg a munkáimat',
      downloadResume: 'Önéletrajz letöltése',
    },
    about: {
      title: 'Rólam',
      description: 'Szoftverfejlesztéssel és számítástechnikával foglalkozó egyetemi hallgató vagyok, aki szeret komplex problémákat megoldani és modern technológiákkal dolgozni. Folyamatosan tanulok és fejlődök, hogy a legjobb megoldásokat nyújthassam.',
    },
    tech: {
      title: 'Technológiai Stack',
      subtitle: 'Az alábbi technológiákkal dolgozom',
    },
    projects: {
      title: 'Projektek',
      subtitle: 'Néhány kiemelt projekt, amin dolgoztam',
      viewCode: 'Kód megtekintése',
      liveDemo: 'Élő demo',
    },
    contact: {
      title: 'Kapcsolat',
      subtitle: 'Írj nekem, ha szeretnél együtt dolgozni vagy csak beszélgetni szeretnél',
      name: 'Név',
      email: 'Email',
      message: 'Üzenet',
      send: 'Küldés',
      sending: 'Küldés...',
      success: 'Köszönöm az üzeneted! Hamarosan válaszolok.',
      error: 'Hiba történt. Kérlek, próbáld újra később.',
      validation: {
        nameRequired: 'A név kötelező',
        emailRequired: 'Az email kötelező',
        emailInvalid: 'Érvényes email címet adj meg',
        messageRequired: 'Az üzenet kötelező',
        messageMinLength: 'Az üzenet legalább 10 karakter hosszú legyen',
      },
    },
    footer: {
      rights: 'Minden jog fenntartva.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      tech: 'Tech Stack',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello,',
      name: 'Szarka Dániel',
      title: 'Computer Engineering Student',
      subtitle: 'I combine software intelligence with physical reality through an engineering perspective.',
      cta: 'View my work',
      downloadResume: 'Download Resume',
    },
    about: {
      title: 'About Me',
      description: 'I am a university student passionate about software development and computer science, who enjoys solving complex problems and working with modern technologies. I continuously learn and grow to provide the best solutions.',
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'Technologies I work with',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some featured projects I have worked on',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Reach out if you want to collaborate or just want to chat',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Thank you for your message! I will get back to you soon.',
      error: 'Something went wrong. Please try again later.',
      validation: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email address',
        messageRequired: 'Message is required',
        messageMinLength: 'Message must be at least 10 characters long',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
} as const



