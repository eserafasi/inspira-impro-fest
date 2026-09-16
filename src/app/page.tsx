import { Guest } from "@/components/guest";
import { Hero } from "@/components/hero";
import { Lineup } from "@/components/lineup";
import { SiteFooter } from "@/components/site-footer";
import { Venues } from "@/components/venues";
import { Workshops } from "@/components/workshops";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Lineup />
      <Guest />
      <Workshops />
      <Venues />
      <SiteFooter />
    </main>
  );
}
