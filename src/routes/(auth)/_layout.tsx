import { ProtectedRouteProvider } from "@/providers/protected-route-provider";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_layout")({
  component: () => (
    <ProtectedRouteProvider>
      <Outlet />
    </ProtectedRouteProvider>
  ),
});
