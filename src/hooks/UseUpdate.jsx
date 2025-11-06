import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

export const useUpdate = (endpoint, invalidateKey = ["data"]) => {
  const queryClient = useQueryClient();

  const mutationFn = async ({ id, body }) => {
    const res = await axiosClient.put(`${endpoint}/${id}`, body);
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
