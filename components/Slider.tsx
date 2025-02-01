'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

const tabs = [
  'Customer focused',
  'Agile and adaptable',
  'Compliance ready',
  'Secure and safe',
];

const slides = [
  {
    title: 'Customer focused',
    subtitle: 'Purpose-built financial services',
    content:
      'Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.',
    content2:
      'Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities. Lorem ipsum dolor sit amet consectetur.',
    image:
      'https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format',
  },
  {
    title: 'Agile and adaptable',
    subtitle: 'Agile and adaptable for growth',
    content:
      'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security,',
    content2:
      'Optimize your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.',
    image:
      'https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?auto=format',
  },
  {
    title: 'Compliance ready',
    subtitle: 'Manage compliance with ease',
    content:
      'Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.',
    content2:
      'Transform your compliance strategy with flexible and diversified policy rules, powered by cutting- edge technology that is designed for seamless integration.',
    image:
      'https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?auto=format',
  },
  {
    title: 'Secure and safe',
    subtitle: 'Highly secure and safe to use',
    content:
      'Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards.',
    content2:
      'Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure. Lorem ipsum dolor sit amet consectetur.',
    image:
      'https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?auto=format',
  },
];

export default function Slider() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const slideIndex = slides.findIndex((slide) => slide.title === tab);
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(slideIndex);
    }
  };

  return (
    <>
      <section className="mt-20 max-w-7xl mx-auto px-4 md:px-16">
        <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-8">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'ghost' : 'ghost'}
              className={`font-semibold py-6 px-10 text-lg rounded-full border-none transition-all duration-300 hover:text-blue-500
                ${
                  activeTab === tab
                    ? 'bg-blue-200 shadow-sm text-blue-500'
                    : 'hover:bg-blue-50 text-blue-500'
                }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={(swiper) =>
            setActiveTab(slides[swiper.activeIndex].title)
          }
          className="rounded-xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Card className="border-gray-200 shadow-none rounded-20">
                {/* Mobile Layout */}
                <div className="lg:hidden space-y-6 p-6">
                  <h6 className="text-md font-semibold uppercase text-blue-600 tracking-wide">
                    {slide.title}
                  </h6>
                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                    {slide.subtitle}
                  </h3>
                  <div className="relative w-full aspect-[4/3]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base font-semibold leading-relaxed">
                      {slide.content}
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {slide.content2}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 p-14">
                  <CardContent className="space-y-8">
                    <h6 className="text-md pb-4 font-semibold uppercase text-blue-600 tracking-wide">
                      {slide.title}
                    </h6>
                    <h3 className="text-4xl font-semibold text-gray-900 leading-tight">
                      {slide.subtitle}
                    </h3>
                    <p className="text-gray-600 text-lg font-semibold leading-relaxed">
                      {slide.content}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {slide.content2}
                    </p>
                  </CardContent>
                  <div className="relative h-full w-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <svg
        className="max-h-[240px]  md:my-sm my-lg w-full min-h-[240px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
