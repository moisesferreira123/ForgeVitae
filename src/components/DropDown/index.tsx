import { useEffect, useRef } from "react";

interface DropDownProps {
  selectedItemIndex: number;
  list: string[];
  onSelectButton: (item: string) => void;
  onClickOutside: () => void;
}

export default function DropDown({selectedItemIndex, list, onSelectButton, onClickOutside}: DropDownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node) 
        && !(event.target as HTMLElement).classList.contains('dropdown')
      ) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [onClickOutside]);
  
  return (
    <div 
      ref={dropdownRef}
      className="absolute top-11 z-10 w-50 h-40 overflow-auto rounded-lg bg-(--popover) border border-(--border)"
    >
      {list.map((item, index) => (
        <button 
          className={`w-full text-left px-4 py-2 border-b border-b-(--border) first:rounded-t-lg last:rounded-b-lg last:border-none cursor-pointer ${selectedItemIndex === index ? 'bg-(--primary)' : 'hover:bg-(--secondary)'}`}
          onClick={() => onSelectButton(item)}
        >
          <span className="text-sm font-medium">{item}</span>
        </button>
      ))}
    </div>
  );
}