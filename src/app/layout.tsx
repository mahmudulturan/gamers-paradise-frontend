import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

const exo = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamers Paradise - Top-Up. Gear Up. Game On!",
  description: "Gamers Paradise is a dynamic online platform designed to enhance the gaming experience for enthusiasts worldwide. With a focus on convenience, accessibility, and community, Gamers Paradise offers a comprehensive suite of features tailored to meet the diverse needs of gamers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
