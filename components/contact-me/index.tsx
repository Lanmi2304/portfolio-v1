import { ContactForm } from "./_components/form-contact";

// TODO: Delete margin bottom mb-20
export function ContactMe() {
  return (
    <div
      id="contact"
      className="border-muted mb-20 grid gap-10 border-t p-4 pt-10 md:p-10"
    >
      <h3 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-4xl">
        Get in touch
      </h3>
      <p className="text-foreground">
        Have a question, project idea, or just want to say hello? Feel free to
        reach out — I’m always open to new opportunities and collaborations.
      </p>
      <ContactForm />
    </div>
  );
}
