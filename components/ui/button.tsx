import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  full?: boolean;
  loading?: boolean;
};
export default function Button({ full = true, loading, children, className = "", ...rest }: Props) {
  return (
    <button
      {...rest}
      className={[
        "rounded-xl px-4 py-3 font-medium",
        "bg-[#6B8FBC] text-white hover:brightness-95 active:brightness-90",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "font-sans",
        full ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
