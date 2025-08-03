import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, User, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 transition-travel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                WanderWise
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Travel smarter, go farther</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-travel">
                  Destinations <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Popular Cities</DropdownMenuItem>
                  <DropdownMenuItem>Nature & Adventure</DropdownMenuItem>
                  <DropdownMenuItem>Cultural Heritage</DropdownMenuItem>
                  <DropdownMenuItem>Budget Travel</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-travel">
                  Packages <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Solo Adventures</DropdownMenuItem>
                  <DropdownMenuItem>Family Trips</DropdownMenuItem>
                  <DropdownMenuItem>Backpacker Specials</DropdownMenuItem>
                  <DropdownMenuItem>Luxury Escapes</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-travel">
                Gallery
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-travel">
                Tips
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-travel">
                Community
              </a>
            </div>
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-travel">
                <Globe className="h-4 w-4 mr-1" />
                EN | USD
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>🇺🇸 English | USD</DropdownMenuItem>
                <DropdownMenuItem>🇪🇸 Español | EUR</DropdownMenuItem>
                <DropdownMenuItem>🇫🇷 Français | EUR</DropdownMenuItem>
                <DropdownMenuItem>🇩🇪 Deutsch | EUR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="gradient-ocean text-white hover:shadow-travel-medium transition-spring">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-travel">
                Destinations
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-travel">
                Packages
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-travel">
                Gallery
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-travel">
                Tips
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-travel">
                Community
              </a>
              <div className="pt-4 pb-2 border-t border-border/50">
                <div className="flex items-center px-3 py-2">
                  <Button variant="ghost" size="sm" className="mr-2">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button size="sm" className="gradient-ocean text-white">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;