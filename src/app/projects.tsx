"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Excellence",
    desc: "Je vise des recommandations utiles, argumentees et applicables, dans un niveau d'exigence constant.",
  },
  {
    img: "/image/blog2.svg",
    title: "Ethique",
    desc: "Je privilegie la transparence, la clarte des engagements et la protection de vos interets a long terme.",
  },
  {
    img: "/image/blog3.svg",
    title: "Engagement",
    desc: "Je m'investis personnellement dans chaque dossier avec un suivi regulier et une vraie disponibilite.",
  },
  {
    img: "/image/blog4.svg",
    title: "Confiance",
    desc: "Je construis une relation durable fondee sur l'ecoute, la discretion et le respect de votre situation.",
  },
  {
    img: "/image/blog-1.svg",
    title: "Reactivite",
    desc: "Je reponds rapidement pour vous aider a prendre les bonnes decisions au bon moment.",
  },
];

export function Projects() {
  return (
    <section id="valeurs" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="font-extrabold mb-4"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Valeurs du cabinet
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Excellence, ethique, engagement, confiance et reactivite guident mon
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
