"use client";

import { useEffect, useMemo, useState } from "react";
import AuthCard from "@/components/authcard";
import Button from "@/components/ui/button";
import OtpInput from "@/components/ui/otpinput";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyOTP, resendOTP } from "@/utils/api";

export default function VerifyPage() {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);          // for verify
    const [resending, setResending] = useState(false);      // for resend
    const [cooldown, setCooldown] = useState(0);            // seconds remaining
    const isComplete = otp.length === 4;

    const router = useRouter();
    const params = useSearchParams();

    // Shown in subtitle (query param if present)
    const emailFromQuery = params.get("email") ?? "";

    // Load the payload saved from signup
    const payload = useMemo(() => {
        const raw = sessionStorage.getItem("pendingSignup");
        try {
            return raw
                ? (JSON.parse(raw) as {
                    organizationName: string;
                    name: string;
                    email: string;
                    password: string;
                })
                : null;
        } catch {
            return null;
        }
    }, []);

    // Decide which email to use for resend
    const emailToUse = payload?.email || emailFromQuery;

    // Cooldown countdown
    useEffect(() => {
        if (cooldown <= 0) return;
        const id = setInterval(() => setCooldown((s) => s - 1), 1000);
        return () => clearInterval(id);
    }, [cooldown]);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isComplete || !payload) return;
        setLoading(true);
        try {
            const res = await verifyOTP({
                organizationName: payload.organizationName,
                email: payload.email,
                password: payload.password,
                otp,
            });
            alert(res.message);
            sessionStorage.removeItem("pendingSignup"); // clear sensitive data
            router.push("/signin");
        } catch (err) {
            alert(err instanceof Error ? err.message : "Verification failed");
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (!emailToUse || cooldown > 0) return;
        setResending(true);
        try {
            const res = await resendOTP(emailToUse);
            alert(res.message || "OTP resent");
            setCooldown(60); // start 60s cooldown
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to resend OTP");
        } finally {
            setResending(false);
        }
    };

    return (
        <section className="min-h-dvh grid place-items-center p-4 bg-[color:var(--background)]">
            <AuthCard
                title="Verify"
                subtitle={`Code has been sent to ${emailFromQuery || payload?.email || "your email"}. Enter the code to retrieve your account`}
                bg="#ffffff"
                footer={
                    <p className="text-center text-xs text-black">
                        By continuing, you agree to our <span className="underline">Terms of Service</span> and{" "}
                        <span className="underline">Privacy Policy</span>.
                    </p>
                }
            >
                <form onSubmit={handleVerify} className="space-y-6">
                    <OtpInput length={4} onChange={setOtp} onComplete={setOtp} />

                    <div className="text-center text-sm text-black">
                        <button
                            type="button"
                            onClick={handleResend}
                            disabled={!emailToUse || resending || cooldown > 0}
                            className={[
                                "underline",
                                (!emailToUse || resending || cooldown > 0) ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                            ].join(" ")}
                        >
                            {resending ? "Sending..." : "Resend Code"}
                        </button>
                        <br />
                        <span className="text-xs">
                            {cooldown > 0 ? `Resend code in 00:${String(cooldown).padStart(2, "0")}` : "You can request a new code now"}
                        </span>
                    </div>

                    <Button
                        type="submit"
                        disabled={!isComplete || loading || !payload}
                        className={[
                            "mt-2 rounded-full",
                            !isComplete || loading || !payload
                                ? "bg-[#3A3A3A] hover:brightness-100 cursor-not-allowed"
                                : "bg-[#6B8FBC] hover:brightness-95",
                        ].join(" ")}
                    >
                        {loading ? "VERIFYING..." : "VERIFY ACCOUNT"}
                    </Button>
                </form>
            </AuthCard>
        </section>
    );
}
