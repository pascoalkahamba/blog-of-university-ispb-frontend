import { useQuery } from "@tanstack/react-query";

export default function useGetEverything<K>(
  queryFunction: () => Promise<K>,
  queryKey: string
) {
  // const userId = JSON.parse(localStorage.getItem("userId") as string) as number;
  const query = useQuery({
    queryKey: [queryKey],
    queryFn: () => queryFunction(),
  });

  return { ...query };
}
