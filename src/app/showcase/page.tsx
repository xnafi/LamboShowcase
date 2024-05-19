import ShowCaseItems from "@/components/ShowCase/ShowCaseItems";
import ShowCaseLayout from "../layout";
// import { useSpring, useTransform, motion } from 'framer-motion';

const ShowCase = ({ scrollYProgress }: any) => {
  // const scale = useTransform(scrollYProgress, [0, 100], [1, 0]);
  // const rotate = useTransform(scrollYProgress, [0, -100], [1, 100]);
  // const springScale = useSpring(scale, { stiffness: 500, damping: 50 });
  // const springRotate = useSpring(rotate, { stiffness: 500, damping: 50 });
  return (
    <div
      // style={{ scale: springScale, rotate: springRotate }}
      className="relative grid w-full place-content-center bg-gradient-to-br text-slate-900 place-items-center"
    >
      <div className="flex gap-x-3 md:gap-x-4">
        <h1 className="headings text-yellow-600 mb-10">SPEEDING</h1>
        <h1 className="headings text-yellow-600 mb-10"> BEASTS</h1>
      </div>
      {/* showcase cars */}
      <ShowCaseItems />
    </div>
  );
};

export default ShowCase;
