"use client";

import { ProjectCard } from "@/components";
import { AcademicCapIcon, ChevronDoubleRightIcon, FaceSmileIcon, HandRaisedIcon, HeartIcon, PhoneIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    icon: ShieldCheckIcon,
    title: "Excellence",
    desc: "Je vise des recommandations utiles, argumentées et applicables, avec un niveau d'exigence constant.",
  },
  {
    icon: FaceSmileIcon,
    title: "Éthique",
    desc: "Je privilégie la transparence, la clarté des engagements et la protection de vos intérêts à long terme.",
  },
  {
    icon: HandRaisedIcon,
    title: "Engagement",
    desc: "Je m'investis personnellement dans chaque dossier avec un suivi régulier et une vraie disponibilité.",
  },
  {
    icon: HeartIcon,
    title: "Confiance",
    desc: "Je construis une relation durable fondée sur l'écoute, la discrétion et le respect de votre situation.",
  },
  {
    icon: PhoneIcon,
    title: "Réactivité",
    desc: "Je réponds rapidement pour vous aider à prendre les bonnes décisions au bon moment.",
  },
];

export function Projects() {
  return (
    <section id="valeurs" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="font-extrabold mb-4 text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Valeurs du cabinet
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Les valeurs qui guident mon
          accompagnement au quotidien.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-5">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
