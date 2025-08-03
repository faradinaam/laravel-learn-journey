import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import SmartFeatures from '@/components/SmartFeatures';
import ItineraryPreview from '@/components/ItineraryPreview';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedDestinations />
      <SmartFeatures />
      <ItineraryPreview />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
