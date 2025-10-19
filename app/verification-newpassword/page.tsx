"use client";

import { useMemo, useState } from "react";
import AuthCard from "@/components/authcard";
import Button from "@/components/ui/button";
import OtpInput from "@/components/ui/otpinput";
import { useRouter, useSearchParams } from "next/navigation";

const BASE_URL = "http://192.168.137.1:5000/api/v1/agency"; // adjust your backend IP

export default function ResetVerifyPage() {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const isComplete = otp.length === 4;

    const router = useRouter();
    const params = useSearchParams();

    // Prefer email from sessionStorage or fallback to query param
    const email = useMemo(() => {
        const fromSession =
            typeof window !== "undefined"
                ? sessionStorage.getItem("resetEmail")
                : null;
        return fromSession || params.get("email") || "";
    }, [params]);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isComplete || !email) return;

        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/auth/password-reset/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
                credentials: "include", // 👈 important
            });

            const data = await res.json();
            console.log("Server response:", data);

            // 👇 Add this here
            console.log("Cookies in browser:", document.cookie);

            if (res.ok) {
                alert("OTP verified successfully!");
                router.push("/new-password");
            } else {
                alert(data.message || "Failed to verify OTP");
            }
        } catch (err: any) {
            alert(err.message || "An error occurred during verification");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-dvh grid place-items-center p-4 bg-[color:var(--background)]">
            <AuthCard
                title="Verify Code"
                subtitle={`A code has been sent to ${email || "your email"}. Enter it to continue.`}
                bg="#ffffff"
                footer={
                    <p className="text-center text-xs text-black">
                        By continuing, you agree to our{" "}
                        <span className="underline">Terms of Service</span> and{" "}
                        <span className="underline">Privacy Policy</span>.
                    </p>
                }
            >
                <form onSubmit={handleVerify} className="space-y-6">
                    <OtpInput length={4} onChange={setOtp} onComplete={setOtp} />

                    <p className="text-center text-sm text-black">
                        Didn’t receive a code?{" "}
                        <span className="underline cursor-pointer">Resend Code</span>
                        <br />
                        <span className="text-xs">Resend code in 00:59</span>
                    </p>

                    <Button
                        type="submit"
                        disabled={!isComplete || loading || !email}
                        className={[
                            "mt-2 rounded-full",
                            !isComplete || loading || !email
                                ? "bg-[#3A3A3A] hover:brightness-100 cursor-not-allowed"
                                : "bg-[#6B8FBC] hover:brightness-95",
                        ].join(" ")}
                    >
                        {loading ? "VERIFYING..." : "VERIFY CODE"}
                    </Button>
                </form>
            </AuthCard>
        </section>
    );
}
