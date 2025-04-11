import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Theme } from "./theme";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ollama chat",
  description: "Chat application using ollama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable}, ${notoSerifJP.variable}, Arial, sans-serif`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
