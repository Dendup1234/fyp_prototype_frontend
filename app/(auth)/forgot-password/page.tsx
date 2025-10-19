"use client";

import { useState } from "react";
import AuthCard from "@/components/authcard";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendPasswordResetOTP } from "@/utils/api"; // 👈 use this API

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErr(null);

        if (!email) {
            setErr("Email is required.");
            return;
        }

        setLoading(true);
        try {
            // 1) call your backend to send the OTP to the email
            const res = await sendPasswordResetOTP(email);

            // 2) (optional) store email for the next page
            sessionStorage.setItem("resetEmail", email);

            // 3) go to the OTP verification page for password reset
            //    pass email in query just for display text
            alert(res.message || "A verification code has been sent to your email.");
            router.push(`verification-newpassword?email=${encodeURIComponent(email)}`);
        } catch (error) {
            setErr(error instanceof Error ? error.message : "Failed to send reset code.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            <AuthCard
                title="Forgot Password"
                subtitle="Enter your email address. We’ll send a verification code to recover your account."
                bg="#ffffff"
                footer={
                    <p className="text-center text-black my-3">
                        By continuing, you agree to our{" "}
                        <Link href="#" className="underline">Terms of Service</Link> and{" "}
                        <Link href="#" className="underline">Privacy Policy</Link>.
                    </p>
                }
            >
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                    <Input
                        type="email"                 // keep native email keyboard & validation hints
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {err && <p className="text-sm text-red-600">{err}</p>}

                    <Button type="submit" className="mt-7" disabled={loading} loading={loading}>
                        {loading ? "Sending code..." : "Send verification code"}
                    </Button>
                </form>
            </AuthCard>
        </div>
    );
}
