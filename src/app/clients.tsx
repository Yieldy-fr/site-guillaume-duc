"use client";

import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "AXA",
  "Drouot Estate",
  "AGIPI",
  "AXA Gestion Privée",
];

export function Clients() {
  return (
    <section id="partenaires" className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h1" className="mb-8 font-extrabold text-[#15315c]" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Nos partenaires
        </Typography>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CLIENTS.map((partner) => (
            <div
              key={partner}
              className="rounded-lg border border-gray-200 px-6 py-8 text-lg font-semibold text-blue-gray-900"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
