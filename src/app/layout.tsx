import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Digital Market",
  description: "Developed by Ranj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`relative h-full font-sans antialiased ${geistSans} ${geistMono}`}
      >
        <main className={`relative flex flex-col min-h-screen`}>
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
