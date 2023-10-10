interface InputProps {
  placeholder?: string
  value?: string
  type?: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className='w-full p-4 text-lg dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-600 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition dark:disabled:bg-neutral-900 disabled:bg-neutral-700  disabled:opacity-70 disabled:cursor-not-allowed'
    />
  )
}

export default Input
