import type { Metadata } from "next";
import "@/styles/globals.scss";
import localFont from "next/font/local";
import { Header } from "@/screens/components/Header/Header";

const aeonik = localFont({
  src: [
    {
      path: "../fonts/Aeonik/Aeonik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Aeonik/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Aeonik/Aeonik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Aeonik/Aeonik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Aeonik/Aeonik-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={aeonik.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
