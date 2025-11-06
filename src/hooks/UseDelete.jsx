import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

export const useDelete = (endpoint, invalidateKey = ["data"]) => {
  const queryClient = useQueryClient();

  const mutationFn = async (id) => {
    const res = await axiosClient.delete(`${endpoint}/${id}`);
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
