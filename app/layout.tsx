import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ansellmaximilian.github.io"),
  title: "Ansell Maximilian — Web & Systems Developer",
  description:
    "Portfolio of Ansell Maximilian, a web and systems developer building high-impact interfaces and creative digital products.",
  keywords: [
    "Ansell Maximilian",
    "frontend developer",
    "web developer",
    "Next.js developer",
    "Indonesia",
  ],
  authors: [{ name: "Ansell Maximilian" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ansell Maximilian — Web & Systems Developer",
    description:
      "High-impact interfaces. Creative systems. Selected work by Ansell Maximilian.",
    url: "/",
    siteName: "Ansell Maximilian",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ansell Maximilian — Web & Systems Developer",
    description:
      "High-impact interfaces. Creative systems. Selected work by Ansell Maximilian.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090908",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
