import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

const useGetOne = (endpoint, id, queryKey = ["item"]) => {
  const fetchData = async () => {
    const res = await axiosClient.get(`${endpoint}/${id}`);
    return res;
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: queryKey,
    queryFn: fetchData,
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, refetch };
};

export default useGetOne;
