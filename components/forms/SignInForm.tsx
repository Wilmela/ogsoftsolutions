"use client";

import InputField from "@/components/atom/InputField";
import Spinner from "@/components/atom/Spinner";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { SignInType, userSignInSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Toast from "@/components/shared/Toast";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const form = useForm<SignInType>({
    resolver: zodResolver(userSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInType) => {
    setSubmitting(true);

    const { email, password } = data;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Could not sign-in. Check your network and try again");
        setSubmitting(false);
        return;
      }

      toast.success("Signed in");
      setSubmitting(false);
      form.reset();
      router.replace("/");
    } catch (e) {
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
            showIcon={true}
          />

          <Button
            disabled={submitting}
            type="submit"
            variant="default"
            className="bg-APP_BTN_BLUE w-full text-white"
          >
            Sign in with credentials {submitting && <Spinner />}
          </Button>

          <Link
            className={cn("w-full", buttonVariants({ variant: "ghost" }))}
            href="/auth/sign-up"
          >
            <p className="text-zinc-950 dark:text-white">Sign up</p>
          </Link>
        </form>
      </Form>

      <Toast />
    </>
  );
};

export default SignInForm;
