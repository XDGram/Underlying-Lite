import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Underlying — Your portfolio, decoded.",
  description:
    "See the companies behind your tokenized stocks and understand your true economic exposure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
