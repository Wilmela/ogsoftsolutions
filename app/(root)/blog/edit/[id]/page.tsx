import MaxWidthContainer from "@/components/MaxWidthContainer";
import PostForm from "@/components/atom/PostForm";
import { findPostById } from "@/lib/actions/post.action";

const PostEditPage = async ({ params: {id} }: { params: { id: string } }) => {
  const post = await findPostById(id);
  
  return (
  
    <MaxWidthContainer className="paddingY">
      <div className="w-full sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto flex flex-col space-y-2">
      <PostForm post={post} type="Update" />
      </div>
    </MaxWidthContainer>
  );
};

export default PostEditPage;
