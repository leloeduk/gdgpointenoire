// Dictionnaires de traduction du site. Ajoutez une clé des deux côtés (fr et en)
// pour garder les deux langues synchronisées.

export const locales = ["fr", "en"];
export const defaultLocale = "fr";

export const whatsappLink = "https://chat.whatsapp.com/BgX9MAKCB4DFr2entEsVrb";

const dictionaries = {
  fr: {
    brand: "GDG Pointe-Noire",
    nav: {
      about: "À propos",
      team: "Équipe",
      members: "Membres",
      join: "Rejoindre",
    },
    banner:
      "🚧 Communauté en cours de construction — nous formons actuellement notre équipe organisatrice.",
    hero: {
      badge: "Google Developer Group · Congo-Brazzaville",
      titleBefore: "La communauté ",
      titleHighlight: "tech",
      titleAfter: " de Pointe-Noire",
      text: "Développeurs, designers, étudiants et passionnés : nous apprenons, partageons et construisons ensemble autour des technologies Google.",
      joinBtn: "Rejoindre la communauté",
      teamBtn: "Rencontrer l'équipe",
    },
    about: {
      title: "À propos",
      subtitle: "Un espace ouvert à tous ceux qui veulent grandir dans la technologie.",
      cards: [
        {
          icon: "🎓",
          bg: "#e8f0fe",
          title: "Apprendre",
          text: "Ateliers et formations pratiques pour monter en compétences, du débutant au confirmé.",
        },
        {
          icon: "🤝",
          bg: "#fce8e6",
          title: "Partager",
          text: "Rencontres, conférences et talks pour échanger expériences et bonnes pratiques.",
        },
        {
          icon: "🚀",
          bg: "#fef7e0",
          title: "Construire",
          text: "Projets collaboratifs et événements pour transformer les idées en réalisations concrètes.",
        },
        {
          icon: "🌍",
          bg: "#e6f4ea",
          title: "Connecter",
          text: "Un réseau local relié à la communauté mondiale des Google Developer Groups.",
        },
      ],
    },
    team: {
      title: "L'équipe organisatrice",
      subtitle: "Le Core Team 2025-2026 du GDG Pointe-Noire, actuellement en cours de constitution.",
      bureauLabel: "Bureau principal",
      polesLabel: "Pôles opérationnels",
      assistLabel: "Assistant(e)",
    },
    members: {
      title: "Membres actifs",
      subtitle: "Ceux qui font vivre la communauté au quotidien.",
      note: "Vous participez régulièrement à nos activités ? Vous pourriez être le prochain à figurer ici.",
    },
    join: {
      title: "Prêt à nous rejoindre ?",
      text: "Rejoignez le groupe WhatsApp du GDG Pointe-Noire pour suivre l'actualité et participer à nos prochains événements.",
      btn: "Rejoindre le groupe WhatsApp",
    },
    footer: "© 2025-2026 GDG Pointe-Noire · Google Developer Group Pointe-Noire",
  },
  en: {
    brand: "GDG Pointe-Noire",
    nav: {
      about: "About",
      team: "Team",
      members: "Members",
      join: "Join",
    },
    banner:
      "🚧 Community under construction — we are currently forming our organizing team.",
    hero: {
      badge: "Google Developer Group · Republic of Congo",
      titleBefore: "The ",
      titleHighlight: "tech",
      titleAfter: " community of Pointe-Noire",
      text: "Developers, designers, students and enthusiasts: we learn, share and build together around Google technologies.",
      joinBtn: "Join the community",
      teamBtn: "Meet the team",
    },
    about: {
      title: "About",
      subtitle: "A space open to everyone who wants to grow in technology.",
      cards: [
        {
          icon: "🎓",
          bg: "#e8f0fe",
          title: "Learn",
          text: "Hands-on workshops and training to build your skills, from beginner to advanced.",
        },
        {
          icon: "🤝",
          bg: "#fce8e6",
          title: "Share",
          text: "Meetups, conferences and talks to exchange experience and best practices.",
        },
        {
          icon: "🚀",
          bg: "#fef7e0",
          title: "Build",
          text: "Collaborative projects and events to turn ideas into real achievements.",
        },
        {
          icon: "🌍",
          bg: "#e6f4ea",
          title: "Connect",
          text: "A local network connected to the worldwide Google Developer Groups community.",
        },
      ],
    },
    team: {
      title: "Organizing team",
      subtitle: "The 2025-2026 Core Team of GDG Pointe-Noire, currently being formed.",
      bureauLabel: "Main board",
      polesLabel: "Operational areas",
      assistLabel: "Assistant",
    },
    members: {
      title: "Active members",
      subtitle: "The people who keep the community alive every day.",
      note: "Do you take part in our activities regularly? You could be the next one featured here.",
    },
    join: {
      title: "Ready to join us?",
      text: "Join the GDG Pointe-Noire WhatsApp group to follow our news and take part in our upcoming events.",
      btn: "Join the WhatsApp group",
    },
    footer: "© 2025-2026 GDG Pointe-Noire · Google Developer Group Pointe-Noire",
  },
};

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}
