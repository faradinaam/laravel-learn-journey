import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Star, 
  Heart, 
  Camera,
  Utensils,
  Mountain,
  Building,
  Wallet
} from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 'From $899',
    rating: 4.8,
    reviews: 2543,
    icon: Mountain,
    badges: ['Best Seller', 'Nature Lover']
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    category: 'Culinary',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    price: 'From $1,299',
    rating: 4.9,
    reviews: 1876,
    icon: Utensils,
    badges: ['Foodie Paradise', 'Cultural']
  },
  {
    id: 3,
    name: 'Prague, Czech Republic',
    category: 'Budget',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 'From $599',
    rating: 4.7,
    reviews: 1234,
    icon: Wallet,
    badges: ['Budget Friendly', 'Historic']
  },
  {
    id: 4,
    name: 'New York, USA',
    category: 'Popular Cities',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 'From $1,599',
    rating: 4.6,
    reviews: 3421,
    icon: Building,
    badges: ['Urban Adventure', 'Limited Time']
  }
];

const categories = [
  { name: 'All', icon: Camera, active: true },
  { name: 'Nature', icon: Mountain, active: false },
  { name: 'Culinary', icon: Utensils, active: false },
  { name: 'Budget', icon: Wallet, active: false },
  { name: 'Popular Cities', icon: Building, active: false }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked destinations that offer unforgettable experiences, 
            from bustling cities to serene natural wonders.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`transition-travel ${
                  category.active 
                    ? 'gradient-ocean text-white shadow-travel' 
                    : 'hover:bg-accent/50'
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => {
            const IconComponent = destination.icon;
            return (
              <Card 
                key={destination.id} 
                className="group overflow-hidden border-0 shadow-travel hover:shadow-travel-strong transition-all duration-500 hover:-translate-y-1 bg-card"
              >
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Heart icon */}
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-travel">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/20 backdrop-blur-sm text-white border-0">
                      <IconComponent className="h-3 w-3 mr-1" />
                      {destination.category}
                    </Badge>
                  </div>
                  
                  {/* Price */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-semibold text-foreground">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-travel">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                      <span className="font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{destination.reviews} reviews</span>
                  </div>

                  {/* Feature badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.badges.map((badge, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className={`text-xs ${
                          badge.includes('Best') ? 'gradient-sunset text-white' :
                          badge.includes('Limited') ? 'gradient-nature text-white' :
                          'bg-accent/50'
                        }`}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full gradient-ocean text-white hover:shadow-travel-medium transition-spring group-hover:scale-105">
                    Explore Destination
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border/50 hover:bg-accent/50 transition-travel px-8"
          >
            View All Destinations
            <MapPin className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;