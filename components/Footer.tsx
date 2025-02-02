'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Import social media icons
import React from 'react';

interface FooterProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-[#00E9EA] hover:text-blue-500 transition-colors duration-200"
  >
    {children}
  </Link>
);

const Footer = () => {
  const solutions = [
    { name: 'AnyCaaS', href: '#' },
    { name: 'AnyPaaS', href: '#' },
    { name: 'AnyVaaS', href: '#' },
  ];

  return (
    <footer className="w-full">
      <section className="bg-[#002045]">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
                width={200}
                height={100}
                alt="Any Technology Company Logo"
                className="object-contain"
                priority
              />
            </div>

            {/* Social Media Icons (Mobile Only) */}
            <div className="flex md:hidden space-x-4 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-[#00E9EA] hover:text-blue-500"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-[#00E9EA] hover:text-blue-500"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-[#00E9EA] hover:text-blue-500"
              >
                <Instagram size={24} />
              </Link>
            </div>

            {/* Solutions Links */}
            <div className="flex flex-col md:flex-row items-center gap-5">
              <p className="text-[#00E9EA] font-medium">Our Solutions</p>
              <Separator
                orientation="vertical"
                className="hidden md:block h-6 bg-[#00E9EA]/30"
              />
              <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                {solutions.map((solution) => (
                  <FooterLink key={solution.name} href={solution.href}>
                    {solution.name}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#00152D]">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-600 text-sm">
              ©{new Date().getFullYear()} All rights reserved. Any Technology
              Pte Ltd.
            </p>
            <Button
              variant="link"
              asChild
              className="text-blue-600 hover:text-blue-200 text-sm p-0"
            >
              <Link href="#">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
