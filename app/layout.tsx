import "./globals.scss";
import "./null.scss";
import "./style.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olga Evdokimova",
  description: "Personal website 1",
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
          <main>
            {children}
            <Button />
            <ScrollToTopButton />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
