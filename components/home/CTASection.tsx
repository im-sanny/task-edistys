'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <div
      className="relative h-[60vh] lg:h-[530px] w-full text-white overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 mt-20"
      style={{
        clipPath: 'polygon(0 0, 100% 22%, 100% 100%, 0 100%)',
      }}
    >
      {/* Background Gradient Patterns */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/30 to-blue-900/30 animate-slow-gradient-shift"></div>
      </div>

      {/* Animated SVG */}
      <motion.img
        src="/assets/WaveLinesDesktop2.svg"
        alt="foreground frame"
        className="absolute h-[200%] w-[100%] z-10 -top-[90%] -left-[8%] overflow-hidden hidden lg:block"
        animate={{ y: [0, -10, 0] }} // Floating effect
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col justify-center h-full px-4 md:px-6 lg:px-16 pt-10">
        <h2
          className="text-3xl lg:text-6xl font-semibold mb-6 text-white tracking-tight transform transition-all duration-700
          hover:scale-[1.02] hover:text-white/90"
        >
          Legacy no longer
        </h2>

        <p className="text-white lg:text-lg 2xl:text-xl mb-8 max-w-2xl">
          Talk to us to find out how we can transform your organisation for the
          future.
        </p>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white rounded-md shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl"
          >
            <span className="mr-2">Contact Us</span>
            <ArrowRight
              className="w-5 h-5 transition-transform duration-300
              group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-900/20
          animate-pulse"
        ></div>
      </div>
    </div>
  );
};

export default CTASection;
