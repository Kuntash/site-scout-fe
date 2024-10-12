import { authRoutes } from "@/api/routes/authentication";
import { ApiResponse } from "@/types/network";
import { GetCurrentUserResponse } from "@/types/user";
import baseFetch from "@/utils/network";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUserQuery = () => {
  return useQuery<ApiResponse<GetCurrentUserResponse>>({
    queryKey: [useCurrentUserQuery.name],
    queryFn: async () => {
      return baseFetch(authRoutes.currentUser, {
        method: "GET",
      });
    },
    retry: false,
  });
};
