export interface Category {
  id: string;
  name: string;
  href: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "feminino",
    name: "Feminino",
    href: "#feminino",
    image: "/assets/women/category.png",
  },
  {
    id: "masculino",
    name: "Masculino",
    href: "#masculino",
    image: "/assets/men/category.png",
  },
];
