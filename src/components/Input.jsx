function Input({ label, placeholder, toggleChange, minLength }) {
  const id = label.replace(" ", "").toLowerCase();
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        className="w-64 p-2 rounded"
        id={id}
        onChange={toggleChange}
        placeholder={placeholder}
        minLength={minLength}
      />
    </div>
  );
}

export default Input;
