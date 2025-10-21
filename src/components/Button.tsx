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
      className={`bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
