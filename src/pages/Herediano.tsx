import React from 'react';
import { TeamPage } from '../components/TeamPage';

const teamData = {
  name: "Club Sport Herediano",
  period: "",
  description: {
    en: "Played in the minor leagues of first division Costa Rica soccer (UNAFUT). Club Sport Herediano is one of the most prestigious clubs in Costa Rica with a rich history of developing young talent.",
    es: "Jugué en las ligas menores del fútbol de primera división de Costa Rica (UNAFUT). Club Sport Herediano es uno de los clubes más prestigiosos de Costa Rica con una rica historia en el desarrollo de jóvenes talentos."
  },
  gallery: [
    {
      image: "/h2.jpg",
      caption: {
        en: "Training at Herediano's main stadium",
        es: "Entrenamiento en el estadio principal de Herediano"
      }
    },
    {
      image: "/h5.jpg",
      caption: {
        en: "Youth team match day",
        es: "Día de partido del equipo juvenil"
      }
    },
    {
      image: "/h4.jpg",
      caption: {
        en: "Team celebration after victory",
        es: "Celebración del equipo después de la victoria"
      }
    }
  ],
  achievements: {
    en: [
      "Regular starter in U-20 team",
      "Best Young Player Award 2023",
      "Selected for First Team training sessions"
    ],
    es: [
      "Titular regular en el equipo U-20",
      "Premio al Mejor Jugador Joven 2023",
      "Seleccionado para entrenamientos con el Primer Equipo"
    ]
  },
  stats: {
    en: [
      "Matches Played: 25",
      "Clean Sheets: 15",
      "Tackles per Game: 5.2",
      "Interceptions per Game: 3.8",
      "Pass Accuracy: 89%"
    ],
    es: [
      "Partidos Jugados: 25",
      "Porterías Imbatidas: 15",
      "Entradas por Partido: 5.2",
      "Intercepciones por Partido: 3.8",
      "Precisión de Pases: 89%"
    ]
  },
  highlights: {
    en: [
      "Named Man of the Match in 5 games",
      "Helped the team reach the semifinals of the U-20 league",
      "Recognized for leadership and teamwork"
    ],
    es: [
      "Elegido Jugador del Partido en 5 encuentros",
      "Ayudó al equipo a llegar a las semifinales de la liga U-20",
      "Reconocido por liderazgo y trabajo en equipo"
    ]
  }
};

export const Herediano = () => {
  return (
    <TeamPage
      team={teamData}
      backgroundImage="/h3.jpg" // Replace with your image path
    />
  );
};