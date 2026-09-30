import { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up - ByteSpace",
  description:
    "Create an account on ByteSpace to start learning or teaching courses with our global community.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <SignupForm />
    </AuthLayout>
  );
}
