import { X } from "lucide-react";

interface DataPickerProps {
  defaultText: string;
  selectedDate: string;
  isSelected: boolean;
  onClickButton: () => void;
  clear: (e: React.MouseEvent) => void;
  disabled: boolean;
}

export default function DataPickerButton({defaultText, selectedDate, isSelected, onClickButton, clear, disabled}: DataPickerProps) {
  return (
    <button
      onClick={onClickButton}
      disabled={disabled}
      className="date flex justify-between items-center w-full h-10 text-sm px-3 py-2 rounded-lg enabled:bg-(--background) disabled:bg-(--background)/60 border border-(--input) focus:border-(--primary) focus:outline-none enabled:cursor-pointer"
    >
      {isSelected && !disabled ?
        <span>{selectedDate}</span>
        :
        <span className="text-(--foreground)/50">{defaultText}</span>
      }
      {isSelected && !disabled  &&
        <button 
          onClick={(e) => clear(e)}
          className="date mt-0.5 z-20 text-red-400 hover:text-red-500 cursor-pointer"
        >
          <X className="date" size={16}/>
        </button>
      }
    </button>
  );
}