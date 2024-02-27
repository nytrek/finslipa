import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Urbanist } from "next/font/google";
import { useEffect } from "react";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.head.appendChild(
      Object.assign(document.createElement("link"), {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>",
      }),
    );
  }, []);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${urbanist.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
