import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};
export default function Input({ label, hint, error, className = "", ...props }: Props) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-sm text-foreground/80">{label}</span>}
      <input
        {...props}
        className={[
          "w-full rounded-xl border border-[#B9D7EA] bg-[#FFFFFF]",
          "px-4 py-3 outline-none",
          "focus:ring-4 focus:ring-[#769FCD]/30",
          "text-[#000000]",
          "placeholder:text-slate-300",
          error ? "border-red-300 bg-white" : "",
          className,
        ].join(" ")}
      />
      {hint && !error && <p className="mt-1 text-xs text-foreground/50">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </label>
  );
}
