import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Members from "@/components/Members";
import Join from "@/components/Join";
import Footer from "@/components/Footer";
import { getDictionary, locales, defaultLocale } from "@/data/i18n";

export default async function Home({ params }) {
  const { lang: rawLang } = await params;
  const lang = locales.includes(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <Banner text={dict.banner} />
      <main id="top">
        <Hero dict={dict} />
        <About dict={dict} />
        <Team dict={dict} lang={lang} />
        <Members dict={dict} />
        <Join dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
