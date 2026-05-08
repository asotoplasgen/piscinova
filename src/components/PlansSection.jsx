export default function PlansSection({ plans }) {
  const comparisonRows = [
    ["Zona privada", "Sí", "Sí", "Sí"],
    ["Soporte por WhatsApp", "Sí", "Sí", "Sí"],
    ["Registro de controles", "Cliente", "Piscinova", "Piscinova"],
    ["Visita presencial", "No", "Cada 15 días", "Semanal"],
    ["Control de agua", "Guiado", "Básico", "Completo"],
    ["Limpieza", "No incluida", "Parcial", "Semanal"],
    ["Despreocupación", "Baja", "Media", "Alta"]
  ];

  return (
    <section className="planes" id="planes">
      <div className="container">
        <div className="cabecera">
          <div className="subtitulo">Planes Piscinova</div>
          <h2>Elige si quieres hacerlo tú, apoyarte un poco o olvidarte del tema</h2>
          <p>
            Los tres planes comparten una misma idea: controlar la piscina antes de
            que aparezcan problemas caros.
          </p>
        </div>

        <div className="planes-grid">
          {plans.map((plan) => (
            <article className={`plan ${plan.cardClassName}`} key={plan.name}>
              {plan.recommended ? <span className="recomendado">Recomendado</span> : null}
              <div className="plan-cabecera">
                <span className="badge-plan">{plan.badge}</span>
                <div className="tipo-plan">{plan.type}</div>
                <h3>{plan.name}</h3>
                <p className="plan-sub">{plan.subtitle}</p>
              </div>

              <div className="plan-inner">
                <div className="precio-plan">
                  <strong>{plan.price}</strong>
                  <span>{plan.frequency}</span>
                </div>

                <p className="descripcion-plan">{plan.description}</p>

                <div className="ideal-para">
                  <strong>Ideal para</strong>
                  {plan.ideal}
                </div>

                <div className="nivel">
                  <div className="nivel-label">
                    <span>Nivel de despreocupación</span>
                    <span>{plan.level}</span>
                  </div>
                  <div className="nivel-barra">
                    <div className="nivel-relleno" style={{ width: `${plan.levelValue}%` }} />
                  </div>
                </div>

                <div className="lista lista-plan">
                  {plan.features.map((feature) => (
                    <div className="item-lista" key={feature}>
                      <span className="tick">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a className={plan.buttonClassName} href="#contacto">
                  {plan.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="comparativa">
          <div className="comparativa-head">
            <div>
              <h3>Comparativa rápida</h3>
              <p className="gris">Vista resumida para decidir sin leer todo el detalle.</p>
            </div>
            <p className="pequeno">
              Puesta a punto, agua verde, averías, piezas y visitas fuera de ruta se
              valoran aparte.
            </p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Guía</th>
                <th>Punto</th>
                <th>Relax</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([label, a, b, c]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{a}</td>
                  <td>{b}</td>
                  <td>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="nota-plan pequeno">
          Si el agua ya está verde, no hablamos de mantenimiento. Hablamos de rescate
          y presupuesto aparte.
        </div>
      </div>
    </section>
  );
}
