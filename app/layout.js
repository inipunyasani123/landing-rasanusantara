import { Fraunces, Inter } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/footer/Footer";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfessionalService","name":"Rasa Nusantara","description":"Kartu resep terstandar untuk dapur restoran","url":"https://landing-rasanusantara.pintuweb.id","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://landing-rasanusantara.pintuweb.id"),
  title: { default: "Rasa Nusantara — Kartu Resep Terstandar untuk Dapur Restoran", template: "%s — Rasa Nusantara" },
  description: "Resep tradisional ditulis ulang jadi kartu resep terstandar untuk dapur restoran: gramasi, urutan, titik kritis, dan HPP per porsi. Minta 3 kartu gratis.",
  applicationName: "Rasa Nusantara",
  keywords: ["kartu resep terstandar", "standar resep restoran", "hpp per porsi", "resep masakan nusantara", "konsultan dapur"],
  authors: [{ name: "Rasa Nusantara" }],
  creator: "Rasa Nusantara",
  publisher: "Rasa Nusantara",
  alternates: { canonical: "https://landing-rasanusantara.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-rasanusantara.pintuweb.id",
    siteName: "Rasa Nusantara",
    title: "Rasa Nusantara — Kartu Resep Terstandar untuk Dapur Restoran",
    description: "Resep tradisional ditulis ulang jadi kartu resep terstandar untuk dapur restoran: gramasi, urutan, titik kritis, dan HPP per porsi. Minta 3 kartu gratis.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Rasa Nusantara — Kartu Resep Terstandar untuk Dapur Restoran" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasa Nusantara — Kartu Resep Terstandar untuk Dapur Restoran",
    description: "Resep tradisional ditulis ulang jadi kartu resep terstandar untuk dapur restoran: gramasi, urutan, titik kritis, dan HPP per porsi. Minta 3 kartu gratis.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-clay focus:px-4 focus:py-2 focus:text-rice">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=rasanusantara" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
