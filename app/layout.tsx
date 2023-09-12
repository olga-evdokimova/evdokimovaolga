import "./globals.scss";
import "./null.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Button from "./components/button/Button";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olga Evdokimova",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
          <Button />
        </div>
      </body>
    </html>
  );
}
