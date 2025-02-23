import { PlayerData, NavItem, SocialLink } from './types';

export const navItems: NavItem[] = [
  { label: { en: 'Home', es: 'Inicio' }, href: '#home' },
  { label: { en: 'About', es: 'Sobre Mí' }, href: '#about' },
  { label: { en: 'Highlights', es: 'Destacados' }, href: '#highlights' },
  { label: { en: 'Career', es: 'Carrera' }, href: '/career' },
  { label: { en: 'Contact', es: 'Contacto' }, href: '#contact' },
];

export const playerData: PlayerData = {
  name: 'Noah Castro',
  position: 'Right Back and Center Back',
  tagline: {
    en: 'Dedicated Footballer | Committed to Excellence | Ready for New Challenges',
    es: 'Futbolista Dedicado | Comprometido con la Excelencia | Listo para Nuevos Desafíos'
  },
  basicInfo: {
    birthDate: '2006-01-03',
    height: '1.78m',
    weight: '68kg',
    nationality: 'Costa Rican',
    dominantFoot: 'Right',
    alternatePositions: ['Defensive Midfielder', 'Left Back'],
    currentStatus: 'Active'
  },
  playingStyle: {
    en: [
      'Strong tactical understanding and effective positioning',
      'Ability to perform effectively both as a right back and center back',
      'Excellent stamina, agility, and aerial ability',
      'Proficient in ball control and accurate passing'
    ],
    es: [
      'Fuerte comprensión táctica y posicionamiento efectivo',
      'Capacidad para desempeñarse eficazmente tanto como lateral derecho como central',
      'Excelente resistencia, agilidad y capacidad aérea',
      'Competente en control de balón y pase preciso'
    ]
  },
  strengths: {
    technical: {
      en: ['Ball Control', 'Accurate Passing', 'Initiating Plays'],
      es: ['Control de Balón', 'Pase Preciso', 'Iniciar Jugadas']
    },
    physical: {
      en: ['Stamina', 'Agility', 'Aerial Ability'],
      es: ['Resistencia', 'Agilidad', 'Capacidad Aérea']
    },
    mental: {
      en: ['Leadership', 'Team Cohesion', 'Game Awareness'],
      es: ['Liderazgo', 'Cohesión del Equipo', 'Conciencia del Juego']
    }
  },
  stats: {
    goals: 12,
    assists: 18,
    matches: 56,
    teams: 3
  },
  testimonials: [
    {
      quote: {
        en: "A dedicated and passionate footballer with a commitment to excellence.",
        es: "Un futbolista dedicado y apasionado con un compromiso con la excelencia."
      },
      author: "Former Coach",
      role: {
        en: "Coach",
        es: "Entrenador"
      }
    }
  ],
  career: [
    {
      team: "Combine Academy Soccer Team",
      period: "2024-Present",
      league: "N/A",
      achievements: {
        en: ['UPSL Premier Division Player', 'Top 3 in Clean Sheets'],
        es: ['Jugador de la División Premier UPSL', 'Top 3 en vallas invictas']
      },
      description: {
        en: 'Currently playing for Combine Academy and previously played for Club Sport Herediano.',
        es: 'Actualmente juega para Combine Academy y anteriormente jugó para el Club Sport Herediano.'
      },
    },
    {
      team: "Universidad de Costa Rica",
      period: "2022-2023",
      league: "N/A",
      achievements: {
        en: [],
        es: []
      },
      description: {
        en: 'Played in the minor leagues with Universidad de Costa Rica.',
        es: 'Jugó en las ligas menores con la Universidad de Costa Rica.'
      }
    },
    {
      team: "U15 National Team",
      period: "2020",
      league: "N/A",
      achievements: {
        en: [],
        es: []
      },
      description: {
        en: 'Trained with the U15 National Team.',
        es: 'Entrenó con la Selección Nacional U15.'
      }
    }
  ],
  philosophy: {
    en: "I am eager to leverage my experience and contribute to teams at higher competitive levels.",
    es: "Estoy ansioso por aprovechar mi experiencia y contribuir a equipos en niveles competitivos más altos."
  }
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/noah_castro_/',
    icon: 'Instagram'
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/50684821568',
    icon: 'MessageCircle'
  },
  {
    platform: 'Email',
    url: 'mailto:noahcastropastor@gmail.com',
    icon: 'Mail'
  },
  {
    platform: 'LinkedIn',
    url: '',
    icon: 'Linkedin'
  }
];
