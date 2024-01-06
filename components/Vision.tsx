import { mission } from "@/constants/mission";
import MissionComp from "@/components/atom/MissionComp";
import { MissionProps } from "@/type/type";
import { Suspense } from "react";
import SkeletonComp from "./atom/SkeletonComp";

const Mission = async ({ imgPath, title, desc }: MissionProps) => {
  const random = Math.floor(Math.random() * 2 + 2);
  await new Promise((resolve) => setTimeout(resolve, random));

  return (
    <MissionComp key={title} imgPath={imgPath} title={title} desc={desc} />
  );
};

export default async function Vision() {
  return (
    <section className="paddingY paddingX">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-12">
        {mission.map((item) => (
          <Suspense key={item.desc} fallback={<SkeletonComp />}>
            <Mission
              imgPath={item.imgPath}
              title={item.title}
              desc={item.desc}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
