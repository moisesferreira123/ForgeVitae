import { GripVertical, Trash2 } from "lucide-react";
import type { SectionItem } from "../../types/sectionItem";

export default function SectionNavItem( {sectionItem, isActive, onSelectSection} : {sectionItem: SectionItem, isActive: boolean, onSelectSection: (sectionId: number) => void}) {
  const {id, label, icon: Icon} = sectionItem;

  return (
    <button
      onClick={() => onSelectSection(id)}
      className={`w-full flex justify-between items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-(--primary) text-(--foreground) ' : 'text-(--muted-foreground) hover:bg-(--muted) hover:text-(--foreground)'}`}
    >
      <div className="flex items-center gap-3">
        <div className={`shrink-0 w-8 h-8 rounded-full flex justify-center items-center ${isActive ? 'bg-(--foreground)/20' : 'bg-(--muted)'}`}>
          <Icon size={16} />
        </div>
        <span className="font-medium text-sm text-start">{label}</span>
      </div>
      <div className="flex items-center gap-3 ">
        <button className="z-10 hover:text-red-400 cursor-pointer">
          <Trash2 size={16} />
        </button>
        <div 
          className={`flex flex-none z-10 justify-center items-center cursor-grab rounded-md hover:text-(--foreground)/70`}
        >
          <GripVertical size={18} />
        </div>
      </div>
    </button>
  );
}