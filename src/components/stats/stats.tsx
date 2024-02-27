import { cn } from "@/utils/cn";

export const Stats: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("px-4 lg:py-12", className)}
      data-testid="stats"
      {...props}
    >
      <section className="mx-auto grid max-w-7xl gap-y-12 lg:gap-y-24">
        <h2 className="text-5xl font-bold xl:text-center">Statistik</h2>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
            <h4 className="text-4xl font-bold xl:text-center">20+</h4>
            <p className="text-secondary/60">År av kombinerad erfarenhet</p>
          </div>
          <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
            <h4 className="text-4xl font-bold xl:text-center">60+</h4>
            <p className="text-secondary/60">Återkommande kunder</p>
          </div>
          <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
            <h4 className="text-4xl font-bold xl:text-center">100+</h4>
            <p className="text-secondary/60">Projekt slutförda</p>
          </div>
        </div>
      </section>
    </div>
  );
};
