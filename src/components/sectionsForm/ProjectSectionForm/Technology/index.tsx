import { X } from "lucide-react";

interface TechnologyProps {
  technology: string;
  position: number;
  onRemoveTechnology: (index: number) => void;
}
const bgColors = [
  'bg-blue-500',
  'bg-red-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500'
]

export default function Technology({technology, position, onRemoveTechnology}: TechnologyProps) {
  return (
    <div className={`flex justify-center items-center gap-2 ${bgColors[position%4]} px-2 py-1 rounded-xl`}>
      <span className="mb-0.5 text-sm font-semibold break-all">{technology}</span>
      <button 
        onClick={() => onRemoveTechnology(position)}
        className="cursor-pointer hover:text-neutral-300"
      >
        <X size={16} />
      </button>
    </div>
  );
}