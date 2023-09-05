import './globals.scss'
import type { Metadata } from 'next'
import { Montserrat, Roboto} from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["cyrillic"],
  display: "swap",
});
export const roboto = Roboto({
  weight: ["400", "700"],
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
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
