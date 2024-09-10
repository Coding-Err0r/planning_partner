"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  htmlFor: string;
  label: string;
  placeholder: string;
  selectLabel: string;
  _onChange(value: string): void;
  data: { title: string; value: string }[];
}

const CustomSelect = ({
  htmlFor,
  label,
  placeholder,
  selectLabel,
  data,
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
      <Select onValueChange={(value: any) => _onChange(value)}>
        <SelectTrigger className="w-full focus:outline-none focus:ring-0 active:outline-none active:ring-0">
          <SelectValue
            placeholder={placeholder}
            className="placeholder-text-gray-300"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{selectLabel}</SelectLabel>
            {data.map((_d: any, index: number) => (
              <SelectItem value={_d.value} key={index}>
                {_d.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
