import TopNavigationBar from "@/components/TopNavigationBar";
import HeroSection from "@/components/sections/HeroSection";
import SponsorSection from "@/components/sections/SponsorSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Loader from "@/components/bits/Loader";

export default function Home() {
  return (
    <div>
      <Loader />
      <div className="bg-[radial-gradient(circle_at_bottom,theme(colors.secondary)_-10%,theme(colors.primary)_50%)]">
        <TopNavigationBar />
        <HeroSection />
      </div>
      <SponsorSection />
      <br />
      <br />
      <FeaturesSection />
    </div>
  );
}
