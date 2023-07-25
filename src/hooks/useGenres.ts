import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

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
    staleTime: 6 * 60 * 60 * 1000, // 6 óránként lesz csak friss adat, addig a chache-ben lévőt használja
  });

export default useGenres;