import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  MapPin, 
  Camera, 
  CreditCard, 
  Users, 
  Cloud, 
  Shield, 
  Calculator,
  Languages,
  Backpack,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Itinerary Generator',
    description: 'AI-powered trip planning with detailed schedules, costs, and time slots. Choose your style: Solo, Family, or Backpacker.',
    gradient: 'gradient-ocean',
    badge: 'AI Powered',
    demo: true
  },
  {
    icon: MapPin,
    title: 'Nearby Surprise',
    description: 'Real-time recommendations of hidden gems nearby, synced with Google Maps and traveler reviews.',
    gradient: 'gradient-nature',
    badge: 'Real-time',
    demo: false
  },
  {
    icon: Camera,
    title: 'Trip Gallery with AI Captions',
    description: 'Upload your travel photos and let AI generate attractive captions and summary stories for sharing.',
    gradient: 'gradient-sunset',
    badge: 'Creative AI',
    demo: true
  },
  {
    icon: CreditCard,
    title: 'Integrated Booking System',
    description: 'Connect to flight, hotel, and transport APIs. Price comparison across multiple platforms.',
    gradient: 'gradient-ocean',
    badge: 'Price Match',
    demo: false
  },
  {
    icon: Users,
    title: 'Local Forum & Community',
    description: 'Ask locals or fellow travelers. Earn community badges like "Local Expert" and "Foodie Hunter".',
    gradient: 'gradient-nature',
    badge: 'Community',
    demo: false
  },
  {
    icon: Cloud,
    title: 'Weather + Outfit Recommender',
    description: 'Live forecast plus wardrobe suggestions based on location, activity, and season.',
    gradient: 'gradient-sunset',
    badge: 'Smart Style',
    demo: true
  },
  {
    icon: Shield,
    title: 'Travel Safety Map',
    description: 'Visual map showing unsafe zones, scams, and alerts updated by community and news feeds.',
    gradient: 'gradient-ocean',
    badge: 'Safety First',
    demo: false
  },
  {
    icon: Calculator,
    title: 'Budget Calculator',
    description: 'Automatically estimates daily spending based on destination and travel style. Export to PDF/Sheet.',
    gradient: 'gradient-nature',
    badge: 'Smart Budget',
    demo: true
  },
  {
    icon: Languages,
    title: 'Mini Translator Widget',
    description: 'Key phrases and audio in local language, accessible via floating button throughout your journey.',
    gradient: 'gradient-sunset',
    badge: 'Instant',
    demo: false
  },
  {
    icon: Backpack,
    title: 'Packing List Generator',
    description: 'Auto-generated list based on duration, weather, and traveler type (family, vegetarian, etc.).',
    gradient: 'gradient-ocean',
    badge: 'Personalized',
    demo: true
  }
];

const SmartFeatures = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="gradient-hero text-white mb-4 px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Killer Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Travel Smarter with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the future of travel planning with our cutting-edge features designed 
            to make every journey memorable, safe, and perfectly tailored to your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-travel hover:shadow-travel-strong transition-all duration-500 hover:-translate-y-2 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${feature.gradient} shadow-travel`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                      {feature.demo && (
                        <Badge className="text-xs gradient-sunset text-white">
                          Try Demo
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-travel">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between hover:bg-accent/50 transition-travel group-hover:text-primary"
                  >
                    {feature.demo ? 'Try Feature' : 'Learn More'}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-0 shadow-travel-medium max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Experience Smart Travel?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of travelers who have already discovered the power of AI-assisted 
                trip planning. Start your intelligent journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-ocean text-white hover:shadow-travel-medium transition-spring px-8">
                  <Brain className="h-5 w-5 mr-2" />
                  Start AI Planning
                </Button>
                <Button variant="outline" size="lg" className="border-border/50 hover:bg-accent/50 transition-travel px-8">
                  Watch Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;