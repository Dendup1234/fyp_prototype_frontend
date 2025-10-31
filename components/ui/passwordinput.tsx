"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    hint?: React.ReactNode;
};
export default function PasswordInput({ label, hint, className = "", ...props }: Props) {
    const [show, setShow] = useState(false);
    return (
        <label className="block">
            {label && <span className="mb-2 block text-sm text-foreground/80">{label}</span>}
            <div className="relative">
                <input
                    {...props}
                    type={show ? "text" : "password"}
                    className={[
                        "w-full rounded-xl border border-[#B9D7EA] bg-[#FFFFFF]",
                        "px-4 py-3 pr-11 outline-none",
                        "focus:ring-4 focus:ring-[#769FCD]/30",
                        "text-[#000000]",
                        "placeholder:text-slate-300",
                        className,
                    ].join(" ")}
                />
                <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground/80"
                    aria-label={show ? "Hide password" : "Show password"}
                >
                    <Image
                        src={show ? "/icons/eye_closed.png" : "/icons/eye_opened.png"}
                        alt={show ? "Hide password" : "Show password"}
                        width={20}
                        height={20}
                        className="opacity-70 hover:opacity-100 transition"
                    />
                </button>
            </div>
            {hint && <p className="mt-1 text-xs text-black/30">{hint}</p>}
        </label>
    );
}
