"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { addComment } from "@/lib/actions/post.action";
import { CommentType } from "@/type/type";
import { CommentProps, PostCommentSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "./Spinner";
import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../shared/Toast";

const CommentForm = ({ postId }: { postId: string }) => {
  const form = useForm<CommentProps>({
    resolver: zodResolver(PostCommentSchema),
    defaultValues: {
      text: "",
      postId: postId,
    },
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: Omit<CommentType, "id">) => {
    setSubmitting(true);
    try {
      await addComment(data);
      setSubmitting(false);
      toast.success("Comment Added");
      form.reset();
    } catch (error) {
      setSubmitting(false);
      toast.error("Failed to add comment");
      throw error;
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-10/12 lg:w-9/12"
      >
        <FormField
          name="text"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add comment</FormLabel>
              <FormControl>
                <Textarea {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-2 mt-2">
          <Button
            disabled={submitting}
            type="submit"
            variant="secondary"
            className="bg-APP_BTN_BLUE hover:bg-blue-700 text-white"
          >
            Comment {submitting ? <Spinner /> : null}
          </Button>

          <Button
            disabled={submitting}
            type="reset"
            variant="ghost"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
        </div>
      </form>
      <Toast />
    </Form>
  );
};

export default CommentForm;
