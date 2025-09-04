import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DONT BE BLUE",
  description: "From Tokkis to MHDHH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}