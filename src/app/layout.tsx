import type { Metadata } from "next";
import { Montserrat, Pacifico } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Island Monkey Café",
  description: "The coolest mobile coffee stand on the Peninsula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
