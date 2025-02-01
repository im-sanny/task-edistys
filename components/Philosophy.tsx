'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import 'animate.css';
import { Computer, Lightbulb, Share } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface philosophyCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple';
}

const Philosophy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mounts to trigger animation
    setIsVisible(true);
  }, []);
  const philosophyCards: philosophyCard[] = [
    {
      icon: <Share className="w-6 h-6" />,
      title: 'Full-suite solutions',
      description:
        'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.',
      color: 'blue',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Simplify the complex',
      description:
        'Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.',
      color: 'green',
    },
    {
      icon: <Computer className="w-6 h-6" />,
      title: 'Cutting-edge tech',
      description:
        'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.',
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-16">
        <div className="space-y-4 text-center mb-12">
          <h3 className="text-blue-500 text-md font-semibold tracking-wide uppercase">
            OUR PHILOSOPHY
          </h3>
          <div className="flex justify-center w-full">
            <h1 className="text-3xl lg:text-6xl text-center font-semibold">
              Human-centred innovation
            </h1>
          </div>
        </div>

        {/* Desktop banner */}
        <div className="hidden md:block mb-16">
          <img
            src="/assets/photo3.png"
            alt="Philosophy banner"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Mobile banner */}
        <div className="md:hidden mb-16">
          <img
            src="/assets/photo4.png"
            alt="Philosophy banner"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Cards section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {philosophyCards.map((card, index) => (
            <Card
              key={index}
              className={`bg-[#F8FCFF] border-none shadow-none
                ${
                  isVisible
                    ? 'animate__animated animate__slideInUp'
                    : 'opacity-0'
                }
              `}
              style={{
                animationDelay: `${index * 200}ms`,
                animationDuration: '1s',
              }}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    colorClasses[card.color]
                  }`}
                >
                  {card.icon}
                </div>
                <CardTitle className="text-xl font-semibold">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
