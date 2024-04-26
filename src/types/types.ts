import { StaticImageData } from "next/image";

export interface IGame {
    name: string;
    logo: StaticImageData;
    route: string;
}

export interface ITestimonial {
    image: StaticImageData;
    name: string;
    gameName: string;
    gameLogo: StaticImageData;
    reviewText: string;
    rating: number;
  }
  