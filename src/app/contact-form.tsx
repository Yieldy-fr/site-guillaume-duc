"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
  Checkbox
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      type: formData.get("type"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  return (
    <section id="coordonnees" className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" className="mb-4 font-extrabold text-[#15315c]" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Coordonnées
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Je vous réponds rapidement pour organiser un échange personnalisé.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-[#15315c]">
              <Typography variant="h4" color="white" className="mb-2" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Informations de contact
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-300" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
                Deux adresses pour vous accueillir sur rendez-vous.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  07 69 05 33 23
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2 break-words text-wrap" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <a target="blank_" href="mailto:agencea2p.guillaume.duc@axa.fr" className="text-white hover:text-blue-500 break-words">
                    agencea2p . guillaume . duc@axa.fr
                  </a>
                </Typography>
              </div>
              <div className="flex mb-2 gap-5">
                <MapPinIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2 text-base" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <a target="blank_" href="https://maps.app.goo.gl/mcEWSzqWzVcCLGoo7" className="text-white hover:text-blue-500">
                    22 rue Adam Ledoux, 92400 Courbevoie
                  </a>
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <MapPinIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2 text-base" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <a target="blank_" href="https://maps.app.goo.gl/95K46jYJSpN5B2S66" className="text-white hover:text-blue-500">
                    31 rue de Verdun, 92150 Suresnes
                  </a>
                </Typography>
              </div>
              {/* <div className="flex items-center gap-5">
                <IconButton variant="text" color="white" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div> */}
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    required
                    size="lg"
                    variant="static"
                    label="Prénom"
                    name="first-name"
                    placeholder="ex. Jean"
                    className="text-[#15315c] font-bold"
                    labelProps={{
                      className: "!text-[#15315c] !font-bold",
                    }}
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    required
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nom"
                    name="last-name"
                    placeholder="ex. Dupont"
                    className="text-[#15315c] font-bold"
                    labelProps={{
                      className: "!text-[#15315c] !font-bold",
                    }}
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  required
                  color="gray"
                  size="lg"
                  variant="static"
                  label="E-mail"
                  name="email"
                  placeholder="ex. jean.dupont@example.com"
                  className="text-[#15315c] font-bold"
                  labelProps={{
                    className: "!text-[#15315c] !font-bold",
                  }}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography

                  variant="lead"
                  className="!text-[#15315c] font-bold text-sm mb-2" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                >
                  Votre besoin principal <span className="text-[#ff0000]">*</span>
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {/* @ts-ignore */}
                  <Radio
                    required
                    labelProps={{ className: "!text-gray-500 !font-medium" }}
                    name="type"
                    label="Protection sociale"
                    value={'protection-sociale'}
                    defaultChecked
                  />
                  {/* @ts-ignore */}
                  <Radio required labelProps={{ className: "!text-gray-500 !font-medium" }} name="type" label="Gestion de patrimoine" value={'gestion-patrimoine'} />
                  {/* @ts-ignore */}
                  <Radio required labelProps={{ className: "!text-gray-500 !font-medium" }} name="type" label="Retraite et fiscalité" value={'retraite-et-fiscalite'} />
                  {/* @ts-ignore */}
                  <Radio required labelProps={{ className: "!text-gray-500 !font-medium" }} name="type" label="Autre" value={'autre'} />
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Votre message"
                  name="message"
                  placeholder="Décrivez brièvement votre besoin ou votre projet"
                  className="text-[#15315c] font-bold"
                  labelProps={{
                    className: "!text-[#15315c] !font-bold",
                  }}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {/* <label className="mb-8 flex items-start gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#15315c]"
                  />
                  <span>
                    J&apos;accepte d&apos;être recontacté(e) et que mes données
                    soient enregistrées afin de traiter ma demande.
                  </span>
                </label> */}

                {/* <div className="mb-8 flex items-start gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    required
                    className="mt-1 rounded border-gray-300 accent-[#15315c]"
                  />
                  <label className="text-sm text-gray-600" htmlFor="consent">
                    * J&apos;accepte d&apos;être recontacté(e) et que mes données
                    soient enregistrées afin de traiter ma demande.
                  </label>
                </div> */}
                <div className="mb-8 flex items-center flex-row gap-1 text-sm text-gray-600">
                  {/* @ts-ignore */}
                  <Checkbox
                    name="consent"
                    id="consent"
                    required
                    className="h-6 w-6 rounded-lg border-gray-900/20 transition-all"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    <span className="text-[#ff0000]">*</span> J&apos;accepte d&apos;être recontacté(e) et que mes données
                    soient enregistrées afin de traiter ma demande.
                  </label>
                </div>

                <div className="w-full flex justify-end">
                  <Button type="submit" className="w-full md:w-fit bg-[#15315c] hover:bg-[#15315c]/90 text-white" size="md" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Envoyer
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
