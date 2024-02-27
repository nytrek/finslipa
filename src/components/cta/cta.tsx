import { cn } from "@/utils/cn";
import Link from "next/link";

export const Cta: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 lg:py-12", className)}
      data-testid="cta"
      {...props}
    >
      <section className="flex flex-col gap-y-12 rounded-3xl bg-primary px-8 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0 lg:px-16 lg:py-14">
        <h2 className="text-4xl font-bold leading-snug text-white lg:max-w-md">
          Kom igång med ett kostnadsfritt konsultsamtal
        </h2>
        <Link
          className="rounded-xl border border-white px-10 py-4 text-center text-white"
          href="#kontakta-oss"
        >
          Kontakta oss
        </Link>
      </section>
    </div>
  );
};
