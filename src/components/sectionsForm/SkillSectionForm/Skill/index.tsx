import { GripVertical, Trash2 } from "lucide-react";
import ComponentHTML from "../../../ComponentHTML";
import type { Skill } from "../../../../pdf/types/skillTypes";
import SkillTextEditor from "../../../TextEditor/SkillTextEditor";

interface SkillProps {
  skill: Skill;
  openUpdateEditor: (id: number) => void;
  removeSkill: (e: React.MouseEvent, id: number) => void;
  isEditorOpen: boolean
}

export default function Skill({skill, openUpdateEditor, removeSkill, isEditorOpen} : SkillProps) {


  return (
    <div className="space-y-1">
      <div 
        role="button"
        tabIndex={0}
        onClick={() => openUpdateEditor(skill.id)}
        className="flex items-center gap-2 p-3 rounded-lg bg-(--card)/30 border border-(--border) cursor-pointer"
      >
        <div 
          className="flex flex-none z-10 justify-center items-center w-8 h-8 cursor-grab rounded-md hover:bg-(--muted)"
        >
          <GripVertical size={22} />
        </div>
        <div className="flex-1 truncate">
          <ComponentHTML HTMLstring={skill.content} />
        </div>
        <button
          onClick={(e) => removeSkill(e, skill.id)}
          className="flex flex-none z-10 justify-center items-center w-8 h-8 cursor-pointer rounded-md text-(--destructive) hover:bg-red-400/20"
        >
          <Trash2 size={20} />
        </button>
      </div>
      {isEditorOpen &&
        <div className="space-y-4">
          <SkillTextEditor
            editorKey={0}
            placeholder="Digite sua habilidade..."
            minHeight={42}
            updateData={html => updateData(html)}
            handleConfirmation={addSkill}
            initialContent={skill.content}
          />
          <div className="grid grid-cols-2 w-full gap-3">
            <button 
            className=""
            >
              Cancelar
            </button>
            <button 
              className=""
            >
              Atualizar
            </button>
          </div>
        </div> 
      }
    </div>
  );
}