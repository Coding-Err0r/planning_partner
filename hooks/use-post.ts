import { useState } from "react";
import axios from "axios";
import { toast } from "./use-toast";

const usePost = (apiRoute: string, initialData: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(initialData);

  const processForm = async () => {
    setIsLoading(true);
    try {
      await axios.post(apiRoute, data);
      toast({
        title: "Success",
        description: "Data uploaded successfully",
      });
      setData(initialData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    setData,
    processForm,
  };
};

export default usePost;
