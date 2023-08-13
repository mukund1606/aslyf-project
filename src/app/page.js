import ContentSection from "@/components/ContentSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ContentSection />
      <FeedbackSection />
      <Footer />
    </>
  );
}
