"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const PROFESSIONAL_EXPERTISE = [
  {
    icon: RectangleGroupIcon,
    title: "Assurance sante et prevoyance collectives",
    children:
      "Protection sociale collective adaptee aux besoins de votre entreprise et de vos equipes.",
  },
  {
    icon: FingerPrintIcon,
    title:
      "Assurance sante et prevoyance des chefs d'entreprise et professions liberales",
    children:
      "Solutions dediees au dirigeant pour securiser ses revenus et son activite.",
  },
  {
    icon: SwatchIcon,
    title: "Epargne salariale",
    children:
      "Mise en place de dispositifs d'epargne attractifs pour valoriser et fideliser vos collaborateurs.",
  },
  {
    icon: HashtagIcon,
    title: "PER collectifs",
    children:
      "Construction de solutions de retraite collective performantes et lisibles pour vos equipes.",
  },
  {
    icon: EyeIcon,
    title: "Remuneration du dirigeant",
    children:
      "Arbitrage entre remuneration immediate, protection et strategie long terme.",
  },
  {
    icon: DocumentTextIcon,
    title: "Retraite individuelle, Retraite Madelin et Epargne par capitalisation",
    children:
      "Organisation progressive de la retraite du dirigeant selon ses objectifs patrimoniaux.",
  },
];

const INDIVIDUAL_EXPERTISE = [
  {
    icon: RectangleGroupIcon,
    title: "Preparer sa retraite",
    children:
      "Projection de vos besoins futurs et mise en place d'une strategie d'epargne adaptee.",
  },
  {
    icon: FingerPrintIcon,
    title: "Reduire sa pression fiscale",
    children:
      "Optimisation fiscale dans le respect de votre situation et de vos objectifs.",
  },
  {
    icon: SwatchIcon,
    title: "Proteger sa famille",
    children:
      "Couverture des risques de la vie pour securiser l'equilibre de vos proches.",
  },
  {
    icon: HashtagIcon,
    title: "Transmettre a ses enfants",
    children:
      "Preparation de la transmission patrimoniale avec une approche claire et anticipee.",
  },
  {
    icon: EyeIcon,
    title: "Constituer un patrimoine immobilier et/ou financier",
    children:
      "Structuration progressive de vos actifs pour renforcer votre independance financiere.",
  },
  {
    icon: DocumentTextIcon,
    title: "Assurances Obseques",
    children:
      "Solutions dediees pour soulager vos proches et organiser sereinement les frais lies aux obseques.",
  },
];

export function Skills() {
  return (
    <section id="expertise" className="px-8 py-24">
      <div className="container mx-auto pb-20 text-center">
        <Typography className="mb-2 font-bold uppercase text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Domaines d&apos;expertise
        </Typography>
        <Typography variant="h1" className="mb-4 font-extrabold text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          J&apos;accompagne professionnels et particuliers
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Chaque expertise est traitee de facon specifique, avec une
          recommandation adaptee a votre situation.
        </Typography>
      </div>

      <div className="container mx-auto pb-24">
        <Typography variant="h3" className="mb-6 text-center text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Auprès des Professionnels
        </Typography>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONAL_EXPERTISE.map((props, idx) => (
            <SkillCard key={`pro-${idx}`} {...props} />
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <Typography variant="h3" className="mb-6 text-center text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Auprès des Particuliers
        </Typography>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {INDIVIDUAL_EXPERTISE.map((props, idx) => (
            <SkillCard key={`part-${idx}`} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
