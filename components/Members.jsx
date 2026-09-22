export default function Members({ dict }) {
  const m = dict.members;
  return (
    <section id="membres">
      <div className="container">
        <div className="title">
          <h2>{m.title}</h2>
          <p>{m.subtitle}</p>
        </div>
        <p className="note">{m.note}</p>
      </div>
    </section>
  );
}
