export const WHATSAPP = {
  primary: {
    display: "317 753 6025",
    href: "https://wa.me/573177536025?text=Hola%2C%20quiero%20info%20de%20Inspira%20Impro%20Fest%202",
  },
  jeff: {
    display: "314 402 7704",
    href: "https://wa.me/573144027704?text=Hola%2C%20quiero%20info%20del%20taller%20People%20you%20know",
  },
} as const;

export const SHOWS = [
  {
    day: "Domingo 11",
    title: "Maestro",
    subtitle: "PreFestival",
    tone: "navy" as const,
  },
  {
    day: "Miércoles 14",
    title: "Ensamble Inspira",
    subtitle: "Apertura del festival",
    tone: "teal" as const,
  },
  {
    day: "Jueves 15",
    title: "Directors Cut",
    subtitle: "Función de festival",
    tone: "gold" as const,
  },
  {
    day: "Viernes 16",
    title: "Momentos de la vida",
    subtitle: "Función de festival",
    tone: "cream" as const,
  },
  {
    day: "Sábado 17",
    title: "The Reunion",
    subtitle: "Formato dirigido en vivo por Jeff Gladstone",
    tone: "purple" as const,
  },
] as const;
