"use client";

import { useState } from "react";
import AuthCard from "@/components/authcard";
import Button from "@/components/ui/button";
import OtpInput from "@/components/ui/otpinput";

export default function VerifyPage() {
    const [otp, setOtp] = useState("");
    const isComplete = otp.length === 4; // matches OtpInput length

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isComplete) return;
        // TODO: call backend to verify OTP
        alert(`Verifying OTP: ${otp}`);
    };

    return (
        <section className="min-h-dvh grid place-items-center p-4 bg-[color:var(--background)]">
            <AuthCard
                title="Verify"
                subtitle="Code has been sent to dorji@gmail.com. Enter the code to retrieve your account"
                bg="#ffffff"
                footer={
                    <p className="text-center text-xs text-black">
                        By continuing, you agree to our <span className="underline">Terms of Service</span> and{" "}
                        <span className="underline">Privacy Policy</span>.
                    </p>
                }
            >
                <form onSubmit={handleVerify} className="space-y-6">
                    <OtpInput
                        length={4}
                        onChange={(v) => setOtp(v)}
                        onComplete={(v) => setOtp(v)}
                    />

                    {/* Resend line (static for now) */}
                    <p className="text-center text-sm text-black">
                        Didn’t receive a code? <span className="underline cursor-pointer">Resend Code</span>
                        <br />
                        <span className="text-xs">Resend code in 00:59</span>
                    </p>

                    {/* Verify button with dynamic style */}
                    <Button
                        type="submit"
                        disabled={!isComplete}
                        className={[
                            "mt-2 rounded-full", // pill shape like your mock
                            !isComplete
                                ? "bg-[#3A3A3A] hover:brightness-100 cursor-not-allowed"
                                : "bg-[#6B8FBC] hover:brightness-95",
                        ].join(" ")}
                    >
                        VERIFY ACCOUNT
                    </Button>
                </form>
            </AuthCard>
        </section>
    );
}
