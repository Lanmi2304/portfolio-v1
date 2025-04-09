import { ContactForm } from "./_components/form-contact";

export function ContactMe() {
  return (
    <div className="border-muted grid gap-10 border-t p-4 pt-10 md:p-10">
      <h3 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-4xl">
        Get in touch
      </h3>
      <ContactForm />
    </div>
  );
}
