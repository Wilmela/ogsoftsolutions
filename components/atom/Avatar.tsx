import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MyAvatar({ imgUrl, alt }: { imgUrl: string; alt: string }) {
  return (
    <Avatar>
      <AvatarImage src={imgUrl} alt={alt} />
      <AvatarFallback className="text-[12px]">OGB</AvatarFallback>
    </Avatar>
  );
}
