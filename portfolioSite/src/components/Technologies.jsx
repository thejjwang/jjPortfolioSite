import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaAws } from "react-icons/fa";
import { MdCss } from "react-icons/md";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-cyan-500"></FaNodeJs>
        </div>
        <div className="p-4">
          <TbBrandTypescript className="text-7xl text-blue-500"></TbBrandTypescript>
        </div>
        <div className="p-4">
          <TiHtml5 className="text-7xl text-orange-500"></TiHtml5>
        </div>
        <div className="p-4">
          <MdCss className="text-7xl text-blue-500"></MdCss>
        </div>
        <div className="p-4">
          <SiExpress className="text-7xl text-white"></SiExpress>
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-green-600"></SiMongodb>
        </div>
        <div className="p-4">
          <FaAws className="text-7xl text-white"></FaAws>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
