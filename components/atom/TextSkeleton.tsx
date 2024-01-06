import { Skeleton } from "@/components/ui/skeleton";

const TextSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Skeleton className="h-6 w-full md:w-[250px]" />
      <Skeleton className="h-6 w-full md:w-[250px]" />
    </div>
  );
};

export default TextSkeleton;
