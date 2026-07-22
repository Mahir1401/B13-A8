'use client'

import { authClient } from "@/lib/auth-client";
import { Form, Label, Input, TextField, FieldError, Description } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignInPage() {
  const router = useRouter();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const useData = Object.fromEntries(formData.entries());
    toast.success("Successfully logged in!!");
    router.push("/");
    const { data, error } = await authClient.signIn.email({
      email: useData.email,
      password: useData.password,
    });
    console.log(data, error);
  };

  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    toast.success("Signed in with Google.");
  };

  return (
    <section className="mx-auto flex max-w-md flex-col px-5 py-20">
      <p className="text-xs uppercase tracking-widest">
        Welcome back
      </p>
      <h1 className="mt-2 text-3xl">Log In</h1>

      <Form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
        <TextField isRequired name="email" type="email" validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Please enter a valid email address" : null}>
            <Label className="text-xs uppercase tracking-widest">Email</Label>
            <Input placeholder="you@example.com" className="mt-1.5 w-full rounded-lg border border-white bg-transparent px-4 py-2.5 outline-none focus:border-oxblood" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label className="text-xs uppercase tracking-widest ">
            Password
          </Label>
          <Input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="mt-1.5 w-full rounded-lg border border-white bg-transparent px-4 py-2.5 outline-none focus:border-oxblood"
          />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>

        <button type="submit" className="btn rounded-full bg-transparent uppercase tracking-widest">
          Log In
        </button>
      </Form>

      <div className="my-6 flex items-center gap-3">
        <span className="ledger-rule flex-1" />
        <span className="text-xs uppercase tracking-widest">
          or
        </span>
        <span className="ledger-rule flex-1" />
      </div>

      <button
        onClick={handleGoogle}
        className="flex items-center justify-center btn bg-transparent rounded-full text-sm uppercase tracking-widest cursor-pointer"
      >
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm">
        New to QurbaniHat?{" "}
        <Link href="/signup" className="underline underline-offset-4 cursor-pointer">
          Create an account
        </Link>
      </p>
    </section>
  );
}
