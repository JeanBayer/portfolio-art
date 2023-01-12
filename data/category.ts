export const CATEGORY: Category[] = [
  {
    id: 1,
    name: "All",
    type: "paints",
  },
  {
    id: 2,
    name: "Oil",
    type: "paints",
  },
  {
    id: 3,
    name: "Acrylic",
    type: "paints",
  },
  {
    id: 4,
    name: "Watercolor",
    type: "paints",
  },
  {
    id: 4,
    name: "Watercolor",
    type: "paints",
  },
  {
    id: 5,
    name: "other",
    type: "accesories",
  },
  {
    id: 5,
    name: "other",
    type: "blog",
  },
];

export type Category = {
  id: number;
  name: string;
  type: string;
};
