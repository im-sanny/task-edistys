'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

interface FloatingIcon {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  style?: React.CSSProperties;
}

const FloatingIconComponent: React.FC<FloatingIcon> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
}) => (
  <motion.figure
    className={className}
    style={style}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: [0, -20, 0] }}
    transition={{
      opacity: { duration: 1 },
      y: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
    }}
  >
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={`${width}px`}
      className="object-contain w-full h-full"
      loading="lazy"
    />
  </motion.figure>
);

const Customer: React.FC = () => {
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

  const floatingIcons: FloatingIcon[] = [
    {
      src: 'https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg',
      alt: 'anybass',
      width: 116,
      height: 115,
      className:
        'absolute top-[10%] right-[2%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl',
      style: { '--motion-translateX': '50%' } as React.CSSProperties,
    },
    {
      src: 'https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg',
      alt: 'anypass',
      width: 89,
      height: 88,
      className:
        'absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl',
    },
    {
      src: 'https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg',
      alt: 'anycaas',
      width: 74,
      height: 75,
      className:
        'absolute top-[20%] left-[6%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl',
      style: { '--motion-translateX': '-50%' } as React.CSSProperties,
    },
  ];

  return (
    <>
      <section className="container mt-[62px]">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="mx-16 p-0">
            <div className="md:grid md:grid-cols-2 md:gap-[15px] flex flex-col relative">
              <div className="flex flex-col md:space-y-sm space-y-8">
                <div className="space-y-8">
                  <h3 className="text-blue-500 text-md font-semibold tracking-wide uppercase">
                    POWERING THE FUTURE OF FINANCE
                  </h3>
                  <h1 className="text-3xl lg:text-6xl font-semibold">
                    Uncovering new ways to delight customers
                  </h1>
                </div>

                <div
                  ref={containerRef}
                  className="block relative h-fit lg:text-clip md:hidden mb-8"
                >
                  <Card
                    className="w-[76%] mx-auto border-none overflow-hidden"
                    style={{ boxShadow: '0px 23px 30px 0px #16437763' }}
                  >
                    <CardContent className="p-0">
                      <Image
                        src="/assets/customer.png"
                        width="1124"
                        height="1364"
                        alt="POWERING THE FUTURE OF FINANCE"
                        className="object-cover w-full h-full"
                        sizes="(min-width: 1024px) 45vw, 95vw"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>

                  <div>
                    {floatingIcons.map((icon) => (
                      <FloatingIconComponent key={icon.alt} {...icon} />
                    ))}
                  </div>

                  <motion.figure
                    className="absolute inset-0 w-full h-full -z-10"
                    animate={{ y: [-10, 10, -10] }}
                    style={{ y: backgroundY }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <img
                      className="object-cover w-full h-full overflow-visible"
                      loading="lazy"
                      src="/assets/pSvg1.svg"
                      alt="background frame"
                    />
                  </motion.figure>

                  <motion.figure
                    className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                    animate={{ y: [-15, 15, -15] }}
                    style={{ y: foregroundY }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <img
                      className="object-cover w-full h-full overflow-visible"
                      loading="lazy"
                      src="/assets/pSvg2.svg"
                      alt="foreground frame"
                    />
                  </motion.figure>
                </div>

                <div className="space-y-8">
                  <p className="text-muted-foreground">
                    AnyTech is revolutionising financial technology by
                    introducing innovative and real-time transaction account
                    processing capabilities, specifically designed for retail
                    financial services.
                  </p>
                  <p className="text-muted-foreground">
                    Our modern approach surpasses traditional banking and card
                    processing systems, empowering you with the most advanced
                    technology for lasting success.
                  </p>
                </div>
              </div>

              <div
                ref={containerRef}
                className="hidden md:block relative h-fit lg:text-clip"
              >
                <Card
                  className="w-[76%] mx-auto border-none overflow-hidden"
                  style={{ boxShadow: '0px 23px 30px 0px #16437763' }}
                >
                  <CardContent className="p-0">
                    <Image
                      src="/assets/customer.png"
                      width="1124"
                      height="1364"
                      alt="POWERING THE FUTURE OF FINANCE"
                      className="object-cover w-full h-full"
                      sizes="(min-width: 1024px) 45vw, 95vw"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>

                <div>
                  {floatingIcons.map((icon) => (
                    <FloatingIconComponent key={icon.alt} {...icon} />
                  ))}
                </div>

                <motion.figure
                  className="absolute inset-0 w-full h-full -z-10"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <img
                    className="object-cover w-full h-full overflow-visible"
                    loading="lazy"
                    src="/assets/pSvg1.svg"
                    alt="background frame"
                  />
                </motion.figure>

                <motion.figure
                  className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                  animate={{ y: [-15, 15, -15] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <img
                    className="object-cover w-full h-full overflow-visible"
                    loading="lazy"
                    src="/assets/pngLine.png"
                    alt="foreground frame"
                  />
                </motion.figure>

                {/* <motion.figure
                  className="absolute h-[50%] w-[50%] z-10 -bottom-[8%] right-[20%]"
                  animate={{ y: [-15, 15, -15] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <img
                    className="object-cover w-full h-full overflow-visible"
                    loading="lazy"
                    src="/assets/pSvg2.svg"
                    alt="foreground frame"
                  />
                </motion.figure> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <svg
        className="max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
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
};

export default Customer;
