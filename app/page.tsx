import { About } from "@/components/About";
import { CampaignBanner } from "@/components/CampaignBanner";
import { CategoryBands } from "@/components/CategoryBands";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { KitQuiz } from "@/components/KitQuiz";
import { MobileQuoteFab } from "@/components/MobileQuoteFab";
import { Navigation } from "@/components/Navigation";
import { NewsletterStrip } from "@/components/NewsletterStrip";
import { ProcurementSection } from "@/components/ProcurementSection";
import { Testimonials } from "@/components/Testimonials";
import { TopBar } from "@/components/TopBar";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <CategoryBands />
        <FeaturedProducts />
        <TrustStrip />
        <CampaignBanner />
        <ProcurementSection />
        <KitQuiz />
        <About />
        <Testimonials />
        <NewsletterStrip />
      </main>
      <Footer />
      <MobileQuoteFab />
    </>
  );
}
