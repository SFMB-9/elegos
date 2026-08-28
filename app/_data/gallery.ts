export type ArtworkKind =
  | "plant"
  | "triangle"
  | "flame-eye"
  | "gem"
  | "spiral"
  | "peak";

export interface Artist {
  id: string;
  name: string;
}

export interface Piece {
  id: string;
  title: string;
  artistId: string;
  year: number;
  medium: string;
  description: string;
  art: ArtworkKind;
  aspect: number;
  /** Image URL used for both the walk-view preview and the detail zoom viewer */
  iiif?: string;
  /** Display size bucket — "sm" | "md" | "lg" | "xl" */
  size?: string;
  /** Frame style key — "gold" | "dark-wood" | "white" */
  frame?: string;
}

export const site = {
  name: "élegos",
  tagline: "Un recorrido por la galería, obra por obra.",
};

export const artists: Artist[] = [
  { id: "vermeer", name: "Johannes Vermeer" },
  { id: "van-gogh", name: "Vincent van Gogh" },
  { id: "hokusai", name: "Katsushika Hokusai" },
  { id: "klimt", name: "Gustav Klimt" },
  { id: "monet", name: "Claude Monet" },
  { id: "velazquez", name: "Diego Velázquez" },
  { id: "friedrich", name: "Caspar David Friedrich" },
];

export const pieces: Piece[] = [
  {
    id: "p1",
    title: "La joven de la perla",
    artistId: "vermeer",
    year: 1665,
    medium: "Óleo sobre lienzo",
    description:
      "Una presencia capturada en el instante de girar. La perla no es un adorno: es un punto de luz que existe solo para el ojo que la mira.",
    art: "gem",
    aspect: 0.88,
    iiif: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    size: "sm",
    frame: "gold",
  },
  {
    id: "p2",
    title: "La noche estrellada",
    artistId: "van-gogh",
    year: 1889,
    medium: "Óleo sobre lienzo",
    description:
      "El cielo que Van Gogh pintó desde su habitación en Saint-Rémy, cargado de movimiento como si el universo entero respirara.",
    art: "spiral",
    aspect: 1.25,
    iiif: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    size: "md",
    frame: "dark-wood",
  },
  {
    id: "p3",
    title: "La gran ola de Kanagawa",
    artistId: "hokusai",
    year: 1831,
    medium: "Xilografía en color",
    description:
      "El agua como montaña. El monte Fuji, sereno al fondo, reducido a testigo de lo que el mar puede llegar a ser.",
    art: "peak",
    aspect: 1.5,
    iiif: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    size: "sm",
    frame: "white",
  },
  {
    id: "p4",
    title: "El beso",
    artistId: "klimt",
    year: 1908,
    medium: "Óleo y hoja de oro sobre lienzo",
    description:
      "Dos figuras que se disuelven en oro. No hay rostros que importan — solo el abrazo, convertido en ornamento eterno.",
    art: "plant",
    aspect: 1.0,
    iiif: "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    size: "lg",
    frame: "gold",
  },
  {
    id: "p5",
    title: "Ninfeas",
    artistId: "monet",
    year: 1906,
    medium: "Óleo sobre lienzo",
    description:
      "Un estanque pintado tantas veces que el motivo desapareció. Lo que queda es la luz sobre el agua, y la sombra debajo.",
    art: "spiral",
    aspect: 1.03,
    iiif: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    size: "md",
    frame: "white",
  },
  {
    id: "p6",
    title: "Las meninas",
    artistId: "velazquez",
    year: 1656,
    medium: "Óleo sobre lienzo",
    description:
      "El pintor dentro del cuadro. La infanta, los enanos, el espejo al fondo — y nosotros, que somos los que él está retratando.",
    art: "flame-eye",
    aspect: 0.87,
    iiif: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Velazquez-Meninas.jpg",
    size: "xl",
    frame: "dark-wood",
  },
  {
    id: "p7",
    title: "El caminante sobre el mar de niebla",
    artistId: "friedrich",
    year: 1818,
    medium: "Óleo sobre lienzo",
    description:
      "Una figura de espaldas que contempla lo que nosotros también vemos. Lo sublime no es el paisaje: es el gesto de mirarlo.",
    art: "peak",
    aspect: 0.79,
    iiif: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/1280px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
    size: "md",
    frame: "dark-wood",
  },
];

export function artistName(artistId: string): string {
  return artists.find((a) => a.id === artistId)?.name ?? "Artista desconocido";
}
