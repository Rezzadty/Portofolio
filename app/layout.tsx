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
  description: "Welcome to my portfolio! I'm Reza Aditya Prabowo, a backend beginner developer with an interest in networking. Explore my projects, experience, and get in touch to collaborate on exciting opportunities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reza Aditya P - Portfolio",
    description: "Backend beginner developer with an interest in networking.",
    url: "https://rezaditya.me",
    siteName: "Reza Aditya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Aditya P - Portfolio",
    description: "Backend beginner developer with an interest in networking.",
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
    "description": "Backend beginner developer with an interest in networking.",
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
