import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Plane, 
  Play,
  Sparkles 
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    travelers: '2 adults'
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-10"
        />
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80"
          alt="Beautiful travel destination"
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] hover:scale-110"
        />
      </div>

      {/* Floating promo badge */}
      <div className="absolute top-24 right-8 z-20 hidden lg:block">
        <Badge className="gradient-sunset text-white px-4 py-2 text-sm font-semibold shadow-travel-medium animate-pulse">
          <Sparkles className="h-4 w-4 mr-2" />
          30% Off This Month!
        </Badge>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your Next
            <span className="block gradient-hero bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            From hidden gems to iconic destinations, let WanderWise guide you to experiences 
            that matter. Travel smarter, go farther.
          </p>
        </div>

        {/* Search Card */}
        <Card className="bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-travel-strong max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Where to?
              </label>
              <Input 
                placeholder="City, country, or region"
                value={searchData.destination}
                onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                className="border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Check-in
              </label>
              <Input 
                type="date"
                value={searchData.checkIn}
                onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                className="border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Check-out
              </label>
              <Input 
                type="date"
                value={searchData.checkOut}
                onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                className="border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Travelers
              </label>
              <Select value={searchData.travelers} onValueChange={(value) => setSearchData({...searchData, travelers: value})}>
                <SelectTrigger className="border-border/50 focus:border-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 adult">1 Adult</SelectItem>
                  <SelectItem value="2 adults">2 Adults</SelectItem>
                  <SelectItem value="2 adults, 1 child">2 Adults, 1 Child</SelectItem>
                  <SelectItem value="2 adults, 2 children">2 Adults, 2 Children</SelectItem>
                  <SelectItem value="family">Family (4+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gradient-ocean text-white hover:shadow-travel-medium transition-spring font-semibold px-8">
              <Search className="h-5 w-5 mr-2" />
              Search Destinations
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 hover:bg-accent/50 transition-travel font-semibold">
              <Plane className="h-5 w-5 mr-2" />
              Generate AI Itinerary
            </Button>
          </div>
        </Card>

        {/* Quick actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 transition-travel">
            <Play className="h-4 w-4 mr-2" />
            Take Travel Quiz
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 transition-travel">
            Nearby Surprises
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 transition-travel">
            Travel Safety Map
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;