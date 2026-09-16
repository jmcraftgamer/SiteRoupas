export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Vestido Midi Floral",
    category: "Feminino",
    price: "R$ 00,00",
    image: "/assets/women/look-01.png",
  },
  {
    id: 2,
    name: "Camisa Social Slim Fit",
    category: "Masculino",
    price: "R$ 00,00",
    image: "/assets/men/look-01.png",
  },
  {
    id: 3,
    name: "Bolsa Tote Couro",
    category: "Acessórios",
    price: "R$ 00,00",
    image: "/assets/accessories/accessories-01.png",
  },
  {
    id: 4,
    name: "Conjunto Feminino",
    category: "Feminino",
    price: "R$ 00,00",
    image: "/assets/women/look-01.png",
  },
];

export const newArrivals: Product[] = [
  {
    id: 5,
    name: "Blusa Cropped Oversized",
    category: "Feminino",
    price: "R$ 00,00",
    image: "/assets/women/look-01.png",
    isNew: true,
  },
  {
    id: 6,
    name: "Calça Jeans Wide Leg",
    category: "Feminino",
    price: "R$ 00,00",
    image: "/assets/men/look-01.png",
    isNew: true,
  },
  {
    id: 7,
    name: "Polo Premium",
    category: "Masculino",
    price: "R$ 00,00",
    image: "/assets/men/look-01.png",
    isNew: true,
  },
  {
    id: 8,
    name: "Bermuda Cargo",
    category: "Masculino",
    price: "R$ 00,00",
    image: "/assets/women/look-01.png",
    isNew: true,
  },
];

export const womenProducts: Product[] = [
  {
    id: 11,
    name: "Vestido Longo Festa",
    category: "Feminino",
    price: "R$ 00,00",
    image: "/assets/women/look-01.png",
  },
  {
    id: 12,
    name: "Conjunto Palazzo",
    category: "Feminino",
    price: "R$ 00,00",
    image: "/assets/women/look-01.png",
  },
  {
    id: 13,
    name: "Saia Midi Cintura Alta",
    category: "Feminino",
    price: "R$ 00,00",
    image: "/assets/women/look-01.png",
  },
];

export const menProducts: Product[] = [
  {
    id: 21,
    name: "Camisa Linho Premium",
    category: "Masculino",
    price: "R$ 00,00",
    image: "/assets/men/look-01.png",
  },
  {
    id: 22,
    name: "Calça Alfaiataria",
    category: "Masculino",
    price: "R$ 00,00",
    image: "/assets/men/look-01.png",
  },
  {
    id: 23,
    name: "Moletom Urban Fit",
    category: "Masculino",
    price: "R$ 00,00",
    image: "/assets/men/look-01.png",
  },
];
