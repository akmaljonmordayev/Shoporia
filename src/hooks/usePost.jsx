import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

export const usePost = (endpoint, invalidateKey = ["data"]) => {
  const queryClient = useQueryClient();

  const mutationFn = async (body) => {
    const res = await axiosClient.post(endpoint, body);
    return res;
  };

  const {
    mutate,
    data,
    isPending: isLoading,
    isError,
  } = useMutation({
    mutationFn: mutationFn,
    onSuccess: () => queryClient.invalidateQueries(invalidateKey),
  });

  return { mutate, data, isLoading, isError };
};
