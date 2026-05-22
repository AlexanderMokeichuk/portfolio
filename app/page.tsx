import { Hero } from "./_components/Hero";
import { Work } from "./_components/Work";
import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Grain } from "@/components/ui/Grain";

export default function Home() {
  return (
    <>
      <Grain />
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
}
