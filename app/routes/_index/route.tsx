import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api.server";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const cars = await api.getCars();
    return cars.slice(0, 6);
  } catch (error) {
    throw new Response("Erro ao buscar veículos", { status: 500 });
  }
}

export default function IndexRoute() {
  const cars = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Index Route</h1>
      {cars.map((car) => (
        <div key={car.id}>
          <h2>{car.title}</h2>
          <p>{car.description}</p>
        </div>
      ))}
    </div>
  );
}
