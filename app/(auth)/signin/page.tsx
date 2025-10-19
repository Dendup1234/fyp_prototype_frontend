"use client";

import { useState } from "react";
import AuthCard from "@/components/authcard";
import Input from "@/components/ui/input";
import PasswordInput from "@/components/ui/passwordinput";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { login } from "@/utils/api";  // 👈 import

export default function SignInPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErr(null);

        if (!form.email || !form.password) {
            setErr("Email and password are required.");
            return;
        }

        setLoading(true);
        try {
            // call your backend
            const res = await login({ email: form.email, password: form.password });

            // If your backend returns a token (for non-cookie auth), you can store it:
            // sessionStorage.setItem("token", res.token)

            // Redirect anywhere you want after login:
            router.push("/"); // e.g., dashboard/home
        } catch (error) {
            setErr(error instanceof Error ? error.message : "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            <AuthCard
                title="Sign In"
                subtitle="Welcome Back! Please enter your details"
                bg="#ffffff"
                footer={
                    <p className="text-center text-black my-3">
                        By continuing, you agree to our{" "}
                        <Link href="#" className="underline">Terms of Service</Link> and{" "}
                        <Link href="#" className="underline">Privacy Policy</Link>.
                    </p>
                }
            >
                <form onSubmit={handleSubmit} className="space-y-8">
                    <Input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                    <PasswordInput
                        placeholder="Password"
                        hint={
                            <Link href="/forgot-password" className="text-black/50 hover:underline text-sm font-medium">
                                Forgot password?
                            </Link>
                        }
                        value={form.password}
                        onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                    />

                    {err && <p className="text-sm text-red-600">{err}</p>}

                    <p className="text-xs text-center text-black/50">
                        Don’t have an account? <Link href="/signup" className="underline">Sign Up</Link>
                    </p>

                    <Divider />

                    <button
                        type="button"
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 mt-6 text-sm hover:bg-black/5"
                    >
                        <span className="inline-flex items-center gap-2">
                            <Image src="/icons/google.png" alt="Google icon" width={20} height={20} className="object-contain" />
                            <span className="text-black">Continue with Google</span>
                        </span>
                    </button>

                    <Button type="submit" className="mt-7" disabled={loading} loading={loading}>
                        {loading ? "Signing in..." : "SIGN IN"}
                    </Button>
                </form>
            </AuthCard>

            {/* right illustration card… */}
        </div>
    );
}
