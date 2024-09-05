"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

interface Props {
  htmlFor: string;
  label: string;
  placeholder: string;
  _onChange(value: any): void;
}

const DatePicker = ({ htmlFor, label, placeholder, _onChange }: Props) => {
  const [value, setValue] = useState<any>("");
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="relative z-0 lg:px-2 w-full group  flex flex-col">
      <label
        htmlFor={htmlFor}
        className="font-mono uppercase font-semibold text-base text-gray-800 dark:text-gray-300 bg-white relative px-1 top-2 left-0 w-fit group-focus-within:text-gray-600"
      >
        {label}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full pl-3 text-left font-normal h-12 border-gray-300"
            )}
          >
            {value ? format(value, "PPP") : <span>{placeholder}</span>}

            <CalendarIcon className="ml-auto h-4 w-4 opacity-50 mr-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(event: any) => {
              setValue(event);
              _onChange(event);
            }}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
