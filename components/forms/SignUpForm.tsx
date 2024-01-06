"use client";

import InputField from "@/components/atom/InputField";
import Spinner from "@/components/atom/Spinner";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { userSchema, UserType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Toast from "@/components/shared/Toast";
import { createUser } from "@/lib/actions/user.action";

const SignUpForm = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const form = useForm<UserType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: UserType) => {
    setSubmitting(true);

    try {
      await createUser(data);
      toast.success("User successfully created");
      setSubmitting(false);
      form.reset();
      router.replace("/auth/sign-in");
    } catch (e) {
      toast.error("creating user unsuccessful");

      setSubmitting(false);

      throw e;
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full sm:w-8/12 md:w-6/12 lg:4/12 flex flex-col items-center gap-3 "
        >
          <InputField
            name="name"
            label="Name"
            placeholder="Enter your name"
            type="text"
            control={form.control}
          />

          <InputField
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="text"
            control={form.control}
          />

          <InputField
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            control={form.control}
          />

          <Button
            disabled={submitting}
            type="submit"
            variant="default"
            // disable={submitting}
            className="bg-APP_BTN_BLUE w-full text-white"
          >
            Sign up with credentials {submitting && <Spinner />}
          </Button>

          <Link
            className={cn("w-full", buttonVariants({ variant: "ghost" }))}
            href="/auth/sign-in"
          >
            <p className="text-zinc-950 dark:text-white">Sign in</p>
          </Link>
        </form>
      </Form>

      <Toast duration={5000} position="top-right" theme="colored" />
    </>
  );
};

export default SignUpForm;
