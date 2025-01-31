'use client';
import { Button } from '@/components/ui/button';
import { Book, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      // Change style when scrolled
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full transition-all duration-300 ${
        isVisible ? 'top-0' : '-top-24'
      } ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Book />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? 'text-blue-600 hover:text-blue-800'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? 'text-blue-600 hover:text-blue-800'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Sign in
            </Button>
            <Button
              className={`transition-colors duration-300 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu
              className={`h-6 w-6 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
