import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Koduj.se",
  description: "Koduj se - programowanie dla wszystkich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
