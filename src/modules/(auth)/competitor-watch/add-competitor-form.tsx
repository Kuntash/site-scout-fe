import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormValues } from "./add-competitor-form.schema";
import { formSchema } from "./add-competitor-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const AddCompetitorForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const shouldCreateFirstUrl = form.watch("shouldCreateFirstUrl");

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Competitor name</FormLabel>
              <FormDescription>
                Enter the name of the competitor you want to watch
              </FormDescription>
              <FormControl>
                <Input {...field} placeholder="E.g. Typeform" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shouldCreateFirstUrl"
          render={({ field }) => (
            <FormItem>
              <FormDescription>
                Toggle it to create the first URL
              </FormDescription>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {shouldCreateFirstUrl && (
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="E.g. https://typeform.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit">Add Competitor</Button>
      </form>
    </Form>
  );
};
