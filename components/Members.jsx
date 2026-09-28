export default function Members({ dict }) {
  const m = dict.members;
  return (
    <section id="membres">
      <div className="container">
        <div className="title">
          <h2>{m.title}</h2>
          <p>{m.subtitle}</p>
        </div>
        <div className="empty-roster">
          <p>{m.note}</p>
          <a className="btn ghost" href="#rejoindre">
            {dict.hero.joinBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
