import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ConvexProvider } from "@/components/ConvexProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mont",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · Porte da interno e blindate a Foligno`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "porte da interno Foligno",
    "porte blindate Foligno",
    "porte blindate certificate",
    "serraturiere Foligno",
    "giemme doors service",
    "porte Perugia",
    "serramenti Foligno",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: SITE.name,
    title: `${SITE.name} · Porte da interno e blindate a Foligno`,
    description: SITE.description,
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} · Porte da interno e blindate a Foligno`,
    description: SITE.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <ConvexProvider>
          <Header />
          {children}
          <Footer />
        </ConvexProvider>
      </body>
    </html>
  );
}
