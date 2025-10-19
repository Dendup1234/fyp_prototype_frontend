"use client";

import { useMemo, useState } from "react";
import AuthCard from "@/components/authcard";
import PasswordInput from "@/components/ui/passwordinput";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Put your API base URL here or use an env var
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://192.168.137.1:5000/api/v1/agency";

export default function NewPasswordPage() {
    const [form, setForm] = useState({ password1: "", password2: "" });
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();
    const params = useSearchParams();

    // Prefer token from query (?token=...) then sessionStorage
    const resetToken = useMemo(() => {
        const fromQuery = params.get("token");
        if (fromQuery) return fromQuery;
        if (typeof window !== "undefined") {
            return sessionStorage.getItem("resetSessionToken") || "";
        }
        return "";
    }, [params]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErr(null);

        // Basic validations
        if (!resetToken) {
            setErr("Missing reset session token. Please restart the reset flow.");
            return;
        }
        if (!form.password1 || !form.password2) {
            setErr("Please enter and confirm your new password.");
            return;
        }
        if (form.password1 !== form.password2) {
            setErr("Passwords do not match.");
            return;
        }
        if (form.password1.length < 8) {
            setErr("Password must be at least 8 characters.");
            return;
        }

        setLoading(true);
        try {
            // If your backend route is /auth/password-reset/set-new-password, change the path below
            const res = await fetch(`${BASE_URL}/auth/password-reset`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // send cookie automatically
                body: JSON.stringify({ newPassword: form.password1 })
            });
            const text = await res.text();
            console.log(document.cookie)
            let data: any = {};
            try { data = text ? JSON.parse(text) : {}; } catch {/* non-JSON fallback */ }

            if (!res.ok) {
                throw new Error(data?.message || `Failed to reset password (${res.status})`);
            }

            alert(data?.message || "Password has been reset.");

            // Clean up
            if (typeof window !== "undefined") {
                sessionStorage.removeItem("resetSessionToken");
                sessionStorage.removeItem("resetEmail");
            }

            router.push("/signin");
        } catch (error) {
            setErr(error instanceof Error ? error.message : "Failed to reset password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[color:var(--background)]">
            <AuthCard
                title="Create New Password"
                subtitle="Enter and confirm your new password"
                bg="#ffffff"
                footer={
                    <p className="text-center text-black">
                        By continuing, you agree to our{" "}
                        <Link href="#" className="underline">Terms of Service</Link> and{" "}
                        <Link href="#" className="underline">Privacy Policy</Link>.
                    </p>
                }
            >
                <form onSubmit={handleSubmit} className="space-y-8">
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

                    {err && <p className="text-sm text-red-600">{err}</p>}

                    <Divider />
                    <Button type="submit" className="mt-7" disabled={loading} loading={loading}>
                        {loading ? "Saving..." : "CONTINUE"}
                    </Button>
                </form>
            </AuthCard>
        </div>
    );
}
