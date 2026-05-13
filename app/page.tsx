import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PhoneWontStop } from "@/components/PhoneWontStop";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyGuilt } from "@/components/WhyGuilt";
import { SeeInside } from "@/components/SeeInside";
import { Pricing } from "@/components/Pricing";
import { SamWaiting } from "@/components/SamWaiting";
import { HearFromSam } from "@/components/HearFromSam";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhoneWontStop />
        <HowItWorks />
        <WhyGuilt />
        <SeeInside />
        <Pricing />
        <SamWaiting />
        <HearFromSam />
      </main>
      <Footer />
    </>
  );
}
