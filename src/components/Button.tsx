import { ComponentPropsWithoutRef, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

type button_type = {
  type_button?: "primary" | "secondary" | "link" | "submit";
  size?: "small" | "large" | "medium" | "full";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  children: ReactNode;
  href?: string;
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;
const Button = ({
  type_button = "primary",
  size = "medium",
  icon,
  onClick,
  href = "#",
  isLoading = false,
  children,
  ...props
}: button_type) => {
  if (type_button == "link") {
    return (
      <Link to={href} className={`button ${type_button} ${size}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type_button == "submit" ? "submit" : "button"}
        onClick={onClick}
        className={`button ${
          isLoading ? "loading" : ""
        } ${type_button} ${size}`}
        {...props}
      >
        <span className="flex gap-1 items-center justify-center">
          {isLoading ? (
            "Vui lòng chờ"
          ) : (
            <>
              {icon}
              {children}
            </>
          )}
        </span>
      </button>
    );
  }
};

export default Button;
