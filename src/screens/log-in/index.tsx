import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import LoginForm from '@/modules/log-in/login-form';
import { Link } from '@tanstack/react-router';

const LoginScreen = () => {
  return (
    <main className="min-h-screen flex justify-center items-center p-2">
      {/* Center form  */}
      <div className="flex flex-col gap-y-4">
        <Card className="md:w-96">

          <CardHeader>
            <CardTitle className="text-xl">
              Sign up
            </CardTitle>
            <CardDescription>
              and start your journey
            </CardDescription>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-1 text-sm">
          <span className='text-muted-foreground'>Already have an account?</span>
          <Link to="/sign-up" className="text-primary font-bold">
            Log in
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LoginScreen