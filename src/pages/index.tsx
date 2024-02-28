import { Contact } from "@/components/contact";
import { Cta } from "@/components/cta";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { cn } from "@/utils/cn";
import Head from "next/head";

const Blob: React.FC<React.HTMLAttributes<SVGSVGElement>> = ({
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

export default function Page() {
  return (
    <>
      <Head>
        <title>Finslipa</title>
      </Head>
      <div className="flex flex-col gap-y-12 pb-24">
        <div className="bg-primary/10 px-4 py-12 md:pb-36">
          <Header />
          <Hero />
          <Blob className="absolute left-1/2 mx-auto -mt-[24rem] -translate-x-1/2 transform md:-mt-64 lg:-mt-[26rem]" />
        </div>
        <Services />
        <Stats />
        <Cta />
        <Portfolio />
        <Contact />
        <img
          alt="arm"
          className="absolute -right-[30rem] top-[195rem] max-w-2xl -rotate-[10deg] sm:top-[180rem] md:top-[130rem] lg:top-[145rem] lg:max-w-4xl xl:-right-60"
          src="/arm.png"
        />
        <img
          alt="thumb"
          className="absolute -bottom-96 -left-48 max-w-lg lg:-bottom-48 lg:-left-24 lg:max-w-xl"
          src="/thumb.png"
        />
      </div>
    </>
  );
}
