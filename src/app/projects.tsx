"use client";

import { ProjectCard } from "@/components";
import { AcademicCapIcon, ChevronDoubleRightIcon, FaceSmileIcon, HandRaisedIcon, HeartIcon, PhoneIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    icon: ShieldCheckIcon,
    title: "Excellence",
    desc: "Je ne vous dirai jamais ce qui sonne bien : je vous dirai ce qui est juste pour votre situation. Même si c'est plus long à expliquer.",
  },
  {
    icon: FaceSmileIcon,
    title: "Éthique",
    desc: "Votre intérêt passe avant tout le reste. Je préfère vous dire non à un produit qui ne vous convient pas plutôt que de vous faire signer quelque chose dont vous n'avez pas besoin.",
  },
  {
    icon: HandRaisedIcon,
    title: "Engagement",
    desc: "Je suis là après la signature, pas seulement avant. Votre situation évolue : mon accompagnement aussi.",
  },
  {
    icon: HeartIcon,
    title: "Confiance",
    desc: "Il n'y a pas de questions stupides en matière d'argent et de protection. Il y a juste des questions qu'on n'a pas encore posées. Je suis là pour toutes les accueillir.",
  },
  {
    icon: PhoneIcon,
    title: "Réactivité",
    desc: "Une question, un doute, un changement de situation : je réponds. Rapidement et clairement. Parce que le bon moment pour décider, c'est rarement demain.",
  },
];

export function Projects() {
  return (
    <section id="valeurs" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="font-extrabold mb-4 text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Ce que vous pouvez attendre de moi, concrètement.
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-700 lg:w-6/12" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
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
