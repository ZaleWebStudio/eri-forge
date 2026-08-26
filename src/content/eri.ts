/**
 * Contenu éditable du site ERI.
 * Modifiez uniquement ce fichier pour mettre à jour les textes, coordonnées
 * et réalisations. Les éléments marqués "À CONFIRMER" doivent être validés
 * avec l'entreprise avant publication.
 */

import chaudronnerie from "@/assets/chaudronnerie.jpg";
import soudure from "@/assets/soudure.jpg";
import structure from "@/assets/structure.jpg";
import pieces from "@/assets/pieces.jpg";
import inox from "@/assets/inox.jpg";
import atelier from "@/assets/hero-atelier.jpg";

export const company = {
  name: "E R I",
  fullName: "Entreprise Réalisation Industrielle",
  phone: "04 90 46 95 83",
  phoneHref: "tel:+33490469583",
  street: "600 route d'Orange",
  postalCode: "84870",
  city: "Loriol-du-Comtat",
  region: "Vaucluse",
  mapsQuery: "600 route d'Orange, 84870 Loriol-du-Comtat",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=600+route+d%27Orange+84870+Loriol-du-Comtat",
};

export const intro = {
  title: "Un savoir-faire industriel à votre service",
  text: "E R I — Entreprise Réalisation Industrielle accompagne ses clients dans leurs projets liés au travail du métal, à la chaudronnerie et à la soudure. Implantée à Loriol-du-Comtat dans le Vaucluse, l'entreprise met son savoir-faire industriel au service de projets adaptés aux besoins de ses clients.",
};

/** Cartes de savoir-faire — libellés et descriptions à affiner avec l'entreprise. */
export const skills = [
  {
    title: "Chaudronnerie",
    description:
      "La chaudronnerie constitue un domaine principal de l'activité d'ERI : mise en forme et assemblage du métal pour vos projets industriels.",
    image: chaudronnerie,
  },
  {
    title: "Soudure",
    description:
      "Le travail de soudure est au cœur du métier de l'entreprise, avec une attention portée à la qualité d'exécution des assemblages.",
    image: soudure,
  },
  {
    title: "Fabrication métallique",
    description:
      "Réalisation d'ensembles et de pièces métalliques. (Prestations précises à confirmer avec l'entreprise.)",
    image: pieces,
  },
  {
    title: "Projets sur mesure",
    description:
      "Étude et réalisation de projets adaptés aux besoins exprimés par le client. (À confirmer avec l'entreprise.)",
    image: structure,
  },
];

/** Réalisations de démonstration — remplacez images, titres et descriptions par les vrais projets d'ERI. */
export const projects = [
  {
    title: "Ensemble chaudronné",
    category: "Chaudronnerie",
    description: "Exemple de présentation d'un ensemble chaudronné. Visuel de démonstration.",
    image: chaudronnerie,
  },
  {
    title: "Assemblage soudé",
    category: "Soudure",
    description: "Exemple de présentation d'un assemblage soudé. Visuel de démonstration.",
    image: soudure,
  },
  {
    title: "Structure métallique",
    category: "Fabrication métallique",
    description: "Exemple de présentation d'une structure métallique. Visuel de démonstration.",
    image: structure,
  },
  {
    title: "Pièces métalliques",
    category: "Fabrication métallique",
    description: "Exemple de présentation de pièces métalliques. Visuel de démonstration.",
    image: pieces,
  },
  {
    title: "Ensemble inox",
    category: "Chaudronnerie",
    description: "Exemple de présentation d'un ensemble en acier inoxydable. Visuel de démonstration.",
    image: inox,
  },
  {
    title: "Travail en atelier",
    category: "Atelier",
    description: "Exemple de présentation d'une intervention en atelier. Visuel de démonstration.",
    image: atelier,
  },
];

export const reasons = [
  {
    title: "Savoir-faire industriel",
    description:
      "Une compétence technique construite autour du travail du métal, de la chaudronnerie et de la soudure.",
  },
  {
    title: "Précision",
    description:
      "Une attention constante portée à la qualité d'exécution et à la finition des réalisations.",
  },
  {
    title: "Proximité",
    description: "Entreprise implantée à Loriol-du-Comtat, dans le Vaucluse.",
  },
  {
    title: "Échange direct",
    description:
      "Un contact simple et direct pour présenter votre projet et échanger sur vos besoins.",
  },
];

export const heroImage = atelier;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "E R I — Entreprise Réalisation Industrielle",
  description:
    "Entreprise de chaudronnerie et soudure implantée à Loriol-du-Comtat dans le Vaucluse.",
  telephone: "+33490469583",
  address: {
    "@type": "PostalAddress",
    streetAddress: "600 route d'Orange",
    postalCode: "84870",
    addressLocality: "Loriol-du-Comtat",
    addressRegion: "Vaucluse",
    addressCountry: "FR",
  },
};
