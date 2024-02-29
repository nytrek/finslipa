import { cn } from "@/utils/cn";
import Link from "next/link";
import { services } from "./data";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return <div className="px-4 lg:py-12">{children}</div>;
};

export const Services: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <Container>
      <section
        className={cn(
          "relative mx-auto grid max-w-7xl gap-y-12 lg:gap-y-24",
          className,
        )}
        data-testid="services"
        {...props}
      >
        <h2 className="text-center text-5xl font-extrabold text-secondary">
          Tjänster
        </h2>
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {services.map((item) => (
            <div className="flex flex-col gap-y-6" key={item.name}>
              <div className="flex flex-col gap-y-3">
                <div className="mx-auto h-48 rounded-2xl p-4">
                  <item.illustration />
                </div>
                <h4 className="text-center text-2xl font-semibold text-secondary">
                  {item.name}
                </h4>
                <p className="text-secondary/80">{item.description}</p>
                {!!item.points.length && (
                  <ul className="list-disc pl-4 text-secondary/80">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Link
                className="mx-auto mt-auto h-fit w-full whitespace-nowrap rounded-2xl bg-primary px-6 py-4 text-center font-bold text-white transition-all duration-300 hover:w-full md:w-32"
                href="#kontakta-oss"
              >
                Kom igång
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
