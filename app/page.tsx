import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemStats } from "@/components/ProblemStats";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { CompareTable } from "@/components/CompareTable";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStats />
        <HowItWorks />
        <Features />
        <CompareTable />
        <Pricing />
        <Testimonials />
        <FAQ />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
