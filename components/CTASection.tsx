import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <div
      className="relative h-[60vh] lg:h-[530px] w-full text-white overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 mt-20"
      style={{
        clipPath: 'polygon(0 0, 100% 22%, 100% 100%, 0 100%)',
        // transform: 'translateZ(0)',
      }}
    >
      {/* Background Gradient Patterns */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/30 to-blue-900/30 animate-slow-gradient-shift"></div>
      </div>

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
          future
        </p>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white
              rounded-md shadow-lg hover:bg-orange-600 transition-all duration-300 group transform hover:scale-[1.03] hover:shadow-xl"
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

        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#gradient)"
            fillOpacity="0.5"
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,112C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F80F0" />
              <stop offset="100%" stopColor="#00E9EA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CTASection;
