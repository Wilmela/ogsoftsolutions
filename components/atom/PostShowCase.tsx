"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Suspense, useState } from "react";
import PostThumbnail from "../PostThumbnail";
import SkeletonComp from "./SkeletonComp";

const PostShowCase = ({ blogPost }: { blogPost: any[] }) => {
  const [selectedCat, setSelectedCat] = useState("general");

  let filteredPost;
  if (selectedCat === "general") {
    filteredPost = blogPost;
  } else {
    filteredPost = blogPost.filter((post) => post.category === selectedCat);
  }

  return (
    <div>
      <div className="flex items-center justify-between mt-12 mb-6">
        <p>Recent posts</p>
        <SelectComp
          value={selectedCat}
          onValueChange={(v) => setSelectedCat(v)}
        />
      </div>

      {blogPost.length > 0 ? (
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-8 mb-6">
          {filteredPost.map((post: any) => {
            return (
              <Suspense fallback={<SkeletonComp />} key={post.title}>
                <PostThumbnail
                  _id={post._id}
                  author={post.author}
                  photo={post.photo}
                  title={post.title}
                  date={post.date.toString()}
                  category={post.category}
                />
              </Suspense>
            );
          })}
        </div>
      ) : (
        <div className="h-[calc(100vh-60vh)] xl:h-auto flex items-center justify-center">
          <p className="p-text">No post to show.</p>
        </div>
      )}
    </div>
  );
};

export default PostShowCase;

export const SelectComp = ({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (v: string) => void;
}) => {
  // const selectOptions = [
  //   { title: "All", value: "all" },
  //   { title: "Tech", value: "tech" },
  //   { title: "Business", value: "business" },
  //   { title: "Health", value: "health" },
  // ];
  return (
    <Select
      name="selected_cat"
      value={value}
      onValueChange={onValueChange}
      defaultValue="all"
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="general">General</SelectItem>
        <SelectItem value="tech">Tech</SelectItem>
        <SelectItem value="business">Business</SelectItem>
        <SelectItem value="health">Health</SelectItem>
      </SelectContent>
    </Select>
  );
};
