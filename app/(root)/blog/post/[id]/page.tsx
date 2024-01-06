import MaxWidthContainer from "@/components/MaxWidthContainer";
import AuthorProfile from "@/components/atom/AuthorProfile";
import BlogAdminBar from "@/components/atom/BlogAdminBar";
import CommentForm from "@/components/atom/CommentForm";
// import EditTab from "@/components/atom/EditTab";
import ExpressButtons from "@/components/atom/ExpressButtons";
import SingleComment from "@/components/atom/SingleComment";
import SkeletonComp from "@/components/atom/SkeletonComp";
import { buttonVariants } from "@/components/ui/button";
// import { blogPost } from "@/constants/blog";
import {
  fetchPosts,
  findCommentsByPostId,
  findPostById,
  getRelatedPosts,
} from "@/lib/actions/post.action";
import { cn } from "@/lib/utils";
import { PostType } from "@/type/type";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post: PostType = await findPostById(params.id);

  const authorsPost: PostType[] = await fetchPosts();

  const comments = await findCommentsByPostId(params.id);

  const author = authorsPost.find((p) => p.author)?.author;

  const relatedPosts = await getRelatedPosts(author!);


  return (
    <MaxWidthContainer>
      <BlogAdminBar />
      <div className="w-full min-h-[calc(100vh-10vh)]">
        <div className="w-full h-96 relative mb-6">
          <Image
            src={post!.photo}
            fill
            alt="post-image"
            className="object-cover"
          />
        </div>
        <p className="poppins uppercase font-semibold text-gray-700">
          {post!.title}
        </p>
        <p className="p-text text-gray-700">{post!.subTitle}</p>
        <div className="flex items-center space-x-2">
          <p className={cn("poppins text-[12px] font-light text-gray-400")}>
            {post!.author}
          </p>
          <p className="text-[12px] font-light text-gray-400">|</p>
          <p className={cn("poppins text-[12px] font-light text-gray-400")}>
            {moment(post!.date.toString(), "YYYYMMDD").fromNow()}
          </p>
        </div>
        <div className="md:flex flex-1 w-full">
          {/* Post body */}
          <div className="md:flex-1 py-4">
            <p className="p-text text-gray-800 pr-2 lg:text-justify">
              {post!.body}
            </p>

            {/* category badge */}
            <p className="my-2 px-2 py-1 rounded-2xl bg-gray-200  text-gray-700 dark:bg-zinc-800 dark:text-gray-500 w-fit text-[12px]">
              {post!.category}
            </p>

            {/* Like disLike Comment */}
            <div className="flex items-center space-x-2 w-full my-4">
              <ExpressButtons
                likes={post.likes}
                disLikes={post.disLikes}
                comments={post.comments.length}
                title={post!.title}
              />
            </div>

            {/* Comment Form */}
            <div className="py-4 pr-4">
              <CommentForm postId={params.id} />
            </div>

            {/* Other comments*/}
            <div>
              {comments.map((comment: any) => {
                const id = comment._id.toString();

                return <SingleComment key={id} id={id} text={comment.text} />;
              })}
            </div>
          </div>

          {/* Author's profile  Right*/}
          <div className="hidden md:flex md:flex-col items-center border-l md:flex-[0.3] flex-col px-4 py-6 sticky top-[200px]">
            <Suspense fallback={<SkeletonComp />}>
              <AuthorProfile singlePost={post} />
            </Suspense>

            <div className="my-6 w-full">
              {/* Other post links */}
              <p className="poppins text-gray-700">
                Other Posts from this author:
              </p>

              <div className="flex flex-col ">
                {relatedPosts.map((p: any) => {
                  const id = p._id.toString();
                  return (
                    <Link
                      href={`/blog/post/${id}`}
                      key={p.title}
                      className={cn(
                        "p-text capitalize text-left",
                        buttonVariants({ variant: "link" })
                      )}
                    >
                      <p className="leading-tight">{p.title}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default PostPage;
