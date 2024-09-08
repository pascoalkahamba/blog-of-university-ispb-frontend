import { useMutation, useQueryClient } from "@tanstack/react-query";

// interface UserMutationPostProps {
//   mutationFunction: (data: T) => Promise<K>;
// }

//  type a = Data["name"]
function set<T, K extends keyof T>(obj: T, prop: K, value: T[K]) {}

export function useCreateAccount<T, K>(
  mutationFunction: (value: T) => Promise<K>,
  notificationOnSuccess: () => void,
  notificationOnError: () => void,
  queryKey?: string
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (value: T) => mutationFunction(value),
    onSuccess: () => {
      queryClient.refetchQueries();
      notificationOnSuccess();
    },
    onError: () => notificationOnError(),
  });

  return { mutation };
}
