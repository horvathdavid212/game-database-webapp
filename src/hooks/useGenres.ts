import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getALL,
    staleTime: ms("6h"), // 6 óránként lesz csak friss adat, addig a chache-ben lévőt használja
  });

export default useGenres;
