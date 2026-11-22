import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://tarun-r-s-portfolio.vercel.app";
const TITLE = "Tarun R S | Software Engineer - AI Agents & Full-Stack";
const DESCRIPTION =
  "Portfolio of Tarun R S, Software Engineer at Prodoc AI. Production AI agents, MCP tool servers, full-stack web and Flutter mobile apps.";
const PROFILE_IMAGE = "/images/landing-page/profile-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  authors: [{ name: "Tarun R S", url: SITE_URL }],
  creator: "Tarun R S",
  keywords: [
    "AI agents",
    "multi-agent systems",
    "RAG",
    "MCP",
    "LLM",
    "full-stack developer",
    "Flutter",
    "Software Engineer",
    "Bangalore",
  ],
  openGraph: {
    type: "profile",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Tarun R S",
    locale: "en_IN",
    images: [
      {
        url: PROFILE_IMAGE,
        width: 1017,
        height: 1066,
        alt: "Tarun R S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [PROFILE_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Tarun R S",
      url: SITE_URL,
      image: `${SITE_URL}${PROFILE_IMAGE}`,
      jobTitle: "Software Engineer",
      description: DESCRIPTION,
      worksFor: { "@type": "Organization", name: "Prodoc AI" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Global Academy of Technology" },
        {
          "@type": "CollegeOrUniversity",
          name: "Indian Institute of Technology Ropar",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/tarun-rs/",
        "https://github.com/tarun824",
      ],
      knowsAbout: [
        "multi-agent systems",
        "retrieval-augmented generation",
        "vector search",
        "Model Context Protocol",
        "LLM orchestration",
        "function calling",
        "LLM evaluation",
        "Flutter",
        "Kotlin",
        "Node.js",
        "Python",
        "TypeScript",
        "React",
        "microservices",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Tarun R S",
      description: DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${poppins.variable} ${interSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
