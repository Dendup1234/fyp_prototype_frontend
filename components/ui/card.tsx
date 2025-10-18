import React, { JSX } from "react";

type CardProps = {
  children: React.ReactNode;
  bg?: string;              // e.g. "#f0f7ff" or "var(--background)"
  className?: string;
  as?: keyof JSX.IntrinsicElements; // div/section/article...
  bordered?: boolean;
  padded?: boolean;
  rounded?: boolean;
  shadow?: boolean;
};

export default function Card({
  children,
  bg,
  className = "",
  as: Tag = "div",
  bordered = true,
  padded = true,
  rounded = true,
  shadow = true,
}: CardProps) {
  return (
    <Tag
      style={bg ? { background: bg } : undefined}
      className={[
        "transition-colors",
        bordered ? "border border-black/5" : "",
        rounded ? "rounded-2xl" : "",
        shadow ? "shadow-sm" : "",
        padded ? "p-6" : "",
        "bg-background", // fallback to theme bg if no `bg`
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
