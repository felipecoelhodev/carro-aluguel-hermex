import type { LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  if (!id) {
    throw new Response("ID não fornecido", { status: 400 });
  }

  try {
    const [category, cars] = await Promise.all([
      api.getCategoryById(id),
      api.getCarsByCategory(id),
    ]);

    return { category, cars };
  } catch (error) {
    throw new Response("Categoria não encontrada", { status: 404 });
  }
}

export default function CategoriesDetailRoute({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Categorias Detalhe: {params.id}</h1>
    </div>
  );
}
