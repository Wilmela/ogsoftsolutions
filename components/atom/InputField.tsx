"use client";

import { Input } from "../ui/input";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Eye, EyeOff} from "lucide-react";
import { useState } from "react";

type Props = {
  name: string;
  control: any;
  label: string;
  placeholder: string;
  type: "text" | "password" | "file" | "email";
  className?: string;
  inputStyle?: string;
  showIcon?: boolean;
};

const InputField = ({
  name,
  control,
  label,
  placeholder,
  type,
  className,
  inputStyle,
  showIcon,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <div className={cn(`flex flex-col space-y-1.5`, className)}>
              <FormLabel htmlFor={name} className="text-muted-foreground">
                {label}
              </FormLabel>
              <div className="relative">
                <Input
                  placeholder={placeholder}
                  id={name}
                  {...field}
                  type={showPassword ? "text" : type}
                  className={cn("", inputStyle)}
                />
                {!showPassword ? (
                  <Eye
                    onClick={() => setShowPassword((prev) => !prev)}
                    className={cn("hidden", {
                      "block w-8 absolute right-2 top-1.5 text-APP_BTN_BLUE hover:text-blue-800 cursor-pointer":
                        showIcon,
                    })}
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPassword((prev) => !prev)}
                    className={cn("hidden", {
                      "block w-8 absolute right-2 top-1.5 text-APP_BTN_BLUE hover:text-blue-800 cursor-pointer":
                        showIcon,
                    })}
                  />
                )}
              </div>
              <FormMessage />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputField;
