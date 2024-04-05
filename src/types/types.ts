import { StaticImageData } from "next/image";

export interface IScreen {
  id?: string;
  image?: string | StaticImageData;
  imageStyle?: string;
  color?: string;
  className?: string;
  children: React.ReactNode;
}
