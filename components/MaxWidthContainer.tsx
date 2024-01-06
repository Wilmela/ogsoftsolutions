import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("px-4 md:px-6 lg:px-8 mx-auto max-w-screen-xl", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthContainer;
