import { createFileRoute } from "@tanstack/react-router";
import SignupScreen from "@/screens/sign-up";

export const Route = createFileRoute("/sign-up/")({
  component: () => <SignupScreen />,
});
