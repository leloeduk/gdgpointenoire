export default function About({ dict }) {
  const a = dict.about;
  return (
    <section id="apropos">
      <div className="container">
        <div className="title">
          <h2>{a.title}</h2>
          <p>{a.subtitle}</p>
        </div>
        <div className="pillars">
          {a.cards.map((card, index) => (
            <article className={`pillar tone-${index}`} key={card.title}>
              <span className="pillar-index">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
