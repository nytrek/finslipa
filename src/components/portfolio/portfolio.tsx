import { cn } from "@/utils/cn";

export const Portfolio: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("px-4 lg:py-12", className)}
      data-testid="portfolio"
      {...props}
    >
      <section className="mx-auto grid max-w-7xl gap-y-12 lg:gap-y-24">
        <h2 className="text-5xl font-bold xl:text-center">Portfolio</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl">
            <img alt="project" className="w-full" src="/one.png" />
          </div>
          <div className="rounded-2xl">
            <img alt="project" className="w-full" src="/one.png" />
          </div>
          <div className="rounded-2xl">
            <img alt="project" className="w-full" src="/one.png" />
          </div>
          <div className="rounded-2xl">
            <img alt="project" className="w-full" src="/one.png" />
          </div>
          <div className="rounded-2xl">
            <img alt="project" className="w-full" src="/one.png" />
          </div>
          <div className="rounded-2xl">
            <img alt="project" className="w-full" src="/one.png" />
          </div>
        </div>
      </section>
    </div>
  );
};
