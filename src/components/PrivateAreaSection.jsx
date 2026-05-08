export default function PrivateAreaSection() {
  const items = [
    "Controles de pH y cloro",
    "Observaciones de cada visita",
    "Historial de mantenimientos",
    "Incidencias detectadas",
    "Próximos mantenimientos",
    "Estado general de la piscina"
  ];

  return (
    <section className="zona-privada" id="zona-privada">
      <div className="container split">
        <div>
          <div className="subtitulo">Zona privada</div>
          <h2>No tienes que fiarte de un “ya está hecho”. Puedes verlo.</h2>
          <p>
            La zona privada convierte el mantenimiento en algo visible. Tú sabes qué
            se revisó, cuándo se hizo y si hay algo que conviene corregir antes de que
            se convierta en un problema.
          </p>

          <div className="incluidos">
            {items.map((item) => (
              <div className="incluido" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <aside className="precio-card panel-privada">
          <div className="panel-mini">
            <span className="panel-tag">Último control</span>
            <strong>pH estable · cloro correcto</strong>
            <p>Registro guardado con observaciones y hora de la visita.</p>
          </div>
          <div className="panel-mini">
            <span className="panel-tag">Próximo mantenimiento</span>
            <strong>Programado en ruta</strong>
            <p>Tu piscina entra en planning y deja de depender del “ya pasaré”.</p>
          </div>
          <div className="panel-mini">
            <span className="panel-tag">Incidencias</span>
            <strong>Filtro, bomba o agua fuera de rango</strong>
            <p>Si hay algo raro, queda anotado para decidir antes y gastar menos.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
