import { React, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";



const SlideReveal = ({ children,childrenWidth,childrenOverflow}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [inView]);
  return (
    <div ref={ref} style={{ position: "relative", width:childrenWidth ,zIndex: 100,  overflow: childrenOverflow }}>
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
      <motion.div
        variants={{
          hidded: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidded"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "#0aff9d",
        }}
      />
    </div>
  );
};

export default SlideReveal;
