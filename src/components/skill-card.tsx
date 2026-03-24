import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

interface SkillCardProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

export function SkillCard({ image, title, children }: SkillCardProps) {
  return (
    <Card className="sm:mx-2 hover:scale-105 transition-all duration-300" shadow={true} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardBody className="grid justify-center text-center p-0 py-6 px-4" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="mx-0 mb-6 grid h-56 w-auto place-items-center rounded-xl overflow-clip">
          <Image src={image} alt={title} width={768} height={768} className="h-full w-full object-cover" />
        </div>
        <Typography variant="h5" className="mb-2 text-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-500"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
