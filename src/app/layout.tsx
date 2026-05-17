import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUZIMPE Life & Growth Ltd",
  description:
    "Health, wellness, natural living, entrepreneurship support and family guidance through EBGS in Kigali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
