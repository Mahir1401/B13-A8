"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Form, Label, Input, TextField, FieldError } from "@heroui/react";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.updateUser({
      image: userData.image,
      name: userData.name,
    });

    if (error) {
      toast.error("Could not update profile.");
      return;
    }

    toast.success("Profile updated.");
    router.push("/my-profile");
    router.refresh();
  };

  return (
    <section className="mx-auto max-w-lg px-5 py-20">
      <Link
        href="/my-profile"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink/50"
      >
        <ArrowLeft size={14} /> Back to profile
      </Link>

      <h1 className="mt-6 text-3xl">Update Information</h1>

      <Form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white/40 p-8">
        <TextField isRequired name="name" className="flex flex-col">
          <Label className="text-xs uppercase tracking-widest text-ink/50">Full name</Label>
          <Input
            placeholder="Your name"
            className="mt-1.5 w-full rounded-lg border border-ink/15 bg-transparent px-4 py-2.5 outline-none focus:border-oxblood"
          />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>
        <TextField
        isRequired name="image" className="flex flex-col">
          <Label className="text-xs uppercase tracking-widest text-ink/50">Photo URL</Label>
          <Input
            placeholder="https://example.com"
            className="mt-1.5 w-full rounded-lg border border-ink/15 bg-transparent px-4 py-2.5 outline-none focus:border-oxblood"
          />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>

        <button
          type="submit"
          className="mt-2 rounded-full bg-oxblood py-3 text-sm uppercase tracking-widest"
        >
          Update Information
        </button>
      </Form>
    </section>
  );
};

export default UpdateProfilePage;