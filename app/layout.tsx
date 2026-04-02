import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Roboto_Mono } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { PageLoader } from "@/components/PageLoader";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spekt Tactical | NATO-Aligned Tactical Equipment",
  description:
    "Professional tactical equipment. NATO-standard quality. B2B procurement with full documentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${robotoMono.variable}`}
    >
      <body className="min-h-screen font-body">
        <CartProvider>
          <PageLoader />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
