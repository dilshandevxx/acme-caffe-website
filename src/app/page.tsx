import HeroSection from '@/components/HeroSection';
import ImpactText from '@/components/ImpactText';
import RomanRange from '@/components/RomanRange';
import OutlineGraphics from '@/components/OutlineGraphics';
import TajimiRange from '@/components/TajimiRange';
import ClassicAcme from '@/components/ClassicAcme';
import Collections from '@/components/Collections';
import ColoursSection from '@/components/ColoursSection';
import LifestyleBanner from '@/components/LifestyleBanner';
import JournalSection from '@/components/JournalSection';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImpactText />
      <RomanRange />
      <OutlineGraphics />
      <TajimiRange />
      <ClassicAcme />
      <Collections />
      <ColoursSection />
      <LifestyleBanner />
      <JournalSection />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
