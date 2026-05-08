import SmartImage from "./SmartImage";

export default function GoalSection() {
  return (
    <section className="bloque-imagen">
      <div className="container">
        <div className="imagen-ancha">
          <SmartImage
            src="https://unsplash.com/photos/w0thzk68I80/download?force=true"
            alt="Zona exterior con piscina residencial cuidada"
            placeholderTitle="Piscina limpia principal"
            loading="lazy"
          />
          <div className="imagen-copy">
            <div className="subtitulo subtitulo-claro">El objetivo</div>
            <h2>Que la piscina parezca preparada incluso cuando tú no has tocado nada.</h2>
            <p>
              Agua clara, controles registrados y una rutina de mantenimiento que
              evita sustos justo cuando quieres usarla.
            </p>
            <p className="imagen-credit">Foto: Jonathan Borba en Unsplash</p>
          </div>
        </div>
      </div>
    </section>
  );
}
