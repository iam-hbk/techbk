import type { Metadata } from "next";
import { Archivo, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { LenisProvider } from "@/components/lenis-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["wdth"],
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TecHBK | Software Development Consultancy",
    template: "%s | TecHBK",
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "TecHBK | Software Development Consultancy",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "TecHBK | Software Development Consultancy",
    description: site.description,
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        logo: `${site.url}/icon.svg`,
        areaServed: ["South Africa", "Democratic Republic of the Congo"],
        founder: { "@id": `${site.url}/#founder` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#founder`,
        name: site.founder.name,
        jobTitle: site.founder.role,
        worksFor: { "@id": `${site.url}/#organization` },
        sameAs: [site.founder.github],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        display.variable,
        sans.variable,
        mono.variable
      )}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <a
          href="#main"
          className="skip-link rounded-sm bg-cobalt px-4 py-2 text-sm font-medium text-white"
        >
          Skip to content
        </a>
        <LenisProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </LenisProvider>
        <Toaster />
      </body>
    </html>
  );
}
