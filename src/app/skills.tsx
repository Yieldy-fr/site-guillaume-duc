"use client";

import { Typography } from "@material-tailwind/react";
import { SkillCard } from "@/components";

const PROFESSIONAL_EXPERTISE = [
  {
    image: "/image/istockphoto-1455304513-1024x1024.jpg",
    title: "Assurance santé et prévoyance collectives",
    children:
      "Protection sociale collective adaptée aux besoins de votre entreprise et de vos équipes.",
  },
  {
    image: "/image/maximilianovich-doctor-5710153_1280.jpg",
    title:
      "Assurance santé et prévoyance des chefs d'entreprise et professions libérales",
    children:
      "Solutions dédiées au dirigeant pour sécuriser ses revenus et son activité.",
  },
  {
    image: "/image/f1digitals-coins-7702613_1280.jpg",
    title: "Épargne salariale",
    children:
      "Mise en place de dispositifs d'épargne attractifs pour valoriser et fidéliser vos collaborateurs.",
  },
  {
    image: "/image/wir_sind_klein-seniors-4379905_1280.jpg",
    title: "PER collectifs",
    children:
      "Construction de solutions de retraite collective performantes et lisibles pour vos équipes.",
  },
  {
    image: "/image/startupstockphotos-man-593333_1280.jpg",
    title: "Rémunération du dirigeant",
    children:
      "Arbitrage entre rémunération immédiate, protection et stratégie long terme.",
  },
  {
    image: "/image/nattanan23-money-2724241_1280.jpg",
    title: "Retraite individuelle, retraite Madelin et épargne par capitalisation",
    children:
      "Organisation progressive de la retraite du dirigeant selon ses objectifs patrimoniaux.",
  },
];

const INDIVIDUAL_EXPERTISE = [
  {
    image: "/image/pasja1000-senior-3336451_1280.jpg",
    title: "Préparer sa retraite",
    children:
      "Projection de vos besoins futurs et mise en place d'une stratégie d'épargne adaptée.",
  },
  {
    image: "/image/alexbarcley-money-5885622_1280.jpg",
    title: "Réduire sa pression fiscale",
    children:
      "Optimisation fiscale dans le respect de votre situation et de vos objectifs.",
  },
  {
    image: "/image/stocksnap-people-2585733_1280.jpg",
    title: "Protéger sa famille",
    children:
      "Couverture des risques de la vie pour sécuriser l'équilibre de vos proches.",
  },
  {
    image: "/image/stevebidmead-boy-373441_1280.jpg",
    title: "Transmettre à ses enfants",
    children:
      "Préparation de la transmission patrimoniale avec une approche claire et anticipée.",
  },
  {
    image: "/image/wal_172619_ii-houses-8618837_1280.jpg",
    title: "Constituer un patrimoine immobilier et/ou financier",
    children:
      "Structuration progressive de vos actifs pour renforcer votre indépendance financière.",
  },
  {
    image: "/image/alkemade-flowers-3990696_1280.jpg",
    title: "Assurances obsèques",
    children:
      "Solutions dédiées pour soulager vos proches et organiser sereinement les frais liés aux obsèques.",
  },
];

export function Skills() {
  return (
    <section id="expertise" className="px-0 py-24">
      <div className="container mx-auto pb-20 text-center px-8">
        <Typography className="mb-2 font-bold uppercase text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Domaines d&apos;expertise
        </Typography>
        <Typography variant="h1" className="mb-4 font-extrabold text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          J&apos;accompagne professionnels et particuliers
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Chaque expertise est traitée de façon spécifique, avec une
          recommandation adaptée à votre situation.
        </Typography>
      </div>

      <div className="container mx-auto pb-24">
        <Typography variant="h3" className="mb-6 text-center text-[#15315c] px-8"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Auprès des Professionnels
        </Typography>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 sm:px-8">
          {PROFESSIONAL_EXPERTISE.map((props, idx) => (
            <SkillCard key={`pro-${idx}`} {...props} />
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <Typography variant="h3" className="mb-6 text-center text-[#15315c] px-8"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Auprès des Particuliers
        </Typography>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 sm:px-8">
          {INDIVIDUAL_EXPERTISE.map((props, idx) => (
            <SkillCard key={`part-${idx}`} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
