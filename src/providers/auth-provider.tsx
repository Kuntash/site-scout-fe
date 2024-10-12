import { useCurrentUserQuery } from "@/hooks/queries/useCurrentUserQuery";
import { Suspense } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const { isLoading } = useCurrentUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};
