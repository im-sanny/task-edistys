'use client';

import { CardContent } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react';

interface AnimatedFigureProps {
  src: string;
  alt: string;
  className?: string;
  yValues: number[];
  duration?: number;
  ease?: string;
}

const AnimatedFigure: React.FC<AnimatedFigureProps> = ({
  src,
  alt,
  className,
  yValues,

  duration = 10,
  ease = 'easeInOut',
}) => {
  return (
    <motion.figure
      className={className}
      initial={{ y: 0 }}
      animate={{ y: yValues }}
      transition={{ duration, repeat: Infinity, ease }}
    >
      <img
        className="object-cover w-full h-full overflow-visible"
        loading="lazy"
        src={src}
        alt={alt}
      />
    </motion.figure>
  );
};

const BannerContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '-4.72406%'],
  );
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '1.88962%']);

  return (
    <div className="flex flex-col lg:flex-row relative h-auto lg:h-[110vh]">
      <AnimatedFigure
        src="/assets/WaveLinesDesktop2.svg"
        alt="foreground frame"
        className="absolute h-[200%] w-[100%] z-10 -top-[120%] -left-[8%] overflow-b-hidden hidden lg:block"
        yValues={[-15, 15, -15]}
        style={{ y: backgroundY }}
      />

      <motion.div
        className="flex flex-col w-full lg:w-auto md:space-y-sm space-y-8 pt-20 lg:pt-36 px-6 lg:pl-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-8 max-w-4xl">
          <motion.h1
            className="text-4xl lg:text-7xl font-semibold text-white"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.6 }}
          >
            Embrace the future of finance
          </motion.h1>
          <motion.p
            className="text-white text-md font-semibold"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reimagine financial services with AnyTech&apos;s open platform,
            distributed banking solution that powers transformation
          </motion.p>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white
                rounded-md shadow-lg hover:bg-orange-600 transition-all duration-300 group transform hover:scale-[1.03] hover:shadow-xl"
            >
              <span className="mr-2">Reach Out to Us</span>
              <ArrowRight
                className="w-5 h-5 transition-transform duration-300
                group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        ref={containerRef}
        className="relative w-full lg:w-auto mt-8 lg:mt-0 h-[50vh] lg:h-auto"
        style={{ y: foregroundY }}
      >
        {/* Desktop Image */}
        <motion.img
          src="/assets/banner.jpg"
          alt="POWERING THE FUTURE OF FINANCE"
          className="object-cover w-full h-full -mt-10 hidden lg:block"
          style={{
            clipPath:
              'polygon(76% 0, 100% 0, 100% 75%, 80% 100%, 0 100%, 0 100%)',
          }}
          loading="lazy"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />

        {/* Mobile Image */}
        <motion.img
          src="/assets/banner.jpg"
          alt="banner"
          className="object-cover w-full h-full -mb-10 block lg:hidden"
          style={{
            clipPath: 'polygon(0 14%, 100% 7%, 100% 100%, 0% 100%)',
          }}
          loading="lazy"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />

        <AnimatedFigure
          src="/assets/pngLine.png"
          alt="foreground frame"
          className="absolute h-[150%] w-[100%] z-10 -top-[25%] right-[20%] hidden lg:block"
          yValues={[-15, 15, -15]}
        />
      </motion.div>
    </div>
  );
};

const Banner: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-800 to-blue-500 mb-12"
      style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 90%, 0 97%)' }}
    >
      <div className="border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <BannerContent />
        </CardContent>
      </div>
    </section>
  );
};

export default Banner;
