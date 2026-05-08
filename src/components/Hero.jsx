import Logo from "./Logo";

export default function Hero({ primaryCta, secondaryCta }) {
  return (
    <header className="hero" id="inicio">
      <div className="container">
        <nav className="nav">
          <a href="#inicio" className="marca" aria-label="Piscinova">
            <Logo />
          </a>

          <div className="menu">
            <a href="#servicio">Servicio</a>
            <a href="#planes">Planes</a>
            <a href="#zona-privada">Zona privada</a>
            <a href="#faq">Dudas</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <div className="etiqueta">Plazas limitadas por zona este verano</div>
            <h1>No esperes a que tu piscina se ponga verde para llamar a alguien</h1>
            <p className="hero-texto">
              Piscinova mantiene tu piscina limpia, controlada y lista. Sin perseguir
              al de siempre. Sin perder sábados con el limpiafondos. Sin sustos cuando
              quieres bañarte.
            </p>

            <div className="hero-box">
              <strong>Control del agua. Limpieza. Revisión de depuradora.</strong>
              <span>
                Parte por WhatsApp y acceso a tu zona privada para ver controles,
                visitas y mantenimientos.
              </span>
            </div>

            <div className="acciones">
              <a
                className="boton boton-whatsapp"
                href={primaryCta}
                target="_blank"
                rel="noreferrer"
              >
                Consultar disponibilidad
              </a>
              <a className="boton boton-transparente" href={secondaryCta}>
                Ver planes
              </a>
            </div>

            <div className="pruebas">
              <div className="prueba">
                <span className="check-mini">✓</span>
                Piscinova Guía
              </div>
              <div className="prueba">
                <span className="check-mini">✓</span>
                Piscinova Punto
              </div>
              <div className="prueba">
                <span className="check-mini">✓</span>
                Piscinova Relax
              </div>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-card-top">
              <span className="hero-card-tag">Piscinova Summer</span>
              <span className="hero-card-note">Servicio particular</span>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-sun" />
              <div className="hero-visual-water" />
              <div className="hero-visual-wave hero-visual-wave-1" />
              <div className="hero-visual-wave hero-visual-wave-2" />
              <div className="hero-visual-float" />
              <div className="hero-visual-chip">Piscina lista todo el verano</div>
            </div>

            <div className="subtitulo">Plan recomendado</div>
            <h2>Piscinova Relax</h2>
            <p className="gris hero-side-copy">
              La opción para olvidarte del mantenimiento semanal y tener la piscina
              preparada cada vez que llegas.
            </p>

            <div className="precio-box">
              <div className="precio-label">Mantenimiento semanal presencial</div>
              <div className="precio">
                <strong>129€</strong>
                <span>/ mes</span>
              </div>
              <p className="pequeno">Precio orientativo para piscina estándar</p>
            </div>

            <div className="lista">
              <div className="item-lista">
                <span className="tick">✓</span>
                1 visita semanal programada
              </div>
              <div className="item-lista">
                <span className="tick">✓</span>
                Control de pH y cloro
              </div>
              <div className="item-lista">
                <span className="tick">✓</span>
                Limpieza de superficie, skimmers y cestos
              </div>
              <div className="item-lista">
                <span className="tick">✓</span>
                Parte por WhatsApp y zona privada
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}
