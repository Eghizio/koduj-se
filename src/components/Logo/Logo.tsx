import Image from "next/image";
import svg from "./kodujse-logo-black.svg";
// import iconWhite from "@/assets/kodujse-icon-white.svg";
// import logoWhite from "@/assets/kodujse-logo-white.svg";
// import logoBlack from "@/assets/kodujse-logo-black.svg";

interface Props {
  scale?: number;
}

export const Logo = ({ scale = 1 }: Props) => (
  <Image
    className="dark:invert"
    src={svg}
    alt="Koduj.se logo"
    width={256 * scale}
    height={181 * scale}
    priority
  />
);
