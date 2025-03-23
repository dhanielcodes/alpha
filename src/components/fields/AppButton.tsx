"use client";
import { FC, HTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/libs/utils";

interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  placeholder: string;
  loading?: boolean;
  disabled?: boolean;
  outline?: boolean;
  secondary?: boolean;
  secondaryTwo?: boolean;
  showBorder?: boolean;
  color?: string;
  borderColor?: string;
  IconLeft?: React.ElementType;
  IconRight?: React.ElementType;
  to?: string;
  roundedFull?: boolean;
  radius?: string;
  textColor?: string;
  borderWidth?: number;
  className?: string;
}

const AppButton: FC<AppButtonProps> = ({
  onClick,
  placeholder,
  loading,
  disabled,
  outline,
  secondary,
  secondaryTwo,
  showBorder = true,
  borderColor,
  IconLeft,
  IconRight,
  to,
  roundedFull,
  radius,
  textColor = "#000",
  className,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (to) router.push(to);
    if (onClick) onClick();
  };

  const buttonClasses = cn(
    "px-4 py-2 font-semibold text-[16px] transition-all",
    disabled && "cursor-not-allowed bg-gray-400 text-white opacity-50",
    !disabled && "cursor-pointer",
    outline
      ? [
          "border-2 py-1.5 text-white",
          showBorder
            ? borderColor
              ? `border-[${borderColor}]`
              : "border-[#D0D5DD]"
            : "border-none",
          "bg-transparent",
        ]
      : secondary
      ? "bg-white text-black"
      : "bg-white text-black",
    roundedFull
      ? "rounded-full"
      : radius
      ? `rounded-[${radius}]`
      : "rounded-sm",
    className
  );

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={buttonClasses}
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {IconLeft && <IconLeft className="w-4 h-4" color={textColor} />}
          {placeholder}
          {IconRight && <IconRight className="w-4 h-4" color={textColor} />}
        </>
      )}
    </button>
  );
};

const Spinner = () => (
  <div className="animate-spin w-5 h-5 border-2 border-t-secondary border-gray-300 rounded-full" />
);

export default AppButton;
