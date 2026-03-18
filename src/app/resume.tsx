"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children:
      "Executive MBA (2021-2023), avec une vision stratégique orientée relation client et accompagnement durable.",
  },
  {
    icon: PuzzlePieceIcon,
    children:
      "Formation professionnelle AXA réussie avec les honneurs, dans un cadre reconnu pour son exigence.",
  },
  {
    icon: CursorArrowRaysIcon,
    children:
      "Agent général en assurance, profession libérale réglementée par l'Etat, soumise au devoir de conseil et au secret professionnel.",
  },
];

export function Resume() {
  return (
    <section id="biographie" className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography className="font-extrabold text-[#15315c]" variant="h2" color="blue-gray"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Biographie
          </Typography>
          <Typography className="mb-4 mt-3 w-full font-normal !text-gray-500"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Installé à Paris depuis plus de quinze ans, j&apos;ai construit mon
            parcours professionnel autour d&apos;une conviction simple: la
            confiance et la qualité de la relation humaine sont au coeur des
            décisions importantes.
          </Typography>
          <Typography className="mb-4 w-full font-normal !text-gray-500"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Mes différentes expériences m&apos;ont conduit à évoluer dans des
            environnements exigeants, où l&apos;écoute, la rigueur et le sens du
            service occupent une place essentielle. Elles m&apos;ont permis de
            développer une approche attentive aux situations individuelles et
            aux enjeux propres à chacun.
          </Typography>
          <Typography className="mb-4 w-full font-normal !text-gray-500"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            J&apos;accompagne mes clients dans les moments clés de leur vie, avec
            une attention particulière portée à la protection de leur équilibre
            financier et de celui de leurs proches.
          </Typography>
          <Button
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
