export type Language = 'en' | 'es';

export interface PlayerData {
  name: string;
  position: string;
  tagline: {
    en: string;
    es: string;
  };
  basicInfo: {
    birthDate: string;
    height: string;
    weight: string;
    nationality: string;
    dominantFoot: string;
    alternatePositions: string[];
    currentStatus: string;
  };
  playingStyle: {
    en: string[];
    es: string[];
  };
  strengths: {
    technical: {
      en: string[];
      es: string[];
    };
    physical: {
      en: string[];
      es: string[];
    };
    mental: {
      en: string[];
      es: string[];
    };
  };
  stats: {
    goals: number;
    assists: number;
    matches: number;
    teams: number;
  };
  testimonials: Array<{
    quote: {
      en: string;
      es: string;
    };
    author: string;
    role: {
      en: string;
      es: string;
    };
  }>;
  career: Array<{
    team: string;
    period: string;
    league: string;
    achievements: {
      en: string[];
      es: string[];
    };
    description: {
      en: string;
      es: string;
    };
  }>;
  philosophy: {
    en: string;
    es: string;
  };
}

export interface NavItem {
  label: {
    en: string;
    es: string;
  };
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
