import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/store/ThemeContext";

export const metadata: Metadata = {
  title: "Marshtopia",
  description:
    "A digital restoration and historical archive of the marshland antiquities, featuring 3D viewings and historical timelines.",
};

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair.className} bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-200 transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
