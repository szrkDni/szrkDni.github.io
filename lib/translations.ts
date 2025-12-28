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
      description: 'Aktívan dolgozom szoftverfejlesztői karrierem beindításán, ahol a technológiai kíváncsiságomat mérnöki precizitással ötvözöm. Egyetemi tanulmányaim alatt elköteleződtem a komplex problémamegoldás mellett, és célom, hogy a legújabb stackek ismeretében olyan csapat tagja legyek, ahol a folyamatos fejlődés és a minőségi kód alapkövetelmény.',
    },
    tech: {
      title: 'Technológiai Stack',
      subtitle: 'Az alábbi technológiákkal dolgoztam már',
    },
    projects: {
      title: 'Projektek',
      subtitle: 'Néhány kiemelt projekt, amin dolgoztam',
      viewCode: 'Kód megtekintése',
      liveDemo: 'Élő demo',
    },
    contact: {
      title: 'Kapcsolat',
      subtitle: 'Keress bizalommal!',
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
      description: 'Currently launching my professional software engineering career, I combine a passion for technology with a disciplined engineering mindset. My academic background has instilled in me a deep commitment to complex problem-solving. I am now seeking to join an innovative team where mastering the latest tech stacks and writing clean, quality code are the standard.',
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
      subtitle: 'Feel free to reach out!',
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






