import { Typography, Button } from "@material-tailwind/react";

const LINKS = [
  { label: "Biographie", href: "#biographie" },
  { label: "Expertise", href: "#expertise" },
  { label: "Partenaires", href: "#partenaires" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            &copy; {CURRENT_YEAR} Cabinet Guillaume DUC - Mandataire exclusif
            AXA - ORIAS 2500 4060
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {link.label}
                </Typography>
              </li>
            ))}
            <a href="#coordonnees">
              <Button className="bg-[#15315c] hover:bg-[#15315c]/90 text-white"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Contact</Button>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
