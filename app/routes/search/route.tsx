import type { LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";

  try {
    const cars = await api.getCars();
    const filteredCars = query
      ? cars.filter((car) => {
          const searchTerm = query.toLowerCase();

          return (
            car.title.toLowerCase().includes(searchTerm) ||
            car.shortTitle.toLowerCase().includes(searchTerm) ||
            car.description.toLowerCase().includes(searchTerm) ||
            car.features?.some((feature) =>
              feature.toLowerCase().includes(searchTerm),
            )
          );
        })
      : cars;

    return { cars: filteredCars, query };
  } catch (error) {
    throw new Response("Erro ao buscar veículos", { status: 500 });
  }
}

export default function SearchRoute() {
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
