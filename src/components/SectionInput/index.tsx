import type { InputItem } from "./types";

export default function SectionInput({id, type, placeholder, icon: Icon, label} : InputItem) {
  
  return (
    <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
          <Icon className="text-(--primary)" size={16} />
          <span>{label}</span>
        </label>
        <input 
          id={id}
          type={type} 
          placeholder={placeholder} 
          className="flex w-full h-10 text-sm px-3 py-2 rounded-lg bg-(--background) border border-(--input) focus:border-(--primary) focus:outline-none"
        />
      </div>
  );
}