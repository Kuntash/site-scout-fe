import { useForm } from 'react-hook-form';
import { formSchema, FormValues } from './signup-form.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SignupForm = () => {

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (value: FormValues) => {
    console.log(value);
  }

  console.log(form.formState?.errors);
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <div className="flex gap-x-4 flex-wrap">
        <div className="flex-1">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Kunga" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your first name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex-1">
        <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Tashi" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your last name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter your email name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Password</FormLabel>
              <FormControl>
                <Input placeholder="*****" {...field} type="password" />
              </FormControl>
              <FormDescription>
                Please set a strong password
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button type="submit" className="w-full">
        Sign up
      </Button>
    </form>
  </Form>
  )
}

export default SignupForm;