export const siteUrl = "https://piscinova.vercel.app";
export const businessName = "Piscinova";
export const defaultWhatsappNumber = "34600000000";

export const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER || defaultWhatsappNumber;

export function buildWhatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const heroWhatsappMessage =
  "Hola, quiero saber qué plan de Piscinova me recomendáis para mi piscina.";

export const finalWhatsappMessage =
  "Hola, quiero consultar disponibilidad y saber si cubrís mi zona con Piscinova.";

export const serviceArea = "Piscinova presta servicio por rutas y zonas limitadas.";
