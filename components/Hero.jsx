import { whatsappLink } from "@/data/i18n";

export default function Hero({ dict }) {
  const h = dict.hero;
  return (
    <div className="hero">
      <div className="container">
        <span className="badge">{h.badge}</span>
        <h1>
          {h.titleBefore}
          <b>{h.titleHighlight}</b>
          {h.titleAfter}
        </h1>
        <p>{h.text}</p>
        <div className="btns">
          <a
            className="btn primary"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {h.joinBtn}
          </a>
          <a className="btn ghost" href="#equipe">
            {h.teamBtn}
          </a>
        </div>
      </div>
    </div>
  );
}
