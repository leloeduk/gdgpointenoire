export default function Header({ lang, dict }) {
  const links = [
    { href: "#apropos", label: dict.nav.about },
    { href: "#equipe", label: dict.nav.team },
    { href: "#membres", label: dict.nav.members },
    { href: "#rejoindre", label: dict.nav.join },
  ];
  const otherLang = lang === "fr" ? "en" : "fr";

  return (
    <header>
      <div className="container nav">
        <a href="#top" className="logo">
          <span className="dots">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span className="t">{dict.brand}</span>
        </a>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={`/${otherLang}`} className="lang-switch">
                {otherLang.toUpperCase()}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
