"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header id="accueil" className="p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl font-extrabold text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Cabinet Guillaume DUC <br />
            Je vous aide à protéger ceux que vous aimez.
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-700 md:pr-16 xl:pr-28"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Particuliers, dirigeants, professions libérales — chaque étape de
            vie mérite d&apos;être anticipée. Je suis là pour vous aider à y
            voir clair, simplement.
          </Typography>
          <a href="#coordonnees" className="mb-4 inline-block">
            <Button className="px-6 bg-[#15315c] hover:bg-[#15315c]/90 text-white"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Faire le point ensemble
            </Button>
          </a>
          <Typography variant="small" className="font-normal !text-gray-700"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Découvrir{" "}
            <a href="#expertise" className="font-medium underline transition-colors">
              mes domaines d&apos;expertise
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="Cabinet de conseil en assurance"
          src="/image/guillaume_duc_photo_main.jpg"
          className="h-[36rem] w-full rounded-xl object-cover object-right-top"
        />
      </div>
    </header>
  );
}

export default Hero;
