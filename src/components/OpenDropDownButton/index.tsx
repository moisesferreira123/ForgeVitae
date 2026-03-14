import { ChevronDown } from "lucide-react";

interface OpenDropDownButtonProps {
  selectedItem: string;
  isOpen: boolean;
  onClickButton: () => void;
}

export default function OpenDropDownButton({selectedItem, isOpen, onClickButton}: OpenDropDownButtonProps) {
  return (
    <button
      onClick={onClickButton}
      className="dropdown flex justify-between items-center w-full h-10 text-sm px-3 py-2 rounded-lg bg-(--background) border border-(--input) focus:border-(--primary) focus:outline-none cursor-pointer"
    >
      <span>{selectedItem}</span>
      <div className={`dropdown ${isOpen ? 'rotate-180': ''} transition-all duration-200`}>
        <ChevronDown size={16} />
      </div>
    </button>
  );
}