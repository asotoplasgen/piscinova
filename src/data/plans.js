export const plans = [
  {
    name: "Piscinova Guía",
    type: "Plan Online",
    price: "39€",
    frequency: "/mes",
    badge: "Para hacerlo tú",
    subtitle: "Tú haces el trabajo. Nosotros te guiamos.",
    description:
      "Para quien quiere mantener la piscina por su cuenta, pero con seguimiento y criterio profesional.",
    ideal:
      "Propietarios que viven en la casa y no les importa hacer parte del mantenimiento.",
    level: "Baja",
    levelValue: 35,
    ctaLabel: "Quiero este plan",
    cardClassName: "plan-online",
    buttonClassName: "boton boton-outline boton-online",
    features: [
      "Acceso a zona privada",
      "Registro de controles por el cliente",
      "Recomendaciones de mantenimiento",
      "Soporte por WhatsApp",
      "Sin visita presencial incluida"
    ]
  },
  {
    name: "Piscinova Punto",
    type: "Plan Quincenal",
    price: "89€",
    frequency: "/mes",
    badge: "Apoyo presencial",
    subtitle: "Una revisión cada 15 días para no ir a ciegas.",
    description:
      "Para piscinas pequeñas o clientes que hacen parte del mantenimiento, pero quieren una revisión presencial periódica.",
    ideal:
      "Piscinas pequeñas o clientes que hacen mantenimiento básico entre visitas.",
    level: "Media",
    levelValue: 65,
    ctaLabel: "Consultar este plan",
    cardClassName: "plan-punto",
    buttonClassName: "boton boton-outline boton-punto",
    features: [
      "1 visita cada 15 días",
      "Control básico de pH y cloro",
      "Revisión de depuradora",
      "Parte por WhatsApp",
      "Registro en zona privada"
    ]
  },
  {
    name: "Piscinova Relax",
    type: "Plan Semanal",
    price: "129€",
    frequency: "/mes",
    badge: "Para olvidarte",
    recommended: true,
    subtitle: "La opción para abrir la puerta y bañarte.",
    description:
      "Para quien quiere olvidarse del mantenimiento semanal y tener la piscina controlada durante todo el verano.",
    ideal:
      "Segundas residencias, familias y propietarios que no quieren estar pendientes.",
    level: "Alta",
    levelValue: 100,
    ctaLabel: "Reservar prioridad",
    cardClassName: "plan-relax",
    buttonClassName: "boton boton-azul",
    features: [
      "1 visita semanal programada",
      "Control de pH y cloro",
      "Limpieza de superficie, skimmers y cestos",
      "Revisión de bomba y filtro",
      "Parte por WhatsApp y zona privada"
    ]
  }
];
