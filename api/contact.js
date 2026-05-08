export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const {
    name = "",
    phone = "",
    email = "",
    zone = "",
    poolType = "",
    planInterest = "",
    message = ""
  } = req.body || {};

  if (!name.trim() || !phone.trim()) {
    return res.status(400).json({
      ok: false,
      error: "Name and phone are required."
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL || "poolfecto@gmail.com";
  const fromEmail =
    process.env.FORM_FROM_EMAIL || "Piscinova Leads <onboarding@resend.dev>";

  if (!resendApiKey) {
    return res.status(500).json({
      ok: false,
      error: "Missing RESEND_API_KEY in environment variables."
    });
  }

  const subject = `Nuevo lead Piscinova - ${name.trim()}`;
  const safeLines = [
    `Nombre: ${name || "-"}`,
    `Telefono: ${phone || "-"}`,
    `Email: ${email || "-"}`,
    `Zona: ${zone || "-"}`,
    `Tipo de piscina: ${poolType || "-"}`,
    `Plan de interes: ${planInterest || "-"}`,
    "",
    "Mensaje:",
    message || "-"
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
      <h2>Nuevo lead desde Piscinova</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Telefono:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || "-")}</p>
      <p><strong>Zona:</strong> ${escapeHtml(zone || "-")}</p>
      <p><strong>Tipo de piscina:</strong> ${escapeHtml(poolType || "-")}</p>
      <p><strong>Plan de interes:</strong> ${escapeHtml(planInterest || "-")}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(message || "-").replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email || undefined,
        subject,
        html,
        text: safeLines.join("\n")
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const resendMessage = data?.message || "";

      if (
        resendMessage.includes("You can only send testing emails to your own email address") ||
        resendMessage.includes("please verify a domain")
      ) {
        return res.status(500).json({
          ok: false,
          error:
            "El formulario ya está conectado, pero Resend sigue en modo de pruebas. Para enviar a poolfecto@gmail.com hay que verificar un dominio en Resend y usar ese dominio como remitente."
        });
      }

      return res.status(500).json({
        ok: false,
        error: data?.message || "No se pudo enviar el email."
      });
    }

    return res.status(200).json({ ok: true, id: data.id });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
