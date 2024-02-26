import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
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
