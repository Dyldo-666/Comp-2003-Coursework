interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost"
}

export function Button({ variant = "solid", className, ...rest }: ButtonProps) {
  const base = "px-4 py-2 text-sm font-medium rounded transition"

  const styles = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-50"
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...rest} />
  )
}
