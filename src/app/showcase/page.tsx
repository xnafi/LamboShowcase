import ShowCaseItems from "@/components/ShowCase/ShowCaseItems";
import { motion } from "framer-motion";

const ShowCase = ({ scrollYProgress }: any) => {
  // const scale = useTransform(scrollYProgress, [0, 100], [1, 0]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [2, -0]);
  // const opacity = useTransform(scrollYProgress, [-1, 1], [1, 1]);

  // const springScale = useSpring(scale, { stiffness: 500, damping: 50 });
  // const springRotate = useSpring(rotate, { stiffness: 500, damping: 50 });
  // const springOpacity = useSpring(opacity, { stiffness: 600, damping: 50 });

  return (
    <motion.div
      // style={{
      //   scale: springScale,
      //   rotate: springRotate,
      //   opacity: springOpacity,
      // }}
      className="relative grid w-full place-content-center bg-gradient-to-br text-slate-900 place-items-center"
    >
      <div className="flex gap-x-3 md:gap-x-4">
        <h1 className="headings text-yellow-600 mb-5">SPEEDING</h1>
        <h1 className="headings text-yellow-600 mb-5"> BEASTS</h1>
      </div>

      <ShowCaseItems />
    </motion.div>
  );
};

export default ShowCase;
