import { cn } from "@/utils/cn";
import Image from "next/image";
import { portfolio } from "./data";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return <div className="px-4 lg:py-12">{children}</div>;
};

/**
 * @see https://www.npmjs.com/package/@storybook/nextjs
 */
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
          {portfolio.map((item) => (
            <div className="relative rounded-2xl" key={item.name}>
              <div className="absolute inset-x-0 top-0 flex h-full items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">
                  {item.name}
                </p>
              </div>
              <Image alt="project" className="w-full" src={item.image} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
