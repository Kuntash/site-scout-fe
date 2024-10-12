import { DashboardScreen } from "@/screens/(auth)/index";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_layout/")({
  component: () => <DashboardScreen />,
});
