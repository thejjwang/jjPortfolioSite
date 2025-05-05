import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const draw = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { delay: 0.2, type: 'spring', duration: 2.5, bounce: 0.2 },
        opacity: { duration: 2 },
      },
    },
  };
  
  return (
    <motion.div ref={ref}>
      <motion.svg initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
        <motion.path
          d="M26.8458 57...849 1116.78 75.4613"
          stroke="black"
          strokeWidth="16"
          strokeLinecap="round"
          variants={draw}
        />
        {/* Repeat for additional paths */}
      </motion.svg>
    </motion.div>
  );


export default AnimatedSignature;