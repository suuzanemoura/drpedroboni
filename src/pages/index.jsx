import Footer from "../components/Footer";
import Header from "../components/Header";
import BioSection from "../components/Sections/Bio";
import ClinicSection from "../components/Sections/Clinic";
import HeroSection from "../components/Sections/Hero";
import InstagramSection from "../components/Sections/Instagram";
import ServicesSection from "../components/Sections/Services";
import TestimonialSection from "../components/Sections/Testimonials";
import YoutubeSection from "../components/Sections/Youtube";
import { instagramApiConfig } from "../config/sections/instagram/api";
import { youtubeApiConfig } from "../config/sections/youtube/api";

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BioSection />
        <YoutubeSection apiConfig={youtubeApiConfig} />
        <ClinicSection />
        <TestimonialSection />
        <InstagramSection apiConfig={instagramApiConfig} />
      </main>
      <Footer />
    </>
  );
}
