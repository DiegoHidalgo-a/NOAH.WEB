import React from 'react';
import { TeamPage } from '../components/TeamPage';

const teamData = {
  name: "Combine Academy Soccer",
  period: "",
  description: {
    en: "Currently playing in UPSL tournament, Premier division. Combine Academy provides a professional environment for player development and exposure to college scouts. The academy focuses on technical, tactical, physical, and mental development to prepare players for the next level.",
    es: "Actualmente jugando en el torneo UPSL, división Premier. Combine Academy proporciona un ambiente profesional para el desarrollo de jugadores y exposición a ojeadores universitarios. La academia se enfoca en el desarrollo técnico, táctico, físico y mental para preparar a los jugadores para el siguiente nivel."
  },
  gallery: [
    {
      image: "/4.jpg",
      caption: {
        en: "Training session at Combine Academy facilities",
        es: "Sesión de entrenamiento en las instalaciones de Combine Academy"
      }
    },
    {
      image: "/5.jpg",
      caption: {
        en: "Match day preparation",
        es: "Preparación día de partido"
      }
    },
    {
      image: "/2.jpg",
      caption: {
        en: "Team tactical discussion",
        es: "Discusión táctica del equipo"
      }
    }
  ],
  achievements: {
    en: [
      "UPSL Premier Division Player",
      "Selected for All-Star Team 2024",
      "Best Defensive Record in the League",
      "Key contributor to the team's success in the UPSL tournament",
      "Recognized for leadership and teamwork"
    ],
    es: [
      "Jugador de la División Premier UPSL",
      "Seleccionado para el Equipo All-Star 2024",
      "Mejor Récord Defensivo en la Liga",
      "Contribuyente clave al éxito del equipo en el torneo UPSL",
      "Reconocido por liderazgo y trabajo en equipo"
    ]
  }
};

export const CombineAcademy = () => {
  return (
    <TeamPage
      team={teamData}
      backgroundImage="/3.jpg" // Replace with your image path
      style={{
        backgroundImage: "url('/3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
      }}
    />
  );
};