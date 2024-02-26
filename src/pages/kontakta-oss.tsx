import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "./utils/cn";

export default function Page() {
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
      href: "/kontakta-oss",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl p-12">
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
}
