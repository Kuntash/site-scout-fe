import { authRoutes } from "@/api/routes/authentication";
import baseFetch from "@/utils/network";
import { useMutation } from "@tanstack/react-query";

type LoginUserPayload = {
  email: string;
  password: string;
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (payload: LoginUserPayload) => {
      return baseFetch(authRoutes.logIn, {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
    mutationKey: [useLoginMutation.name],
  });
};
