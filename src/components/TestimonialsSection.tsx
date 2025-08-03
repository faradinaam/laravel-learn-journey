import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    verified: true,
    tripDestination: 'Japan Adventure',
    tripDuration: '14 days',
    quote: "WanderWise's AI itinerary was incredible! Every recommendation was spot-on, and the budget calculator saved me over $800. The local community tips made my Tokyo experience unforgettable.",
    helpfulCount: 47,
    badge: 'Verified Traveler'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    verified: true,
    tripDestination: 'Southeast Asia Backpacking',
    tripDuration: '30 days',
    quote: "The safety map feature literally saved my trip! Got real-time alerts about areas to avoid in Bangkok. The packing list generator was also perfect for my backpacking style.",
    helpfulCount: 32,
    badge: 'Backpacker Expert'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    verified: true,
    tripDestination: 'Family Trip to Iceland',
    tripDuration: '10 days',
    quote: "Traveling with kids is challenging, but WanderWise made it seamless. The weather + outfit recommender was a lifesaver, and the AI captions turned our photos into beautiful memories to share.",
    helpfulCount: 28,
    badge: 'Family Explorer'
  },
  {
    id: 4,
    name: 'David Park',
    location: 'Seoul, South Korea',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    verified: true,
    tripDestination: 'European Food Tour',
    tripDuration: '21 days',
    quote: "As a food blogger, the nearby surprise feature discovered hidden gems I never would have found. The integrated booking system got me the best prices, and the local forum connected me with amazing food guides.",
    helpfulCount: 55,
    badge: 'Foodie Hunter'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have discovered the magic of smart travel planning. 
            Real stories from real adventures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="relative overflow-hidden shadow-travel hover:shadow-travel-strong transition-all duration-500 hover:-translate-y-1 bg-card border-0"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-travel"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          testimonial.badge.includes('Expert') ? 'gradient-nature text-white' :
                          testimonial.badge.includes('Hunter') ? 'gradient-sunset text-white' :
                          'bg-accent/50'
                        }`}
                      >
                        {testimonial.badge}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Trip Info */}
                <div className="bg-muted/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">{testimonial.tripDestination}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{testimonial.tripDuration}</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{testimonial.helpfulCount} found this helpful</span>
                  <span>Verified Purchase</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="icon" className="hover:bg-accent/50 transition-travel">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="hover:bg-accent/50 transition-travel">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Trip of the Month */}
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-0 shadow-travel-medium">
          <CardContent className="p-8 text-center">
            <Badge className="gradient-sunset text-white mb-4 px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              Trip of the Month
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Sarah's Japan Adventure
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              "14 days of pure magic! From cherry blossoms in Kyoto to street food in Osaka. 
              WanderWise helped me discover authentic experiences while staying within budget. 
              Every moment was perfectly planned yet felt spontaneous."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-ocean text-white hover:shadow-travel-medium transition-spring">
                Read Full Story
              </Button>
              <Button variant="outline" className="border-border/50 hover:bg-accent/50 transition-travel">
                View Itinerary
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;