import type { LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api.server";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const [categories, cars] = await Promise.all([
      api.getCategory(),
      api.getCars(),
    ]);

    const categoriesWithCarCount = categories.map((category) => ({
      ...category,
      cartCount: cars.filter((car) => car.categoryId === category.id),
    }));

    return categoriesWithCarCount;
  } catch (error) {
    throw new Response("Erro ao buscar categorias", { status: 500 });
  }
}

export default function CategoriesRoute() {
  return (
    <div>
      <h1>Categorias</h1>
    </div>
  );
}
