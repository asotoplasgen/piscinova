import SmartImage from "./SmartImage";

export default function GoalSection() {
  return (
    <section className="bloque-imagen">
      <div className="container">
        <div className="imagen-ancha">
          <SmartImage
            src="/assets/piscina-limpia-principal.jpg"
            alt="Piscina residencial cuidada y lista para bañarse"
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
          </div>
        </div>
      </div>
    </section>
  );
}
