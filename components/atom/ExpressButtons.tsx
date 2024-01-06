"use client";

import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown, MessageSquare, Share2 } from "lucide-react";
import { ShareButton } from "./ShareButton";
import { useState } from "react";

const ExpressButtons = ({
  likes,
  disLikes,
  comments,
  title
}: {
  likes: number;
  disLikes: number;
  comments: number;
  title: string;
}) => {
  const icon = {
    style: "text-gray-500 w-10 hover:text-blue-800 cursor-pointer",
    iconsWrapper: " flex items-center space-y-1",
    count: "text-gray-500 text-[12px]",
  };

  const [showShareIcons, setShowShareIcons] = useState(false);

  return (
    <div className="flex items-center space-x-2 w-full my-4">
      {/* <div className={`${icon.iconsWrapper}`}>
        <ThumbsUp className={`${icon.style}`} />
        <p className={`${icon.count}`}>{likes}</p>
      </div>
      <div className={`${icon.iconsWrapper}`}>
        <ThumbsDown className={`${icon.style}`} />
        <p className={`${icon.count}`}>{disLikes}</p>
      </div> */}

      <div className={`${icon.iconsWrapper}`}>
        <MessageSquare className={`${icon.style}`} />
        <p className={`${icon.count}`}>{comments}</p>
      </div>

      <div className={`${icon.iconsWrapper}`}>
        <Share2
          className={`${icon.style}`}
          onClick={() => setShowShareIcons((prev) => !prev)}
        />
        <ShareButton
        title={title}
          className={`${showShareIcons ? "flex space-x-2 items-center" : ""}`}
        />

      </div>
    </div>
  );
};

export default ExpressButtons;
