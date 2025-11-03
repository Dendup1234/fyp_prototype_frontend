"use client";
//Fixed git issues
import { useEffect, useMemo, useState } from "react";
import AuthCard from "@/components/authcard";
import PasswordInput from "@/components/ui/passwordinput";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { setNewPassword } from "@/utils/api";

export default function NewPasswordPage() {
    const [form, setForm] = useState({ password1: "", password2: "" });
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();
    const params = useSearchParams();

    // Prefer token from query (?token=...) then sessionStorage
    const resetToken = useMemo(() => {
        const fromQuery = params.get("token")?.trim() || "";
        if (fromQuery) return fromQuery;
        if (typeof window !== "undefined") {
            return (sessionStorage.getItem("resetSessionToken") || "").trim();
        }
        return "";
    }, [params]);

    // If token arrived via URL, persist it so refresh still works
    useEffect(() => {
        if (typeof window !== "undefined") {
            const fromQuery = params.get("token")?.trim();
            if (fromQuery) {
                sessionStorage.setItem("resetSessionToken", fromQuery);
            }
        }
    }, [params]);

    const passwordsMatch = form.password1 === form.password2;
    const passMinLen = form.password1.length >= 8;
    const canSubmit = !!resetToken && passMinLen && passwordsMatch && !loading;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErr(null);

        if (!resetToken) {
            setErr("Missing reset session token. Please restart the reset flow.");
            return;
        }
        if (!form.password1 || !form.password2) {
            setErr("Please enter and confirm your new password.");
            return;
        }
        if (!passwordsMatch) {
            setErr("Passwords do not match.");
            return;
        }
        if (!passMinLen) {
            setErr("Password must be at least 8 characters.");
            return;
        }

        setLoading(true);
        try {
            const data = await setNewPassword({
                resetSessionToken: resetToken,
                newPassword: form.password1,
            });

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
                    {/* Token warning if missing */}
                    {!resetToken && (
                        <p className="text-xs rounded-md bg-yellow-100 border border-yellow-300 p-2 text-yellow-900">
                            Missing reset token. Make sure you came from the “Verify OTP” step
                            and that it redirected you with <code>?token=...</code>.
                        </p>
                    )}

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

                    <Button type="submit" className="mt-7" disabled={!canSubmit} loading={loading}>
                        {loading ? "Saving..." : "CONTINUE"}
                    </Button>
                </form>
            </AuthCard>
        </div>
    );
}
