import { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import SignInForm from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In - ByteSpace",
  description:
    "Sign in to your ByteSpace account to access your courses, community, and teaching studio.",
};

export default function SignInPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <SignInForm />
    </AuthLayout>
  );
}
