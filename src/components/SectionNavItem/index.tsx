import { GripVertical, Trash2 } from "lucide-react";
import type { SectionItem } from "../../types/sectionItem";
import { useSectionsStore } from "../../store/sectionsStore";
import { Draggable } from "@hello-pangea/dnd";

interface SectionNavItemProps {
  sectionItem: SectionItem;
  isActive: boolean;
  position: number;
  onSelectSection: (sectionId: number) => void;
}

export default function SectionNavItem({sectionItem, isActive, position, onSelectSection} : SectionNavItemProps) {
  const {id, label, icon: Icon} = sectionItem;
  const sectionsStore = useSectionsStore();

  function removeSection(e: React.MouseEvent) {
    e.stopPropagation();
    sectionsStore.removeSection(id);
    if(isActive) onSelectSection(sectionsStore.ids[position-1]);
  }

  if(id === 0) return (
    <div className={`w-full`}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectSection(id)}
        className={`w-full flex justify-between items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-(--primary) text-(--foreground) ' : 'text-(--muted-foreground) hover:bg-(--muted) hover:text-(--foreground)'}`}
      >
        <div className="flex items-center gap-3">
          <div className={`shrink-0 w-8 h-8 rounded-full flex justify-center items-center ${isActive ? 'bg-(--foreground)/20' : 'bg-(--muted)'}`}>
            <Icon size={16} />
          </div>
          <span className="font-medium text-sm text-start">{label}</span>
        </div>
      </div>
    </div>
  );
  

  return (
    <Draggable draggableId={`${position}`} index={position} >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`w-full`}
        >
          <div
            role="button"
            tabIndex={0}
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
              <button 
                onClick={removeSection}
                className="z-10 hover:text-red-400 cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
              <div 
                {...provided.dragHandleProps}
                className={`flex flex-none z-10 justify-center items-center cursor-grab rounded-md hover:text-(--foreground)/70`}
              >
                <GripVertical size={18} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}