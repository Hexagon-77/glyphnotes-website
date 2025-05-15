
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass-dark' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/media/logo.png" alt="Glyph Notes Logo" className="w-8 h-8" />
          <div className="flex items-center">
            <span className="text-white text-xl font-raleway font-thin">glyph</span>
            <span className="text-white text-xl font-montserrat font-semibold ml-1">notes</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors text-sm font-raleway">Features</a>
          <a href="#use-cases" className="text-white/80 hover:text-white transition-colors text-sm font-raleway">Use Cases</a>
          <a href="#university" className="text-white/80 hover:text-white transition-colors text-sm font-raleway">For universities</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass-dark p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-white/80 hover:text-white transition-colors text-sm font-raleway">Features</a>
              <a href="#use-cases" className="text-white/80 hover:text-white transition-colors text-sm font-raleway">Use Cases</a>
              <a href="#university" className="text-white/80 hover:text-white transition-colors text-sm font-raleway">For universities</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
