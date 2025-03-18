interface Input {
  id: string;
  type: string;
  className?: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
  id,
  type,
  className,
  value,
  placeholder,
  required = false,
  onChange,
}: Input) {
  return (
    <input
      id={id}
      type={type}
      className={`border-b-2 border-[#999999] focus:border-[#000842] outline-none ${className}`}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
}
