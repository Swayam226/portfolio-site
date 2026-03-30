import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Portfolio - Swayam Kumar",
  description: "Web based portfolio of Swayam Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
