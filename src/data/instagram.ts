export interface InstagramPost {
  id: number;
  image: string;
  alt: string;
  link: string;
}

const instagramBase = "https://www.instagram.com/loja_estilo__/";

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: "/assets/women/look-01.png",
    alt: "Estilo Modas - Post Instagram 01",
    link: instagramBase,
  },
  {
    id: 2,
    image: "/assets/men/look-01.png",
    alt: "Estilo Modas - Post Instagram 02",
    link: instagramBase,
  },
  {
    id: 3,
    image: "/assets/editorial/editorial-01.png",
    alt: "Estilo Modas - Post Instagram 03",
    link: instagramBase,
  },
  {
    id: 4,
    image: "/assets/editorial/editorial-02.png",
    alt: "Estilo Modas - Post Instagram 04",
    link: instagramBase,
  },
  {
    id: 5,
    image: "/assets/women/look-01.png",
    alt: "Estilo Modas - Post Instagram 05",
    link: instagramBase,
  },
  {
    id: 6,
    image: "/assets/men/look-01.png",
    alt: "Estilo Modas - Post Instagram 06",
    link: instagramBase,
  },
];
