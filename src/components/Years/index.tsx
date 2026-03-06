import { useEffect, useRef, useState } from "react";

interface YearsProps {
  selectedYear: string;
  selectYear: (year: string) => void;
  startedYear?: null | string;
  changeDateModal: () => void;
}

export default function Years({selectedYear='', selectYear, startedYear=null, changeDateModal}: YearsProps) {
  const [years, setYears] = useState<string[]>([]);
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

  useEffect(() => {
    function getYears() {
      const currentYear = new Date().getFullYear();
      const newYears = [];
      let limitYear = currentYear-80;
      if(startedYear) limitYear= Number.parseInt(startedYear);

      for(let year=currentYear; year>=limitYear; year--) {
        newYears.push(year.toString());
      }
      
      setYears(newYears);
    }

    getYears();
  }, [startedYear]);
  
  return (
    <div
      ref={modalRef}
      className="absolute z-50 top-11 -left-1 w-45 max-h-48.5 grid grid-cols-3 gap-2 p-3 bg-(--card) border border-(--border) rounded-lg overflow-y-auto"
    >
      {years.map(year => (
        <button
          key={year}
          onClick={() => selectYear(year)}
          className={`flex justify-center items-center h-9 rounded-lg cursor-pointer ${selectedYear === year ? 'bg-(--primary)' : 'hover:bg-(--muted)'}`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}