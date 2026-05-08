export default function BeforeAfterSection() {
  return (
    <section className="seccion-blanca">
      <div className="container">
        <div className="cabecera">
          <div className="subtitulo">Puesta a punto</div>
          <h2>Si el agua ya está mal, no hablamos de mantenimiento. Hablamos de rescate.</h2>
          <p>
            La recuperación de agua verde, la puesta a punto inicial y los
            tratamientos extraordinarios se valoran aparte. Mejor prevenir que llegar
            a ese punto en plena temporada.
          </p>
        </div>

        <div className="antes-despues-grid">
          <article className="antes-despues-card">
            <div className="estado-visual estado-visual-antes" aria-hidden="true">
              <div className="estado-visual-water" />
              <div className="estado-visual-leaf estado-visual-leaf-1" />
              <div className="estado-visual-leaf estado-visual-leaf-2" />
              <div className="estado-visual-leaf estado-visual-leaf-3" />
            </div>
            <div>
              <span className="antes-label">Antes</span>
              <h3>Agua verde o muy deteriorada</h3>
              <p>
                Cuando la piscina llega a este punto hace falta un tratamiento extra,
                más tiempo y más producto. No entra como mantenimiento normal.
              </p>
            </div>
          </article>

          <article className="antes-despues-card">
            <div className="estado-visual estado-visual-despues" aria-hidden="true">
              <div className="estado-visual-water" />
              <div className="estado-visual-glow" />
              <div className="estado-visual-ring" />
            </div>
            <div>
              <span className="despues-label">Después</span>
              <h3>Recuperar sale más caro que mantener</h3>
              <p>
                El objetivo de Piscinova es que no tengas que rescatar la piscina en
                agosto, sino mantenerla lista todo el verano.
              </p>
            </div>
          </article>
        </div>

        <div className="galeria-simple">
          <article className="foto-card">
            <div className="estado-visual estado-visual-riesgo" aria-hidden="true">
              <div className="estado-visual-water" />
              <div className="estado-visual-shadow" />
            </div>
            <div>
              <h3>El agua no avisa</h3>
              <p>
                Hojas, calor, cloro bajo, bañistas o una depuradora mal programada
                bastan para torcer la piscina justo cuando más quieres usarla.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
