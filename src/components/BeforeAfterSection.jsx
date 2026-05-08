import SmartImage from "./SmartImage";

export default function BeforeAfterSection() {
  return (
    <section className="seccion-blanca">
      <div className="container">
        <div className="cabecera">
          <div className="subtitulo">Mantenimiento real</div>
          <h2>No hace falta esperar a una emergencia para que una piscina dé trabajo.</h2>
          <p>
            Mejor enseñar cuidado real, limpieza y seguimiento que vender una idea
            abstracta. Esto se entiende más rápido y transmite oficio.
          </p>
        </div>

        <div className="antes-despues-grid">
          <article className="antes-despues-card">
            <SmartImage
              src="https://unsplash.com/photos/cC7Ko9jr3aY/download?force=true"
              alt="Operario realizando mantenimiento en una piscina"
              placeholderTitle="Mantenimiento piscina"
              loading="lazy"
            />
            <div>
              <span className="antes-label">Mantenimiento</span>
              <h3>Control y limpieza de verdad</h3>
              <p>
                La piscina no se conserva sola. Lo que más vende aquí es mostrar que
                hay trabajo real detrás: revisión, limpieza y rutina.
              </p>
            </div>
          </article>

          <article className="antes-despues-card">
            <SmartImage
              src="https://unsplash.com/photos/IEvt175Ndwo/download?force=true"
              alt="Limpieza manual de piscina con recogehojas"
              placeholderTitle="Limpieza piscina"
              loading="lazy"
            />
            <div>
              <span className="despues-label">Seguimiento</span>
              <h3>Piscina lista para usarla, no para rescatarla</h3>
              <p>
                El objetivo no es una gran recuperación en agosto. El objetivo es no
                tener que llegar a ese punto en plena temporada.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
