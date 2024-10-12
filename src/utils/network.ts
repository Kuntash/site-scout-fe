import { useCurrentUserQuery } from "@/hooks/queries/useCurrentUserQuery";
import { queryClient } from "@/queryClient";
import { ApiResponse } from "@/types/network";
import { GetCurrentUserResponse } from "@/types/user";

export const baseFetch = async (endpoint: string, options?: RequestInit) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const url = `${baseUrl}/${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong!");
  }

  return response.json();
};

export default baseFetch;

export const isAuthenticated = () => {
  const queryData = queryClient.getQueryData<
    ApiResponse<GetCurrentUserResponse>
  >([useCurrentUserQuery.name]);

  if (queryData?.data?.currentUser?.id) {
    return true;
  }
  return false;
};
