import { cn } from "@/utils/cn";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return <div className="px-4 lg:py-12">{children}</div>;
};

export const Portfolio: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <Container>
      <section
        className={cn("mx-auto grid max-w-7xl gap-y-12 lg:gap-y-24", className)}
        data-testid="portfolio"
        {...props}
      >
        <h2 className="text-center text-5xl font-extrabold text-secondary">
          Portfölj
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-2xl">
            <div className="absolute inset-x-0 top-0 flex h-full items-end justify-end overflow-hidden rounded-lg p-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                Fitness applikation
              </p>
            </div>
            <img alt="project" className="w-full" src="/one.png" />
          </div>
          <div className="relative rounded-2xl">
            <div className="absolute inset-x-0 top-0 flex h-full items-end justify-end overflow-hidden rounded-lg p-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                Pomodoro koncept
              </p>
            </div>
            <img alt="project" className="w-full" src="/two.png" />
          </div>
          <div className="relative rounded-2xl">
            <div className="absolute inset-x-0 top-0 flex h-full items-end justify-end overflow-hidden rounded-lg p-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                E-handelsbutik
              </p>
            </div>
            <img alt="project" className="w-full" src="/three.png" />
          </div>
          <div className="relative rounded-2xl">
            <div className="absolute inset-x-0 top-0 flex h-full items-end justify-end overflow-hidden rounded-lg p-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                Fitness tracker
              </p>
            </div>
            <img alt="project" className="w-full" src="/four.png" />
          </div>
          <div className="relative rounded-2xl">
            <div className="absolute inset-x-0 top-0 flex h-full items-end justify-end overflow-hidden rounded-lg p-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                Valuta konverterare
              </p>
            </div>
            <img alt="project" className="w-full" src="/five.png" />
          </div>
          <div className="relative rounded-2xl">
            <div className="absolute inset-x-0 top-0 flex h-full items-end justify-end overflow-hidden rounded-lg p-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                Elegant affärsmodel
              </p>
            </div>
            <img alt="project" className="w-full" src="/six.png" />
          </div>
        </div>
      </section>
    </Container>
  );
};
