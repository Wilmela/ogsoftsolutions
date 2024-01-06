import MaxWidthContainer from "@/components/MaxWidthContainer";
import FaQAccordion from "@/components/atom/FaQAccordion";
import { Metadata } from "next";
import Image from "next/image";
// import QandA from "@/components/atom/QandA";

export const metadata: Metadata = {
  title: "Faq",
};
const FaqPage = () => {
  return (
    <MaxWidthContainer className="paddingY">
      <h1 className="main-heading">Faq</h1>
      <h3 className="main-desc">Things you should know</h3>

      <div className="w-full self-center lg:flex lg:gap-4 flex-1">
        <div className="lg:flex-[0.4] w-[600px] h-[600px] relative hidden lg:block">
          <Image src="/faq.png" fill alt="faq image" className="object-cover" />
        </div>

        <div className="flex-1">
          <FaQAccordion />
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default FaqPage;
