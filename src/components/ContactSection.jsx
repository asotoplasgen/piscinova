import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  zone: "",
  poolType: "",
  planInterest: "",
  message: ""
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "No se pudo enviar el formulario.");
      }

      setStatus({
        type: "success",
        message: "Perfecto. Hemos recibido tu solicitud y te contactaremos pronto."
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ha habido un problema al enviar el formulario."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <section className="contacto" id="contacto">
      <div className="container contacto-grid">
        <div>
          <div className="subtitulo">Formulario</div>
          <h2>Cuéntanos tu piscina y te decimos qué plan encaja mejor.</h2>
          <p className="contacto-copy">
            Si prefieres dejar una solicitud rápida en vez de escribir por WhatsApp,
            rellena este formulario. Revisamos cada consulta y te contactamos cuanto
            antes.
          </p>

          <div className="contacto-puntos">
            <div className="contacto-punto">Respuesta directa con orientación inicial</div>
            <div className="contacto-punto">Útil para segundas residencias y zonas</div>
            <div className="contacto-punto">Ideal si aún no sabes qué plan pedir</div>
          </div>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="campo-grid">
            <label className="campo">
              <span>Nombre</span>
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Tu nombre"
                required
              />
            </label>

            <label className="campo">
              <span>Teléfono</span>
              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="Tu teléfono"
                required
              />
            </label>
          </div>

          <div className="campo-grid">
            <label className="campo">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                placeholder="Tu email"
              />
            </label>

            <label className="campo">
              <span>Zona</span>
              <input
                name="zone"
                value={form.zone}
                onChange={updateField}
                placeholder="Urbanización, pueblo o zona"
              />
            </label>
          </div>

          <div className="campo-grid">
            <label className="campo">
              <span>Tipo de piscina</span>
              <select name="poolType" value={form.poolType} onChange={updateField}>
                <option value="">Selecciona una opción</option>
                <option value="Piscina particular mediana">Piscina particular mediana</option>
                <option value="Piscina pequeña">Piscina pequeña</option>
                <option value="Segunda residencia">Segunda residencia</option>
                <option value="No estoy seguro">No estoy seguro</option>
              </select>
            </label>

            <label className="campo">
              <span>Plan de interés</span>
              <select name="planInterest" value={form.planInterest} onChange={updateField}>
                <option value="">Selecciona una opción</option>
                <option value="Piscinova Guía">Piscinova Guía</option>
                <option value="Piscinova Punto">Piscinova Punto</option>
                <option value="Piscinova Relax">Piscinova Relax</option>
                <option value="Necesito recomendación">Necesito recomendación</option>
              </select>
            </label>
          </div>

          <label className="campo">
            <span>Mensaje</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="5"
              placeholder="Cuéntanos el tamaño aproximado, si es segunda residencia, si el agua está bien o si quieres que valoremos la puesta a punto."
            />
          </label>

          <button className="boton boton-azul" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar solicitud"}
          </button>

          {status.type !== "idle" ? (
            <p className={`form-status form-status-${status.type}`}>{status.message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
