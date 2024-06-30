import "./globals.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Task Board",
  description: "Task managment application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
