import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "bEsports",
  description: "A bEsports application",
};

const inter = Inter({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-dark-1`}>{children}</body>
    </html>
  );
}
