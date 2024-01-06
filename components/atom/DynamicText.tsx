"use client";

import { cn } from "@/lib/utils";
import ReactTyped from "react-typed";


const DynamicText = () => {
  return (
    <div className="w-full md:-mt-20">
      <h1 className={cn("text-[1.70rem] sm:text-4xl md:text-5xl lg:leading-[4.5rem] poppins-heading font-bold gradient-text leading-[2.5rem]")}>

        Meet Africa&apos;s finest in <br />
        <ReactTyped
          strings={[
            "Hospital Management",
            "Unified Payment",
            "Secure Services",
            "Quality output",
          ]}
          typeSpeed={50}
          loop
          backSpeed={15}
          cursorChar="✍️"
          showCursor={true}
        />
      </h1>
    </div>
  );
};

export default DynamicText;
