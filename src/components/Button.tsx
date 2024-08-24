import { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

type button_type = {
  type?: "primary" | "secondary" | "link";
  size?: "small" | "large" | "medium";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  children: ReactNode;
  href?: string;
};
const Button = ({
  type = "primary",
  size = "medium",
  icon,
  onClick,
  href = "#",
  children,
}: button_type) => {
  if (type == "link") {
    return (
      <Link to={href} className={`button ${type} ${size}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={`button ${type} ${size}`}>
        <span className="flex gap-1 items-center justify-center">
          {icon}
          {children}
        </span>
      </button>
    );
  }
};

export default Button;
