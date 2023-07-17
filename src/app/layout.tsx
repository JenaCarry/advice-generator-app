import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Advice generator app",
  description: "Page built for a Frontend Mentor challenge",
  authors: { name: "Jean", url: "https://github.com/JenaCarry" },
  keywords: [
    "Frontend Mentor",
    "Frontend",
    "Mentor",
    "Advice generator app",
    "Advice",
    "Generator",
    "App",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "TypeScript",
    "React",
    "Next.js",
    "Responsive",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
