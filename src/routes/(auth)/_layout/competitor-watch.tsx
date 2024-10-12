import { CompetitorWatchScreen } from "@/screens/(auth)/competitor-watch";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_layout/competitor-watch")({
  component: () => <CompetitorWatchScreen />,
});
