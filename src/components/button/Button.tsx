import { ButtonProps } from 'types'

function Button({ className, children, toggleFunction, type }: ButtonProps) {
  return (
    <button
      onClick={toggleFunction}
      type={type}
      data-testid="button"
      className={`border-2  px-2 rounded hover:bg-black hover:border-black hover:text-white transition-colors text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
