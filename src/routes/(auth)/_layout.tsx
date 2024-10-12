import { SideNav } from "@/components/organisms/side-nav";
import { Card } from "@/components/ui/card";
import { ProtectedRouteProvider } from "@/providers/protected-route-provider";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_layout")({
  component: () => (
    <ProtectedRouteProvider>
      <div className="min-h-screen h-full p-3 flex items-stretch gap-x-3">
        {/* Side navigation */}
        <div className="flex-shrink-0">
          <SideNav />
        </div>
        <Card className="flex-grow overflow-auto">
          <Outlet />
        </Card>
      </div>
    </ProtectedRouteProvider>
  ),
});
