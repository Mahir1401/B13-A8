'use client'
import { authClient } from "@/lib/auth-client";
import { Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      image: userData.image,
      password: userData.password,
    });

    if (error) {
      toast.error("Could not create account.");
      return;
    }

    toast.success('Account created! Please check your email to verify.');
    router.push('/signin');
  };

  const handleGoogle = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });

    if (error) {
      toast.error("Google sign-in failed.");
      return;
    }

    toast.success("Signed in with Google.");
  };

  return (
    <section className="mx-auto flex max-w-md flex-col px-5 py-20">
      <p className="text-xs uppercase tracking-widest text-oxblood">Join the haat</p>
      <h1 className="mt-2 text-3xl">Register</h1>

      <Form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
        <TextField isRequired name="name" validate={(value) => value.length < 3 ? "Name must be at least 3 characters" : null}>
          <Label className="text-xs uppercase tracking-widest">Full name</Label>
          <Input placeholder="Your name" className="mt-1.5 w-full rounded-lg border border-white bg-transparent px-4 py-2.5 outline-none focus:border-oxblood" />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>

        <TextField isRequired name="email" type="email" validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Please enter a valid email address" : null}>
          <Label className="text-xs uppercase tracking-widest">Email</Label>
          <Input placeholder="you@example.com" className="mt-1.5 w-full rounded-lg border border-white bg-transparent px-4 py-2.5 outline-none focus:border-oxblood" />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label className="text-xs uppercase tracking-widest">Photo URL</Label>
          <Input placeholder="https://example.com" className="mt-1.5 w-full rounded-lg border border-white bg-transparent px-4 py-2.5 outline-none focus:border-oxblood" />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>

        <TextField isRequired minLength={8} name="password" type="password" validate={(value) => {
          if (value.length < 8) return "Password must be at least 8 characters";
          if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
          if (!/[0-9]/.test(value)) return "Password must contain at least one number";
          return null;
        }}>
          <Label className="text-xs uppercase tracking-widest">Password</Label>
          <Input type="password" placeholder="Password" className="mt-1.5 w-full rounded-lg border border-white bg-transparent px-4 py-2.5" />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>
        <div className="flex justify-center gap-3">
          <button type="submit" className="btn rounded-full bg-transparent text-sm uppercase tracking-widest cursor-pointer">Register</button>
          <button type="reset" className="btn rounded-full bg-transparent text-sm uppercase tracking-widest cursor-pointer">Reset</button>
        </div>
      </Form>

      <div className="my-6 flex items-center gap-3">
        <span className="ledger-rule flex-1" />
        <span className="text-xs uppercase tracking-widest text-ink/40">or</span>
        <span className="ledger-rule flex-1" />
      </div>

      <button onClick={handleGoogle} className="flex items-center justify-center gap-2 btn rounded-full bg-transparent text-sm uppercase tracking-widest cursor-pointer">
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm">
        Already have an account?{" "}
        <Link href="/signin" className="underline underline-offset-4">Log in</Link>
      </p>
    </section>
  );
};

export default SignUpPage;