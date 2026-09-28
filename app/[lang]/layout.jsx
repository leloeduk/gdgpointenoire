import "../globals.css";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { locales, defaultLocale } from "@/data/i18n";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: "GDG Pointe-Noire",
    description: isEn
      ? "Google Developer Group Pointe-Noire: the tech community of Pointe-Noire. Meet our organizing team and active members."
      : "Google Developer Group Pointe-Noire : la communauté tech de Pointe-Noire. Découvrez notre équipe organisatrice et nos membres actifs.",
    openGraph: {
      title: "GDG Pointe-Noire",
      description: isEn
        ? "Google Developer Group Pointe-Noire: the tech community of Pointe-Noire."
        : "Google Developer Group Pointe-Noire : la communauté tech de Pointe-Noire.",
      locale: isEn ? "en_US" : "fr_FR",
      type: "website",
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const htmlLang = locales.includes(lang) ? lang : defaultLocale;

  return (
    <html lang={htmlLang} className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
