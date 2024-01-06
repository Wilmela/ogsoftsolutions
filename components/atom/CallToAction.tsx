"use client";

import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CallToAction = () => {
  const style =
    "rounded-md uppercase w-full xxs:w-[475px] sm:w-[200px] md:w-[210] lg:w-[220px] cursor-pointer text-white";

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center xxs:self-start">
      <Link
        className={cn(
          style,
          buttonVariants({
            variant: "default",
            size: "lg",
            className: "bg-APP_BTN_BLUE hover:bg-blue-700 dark:text-white",
          })
        )}
        href="https://megatronhms.com/#!/home/start"
        target="_blank"
      >
        Megatron for free
      </Link>

      <Link
        href="#footer"
        className={cn(
          style,
          buttonVariants({
            variant: "default",
            size: "lg",
            className: "bg-blue-500 hover:bg-blue-400 dark:text-white",
          })
        )}
      >
        Contact Us &rarr;
      </Link>
    </div>
  );
};

export default CallToAction;
