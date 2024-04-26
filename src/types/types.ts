import { StaticImageData } from "next/image";

export interface IGame {
    name: string;
    logo: StaticImageData;
    route: string;
}