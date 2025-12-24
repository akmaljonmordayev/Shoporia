import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

const useGetOne = (endpoint, id, queryKey = ["item"]) => {
  const fetchData = async () => {
    if (!endpoint || !id) return null;

    try {
      const res = await axiosClient.get(`${endpoint}/${id}`);
      return res.data;
    } catch (error) {
      console.error("❌ API Error:", error.response?.status);
      return null;
    }
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [...queryKey, id],
    queryFn: fetchData,
    enabled: Boolean(endpoint && id),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, refetch };
};

export default useGetOne;
