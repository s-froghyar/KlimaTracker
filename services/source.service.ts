import SearchDto from "../interfaces/search_dto";

export async function searchForFactor(
  query: string
): Promise<{ data: SearchDto }> {
  const res: Response = await fetch(`api/emission_factor?query=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data as { data: SearchDto };
}
