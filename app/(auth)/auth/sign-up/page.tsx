import SignUpForm from "@/components/forms/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-up",
};

const SignUpPage = () => {
  return (
    <section className="paddingY paddingX min-h-[calc(100vh-60px)] flex flex-col items-center justify-center">
      <p className="main-heading mb-6">Sign up.</p>

      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
