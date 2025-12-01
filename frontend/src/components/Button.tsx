import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "disabled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const baseStyle =
  "border-2 inline-flex border-orange-500 rounded-full my-auto px-4 py-2 font-bold text-slate-700 cursor-pointer ";

const variantStyle: Record<ButtonVariant, string> = {
  primary: "bg-orange-500 text-white",
  disabled: "bg-gray-300 text-black/80 cursor-not-allowed disabled",
};

export default function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        baseStyle,
        "text-sm",
        variant && variantStyle[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
