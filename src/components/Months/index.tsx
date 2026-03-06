import { useEffect, useRef } from "react";

interface MonthsProps {
  selectedMonth: string;
  selectMonth: (month: string) => void;
  changeDateModal: () => void;
}

export default function Months({selectedMonth='', selectMonth, changeDateModal}: MonthsProps) {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if(modalRef.current && !modalRef.current.contains(event.target as Node) 
          && !(event.target as HTMLElement).classList.contains('date')
        ) {
        changeDateModal();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [changeDateModal]);

  return (
    <div 
      ref={modalRef}
      className="absolute z-50 top-11 w-45 grid grid-cols-3 gap-2 p-3 bg-(--card) border border-(--border) rounded-lg"
    >
      {months.map(month => (
        <button
          key={month}
          onClick={() => selectMonth(month)}
          className={`flex justify-center items-center h-9 rounded-lg cursor-pointer ${selectedMonth === month ? 'bg-(--primary)' : 'hover:bg-(--muted)'}`}
        >
          {month}
        </button>
      ))}
    </div>
  );
}