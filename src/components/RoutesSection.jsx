export default function RoutesSection() {
  const items = [
    "Precios para piscina estándar",
    "Servicio organizado por rutas",
    "Plazas limitadas por zona",
    "Productos incluidos solo en consumo normal según plan",
    "Agua verde o piscina muy deteriorada: presupuesto aparte",
    "Averías, piezas, cambio de arena o vidrio: aparte",
    "Visitas fuera de ruta: según disponibilidad"
  ];

  return (
    <section className="oscuro">
      <div className="container oscuro-grid">
        <div>
          <div className="subtitulo subtitulo-claro">Rutas y condiciones</div>
          <h2>No aceptamos todas las piscinas. Trabajamos por zonas y con plazas limitadas.</h2>
          <p>
            Esto nos permite cumplir visitas, mantener una ruta ordenada y evitar el
            caos típico del verano. Si encajas en zona, te diremos el plan más sensato
            para tu caso.
          </p>
        </div>

        <aside className="oscuro-card">
          <div className="lista">
            {items.map((item) => (
              <div className="item-lista item-lista-oscura" key={item}>
                <span className="tick tick-oscuro">✓</span>
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
