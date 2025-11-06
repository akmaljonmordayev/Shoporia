import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

export const useGetAll = (endpoint, queryKey = ["data"]) => {
  const fetchData = async () => {
    const res = await axiosClient.get(endpoint);
    return res;
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey,
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, refetch };
};
