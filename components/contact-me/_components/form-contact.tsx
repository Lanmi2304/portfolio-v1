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
import { cn } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { contactSchema, ContactSchemaInput } from "../_schemas/contact.schema";
import { ChangeEvent, KeyboardEvent, useRef, useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendEmail } from "../_actions/send-mail.action";

export function ContactForm() {
  const form = useForm<ContactSchemaInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [isPending, startTransition] = useTransition();

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { ref } = form.register("message");

  const dirtyName = form.formState.dirtyFields.name;
  const dirtyEmail = form.formState.dirtyFields.email;
  const dirtyMessage = form.formState.dirtyFields.message;

  const adjustTextareaHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${event.target.scrollHeight}px`;
    }
  };

  const preventBreakRow = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      await form.handleSubmit(onSubmit)();
    }
  };

  function onSubmit(values: ContactSchemaInput) {
    startTransition(async () => {
      try {
        const response = await sendEmail(values);
        if (!response.message) {
          throw new Error("Failed to send email!");
        }
        toast.success(response.message);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Unknown Error");
      } finally {
        form.reset();
        if (textAreaRef.current) textAreaRef.current.style.height = "auto";
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 lg:w-3/4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input {...field} className="peer" />
              </FormControl>
              <FormLabel
                htmlFor="name"
                className={cn(
                  "bg-background text-foreground/70 absolute start-2.5 top-4.5 -z-10 -translate-y-1.5 px-1 transition-all duration-300 peer-focus:top-0 peer-focus:z-10 peer-focus:scale-75",
                  dirtyName ? "top-0 z-10 scale-75" : null,
                )}
              >
                Full Name
              </FormLabel>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input {...field} className="peer" />
              </FormControl>
              <FormLabel
                htmlFor="email"
                className={cn(
                  "bg-background text-foreground/70 absolute start-2.5 top-4.5 -z-10 -translate-y-1.5 px-1 transition-all duration-300 peer-focus:top-0 peer-focus:z-10 peer-focus:scale-75",
                  dirtyEmail ? "top-0 z-10 scale-75" : null,
                )}
              >
                Email address
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Textarea
                  rows={5}
                  className="peer resize-none bg-transparent"
                  onKeyDown={(event) => preventBreakRow(event)}
                  onInput={adjustTextareaHeight}
                  {...field}
                  ref={(element) => {
                    ref(element);
                    textAreaRef.current = element;
                  }}
                />
              </FormControl>
              <FormLabel
                htmlFor="message"
                className={cn(
                  "bg-background text-foreground/70 absolute start-2.5 top-4.5 -z-10 -translate-y-1.5 px-1 transition-all duration-300 peer-focus:top-0 peer-focus:z-10 peer-focus:scale-75",
                  dirtyMessage ? "top-0 z-10 scale-75" : null,
                )}
              >
                Message
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
