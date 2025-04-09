"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email().min(1),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input {...field} className="peer/name is-dirty" />
              </FormControl>
              {/* TODO: FIX LABEL  */}
              <FormLabel
                htmlFor="username"
                className="bg-background text-foreground/70 absolute start-2.5 top-4.5 -z-10 -translate-y-1.5 px-1 transition-all duration-300 peer-focus/name:top-0 peer-focus/name:z-10 peer-focus/name:scale-75 peer-[.is-dirty]/name:peer-focus/name:top-0"
              >
                Full Name
              </FormLabel>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input {...field} className="peer" />
              </FormControl>
              <FormLabel
                htmlFor="email"
                className="bg-background text-foreground/70 absolute start-2.5 top-4.5 -z-10 -translate-y-1.5 transition-all duration-300 peer-focus:top-0 peer-focus:z-10 peer-focus:scale-75"
              >
                Email address
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
