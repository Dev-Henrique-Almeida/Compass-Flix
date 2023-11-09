import { Montserrat, Lato } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["700", "400"],
});
