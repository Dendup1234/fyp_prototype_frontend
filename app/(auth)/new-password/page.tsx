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


export default function NewPasswordPage() {
    const [form, setForm] = useState({
        password1: "",
        password2: "",
    });
    const router = useRouter();


    return (

        <div className="min-h-screen flex items-center justify-center p-4 bg-[color:var(--background)]">
            <AuthCard
                title="Sign Up"
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
                        alert(JSON.stringify(form, null, 2));
                    }}
                    className="space-y-8"
                >
                    <PasswordInput
                        placeholder="Create New Password"
                        value={form.password1}
                        onChange={(e) => setForm((f) => ({ ...f, password1: e.target.value }))}
                    />
                    <PasswordInput
                        placeholder="Confirm Password"
                        hint="At least 8 characters"
                        value={form.password2}
                        onChange={(e) => setForm((f) => ({ ...f, password2: e.target.value }))}
                    />

                    <Divider />
                    <Button type="submit" className="mt-7 my-7">CONTINUE</Button>
                </form>
            </AuthCard>
        </div>
    );
}
