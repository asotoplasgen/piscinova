export default function FinalCta({ whatsappLink }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-shell">
          <div className="subtitulo subtitulo-claro">Cierre de verano</div>
          <h2>Este verano puedes cuidar la piscina tú o puedes bañarte en ella.</h2>
          <p>
            Si quieres saber qué plan encaja contigo y si estamos cubriendo tu zona,
            escríbenos por WhatsApp o deja tu solicitud en el formulario.
          </p>
          <div className="acciones acciones-centradas">
            <a
              className="boton boton-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Hablar por WhatsApp
            </a>
            <a className="boton boton-transparente" href="#contacto">
              Rellenar formulario
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
