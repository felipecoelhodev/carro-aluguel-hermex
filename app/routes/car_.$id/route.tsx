import type { LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  if (!id) {
    throw new Response("ID não fornecido", { status: 400 });
  }

  try {
    const car = await api.getCarById(id);
    return car;
  } catch (error) {
    throw new Response("Carro não encontrado", { status: 404 });
  }
}

export default function CarDetailRoute({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Carro Detalhe: {params.id}</h1>
    </div>
  );
}
