import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "@/modules/sign-up/signup-form";
import { isAuthenticated } from "@/utils/network";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

const SignupScreen = () => {
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
            <CardTitle className="text-xl">Sign up</CardTitle>
            <CardDescription>and start your journey</CardDescription>
          </CardHeader>

          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-1 text-sm">
          <span className="text-muted-foreground">
            Already have an account?
          </span>
          <Link to="/log-in" className="text-primary font-bold">
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignupScreen;
