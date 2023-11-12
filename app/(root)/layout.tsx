import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bEsports",
  description: "A bEsports application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Topbar />

        <main className="flex flex-row">
          <section className="main-container">
            <div className="w-full">{children}</div>
          </section>
        </main>

        <Bottombar />
      </body>
    </html>
  );
}
