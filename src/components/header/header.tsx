import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigation } from "./data";

export const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const { route } = useRouter();
  return (
    <header
      className={cn(
        "mx-auto flex w-full max-w-7xl items-center justify-between",
        className,
      )}
      data-testid="header"
      {...props}
    >
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
  );
};
