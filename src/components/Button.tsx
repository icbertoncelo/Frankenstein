interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
  onClick,
  children,
  className,
  ...rest
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
