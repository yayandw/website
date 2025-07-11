import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yayan D. Wicaksono | Software Engineer & Tech Enthusiast",
  description: "Explore the personal website of Yayan D. Wicaksono – software engineer, technology enthusiast, and developer of modern web solutions.",
  keywords: [
    "Yayan D. Wicaksono",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "React",
    "Portfolio"
  ],
  authors: [{ name: "Yayan D. Wicaksono", url: "https://master.dnd18zakbk182.amplifyapp.com/" }],
  creator: "Yayan D. Wicaksono",
  publisher: "Yayan D. Wicaksono",
  metadataBase: new URL("https://master.dnd18zakbk182.amplifyapp.com/"),
  alternates: {
    canonical: "https://master.dnd18zakbk182.amplifyapp.com/",
  },
  openGraph: {
    title: "Yayan D. Wicaksono | Software Engineer & Tech Enthusiast",
    description: "Welcome to the official profile of Yayan D. Wicaksono, sharing projects, blogs, and engineering insights.",
    url: "https://master.dnd18zakbk182.amplifyapp.com/",
    siteName: "Yayan D. Wicaksono",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yayan D. Wicaksono | Software Engineer & Tech Enthusiast",
    description: "Discover the portfolio and writings of Yayan D. Wicaksono, a developer specializing in modern web technologies.",
    creator: "@yayandw"
  },
  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        {children}
      </body>
    </html>
  );
}
