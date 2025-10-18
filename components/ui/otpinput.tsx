"use client";
import React, { useRef, useState, useEffect } from "react";

type OtpInputProps = {
    length?: number;                 // default 4
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    autoFocus?: boolean;
    className?: string;
};

export default function OtpInput({
    length = 4,
    onChange,
    onComplete,
    autoFocus = true,
    className = "",
}: OtpInputProps) {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        if (autoFocus && inputsRef.current[0]) inputsRef.current[0].focus();
    }, [autoFocus]);

    const update = (idx: number, val: string) => {
        const onlyDigit = val.replace(/\D/g, "");
        if (!onlyDigit) return;

        const next = [...values];
        next[idx] = onlyDigit[0]; // single char per box
        setValues(next);
        onChange?.(next.join(""));

        // move focus
        if (idx < length - 1) inputsRef.current[idx + 1]?.focus();
        // if user pasted multiple digits, fill forward
        if (onlyDigit.length > 1) {
            let j = idx + 1;
            for (let i = 1; i < onlyDigit.length && j < length; i++, j++) {
                next[j] = onlyDigit[i];
            }
            setValues(next);
            onChange?.(next.join(""));
            if (j < length) inputsRef.current[j]?.focus();
        }

        if (next.every((c) => c !== "")) onComplete?.(next.join(""));
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
        const target = e.currentTarget;
        if (e.key === "Backspace") {
            if (values[idx]) {
                const next = [...values];
                next[idx] = "";
                setValues(next);
                onChange?.(next.join(""));
                return;
            }
            if (idx > 0) inputsRef.current[idx - 1]?.focus();
        }
        if (e.key === "ArrowLeft" && idx > 0) inputsRef.current[idx - 1]?.focus();
        if (e.key === "ArrowRight" && idx < length - 1) inputsRef.current[idx + 1]?.focus();
    };

    const onPaste = (e: React.ClipboardEvent<HTMLInputElement>, idx: number) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
        if (!pasted) return;
        const next = [...values];
        let j = idx;
        for (let i = 0; i < pasted.length && j < length; i++, j++) next[j] = pasted[i];
        setValues(next);
        onChange?.(next.join(""));
        if (next.every((c) => c !== "")) onComplete?.(next.join(""));
        const nextEmpty = next.findIndex((c) => c === "");
        if (nextEmpty !== -1) inputsRef.current[nextEmpty]?.focus();
    };

    return (
        <div className={`flex items-center justify-center gap-4 ${className}`}>
            {Array.from({ length }).map((_, i) => (
                <input
                    key={i}
                    ref={(el) => {
                        inputsRef.current[i] = el;
                    }}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={values[i]}
                    onChange={(e) => update(i, e.target.value)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    onPaste={(e) => onPaste(e, i)}
                    className={[
                        "w-14 h-14 rounded-xl text-center text-xl font-semibold",
                        "border border-black/10 bg-white text-black",
                        "outline-none focus:ring-4 focus:ring-black/5",
                    ].join(" ")}
                />
            ))}
        </div>
    );
}
