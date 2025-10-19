"use client";

import { useEffect, useMemo, useState } from "react";
import AuthCard from "@/components/authcard";
import Button from "@/components/ui/button";
import OtpInput from "@/components/ui/otpinput";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyOTP } from "@/utils/api";

export default function VerifyPage() {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const isComplete = otp.length === 4;
    const router = useRouter();
    const params = useSearchParams();

    // For showing in the subtitle
    const emailFromQuery = params.get("email") ?? "";

    // Load the payload saved from signup
    const payload = useMemo(() => {
        const raw = sessionStorage.getItem("pendingSignup");
        try {
            return raw ? JSON.parse(raw) as {
                organizationName: string;
                name: string;
                email: string;
                password: string;
            } : null;
        } catch {
            return null;
        }
    }, []);

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

            // clear sensitive data ASAP
            sessionStorage.removeItem("pendingSignup");

            router.push("/signin");
        } catch (err) {
            alert(err instanceof Error ? err.message : "Verification failed");
        } finally {
            setLoading(false);
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

                    <p className="text-center text-sm text-black">
                        Didn’t receive a code? <span className="underline cursor-pointer">Resend Code</span>
                        <br />
                        <span className="text-xs">Resend code in 00:59</span>
                    </p>

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
