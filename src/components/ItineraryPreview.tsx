import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  MapPin, 
  Utensils, 
  Camera, 
  Mountain, 
  Coffee,
  Star,
  DollarSign,
  ArrowRight,
  Calendar
} from 'lucide-react';

const itineraryData = {
  destination: 'Bali, Indonesia',
  duration: '7 Days',
  style: 'Solo Adventure',
  totalBudget: '$1,250',
  dailyBudget: '$178'
};

const dailyActivities = [
  {
    day: 1,
    title: 'Arrival & Ubud Exploration',
    activities: [
      { time: '9:00 AM', icon: MapPin, title: 'Airport Transfer', cost: '$15', type: 'transport' },
      { time: '11:00 AM', icon: Coffee, title: 'Traditional Balinese Breakfast', cost: '$8', type: 'food' },
      { time: '2:00 PM', icon: Mountain, title: 'Sacred Monkey Forest', cost: '$3', type: 'activity' },
      { time: '5:00 PM', icon: Camera, title: 'Rice Terrace Photography', cost: 'Free', type: 'photo' }
    ]
  },
  {
    day: 2,
    title: 'Cultural Immersion',
    activities: [
      { time: '8:00 AM', icon: Mountain, title: 'Sunrise at Mount Batur', cost: '$65', type: 'adventure' },
      { time: '1:00 PM', icon: Utensils, title: 'Cooking Class Experience', cost: '$45', type: 'food' },
      { time: '4:00 PM', icon: Camera, title: 'Temple Visit & Ceremony', cost: '$12', type: 'culture' },
      { time: '7:00 PM', icon: Coffee, title: 'Night Market Food Tour', cost: '$25', type: 'food' }
    ]
  },
  {
    day: 3,
    title: 'Beach & Relaxation',
    activities: [
      { time: '10:00 AM', icon: Mountain, title: 'Surfing Lesson', cost: '$40', type: 'activity' },
      { time: '1:00 PM', icon: Utensils, title: 'Beachfront Lunch', cost: '$18', type: 'food' },
      { time: '3:00 PM', icon: Camera, title: 'Sunset Beach Photography', cost: 'Free', type: 'photo' },
      { time: '6:00 PM', icon: Coffee, title: 'Beach Bar Evening', cost: '$30', type: 'entertainment' }
    ]
  }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'food': return '🍜';
    case 'activity': return '🚴';
    case 'adventure': return '🏔️';
    case 'photo': return '📸';
    case 'culture': return '🏛️';
    case 'transport': return '🚗';
    case 'entertainment': return '🎉';
    default: return '📍';
  }
};

const ItineraryPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            AI-Generated Itinerary Preview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI creates detailed, personalized trip plans with perfect timing, 
            budget optimization, and local insights.
          </p>
        </div>

        {/* Itinerary Header Card */}
        <Card className="shadow-travel-medium mb-8 bg-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  {itineraryData.destination}
                </CardTitle>
                <div className="flex flex-wrap gap-3">
                  <Badge className="gradient-ocean text-white">
                    <Calendar className="h-3 w-3 mr-1" />
                    {itineraryData.duration}
                  </Badge>
                  <Badge variant="secondary">
                    {itineraryData.style}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                  {itineraryData.totalBudget}
                </div>
                <div className="text-sm text-muted-foreground">
                  {itineraryData.dailyBudget}/day avg
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Daily Itinerary */}
        <div className="space-y-6">
          {dailyActivities.map((day) => (
            <Card key={day.day} className="shadow-travel hover:shadow-travel-medium transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full gradient-ocean flex items-center justify-center text-white font-bold text-sm">
                    {day.day}
                  </div>
                  <span className="text-xl">{day.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {day.activities.map((activity, index) => {
                    const IconComponent = activity.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-travel group"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-12 h-12 rounded-lg bg-background shadow-travel flex items-center justify-center text-xl">
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm font-medium text-muted-foreground">
                                {activity.time}
                              </span>
                            </div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-travel">
                              {activity.title}
                            </h4>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span className="font-semibold text-foreground">
                              {activity.cost}
                            </span>
                          </div>
                          {activity.cost !== 'Free' && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Star className="h-3 w-3 fill-current text-yellow-500" />
                              <span>Recommended</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Day Actions */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Map
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Camera className="h-4 w-4 mr-2" />
                    Photo Spots
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Customize Day
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-0 shadow-travel-medium max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Love this itinerary? Generate your own!
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI creates personalized day-by-day plans based on your preferences, 
                budget, and travel style.
              </p>
              <Button size="lg" className="gradient-ocean text-white hover:shadow-travel-medium transition-spring px-8">
                Generate My Itinerary
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ItineraryPreview;