import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rezaditya.me"),
  title: "Reza Aditya P - Portfolio",
  description:
    "Portfolio of Reza Aditya Prabowo: an Informatics graduate focused on backend development, IT support, and networking.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reza Aditya P - Portfolio",
    description:
      "Portfolio of Reza Aditya Prabowo: backend development, IT support, and networking.",
    url: "https://rezaditya.me",
    siteName: "Reza Aditya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Aditya P - Portfolio",
    description:
      "Portfolio of Reza Aditya Prabowo: backend development, IT support, and networking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Reza Aditya Prabowo",
    "url": "https://rezaditya.me",
    "jobTitle": "Backend Developer",
    "description":
      "Informatics graduate focused on backend development, IT support, and networking.",
    "sameAs": [
      "https://github.com/Rezzadty"
    ]
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
