import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getALL,
    staleTime: 6 * 60 * 60 * 1000, // 6 óránként lesz csak friss adat, addig a chache-ben lévőt használja
  });

export default usePlatforms;
