"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children:
      "Executive MBA — pour une vision stratégique au service de vos intérêts.",
  },
  {
    icon: LightBulbIcon,
    children:
      "Formation AXA — réussie avec les honneurs, dans un cadre reconnu pour son exigence.",
  },
  {
    icon: ShieldCheckIcon,
    children:
      "Agent général en assurance — profession réglementée, soumise au devoir de conseil et au secret professionnel. Je suis là pour vous, pas pour un portefeuille.",
  },
];

export function Resume() {
  return (
    <section id="biographie" className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography className="font-extrabold text-[#15315c]" variant="h2" color="blue-gray"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Pourquoi ce métier ? Pourquoi cette façon de l&apos;exercer ?
          </Typography>
          <Typography className="mb-4 mt-3 w-full font-normal !text-gray-700"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Installé à Paris depuis plus de quinze ans, j&apos;ai construit ce
            métier autour d&apos;une conviction qui ne m&apos;a jamais quitté : les
            grandes décisions, celles qui concernent notre famille, notre
            avenir, nos proches, méritent un conseiller qui prend le temps de
            comprendre avant de proposer.
          </Typography>
          <Typography className="mb-4 w-full font-normal !text-gray-700"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Chaque étape de vie rebat les cartes. Une naissance, un changement
            d&apos;activité, une séparation, un problème de santé, ces
            moments-là méritent qu&apos;on y ait réfléchi avant. Mon rôle,
            c&apos;est d&apos;être là à chaque fois que vous avez besoin d&apos;y
            voir plus clair.
          </Typography>
          <Typography className="mb-4 w-full font-normal !text-gray-700"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Je ne crois pas aux solutions universelles. Je crois aux solutions
            adaptées à chaque situation, expliquées simplement, mises en place
            sans attendre.
          </Typography>
          <Button
            onClick={
              () => window.location.href = "#coordonnees"
            }
            variant="text"
            color="gray"
            className="flex items-center gap-2 text-[#15315c] bg-white"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Me contacter
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900" fill="#15315c"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
