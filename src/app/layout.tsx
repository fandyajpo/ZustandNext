import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ZustandHydrateProvider } from "@/store/zustand/provider/hydrate";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
  preload: true,
  style: "normal",
});

export const metadata: Metadata = {
  title: "Faouzia",
  description: `With her spellbinding voice, fierce intelligence, and larger-than-life talent, 23-year-old singer/songwriter Faouzia has an extraordinary charisma that’s equally matched by her ingenuity. Born in Morocco but raised in Canada, the classically trained multi-instrumentalist started crafting her own songs at the age of six, and soon dreamed up a hypnotic brand of pop informed by powerhouse divas like Beyoncé, Rihanna, and Lady Gaga along with the Middle Eastern chanteuses she listened to throughout her childhood. On the heels of her 2020 single “Minefields,” with global superstar John Legend, Faouzia is now set to deliver her most magnetic work to date, realizing her vision with more boldness and self-assurance than ever before.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ZustandHydrateProvider>
          <div className="w-full h-screen">{children}</div>
        </ZustandHydrateProvider>
      </body>
      <script async src="//www.instagram.com/embed.js"></script>
    </html>
  );
}
