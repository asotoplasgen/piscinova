import Logo from "./Logo";
import SmartImage from "./SmartImage";

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
              <a className="boton boton-blanco" href={primaryCta}>
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

            <div className="hero-resumen">
              <div className="hero-kpi">
                <strong>3 planes claros</strong>
                <span>Desde guiado hasta semanal</span>
              </div>
              <div className="hero-kpi">
                <strong>Zona privada</strong>
                <span>Controles y visitas visibles</span>
              </div>
              <div className="hero-kpi">
                <strong>Ruta limitada</strong>
                <span>Menos promesas y más orden</span>
              </div>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-card-top">
              <span className="hero-card-tag">Piscinova Summer</span>
              <span className="hero-card-note">Servicio particular</span>
            </div>

            <div className="hero-foto">
              <SmartImage
                src="https://unsplash.com/photos/zcQFERnpYxk/download?force=true"
                alt="Piscina privada limpia con agua azul"
                placeholderTitle="Piscina limpia hero"
                loading="eager"
              />
              <span className="foto-chip">Piscina lista todo el verano</span>
            </div>
            <div className="subtitulo">Planes de verano</div>
            <h2>Elige cuánto quieres implicarte</h2>
            <p className="gris hero-side-copy">
              Desde seguimiento online hasta mantenimiento semanal completo. Tú
              decides cuánto quieres ocuparte de la piscina.
            </p>

            <div className="precio-box">
              <div className="precio-label">Plan recomendado: Piscinova Relax</div>
              <div className="precio">
                <strong>129€</strong>
                <span>/ mes</span>
              </div>
              <p className="pequeno">
                Mantenimiento semanal presencial - piscina estándar
              </p>
            </div>

            <div className="lista">
              <div className="item-lista">
                <span className="tick">✓</span>
                Piscinova Guía: 39€/mes
              </div>
              <div className="item-lista">
                <span className="tick">✓</span>
                Piscinova Punto: 89€/mes
              </div>
              <div className="item-lista">
                <span className="tick">✓</span>
                Piscinova Relax: 129€/mes
              </div>
              <div className="item-lista">
                <span className="tick">✓</span>
                Zona privada incluida según plan
              </div>
              <div className="item-lista">
                <span className="tick">✓</span>
                Consulta por WhatsApp antes de contratar
              </div>
            </div>

            <p className="pequeno hero-credit">Foto: Alex Tyson en Unsplash</p>
          </aside>
        </div>
      </div>
    </header>
  );
}
