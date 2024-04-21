import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

const barlow = Barlow({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamers Paradise - Top-Up. Gear Up. Game On!",
  description: "Gamers Paradise is a dynamic online platform designed to enhance the gaming experience for enthusiasts worldwide. With a focus on convenience, accessibility, and community, Gamers Paradise offers a comprehensive suite of features tailored to meet the diverse needs of gamers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
};
