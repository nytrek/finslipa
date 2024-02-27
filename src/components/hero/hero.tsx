import { cn } from "@/utils/cn";
import Link from "next/link";

export const Blob: React.FC<React.HTMLAttributes<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      className={cn("w-full overflow-hidden lg:w-auto", className)}
      fill="none"
      height={667}
      width={707}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M284.897 22.192C121.953-47.816 76.359 65.79 79.12 189.854 81.88 313.918-25.915 400.937 6.83 541.798 47.76 717.874 172.5 670.967 278.795 622.853c106.296-48.114 85.076-38.23 209.515-45.969 124.439-7.739 86.274-74.423 95.034-160.665 12.059-118.712 91.653-147.704 116.388-222.584S679.57 66.428 556.473 85.967c-123.097 19.539-124.719-.679-271.576-63.775Z"
        fill="url(#a)"
        opacity={0.7}
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="a"
          x1={301.249}
          x2={398.918}
          y1={-16.56}
          y2={628.098}
        >
          <stop offset={0.12} stopColor="#fff" stopOpacity={0.81} />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Hero: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn(className)} data-testid="hero" {...props}>
      <div className="relative z-10 mt-16 grid gap-y-6 text-center lg:mt-36 lg:gap-y-12">
        <h1 className="grid gap-y-2 text-5xl text-secondary lg:text-6xl">
          <span>Individual Digital</span>
          <span className="font-extrabold">Solution exactly our mission</span>
        </h1>
        <p>
          Vi designar och utvecklar individuella och skräddarsydda digitala
          produkter för webb eller app.
        </p>
        <Link
          className="mx-auto w-fit whitespace-nowrap rounded-2xl bg-primary px-6 py-4 font-bold text-white"
          href="#kontakta-oss"
        >
          Gör en projektförfrågan
        </Link>
      </div>
      <Blob className="absolute left-1/2 mx-auto -mt-[24rem] -translate-x-1/2 transform md:-mt-64 lg:-mt-[26rem]" />
    </div>
  );
};
