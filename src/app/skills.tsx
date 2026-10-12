"use client";

import { Typography } from "@material-tailwind/react";
import { SkillCard } from "@/components";

const PROFESSIONAL_EXPERTISE = [
  {
    image: "/image/istockphoto-1455304513-1024x1024.jpg",
    title: "Assurance santé et prévoyance collectives",
    children:
      "Parce que vos équipes comptent sur vous : comme vous comptez sur elles. Des solutions collectives claires, bien calibrées, qui protègent sans alourdir.",
  },
  {
    image: "/image/maximilianovich-doctor-5710153_1280.jpg",
    title:
      "Assurance santé et prévoyance des chefs d'entreprise et professions libérales",
    children:
      "En cas de coup dur, vous êtes souvent le premier à devoir tenir. Je vous aide à construire un filet solide : pour vous et pour ceux qui dépendent de vous.",
  },
  {
    image: "/image/f1digitals-coins-7702613_1280.jpg",
    title: "Épargne salariale",
    children:
      "Fidéliser, c'est aussi aider vos collaborateurs à construire quelque chose pour demain. Des dispositifs simples à mettre en place, vraiment utiles pour ceux qui les reçoivent.",
  },
  {
    image: "/image/wir_sind_klein-seniors-4379905_1280.jpg",
    title: "PER collectifs",
    children:
      "La retraite de vos collaborateurs, c'est aussi un sujet qui vous concerne en tant qu'employeur. Je vous aide à mettre en place des solutions lisibles, sans jargon, qui font la différence.",
  },
  {
    image: "/image/startupstockphotos-man-593333_1280.jpg",
    title: "Rémunération du dirigeant",
    children:
      "Se rémunérer, se protéger et construire sur le long terme : ces trois enjeux méritent d'être pensés ensemble. Je vous aide à trouver le bon équilibre pour votre situation.",
  },
  {
    image: "/image/nattanan23-money-2724241_1280.jpg",
    title: "Retraite individuelle, retraite Madelin et épargne par capitalisation",
    children:
      "Votre retraite de dirigeant ne ressemble à aucune autre. Je vous aide à la construire progressivement, selon vos objectifs réels, adaptés à vos choix de vie.",
  },
];

const INDIVIDUAL_EXPERTISE = [
  {
    image: "/image/pasja1000-senior-3336451_1280.jpg",
    title: "Préparer sa retraite",
    children:
      "Vous savez combien vous toucherez à la retraite ? La plupart des gens n'ont pas la réponse. Je vous donne un repère clair, et on construit à partir de là.",
  },
  {
    image: "/image/alexbarcley-money-5885622_1280.jpg",
    title: "Réduire sa pression fiscale",
    children:
      "Payer ses impôts, oui, mais pas plus que nécessaire. Il existe des solutions simples et légales, adaptées à votre situation. Je vous les explique clairement.",
  },
  {
    image: "/image/stocksnap-people-2585733_1280.jpg",
    title: "Protéger sa famille",
    children:
      "Si quelque chose vous arrivait demain, vos proches seraient-ils protégés ? C'est la question que peu de gens posent, et que je suis là pour vous aider à résoudre, simplement.",
  },
  {
    image: "/image/stevebidmead-boy-373441_1280.jpg",
    title: "Transmettre à ses enfants",
    children:
      "Transmettre à vos enfants, c'est aussi leur dire que vous avez pensé à eux avant qu'ils aient besoin de vous le demander. Je vous aide à le faire simplement et sans mauvaise surprise.",
  },
  {
    image: "/image/wal_172619_ii-houses-8618837_1280.jpg",
    title: "Constituer un patrimoine immobilier et/ou financier",
    children:
      "Construire un patrimoine, ce n'est pas réservé à ceux qui ont déjà tout. C'est une décision, prise au bon moment, avec les bons outils. Je suis là pour vous accompagner à chaque étape.",
  },
  {
    image: "/image/alkemade-flowers-3990696_1280.jpg",
    title: "Assurances obsèques",
    children:
      "Le dernier geste qu'on peut faire pour ses proches, c'est de ne pas leur laisser porter ce qui peut être anticipé. Je vous aide à mettre ça en place sobrement, sans que ce soit un sujet difficile.",
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
          Chaque situation mérite une réponse sur mesure
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-700 lg:w-10/12"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Que vous soyez chef d&apos;entreprise, profession libérale ou
          particulier, vos enjeux ne se ressemblent pas. Ce qui compte,
          c&apos;est de trouver la solution qui correspond à votre vie, pas une
          solution standard qu&apos;on adapte après.
        </Typography>
      </div>

      <div className="container mx-auto pb-24">
        <Typography variant="h3" className="mb-6 text-center text-[#15315c] px-8"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Pour les dirigeants &amp; professionnels : protéger votre activité et les vôtres
        </Typography>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 sm:px-8">
          {PROFESSIONAL_EXPERTISE.map((props, idx) => (
            <SkillCard key={`pro-${idx}`} {...props} />
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <Typography variant="h3" className="mb-6 text-center text-[#15315c] px-8"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Pour les particuliers : protéger ce qui compte vraiment
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
