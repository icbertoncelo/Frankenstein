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
      className={`px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
