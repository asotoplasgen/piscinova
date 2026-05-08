export default function ProblemSection() {
  const cards = [
    {
      icon: "Aviso",
      title: "El problema no es limpiar",
      text: "El problema es acordarte siempre, hacerlo bien y detectar a tiempo cuando algo empieza a fallar."
    },
    {
      icon: "Semana",
      title: "Cada semana cuenta",
      text: "Una visita periódica evita muchos disgustos y reduce el riesgo de acabar pagando una recuperación completa."
    },
    {
      icon: "Control",
      title: "Control y tranquilidad",
      text: "Sabes qué se ha hecho porque te mandamos un parte y queda registrado en tu zona privada."
    }
  ];

  return (
    <section>
      <div className="container">
        <div className="cabecera">
          <div className="subtitulo">La realidad</div>
          <h2>La piscina no avisa. Un día está bien. Al siguiente parece una charca.</h2>
          <p>
            Calor, hojas, lluvia, bañistas, cloro bajo, pH descontrolado o una
            depuradora mal programada. No hace falta mucho más para que el agua se
            tuerza justo cuando más la quieres usar.
          </p>
        </div>

        <div className="cards-3">
          {cards.map((card) => (
            <article className="card" key={card.title}>
              <div className="icono">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
