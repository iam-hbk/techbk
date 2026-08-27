import { IntroLoader } from "@/components/home/intro-loader";
import { HeroSection } from "@/components/home/hero-section";
import { WhereWeEnter } from "@/components/home/where-we-enter";
import { ServicesPreview } from "@/components/home/services-preview";
import { SelectedWork } from "@/components/home/selected-work";
import { ProcessSection } from "@/components/home/process-section";
import { FounderSection } from "@/components/home/founder-section";


export default function Home() {
  return (
    <>
      <IntroLoader />
      <HeroSection />
      <WhereWeEnter />
      <ServicesPreview />
      <SelectedWork />
      <ProcessSection />
      <FounderSection />
    </>
  );
}
