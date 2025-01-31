'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronRight, Globe, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
] as const;

const LANGUAGES = [
  { code: 'EN', label: 'English' },
  { code: 'CN', label: '中文' },
] as const;

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] =
    useState<(typeof LANGUAGES)[number]['code']>('EN');

  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Throttle scroll handler for better performance
  const handleScroll = useCallback(() => {
    const throttle = setTimeout(() => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    }, 100);

    return () => clearTimeout(throttle);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Handle click outside and escape key for menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const isActiveLink = (path: string) => pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isVisible ? 'top-0' : '-top-24'
      } ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 bg-slate-600">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/footerLogo.webp"
              width={200}
              height={100}
              alt="Any Technology Logo"
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-lg" role="navigation">
            {NAVIGATION_ITEMS.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`relative group transition-colors duration-300 ${
                  isScrolled
                    ? 'text-blue-600 hover:text-blue-800'
                    : 'text-white hover:text-gray-200'
                } ${isActiveLink(path) ? 'font-medium' : ''}`}
                aria-current={isActiveLink(path) ? 'page' : undefined}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 transform ${
                    isActiveLink(path) ? 'scale-x-100' : 'scale-x-0'
                  } transition-transform duration-300 group-hover:scale-x-100 ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  }`}
                  aria-hidden="true"
                ></span>
              </Link>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`flex items-center gap-2 ${
                    isScrolled ? 'text-blue-600' : 'text-white'
                  }`}
                >
                  <Globe className="h-5 w-5" aria-hidden="true" />
                  <span>{currentLang}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="cursor-pointer"
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button
              asChild
              className={`group flex items-center gap-2 px-6 py-2.5 font-medium rounded-full transition-all duration-300 transform hover:scale-105
              ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                  : 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              <Link href="/contact">
                Contact Us
                <ChevronRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? 'text-blue-600' : 'text-white'
                }`}
                aria-hidden="true"
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? 'text-blue-600' : 'text-white'
                }`}
                aria-hidden="true"
              />
            )}
            <span className="sr-only">
              {menuOpen ? 'Close menu' : 'Open menu'}
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`absolute top-16 left-0 w-full bg-white/95 backdrop-blur-sm shadow-md lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col p-4" role="navigation">
          {NAVIGATION_ITEMS.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`py-3 text-gray-900 text-lg hover:text-blue-600 transition-colors border-b border-gray-100 ${
                isActiveLink(path) ? 'font-medium text-blue-600' : ''
              }`}
              onClick={() => setMenuOpen(false)}
              aria-current={isActiveLink(path) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}

          <div className="py-3 border-b border-gray-100">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex items-center gap-2 text-blue-600"
                >
                  <Globe className="h-5 w-5" aria-hidden="true" />
                  <span>{currentLang}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="cursor-pointer"
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 py-3 text-blue-600 text-lg font-medium hover:text-blue-800 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
