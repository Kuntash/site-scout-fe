import { authRoutes } from "@/api/routes/authentication";
import baseFetch from "@/utils/network";
import { useMutation } from "@tanstack/react-query";

type SignUpPayload = {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: async (payload: SignUpPayload) => {
      return baseFetch(authRoutes.signUp, {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
  });
};
