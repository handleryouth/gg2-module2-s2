import { InputProps } from 'types'

const Input = ({ label, toggleChange, className, innerRef, ...rest }: InputProps) => {
  const id = label && label.replace(' ', '').toLowerCase()
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-white">
          {label}
        </label>
      )}

      <input
        data-testid="custom-input"
        onChange={toggleChange}
        className={`w-64 p-2 rounded ${className && className}`}
        id={id}
        ref={innerRef}
        {...rest}
      />
    </div>
  )
}

export default Input
