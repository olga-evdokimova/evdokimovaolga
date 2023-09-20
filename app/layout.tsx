import "./globals.scss";
import "./null.scss";
import "./style.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Header from "./components/Header/Header";
// import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Евдокимова Ольга - Фронтенд-разработчик | Создание сайтов",
  description:
    "Я - Евдокимова Ольга, фронтенд-разработчик, специализирующаяся на создании различных типов сайтов, включая многостраничники, лендинги, визитки, портфолио и многое другое. Я имею опыт в доработке уже готовых сайтов и обеспечении их технической поддержки. Мои навыки и работа в команде позволяют мне создавать сайты под ключ - от идеи до запуска, а также обеспечивать их дальнейшее функционирование.",
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
            {/* <Button /> */}
            <ScrollToTopButton />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
