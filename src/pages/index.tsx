import Link from "next/link";
import { useRouter } from "next/router";
import { Design, Seo, Software, Web } from "../components/illustrations";
import { cn } from "../utils/cn";
import Head from "next/head";

const Blob: React.FC<React.HTMLAttributes<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      className={cn("w-full overflow-hidden md:w-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
      width={707}
      height={667}
      fill="none"
      {...props}
    >
      <path
        fill="url(#a)"
        d="M284.897 22.192C121.953-47.816 76.359 65.79 79.12 189.854 81.88 313.918-25.915 400.937 6.83 541.798 47.76 717.874 172.5 670.967 278.795 622.853c106.296-48.114 85.076-38.23 209.515-45.969 124.439-7.739 86.274-74.423 95.034-160.665 12.059-118.712 91.653-147.704 116.388-222.584S679.57 66.428 556.473 85.967c-123.097 19.539-124.719-.679-271.576-63.775Z"
        opacity={0.7}
      />
      <defs>
        <linearGradient
          id="a"
          x1={301.249}
          x2={398.918}
          y1={-16.56}
          y2={628.098}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.12} stopColor="#fff" stopOpacity={0.81} />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  const { route } = useRouter();
  const navigation = [
    {
      id: 1,
      name: "Hem",
      href: "/",
    },
    {
      id: 2,
      name: "Kontakta oss",
      href: "#kontakta-oss",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl">
      <header className="flex items-center justify-between">
        <span className="text-4xl font-extrabold text-secondary">Finslipa</span>
        <nav>
          <ul className="flex items-center gap-x-5 text-lg font-light">
            {navigation.map((item) => (
              <li className="group leading-5" key={item.name}>
                <Link
                  className={cn(
                    item.href === route
                      ? "font-semibold text-primary"
                      : "text-secondary",
                  )}
                  href={item.href}
                >
                  {item.name}
                </Link>
                <hr
                  className={cn(
                    item.href === route ? "border-primary" : "border-secondary",
                    "w-0 transition-all duration-300 group-hover:w-full",
                  )}
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
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
          <div>
            <div className="relative z-10 mt-16 grid gap-y-6 text-center md:mt-36 md:gap-y-12">
              <h1 className="grid gap-y-2 text-5xl text-secondary md:text-6xl">
                <span>Individual Digital</span>
                <span className="font-extrabold">
                  Solution exactly our mission
                </span>
              </h1>
              <p>
                We design and develop individual and tailor-made digital
                products for web or app.
              </p>
              <Link
                className="mx-auto w-fit whitespace-nowrap rounded-2xl bg-primary px-6 py-4 font-bold text-white"
                href="#kontakta-oss"
              >
                Make a project request
              </Link>
            </div>
            <Blob className="absolute left-1/2 mx-auto -mt-96 -translate-x-1/2 transform md:-mt-[26rem]" />
          </div>
        </div>
        <div className="px-4 lg:py-12">
          <div className="mx-auto grid max-w-7xl gap-y-12 md:gap-y-24">
            <h2 className="text-5xl font-bold text-secondary xl:text-center">
              Services
            </h2>
            <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="grid gap-y-3">
                <div className="flex h-48 justify-center rounded-2xl border border-gray-300 p-4">
                  <Web />
                </div>
                <h4 className="text-xl font-semibold text-secondary">
                  Web development
                </h4>
                <p className="max-w-xs">
                  Lorem ipsum dolor sit adipiscing sed do eiusmod tempor
                  incididunt.
                </p>
                <button className="text-left">
                  <span>Call To Action</span>
                </button>
              </div>
              <div className="grid gap-y-3">
                <div className="flex h-48 justify-center rounded-2xl border border-gray-300 p-4">
                  <Seo />
                </div>
                <h4 className="text-xl font-semibold text-secondary">
                  Web development
                </h4>
                <p className="max-w-xs">
                  Lorem ipsum dolor sit adipiscing sed do eiusmod tempor
                  incididunt.
                </p>
                <button className="text-left">
                  <span>Call To Action</span>
                </button>
              </div>
              <div className="grid gap-y-3">
                <div className="flex h-48 justify-center rounded-2xl border border-gray-300 p-4">
                  <Software />
                </div>
                <h4 className="text-xl font-semibold text-secondary">
                  Web development
                </h4>
                <p className="max-w-xs">
                  Lorem ipsum dolor sit adipiscing sed do eiusmod tempor
                  incididunt.
                </p>
                <button className="text-left">
                  <span>Call To Action</span>
                </button>
              </div>
              <div className="grid gap-y-3">
                <div className="flex h-48 justify-center rounded-2xl border border-gray-300 p-4">
                  <Design />
                </div>
                <h4 className="text-xl font-semibold text-secondary">
                  Web development
                </h4>
                <p className="max-w-xs">
                  Lorem ipsum dolor sit adipiscing sed do eiusmod tempor
                  incididunt.
                </p>
                <button className="text-left">
                  <span>Call To Action</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:py-12">
          <div className="mx-auto grid max-w-7xl gap-y-12 md:gap-y-24">
            <h2 className="text-5xl font-bold text-secondary xl:text-center">
              Remarkable Results
            </h2>
            <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
                <h4 className="text-4xl font-bold">3+</h4>
                <p className="text-secondary/60">Years of experience</p>
              </div>
              <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
                <h4 className="text-4xl font-bold">3+</h4>
                <p className="text-secondary/60">Years of experience</p>
              </div>
              <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
                <h4 className="text-4xl font-bold">3+</h4>
                <p className="text-secondary/60">Years of experience</p>
              </div>
              <div className="mx-auto grid w-full gap-y-3 xl:w-auto">
                <h4 className="text-4xl font-bold">3+</h4>
                <p className="text-secondary/60">Years of experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-y-12 rounded-3xl bg-primary px-8 py-12 md:px-16 md:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
              <h3 className="text-5xl font-bold leading-snug text-white md:max-w-md">
                Read What They Say About Us
              </h3>
              <Link
                className="rounded-xl border border-white px-10 py-4 text-center text-white"
                href="#kontakta-oss"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 lg:py-12">
          <div className="mx-auto grid max-w-7xl gap-y-12 md:gap-y-24">
            <h2 className="text-5xl font-bold text-secondary xl:text-center">
              Portfolio
            </h2>
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
          </div>
        </div>
        <div className="px-4 lg:py-12" id="kontakta-oss">
          <div className="mx-auto grid max-w-7xl gap-y-12 md:gap-y-24">
            <h2 className="text-5xl font-bold text-secondary xl:text-center">
              Contact
            </h2>
            <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:gap-y-0">
              <div className="flex flex-col">
                <h3 className="text-5xl font-bold leading-relaxed text-secondary md:max-w-md">
                  Let&apos;s talk
                </h3>
                <p className="font-light text-secondary/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <form className="grid w-full gap-y-12 lg:max-w-xl">
                <input
                  className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  className="w-full border-x-0 border-b border-t-0 border-secondary p-0 pb-2 placeholder-secondary outline-none ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
                  type="tel"
                  placeholder="Phone"
                  required
                />
                <textarea
                  className="resize-none border-0 border-b border-secondary p-0 placeholder-secondary/40 ring-0 focus:border-primary focus:placeholder-primary focus:ring-0"
                  rows={2}
                  placeholder="How can we help you?"
                  required
                ></textarea>
                <button
                  className="ml-auto w-fit rounded-2xl border border-primary px-9 py-4 text-lg font-semibold text-primary"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
