"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { newsLetterSchema, EmailFormFieldType } from "@/lib/validation";
import { useState } from "react";
import Spinner from "./Spinner";
import { addEmailAddress } from "@/lib/actions/news-letter.action";
import Toast from "../shared/Toast";
import { toast } from "react-toastify";
import { MotionForm } from "./Motion";

const NewsLetterForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<EmailFormFieldType>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: EmailFormFieldType) => {
    // const {email} = data;
    try {
      setSubmitting(true);
      await addEmailAddress(data);
      toast.success("Sign up successful");
      form.reset();
      setSubmitting(false);
    } catch (e) {
      toast.error("Sign up unsuccessful");

      setSubmitting(false);
      throw e;
    }
  };
  return (
    <>
      <Form {...form}>
        <MotionForm
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center space-y-3 justify-center"
          animate={{
            y: [200, 0],
          }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-center justify-center ">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="youremail@email.com"
                    className="w-full p-4 py-5 focus:border-blue-500/50 md:w-[400px] border-[1px] border-zinc-300 bg-white shadow-md hover:bg-gray-100 cursor-pointer dark:bg-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={submitting}
            variant="default"
            type="submit"
            className="bg-APP_BTN_BLUE  text-white hover:bg-APP_BTN_BLUE/90 w-full md:w-[200px] h-[45px]"
          >
            Sign up {submitting && <Spinner />}
          </Button>
        </MotionForm>
      </Form>
      <Toast />
    </>
  );
};

export default NewsLetterForm;
