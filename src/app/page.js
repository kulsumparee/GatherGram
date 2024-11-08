import ContactForm from "@/components/forms/ContactForm";
import Footer from "@/components/layout/Footer";
import CelebrationCard from "@/components/sections/celebrationCard/Index";
import FAQSection from "@/components/sections/FAQs/Index";
import Features from "@/components/sections/features/Index";
import Hero from "@/components/sections/Hero/Index";
import WeddingSection from "@/components/sections/wedding/Index";


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CelebrationCard />
      <FAQSection />
      
      <WeddingSection />
      {/* <ContactForm/> */}
      <Footer/>
    </>
  );
}
