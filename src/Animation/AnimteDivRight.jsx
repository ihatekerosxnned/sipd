import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
export const AnimateDivToRight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hide: { opacity: 0, x: 50 },
        show: { opacity: 1, x: 0 },
      }}
      initial="hide"
      animate={mainControls}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
