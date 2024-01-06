import { MissionProps } from "@/type/type";
import Image from "next/image";
import { MotionDiv } from "./Motion";

const MissionComp = ({ imgPath, title, desc }: MissionProps) => {
  return (
    <MotionDiv
      className="w-full flex flex-col bg-white border-zinc-100 shadow-md dark:bg-transparent dark:border-blue-900 dark:hover:bg-gradient-to-br from-black to-zinc-900 hover:border-[0.5px] space-y-8 p-4 h-[350px] rounded-md cursor-pointer gap-4 mb-6"
      whileInView={{
        y: [-100, 0],
        opacity: [0, 1],
      }}
      whileHover={{
        scale: 1.07,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <div className="relative w-28 h-24 overflow-hidden  self-center md:self-start">
        <Image
          src={imgPath}
          width={112}
          height={96}
          alt="mission statement"
          className="object-contain w-auto h-auto"
        />
      </div>

      <div className="space-y-4 text-center">
        <p className="poppins gradient-text font-semibold text-2xl">
          -{title}-
        </p>
        <p className="p-text">{desc}</p>
      </div>
    </MotionDiv>
  );
};

export default MissionComp;
