import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Toaster } from "sonner";
const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formulaire VALYM esports",
  description: "Inscrit toi au tournoi !",
  icons: "https://i.ibb.co/51F1ch6/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme" suppressHydrationWarning>
      <body className={open_Sans.className}>
        <div className="flex flex-col items-center justify-center">
          <div className="justify-self-start">
            <Header />
          </div>
          <div>{children}</div>
          <Toaster richColors />
        </div>
      </body>
    </html>
  );
}
