import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = "",
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 60,
        filter: "blur(10px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)"
      } : {}}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;