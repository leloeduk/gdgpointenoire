export default function About({ dict }) {
  const a = dict.about;
  return (
    <section id="apropos">
      <div className="container">
        <div className="title">
          <h2>{a.title}</h2>
          <p>{a.subtitle}</p>
        </div>
        <div className="cards">
          {a.cards.map((card) => (
            <div className="card" key={card.title}>
              <div className="ico" style={{ background: card.bg }}>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
