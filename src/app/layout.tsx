import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Durga Engineers",
  description:
    "At Durga Engineers, we are committed to providing reliable, end-to-end fire protection and security solutions for a wide variety of industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "Durga Engineer",
      "@id": "https://durgaengineers.com/",
    },
    headline: "Abhinav Anand",
    datePublished: "21-10-2001",
    dateModified: "21-02-2024",
    author: [
      {
        "@type": "Person",
        name: "Durga Engineer",
        url: "https://durgaengineers.com/",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Durga Engineers",
      logo: {
        "@type": "ImageObject",
        url: "example.com/image",
      },
    },
    description: "some description",
  };
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="fire, fire protection, fire protection system, durga, engineers, fire extinguisher, fm200, sprinkler, fire detector, bangalore, bengaluru, karnataka, durgaa, engineering, engineer, dhurga"
        />
        <link rel="canonical" href="https://durgaengineers.com/" />
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
