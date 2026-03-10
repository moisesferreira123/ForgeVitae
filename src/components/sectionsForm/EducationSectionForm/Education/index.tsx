import { Draggable } from "@hello-pangea/dnd";
import type { Education } from "../../../../pdf/types/educationTypes";
import { GripVertical, Trash2 } from "lucide-react";

interface EducationProps {
  education: Education;
  position: number;
  openEducationUpdate: (id: number) => void;
  removeEducation: (e: React.MouseEvent, id: number) => void;
}

export default function EducationComp({education, position, openEducationUpdate, removeEducation} : EducationProps) {
  return (
    <Draggable draggableId={`${position}`} index={position} >
      {(provided) => (
        <div 
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`space-y-1 bg-(--popover) rounded-lg border border-(--border) hover:transition-transform hover:duration-200 hover:scale-102`}
        >
          <div 
            role="button"
            tabIndex={0}
            onClick={() => openEducationUpdate(position)}
            className={`flex items-center gap-2 p-3 rounded-lg bg-(--card) cursor-pointer`}
          >
            <div 
              {...provided.dragHandleProps}
              className="flex flex-none z-10 justify-center items-center w-8 h-8 cursor-grab rounded-md hover:bg-(--muted)"
            >
              <GripVertical size={22} />
            </div>
            <div className="flex-1 truncate">
              <p className="flex">
                {education.educationalInstitution && <span className="font-bold">{education.educationalInstitution}</span>}
                {education.degree && education.educationalInstitution && <span>{`, ${education.degree}`}</span>}
                {education.degree && !education.educationalInstitution && <span>{`${education.degree}`}</span>}
              </p>
            </div>
            <button
              onClick={(e) => removeEducation(e, position)}
              className="flex flex-none z-10 justify-center items-center w-8 h-8 cursor-pointer rounded-md text-(--destructive) hover:bg-red-400/20"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}