import { X } from "lucide-react";

interface DataPickerProps {
  defaultText: string;
  selectedDate: string;
  isSelected: boolean;
  onClickButton: () => void;
  clear: (e: React.MouseEvent) => void;
}

export default function DataPickerButton({defaultText, selectedDate, isSelected, onClickButton, clear}: DataPickerProps) {
  return (
    <button
      onClick={onClickButton}
      className="date flex justify-between items-center w-full h-10 text-sm px-3 py-2 rounded-lg bg-(--background) border border-(--input) focus:border-(--primary) focus:outline-none cursor-pointer"
    >
      {isSelected ?
        <span>{selectedDate}</span>
        :
        <span className="text-(--foreground)/50">{defaultText}</span>
      }
      {isSelected  &&
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