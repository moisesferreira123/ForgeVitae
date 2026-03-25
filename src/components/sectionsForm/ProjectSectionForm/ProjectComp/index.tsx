import { GripVertical, Trash2 } from "lucide-react";
import { Draggable } from "@hello-pangea/dnd";
import type { Project } from "../../../../types/projectType";

interface ProjectProps {
  project: Project;
  position: number;
  openProjectUpdate: (id: number) => void;
  removeProject: (e: React.MouseEvent, id: number) => void;
}

export default function ProjectComp({project, position, openProjectUpdate, removeProject} : ProjectProps) {
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
            onClick={() => openProjectUpdate(position)}
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
                <span className="font-bold">{project.name}</span>
              </p>
            </div>
            <button
              onClick={(e) => removeProject(e, position)}
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