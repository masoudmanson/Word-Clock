import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Word Clock",
  description: "A word clock built with NextJs and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">{children}</body>
    </html>
  );
}
