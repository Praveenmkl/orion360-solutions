import "./Button.css";

/**
 * variant: "primary" (yellow pill) | "link" (yellow underlined text)
 */
function Button({ href = "#", variant = "primary", className = "", children, ...rest }) {
  return (
    <a href={href} className={`btn btn--${variant} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}

export default Button;
