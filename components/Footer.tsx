import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
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
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Image
                src="/footerLogo.webp"
                width={200}
                height={100}
                alt="Any Technology Logo"
                className="object-contain"
                priority
              />
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
                  <React.Fragment key={solution.name}>
                    <FooterLink href={solution.href}>
                      {solution.name}
                    </FooterLink>
                  </React.Fragment>
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
