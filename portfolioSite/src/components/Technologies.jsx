import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaAws } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className='p-4'
        >
          <RiReactjsLine className="text-7xl text-cyan-400 hover:scale-110 hover:shadow-lg" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl hover:scale-110 hover:shadow-lg" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-cyan-500 hover:scale-110 hover:shadow-lg"></FaNodeJs>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <TbBrandTypescript className="text-7xl text-blue-500 hover:scale-110 hover:shadow-lg"></TbBrandTypescript>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <TiHtml5 className="text-7xl text-orange-500 hover:scale-110 hover:shadow-lg"></TiHtml5>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <MdCss className="text-7xl text-blue-500 hover:scale-110 hover:shadow-lg"></MdCss>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiExpress className="text-7xl text-white hover:scale-110 hover:shadow-lg"></SiExpress>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-600 hover:scale-110 hover:shadow-lg"></SiMongodb>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaAws className="text-7xl text-white hover:scale-110 hover:shadow-lg"></FaAws>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
