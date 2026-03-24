"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  {
    name: "AXA",
    image: "/logos/logo_axa.svg",
  },
  {
    name: "Drouot Estate",
    image: "/logos/logo-drouot-estate.svg",
  },
  {
    name: "AGIPI",
    image: "/logos/logo_agipi.png",
  },
  {
    name: "AXA Gestion Privée",
    image: "/logos/logo_axa_gestion_privee.png",
  },
];

export function Clients() {
  return (
    <section id="partenaires" className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h1" className="mb-8 font-extrabold text-[#15315c]" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Mes partenaires
        </Typography>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CLIENTS.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center justify-center rounded-lg p-6">
              <Image
                src={partner.image}
                alt={partner.name}
                width={200}
                height={100}
                className="h-36 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
