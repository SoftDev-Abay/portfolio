import { React, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SlideReveal = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);
  return (
    <div ref={ref} style={{ position: "relative",zIndex: 100, }}>
      <motion.div
        variants={{
          hidded: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidded"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideReveal;
