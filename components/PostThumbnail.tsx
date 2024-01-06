import { cn, sliceText } from "@/lib/utils";
import { PostType } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import EditTab from "./atom/EditTab";

const PostThumbnail = ({
  _id,
  author,
  photo,
  date,
  title,
  category,
}: Pick<
  PostType,
  "_id" | "photo" | "author" | "photo" | "date" | "title" | "category"
>) => {
  return (
    <div className="w-full sm:w-[200px] md:w-[280px] p-4 group relative">
      <div className="w-full h-28 relative mb-6">
        <Image src={photo} fill alt="post-image" className="object-cover" />
      </div>

      <div className="flex items-center space-x-2">
        <p className={cn("poppins text-[12px] font-light text-gray-400")}>
          {sliceText(author, 16)}
        </p>
        <p className="text-[12px] font-light text-gray-400">|</p>
        <p className={cn("poppins text-[12px] font-light text-gray-400")}>
          {moment(date.toString(), "YYYYMMDD").fromNow()}
        </p>
      </div>

      <p className="poppins uppercase leading-tight font-semibold text-gray-700 min-h-[50px]">
        {sliceText(title, 55)}
      </p>

      <div className="flex items-center justify-between ">
        <p className="text-base font-light text-muted-foreground">{category}</p>
        <Link
          href={`/blog/post/${_id}`}
          className={cn(
            "poppins text-base leading-tight font-light text-gray-500 cursor-pointer group-hover:text-blue-800 z-10"
          )}
        >
          read &rarr;
        </Link>
      </div>
      {/* Overlay */}
      <div className="group-hover:absolute group-hover:inset-0 group-hover:bg-APP_RGBA_BG transition-all duration-300 ease-in rounded-md" />

      <div className="absolute top-16 right-2">
        <EditTab href={`/blog/edit/${_id}`} />
      </div>
    </div>
  );
};

export default PostThumbnail;
