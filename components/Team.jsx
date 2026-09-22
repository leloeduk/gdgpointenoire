import { bureau, poles } from "@/data/team";

function localize(field, lang) {
  if (field && typeof field === "object") return field[lang] || field.fr;
  return field;
}

function Person({ person, lang, assistLabel }) {
  const { initials, assist, color, open } = person;
  const name = localize(person.name, lang);
  const role = localize(person.role, lang);

  return (
    <div className={`person${open ? " open" : ""}`}>
      <div className={`avatar${color ? ` c-${color}` : ""}`}>
        {open ? "?" : initials}
      </div>
      <h3>{name}</h3>
      <div className="role">{role}</div>
      {assist && (
        <div className="assist">
          {assistLabel} : {assist}
        </div>
      )}
    </div>
  );
}

export default function Team({ dict, lang }) {
  const t = dict.team;
  return (
    <section id="equipe" className="alt">
      <div className="container">
        <div className="title">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="group-label">{t.bureauLabel}</div>
        <div className="grid">
          {bureau.map((person, i) => (
            <Person key={i} person={person} lang={lang} assistLabel={t.assistLabel} />
          ))}
        </div>

        <div className="group-label">{t.polesLabel}</div>
        <div className="grid">
          {poles.map((person, i) => (
            <Person key={i} person={person} lang={lang} assistLabel={t.assistLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
