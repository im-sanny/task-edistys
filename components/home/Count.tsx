'use client';
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const AnimatedNumber: React.FC<{ value: number; duration?: number }> = ({
  value,
  duration = 1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = Math.ceil(end / ((duration * 1000) / 100)); // Increment every 100ms

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {count > 0 ? count : value}
      </motion.span>
    </span>
  );
};

const Count = () => {
  return (
    <>
      <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg font-bold mb-5 text-[#0C67D0]"
        >
          TRUSTED BY THE BEST
        </motion.h1>
        <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex w-full justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800"
          >
            <div className="flex flex-col justify-center">
              <p className="text-8xl font-bold text-[#0C67D0]">
                {'>'} <AnimatedNumber value={20} />
              </p>
              <p className="capitalize">Years of Experience</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex w-full justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800"
          >
            <div className="flex flex-col justify-center">
              <p className="text-8xl font-bold text-[#0C67D0]">
                <AnimatedNumber value={40} />+
              </p>
              <p className="capitalize">Financial Institutions</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full justify-center lg:justify-start p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800"
          >
            <div className="flex flex-col justify-center">
              <p className="text-8xl font-bold text-[#0C67D0]">
                {'>'}
                <AnimatedNumber value={200} />m
              </p>
              <p className="capitalize">Million Customers</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Count;
