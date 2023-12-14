'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: JSX.Element | JSX.Element[];
  duration: number;
  delay: number
}

export const LoadReveal = ({ children, duration, delay}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: duration,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
