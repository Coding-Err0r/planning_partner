"use client";

import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  htmlFor: string;
  label: string;
  placeholder: string;
  type: string;
  _onChange(value: string): void | any;
}
const CustomInput = ({
  htmlFor,
  label,
  placeholder,
  type,
  _onChange,
}: Props) => {
  return (
    <div className="relative z-0 lg:px-2 w-full group">
      <label
        htmlFor={htmlFor}
        className="font-mono uppercase font-semibold text-base text-gray-800 dark:text-gray-300 bg-white relative px-1 top-2 left-0 w-auto group-focus-within:text-gray-600"
      >
        {label}
      </label>
      <input
        type={type}
        className="h-12 text-10 bg-gray-50 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#00e0a4] focus:border-[#00e0a4] block w-full p-2.5 focus:outline-[#00e0a4]"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          _onChange(event.target.value)
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
