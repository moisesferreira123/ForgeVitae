import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  text: string;
  Icon?: LucideIcon;
  onClickButton: () => void;
}

export default function Button({text, Icon, onClickButton}: ButtonProps) {
  return (
    <button 
      className="flex h-12 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 cursor-pointer"
      onClick={onClickButton}
    >
      {Icon && <Icon size={18} />}
      <span>{text}</span>
    </button>
  )
}