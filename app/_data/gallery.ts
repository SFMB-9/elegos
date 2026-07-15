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
}

export const site = {
  name: "VHN",
  tagline: "A walk through the gallery, one piece at a time.",
};

export const artists: Artist[] = [
  { id: "raul-lopez", name: "Raúl López" },
  { id: "mara-io", name: "Mara Io" },
  { id: "denis-vale", name: "Denis Vale" },
];

export const pieces: Piece[] = [
  {
    id: "p1",
    title: "Interior with Plant",
    artistId: "raul-lopez",
    year: 2023,
    medium: "Ink on paper",
    description:
      "A quiet still life, drawn in a single unbroken line before the leaves were filled in.",
    art: "plant",
    aspect: 0.8,
  },
  {
    id: "p2",
    title: "Ascension Study",
    artistId: "mara-io",
    year: 2024,
    medium: "Graphite and gouache",
    description:
      "Three peaks folded into one, radiating outward like a held breath.",
    art: "triangle",
    aspect: 1.1,
  },
  {
    id: "p3",
    title: "Watchful",
    artistId: "denis-vale",
    year: 2022,
    medium: "Charcoal on board",
    description:
      "An eye wrapped in fire — the artist's recurring figure for memory that won't sit still.",
    art: "flame-eye",
    aspect: 0.9,
  },
  {
    id: "p4",
    title: "Uncut",
    artistId: "raul-lopez",
    year: 2024,
    medium: "Colored pencil",
    description:
      "A gem rendered before it has a facet count, still deciding what it wants to reflect.",
    art: "gem",
    aspect: 0.75,
  },
  {
    id: "p5",
    title: "Return Path",
    artistId: "mara-io",
    year: 2021,
    medium: "Ink on paper",
    description:
      "A single spiral, drawn from the outside in, then never lifted from the page.",
    art: "spiral",
    aspect: 1,
  },
  {
    id: "p6",
    title: "Far Ridge",
    artistId: "denis-vale",
    year: 2023,
    medium: "Watercolor",
    description:
      "The mountain the artist grew up beside, painted from memory rather than reference.",
    art: "peak",
    aspect: 1.3,
  },
  {
    id: "p7",
    title: "Second Interior",
    artistId: "raul-lopez",
    year: 2025,
    medium: "Ink on paper",
    description:
      "A companion piece to the first room — the same plant, later in the season.",
    art: "plant",
    aspect: 0.85,
  },
];

export function artistName(artistId: string): string {
  return artists.find((a) => a.id === artistId)?.name ?? "Unknown artist";
}
