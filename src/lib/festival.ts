export const WHATSAPP = {
  primary: {
    display: "317 753 6025",
    href: "https://wa.me/573177536025?text=Hola%2C%20quiero%20info%20de%20Inspira%20Impro%20Fest%202",
  },
  jeff: {
    display: "314 402 7704",
    href: "https://wa.me/573144027704?text=Hola%2C%20quiero%20info%20del%20taller%20People%20you%20know",
  },
  tickets: {
    display: "320 992 3756",
    phone: "573209923756",
    href: "https://wa.me/573209923756?text=Hola%2C%20quiero%20comprar%20boletas%20para%20Inspira%20Impro%20Fest%202",
  },
} as const;

export const SOCIAL = [
  {
    name: "Proyecto Cocoloco",
    handle: "@proyectococoloco",
    href: "https://www.instagram.com/proyectococoloco/",
  },
  {
    name: "La Gata Cirko",
    handle: "@lagatacirko",
    href: "https://www.instagram.com/lagatacirko/",
  },
] as const;

export function ticketsHref(_show?: { title: string; day: string }) {
  return "/entradas";
}

export function ticketsWhatsAppHref(show?: { title: string; day: string }) {
  const text = show
    ? `Hola, quiero comprar boletas para ${show.title} (${show.day}) en Inspira Impro Fest 2`
    : "Hola, quiero comprar boletas para Inspira Impro Fest 2";

  return `https://wa.me/${WHATSAPP.tickets.phone}?text=${encodeURIComponent(text)}`;
}

export const GUESTS = [
  {
    name: "Jeff Gladstone",
    origin: "Canadá",
    role: "Intensivo People you know y dirección en vivo de The Reunion",
    image: "/brand/jeff.png",
    imageAlt: "Jeff Gladstone, invitado especial de Inspira Impro Fest 2",
  },
  {
    name: "Viviane Eggers",
    origin: "Hamburgo",
    role: "Dirige el taller montaje ¿Listos?",
    image: "/brand/listos-escena.png",
    imageAlt: "Viviane Eggers dirige el taller montaje ¿Listos?",
  },
] as const;

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
