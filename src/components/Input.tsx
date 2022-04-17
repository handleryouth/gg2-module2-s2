import { InputProps } from 'types'

function Input({ label, placeholder, toggleChange, minLength, required }: InputProps) {
  const id = label.replace(' ', '').toLowerCase()
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        data-testid="custom-input"
        className="w-64 p-2 rounded"
        id={id}
        required={required}
        onChange={toggleChange}
        placeholder={placeholder}
        minLength={minLength}
      />
    </div>
  )
}

export default Input
