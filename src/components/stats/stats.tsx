import { cn } from "@/utils/cn";
import { Counter } from "../external/counter";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return <div className="px-4 lg:py-12">{children}</div>;
};

export const Stats: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <Container>
      <section
        className={cn("mx-auto grid max-w-7xl gap-y-12 lg:gap-y-24", className)}
        data-testid="stats"
        {...props}
      >
        <h2 className="text-center text-5xl font-extrabold text-secondary">
          Statistik
        </h2>
        <div className="grid gap-x-6 gap-y-12 text-center md:grid-cols-2 lg:grid-cols-3">
          <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
            <h4 className="text-5xl font-bold text-secondary">
              <Counter from={0} to={20} />+
            </h4>
            <p className="text-secondary/60">År av kombinerad erfarenhet</p>
          </div>
          <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
            <h4 className="text-5xl font-bold text-secondary">
              <Counter from={0} to={60} />+
            </h4>
            <p className="text-secondary/60">Återkommande kunder</p>
          </div>
          <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
            <h4 className="text-5xl font-bold text-secondary">
              <Counter from={0} to={100} />+
            </h4>
            <p className="text-secondary/60">Projekt slutförda</p>
          </div>
        </div>
      </section>
    </Container>
  );
};
