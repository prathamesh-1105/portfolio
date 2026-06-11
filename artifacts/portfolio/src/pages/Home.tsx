import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { WhoIAm } from "@/components/WhoIAm";
import { TechArsenal } from "@/components/TechArsenal";
import { Projects } from "@/components/Projects";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { CurrentMission } from "@/components/CurrentMission";
import { BeyondEngineering } from "@/components/BeyondEngineering";
import { Certifications } from "@/components/Certifications";
import { AIClone } from "@/components/AIClone";
import { Mission2030 } from "@/components/Mission2030";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-background text-foreground relative selection:bg-primary/30">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <Layout>
          <Navbar />
          <Hero />
          <Journey />
          <WhoIAm />
          <TechArsenal />
          <Projects />
          <CurrentlyBuilding />
          <CurrentMission />
          <BeyondEngineering />
          <Certifications />
          <AIClone />
          <Mission2030 />
          <Contact />
          <Footer />
        </Layout>
      )}
    </main>
  );
}
