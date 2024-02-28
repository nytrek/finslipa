import { cn } from "@/utils/cn";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 lg:py-12">{children}</div>
  );
};

export const Contact: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <Container>
      <div
        className={cn(
          "grid gap-12 lg:grid-cols-2 lg:justify-between",
          className,
        )}
        data-testid="contact"
        id="kontakta-oss"
        {...props}
      >
        <section className="flex flex-col">
          <h2 className="text-5xl font-bold leading-relaxed text-secondary md:max-w-md">
            Kontakta oss!
          </h2>
          <p className="font-light text-secondary/80">
            Fyll i formuläret och få ett kostnadsfritt konsultsamtal
          </p>
        </section>
        <form className="grid w-full gap-y-12">
          <input
            className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
            placeholder="Namn"
            required
            type="text"
          />
          <input
            className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
            placeholder="E-postadress"
            required
            type="email"
          />
          <input
            className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
            placeholder="Mobilnummer"
            required
            type="tel"
          />
          <textarea
            className="resize-none border-0 border-b border-secondary p-0 placeholder-secondary/40 ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
            placeholder="Hur kan vi hjälpa dig?"
            required
            rows={2}
          ></textarea>
          <button
            className="ml-auto w-fit rounded-2xl border border-primary px-9 py-4 text-lg font-semibold text-primary"
            type="submit"
          >
            Skicka
          </button>
        </form>
      </div>
      <img
        alt="thumb"
        className="absolute -left-48 max-w-xl md:left-0"
        src="/thumb.png"
      />
    </Container>
  );
};
