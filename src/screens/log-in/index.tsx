import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/modules/log-in/login-form";
import { Route as SignupRoute } from "@/routes/sign-up";
import { isAuthenticated } from "@/utils/network";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

const LoginScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate({
        to: "/",
      });
    }
  }, []);

  return (
    <main className="min-h-screen flex justify-center items-center p-2">
      {/* Center form  */}
      <div className="flex flex-col gap-y-4">
        <Card className="md:w-96">
          <CardHeader>
            <CardTitle className="text-xl">Log in</CardTitle>
            <CardDescription>and continue your journey</CardDescription>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-1 text-sm">
          <span className="text-muted-foreground">Don't have an account?</span>
          <Link to={SignupRoute.to} className="text-primary font-bold">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginScreen;
