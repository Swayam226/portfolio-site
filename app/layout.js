import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"
import { Databuddy } from '@databuddy/sdk/react';

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
      suppressHydrationWarning
      className={`${instrument.variable} ${hanken.variable} h-full antialiased bg-background text-info font-body`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Databuddy
            clientId="3f9e1ea8-7f87-4370-8142-93291d53d6df"
            trackPerformance={false}
            trackScreenViews={false}
            batchTimeout={5000}
            initialRetryDelay={1000}
          />
          {children}
          <Analytics />
        </ThemeProvider></body>
    </html>
  );
}
