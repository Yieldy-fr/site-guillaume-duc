"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

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
            Protection sociale et gestion de patrimoine
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Agent général en assurance à Paris, j&apos;accompagne les
            particuliers, les professionnels et les dirigeants dans la
            protection sociale et la gestion de patrimoine, avec une exigence
            constante de clarté, de proximité et de résultat.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium font-bold text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Votre e-mail
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Saisissez votre e-mail" size="lg" />
              <Button className="w-full px-4 md:w-[12rem] bg-[#15315c] hover:bg-[#15315c]/90 text-white"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Être rappelé
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
          src="/image/Event-Guillaume-DUC_Meline-07-2025_258.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
