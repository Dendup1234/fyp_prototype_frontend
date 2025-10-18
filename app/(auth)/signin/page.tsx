"use client";

import { useState } from "react";
import Card from "@/components/ui/card";
import AuthCard from "@/components/authcard";
import Input from "@/components/ui/input";
import PasswordInput from "@/components/ui/passwordinput";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function SignUpPage() {
  const [form, setForm] = useState({
    org: "",
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();


  return (
    <div className="container mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
      {/* Left panel (illustration/promo) */}
      <Card
        bg="#769FCD"
        className="hidden md:block p-8 flex flex-col justify-between"
      >
        <div className="space-y-6">
          {/* mock screenshots */}
          <div className="relative aspect-[409/266] rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-white/90">
          <Image
            src="/images/Client_lead_Overview.png"
            alt="Student management dashboard"
            fill   
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
        <div className="relative aspect-[409/266] rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-white/90">
          <Image
            src="/images/Client_Overview.png"
            alt="Student management dashboard"
            fill   
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
        
        </div>
        <p className="mt-8 text-center text-lg font-medium text-white/95 font-sans">
          The easiest way to manage students who want to apply abroad.
        </p>
      </Card>

      {/* Right panel (form) */}
      <AuthCard
        title="Sign up"
        subtitle="Please enter your details"
        // Background can be changed
        bg="#ffffff"
        footer={
          <p className="text-center text-black">
            By continuing, you agree to our{" "}
            <Link href="#" className="underline">Terms of Service</Link> and{" "}
            <Link href="#" className="underline">Privacy Policy</Link>.
          </p>
        }
      >
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/verification"); 
            alert(JSON.stringify(form, null, 2));
          }}
          className="space-y-4"
        >
          <Input
            placeholder="Organization Name"
            value={form.org}
            onChange={(e) => setForm((f) => ({ ...f, org: e.target.value }))}
          />
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          <PasswordInput
            placeholder="Password"
            hint="At least 8 characters"
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
          />

          <Divider />

          {/* Continue with Google (static) */}
          <button
            type="button"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm hover:bg-black/5"
          >
            <span className="inline-flex items-center gap-2">
              <Image
                src="/icons/google.png"
                alt="Google icon"
                width={20}
                height={20}
                className="object-contain"
                />
              <p className="text-black">Continue with Google</p>
            </span>
          </button>

          <Button type="submit" className="mt-2">SIGN UP</Button>
        </form>
      </AuthCard>
    </div>
  );
}
