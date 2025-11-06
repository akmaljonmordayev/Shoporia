import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

export const useGetOne = (endpoint, id, queryKey = ["item"]) => {
  const fetchData = async () => {
    const res = await axiosClient.get(`${endpoint}/${id}`);
    return res;
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [...queryKey, id],
    queryFn: fetchData,
    enabled: !!id,
  });

  return { data, isLoading, isError, refetch };
};
