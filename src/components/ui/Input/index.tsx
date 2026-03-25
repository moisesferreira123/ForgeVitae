import type { InputHTMLAttributes } from "react";

export default function Input(props : InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      {...props}
      className="flex w-full h-10 text-sm px-3 py-2 rounded-lg bg-(--background) border border-(--input) focus:border-(--primary) focus:outline-none "
    />
  );
}