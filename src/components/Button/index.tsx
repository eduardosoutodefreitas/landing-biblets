import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import { concatStyles } from "@/utils/concatStyles";

export type ButtonSize = "large";

export type TButtonVariants = "primary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariants;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  size = "large",
  type = "button",
  className,
  ...props
}: ButtonProps) => {
  const buttonStyles = concatStyles([
    styles.button,
    styles[`size__${size}`],
    variants[`variant__${variant}`],
    className ? className : "",
  ]);

  return (
    <button type={type} className={buttonStyles} {...props}>
      {children}
    </button>
  );
};
