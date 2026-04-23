import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "황대웅 | Bassist & Content Director",
  description:
    "베이시스트 황대웅 - (주)몽비 콘텐츠 운영팀 이사. 재즈, 퓨전국악, 세션, 유튜브 채널 운영.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
