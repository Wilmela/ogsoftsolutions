import SignInForm from "@/components/forms/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-in",
};

const SignInPage = () => {

  return (
    <section className="paddingY paddingX min-h-[calc(100vh-60px)] flex flex-col items-center justify-center">
      <p className="main-heading mb-6">Sign in.</p>

      <SignInForm />
    </section>
  );
};

export default SignInPage;
