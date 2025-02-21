import React from 'react';
import { TeamPage } from '../components/TeamPage';

const teamData = {
  name: "Universidad de Costa Rica",
  period: "",
  description: {
    en: "Played in the minor leagues of first division team at Universidad de Costa Rica, combining academic excellence with sporting development. During this period, I developed both as a player and a student, balancing rigorous training schedules with academic commitments.",
    es: "Jugué en las ligas menores del equipo de primera división en la Universidad de Costa Rica, combinando la excelencia académica con el desarrollo deportivo. Durante este período, me desarrollé tanto como jugador como estudiante, equilibrando horarios de entrenamiento rigurosos con compromisos académicos."
  },
  gallery: [
    {
      image: "/u.jpg",
      caption: {
        en: "Training at UCR's facilities",
        es: "Entrenamiento en las instalaciones de la UCR"
      }
    },
    {
      image: "/u2.jpg",
      caption: {
        en: "Pre-season preparation in Guatemala",
        es: "Preparación de pretemporada en Guatemala"
      }
    },
    {
      image: "/u3.jpg",
      caption: {
        en: "Team tactical session",
        es: "Sesión táctica del equipo"
      }
    }
  ],
  achievements: {
    en: [
      "Youngest player in U-20 squad",
      "Participated in international tournament in Guatemala",
      "Academic Excellence Award",
      "Key contributor to the team's defensive success",
      "Played in 15+ matches, maintaining a high performance level"
    ],
    es: [
      "Jugador más joven en el equipo U-20",
      "Participó en torneo internacional en Guatemala",
      "Premio a la Excelencia Académica",
      "Contribuyente clave al éxito defensivo del equipo",
      "Jugó en más de 15 partidos, manteniendo un alto nivel de rendimiento"
    ]
  },
  stats: {
    en: [
      "Matches Played: 18",
      "Clean Sheets: 10",
      "Tackles per Game: 4.5",
      "Interceptions per Game: 3.2",
      "Pass Accuracy: 88%"
    ],
    es: [
      "Partidos Jugados: 18",
      "Porterías Imbatidas: 10",
      "Entradas por Partido: 4.5",
      "Intercepciones por Partido: 3.2",
      "Precisión de Pases: 88%"
    ]
  },
  highlights: {
    en: [
      "Named Man of the Match in 3 games",
      "Helped the team reach the semifinals of the U-20 league",
      "Recognized for leadership and teamwork"
    ],
    es: [
      "Elegido Jugador del Partido en 3 encuentros",
      "Ayudó al equipo a llegar a las semifinales de la liga U-20",
      "Reconocido por liderazgo y trabajo en equipo"
    ]
  }
};

export const UCR = () => {
  return (
    <TeamPage
      team={teamData}
      backgroundImage="/est2.jpg" // Replace with your image path
    />
  );
};