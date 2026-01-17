import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#d4af37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "L'Impostore - Mystery Party Game",
    template: "%s | L'Impostore",
  },
  description:
    "Un gioco sociale di deduzione e investigazione. Scopri chi è l'impostore tra i tuoi amici! Perfetto per feste e serate in compagnia.",
  applicationName: "L'Impostore",
  authors: [{ name: "Bilal Messaoudi", url: "https://bilel.it" }],
  keywords: [
    "gioco",
    "impostore",
    "pass and play",
    "party game",
    "mistero",
    "deduzione",
    "sociale",
    "app",
  ],
  creator: "Bilal Messaoudi",
  publisher: "Bilal Messaoudi",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://impostore.bilel.it",
    siteName: "L'Impostore",
    title: "L'Impostore - Trova l'intruso!",
    description:
      "Riuscirai a scoprire chi sta mentendo? Gioca ora con i tuoi amici. Un telefono, tanti sospettati.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "L'Impostore Game Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Impostore - Mystery Party Game",
    description: "Unisciti alla partita e smaschera l'impostore!",
    creator: "@bilel_it",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
