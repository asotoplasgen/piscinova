export default function FaqSection() {
  const faqs = [
    {
      q: "¿Qué pasa si el agua ya está verde?",
      a: "No se considera mantenimiento normal. Hay que valorar una recuperación o puesta a punto inicial con presupuesto aparte."
    },
    {
      q: "¿Los productos están incluidos?",
      a: "Solo el consumo normal según el plan y el estado razonable de la piscina. Tratamientos extraordinarios van aparte."
    },
    {
      q: "¿Puedo contratar solo cuando vea que la piscina está mal?",
      a: "Puedes consultarlo, pero Piscinova está pensado para prevenir. Entrar solo en urgencia suele ser más caro e ineficiente."
    },
    {
      q: "¿Hace falta que yo esté en casa en cada visita?",
      a: "No siempre. Depende del acceso y del tipo de intervención. Lo importante es dejar claro el sistema de entrada desde el principio."
    },
    {
      q: "¿Qué se ve exactamente en la zona privada?",
      a: "Controles, observaciones, historial de visitas, incidencias detectadas, próximos mantenimientos y estado general de la piscina."
    }
  ];

  return (
    <section id="faq">
      <div className="container">
        <div className="cabecera">
          <div className="subtitulo">Dudas frecuentes</div>
          <h2>Lo importante para decidir sin rodeos</h2>
          <p>
            Si tu piscina necesita mantenimiento serio y quieres control visible,
            estas son las preguntas que suelen salir primero.
          </p>
        </div>

        <div className="faq-lista">
          {faqs.map((faq) => (
            <article className="faq" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
