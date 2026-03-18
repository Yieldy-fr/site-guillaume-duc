import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg bg-[#15315c]"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <Icon className="h-6 w-6" strokeWidth={2} fill="white"/>
      </Card>
      <Typography className="w-full font-normal !text-gray-500"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;
