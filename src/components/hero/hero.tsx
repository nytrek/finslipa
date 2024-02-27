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
          <span>Vi hjälper dig</span>
          <span className="font-extrabold">
            <span className="relative">
              Finslipa din
              <svg
                aria-hidden="true"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary/60"
                preserveAspectRatio="none"
                viewBox="0 0 418 42"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749c-31.879 5.313-49.1 9.017-61.296 13.185-4.76 1.627-5.176 1.844-5.13 2.676.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </span>{" "}
            digitala verksamhet
          </span>
        </h1>
        <p>
          Vi designar och utvecklar individuella och skräddarsydda digitala
          produkter för webb och app.
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
