import { createFileRoute } from "@tanstack/react-router";
import LoginScreen from "../../screens/log-in";

export const Route = createFileRoute("/log-in/")({
  component: () => <LoginScreen />,
});
