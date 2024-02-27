import { cn } from "@/utils/cn";

export const Contact: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 lg:py-12", className)}
      data-testid="contact"
      id="kontakta-oss"
      {...props}
    >
      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:gap-y-0">
        <section className="flex flex-col">
          <h2 className="text-5xl font-bold leading-relaxed text-secondary md:max-w-md">
            Let&apos;s talk
          </h2>
          <p className="font-light text-secondary/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
        <form className="grid w-full gap-y-12 lg:max-w-xl">
          <input
            className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
            placeholder="Name"
            required
            type="text"
          />
          <input
            className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
            placeholder="Email"
            required
            type="email"
          />
          <input
            className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
            placeholder="Phone"
            required
            type="tel"
          />
          <textarea
            className="resize-none border-0 border-b border-secondary p-0 placeholder-secondary/40 ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
            placeholder="How can we help you?"
            required
            rows={2}
          ></textarea>
          <button
            className="ml-auto w-fit rounded-2xl border border-primary px-9 py-4 text-lg font-semibold text-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};