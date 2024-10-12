import { isAuthenticated } from "@/utils/network";
import { useNavigate } from "@tanstack/react-router";

type ProtectedRouteProviderProps = {
  children: React.ReactNode;
};

export const ProtectedRouteProvider = (props: ProtectedRouteProviderProps) => {
  const { children } = props;
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    console.log("hello");
    navigate({
      to: "/log-in",
    });
  }

  return children;
};
