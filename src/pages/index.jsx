import Header from "../components/Header";
import BioSection from "../components/Sections/Bio";
import HeroSection from "../components/Sections/Hero";
import ServicesSection from "../components/Sections/Services";

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BioSection />
      </main>
    </>
  );
}
