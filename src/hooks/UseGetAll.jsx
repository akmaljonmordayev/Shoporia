import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

const useGetAll = (endpoint, queryKey = ["data"]) => {
  const [result, setResult] = useState(null);

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
  useEffect(() => {
    if (data) {
      setResult(data);
    }
  }, [data]);

  return { data: result, isLoading, isError, refetch };
};

export default useGetAll;
