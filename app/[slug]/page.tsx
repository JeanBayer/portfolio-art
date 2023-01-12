const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/category/${slug}`);
  const data = await res.json();
  console.log(data);
  return data;
};

import { Category } from "../../data";

export default async function Paints({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const categories: Category[] = await getData(slug);
  return (
    <main>
      Paints{" "}
      <div>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <h1>{category.name}</h1>
              <p>{category.type}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
