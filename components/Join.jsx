import { whatsappLink } from "@/data/i18n";

export default function Join({ dict }) {
  const j = dict.join;
  return (
    <section id="rejoindre" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="join">
          <h2>{j.title}</h2>
          <p>{j.text}</p>
          <a
            className="btn"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {j.btn}
          </a>
        </div>
      </div>
    </section>
  );
}
