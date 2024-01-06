import DynamicText from "./atom/DynamicText";
import Introduction from "./atom/Introduction";
import CallToAction from "./atom/CallToAction";
import AnimatedReviews from "./atom/AnimatedReview";
import { Suspense } from "react";
import TextSkeleton from "./atom/TextSkeleton";
import MaxWidthContainer from "./MaxWidthContainer";

/**
 * This component renders the hero page
 * @returns
 */
const Hero = async () => {
  return (
    <MaxWidthContainer className="flex flex-col md:flex-row h-[calc(100vh-56px)] 2xl:h-[calc(100vh-60vh)] w-full items-center pt-[30px] mb-12 sm:pt-[50px] md:pt-0 paddingY relative">
      {/* Left */}
      <div className="w-full flex-1 flex flex-col md:items-start gap-5 md:pr-8">
        {/* Major title */}

        <DynamicText />

        {/* A brief about text */}
        <Suspense fallback={<TextSkeleton />}>
          <Introduction />
        </Suspense>

        {/* Call to action button */}
        <CallToAction />

        {/* Customer alert */}
        <Suspense fallback={<TextSkeleton />}>
          <AnimatedReviews />
        </Suspense>
      </div>

      {/* <div className='gradient absolute inset-0'/> */}
    </MaxWidthContainer>
  );
};

export default Hero;
