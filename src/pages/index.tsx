import { Contact } from "@/components/contact";
import { Cta } from "@/components/cta";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import Head from "next/head";

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
        </div>
        <Services />
        <Stats />
        <Cta />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
