export default function ServiceSection() {
  const included = [
    "Control de pH y cloro",
    "Limpieza según plan",
    "Revisión de depuradora",
    "Soporte por WhatsApp",
    "Zona privada del cliente",
    "Registro de mantenimientos",
    "Historial de visitas",
    "Aviso de incidencias"
  ];

  return (
    <section className="seccion-blanca" id="servicio">
      <div className="container split">
        <div>
          <div className="subtitulo">Qué contratas</div>
          <h2>
            No vendemos echar cloro. Vendemos que la piscina esté lista y que sepas
            qué se ha hecho.
          </h2>
          <p>
            Si solo quieres que alguien aparezca cuando el agua ya está mal,
            probablemente esto no sea para ti. Si quieres controlar el mantenimiento
            antes de que haya problemas, sí.
          </p>

          <div className="incluidos">
            {included.map((item) => (
              <div className="incluido" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <aside className="precio-card">
          <h3 className="precio-card-title">Tres formas de tener la piscina bajo control</h3>
          <p className="gris precio-card-text">
            No todos los propietarios necesitan lo mismo. Por eso Piscinova se
            organiza en tres niveles: guía, apoyo presencial y mantenimiento
            semanal.
          </p>
          <div className="lista precio-card-list">
            <div className="item-lista">
              <span className="tick">✓</span>
              Control visible, no solo promesas
            </div>
            <div className="item-lista">
              <span className="tick">✓</span>
              Parte por WhatsApp después de cada actuación
            </div>
            <div className="item-lista">
              <span className="tick">✓</span>
              Seguimiento de incidencias y próximos mantenimientos
            </div>
            <div className="item-lista">
              <span className="tick">✓</span>
              Precios orientados a piscina estándar y rutas activas
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
