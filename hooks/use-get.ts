import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "./use-toast";

const useGet = (apiRoute: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiRoute);
      setData(response.data);
      toast({
        title: "Success",
        description: "Data fetched successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
  };
};

export default useGet;
