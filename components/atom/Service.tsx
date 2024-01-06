"use client";

import Image from "next/image";
import { ServiceProps } from "@/type/type";
import { useRouter } from "next/navigation";
import { MotionDiv } from "./Motion";

const Service = ({ imgPath, title, desc, }: ServiceProps) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center my-10 space-y-4 md:space-x-4"

    >
      <MotionDiv
        className="md:flex-[0.7] relative overflow-hidden w-full lg:h-[280px] md:h-[320] cursor-pointer p-4 rounded-md flex justify-center"
        whileInView={{ x: [300, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={imgPath}
          // fill
          width={200}
          height={200}
          alt="service-image"
          className="object-contain object-center"
          // sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 50vw"
        />
      </MotionDiv>

        <MotionDiv
          className="p-4 flex-1 flex flex-col cursor-pointer white-gradient dark:bg-gradient-to-tr dark:from-[#020817] dark:via-blue-900/80 dark:to-zinc-900 rounded-md space-y-2"
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h4 className="poppins gradient-text text-2xl font-bold mb-2">
            {title}
          </h4>

          <p className="p-text nunito ">
            {desc} <span className="hover:text-blue-500"       onClick={() => router.push(`/services/?id=#${title}`)}>...read more</span>
          </p>

          {/* <Button type="button" variant='link' className='w-full md:w-[200px] rounded-md text-muted-foreground' >
            <Link href={url} target='_blank'>Check the site</Link>
          </Button> */}
        </MotionDiv>
    </div>
  );
};

export default Service;
