import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export function ProjectCard({ icon: Icon, title, desc }: ProjectCardProps) {
  return (
    <Card color="transparent" className="hover:scale-105 transition-all duration-300" shadow={false} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader floated={false} shadow={false} className="mx-0 mt-0 mb-auto h-auto" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-[#15315c] text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      </CardHeader>
      <CardBody className="p-0 text-center" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

        <Typography variant="h5" className="mb-2 text-[#15315c]" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
