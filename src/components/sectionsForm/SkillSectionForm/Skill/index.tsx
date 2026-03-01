import { GripVertical, Trash2 } from "lucide-react";
import ComponentHTML from "../../../ComponentHTML";
import type { Skill } from "../../../../pdf/types/skillTypes";
import SkillTextEditor from "../../../TextEditor/SkillTextEditor";
import { useEffect, useState } from "react";

interface SkillProps {
  skill: Skill;
  openUpdateEditor: (id: number) => void;
  removeSkill: (e: React.MouseEvent, id: number) => void;
  updateSkill: (idSkill: number, newContent: string) => void
  isEditorOpen: boolean;
}

export default function SkillComp({skill, openUpdateEditor, removeSkill, updateSkill, isEditorOpen} : SkillProps) {
  const [content, setContent] = useState(skill.content || '');

  function updateData(html: string) {
    console.log(html);
    setContent(html);
  }

  useEffect(() => { 
    function handleChangeEditorOpen() {
      setContent(skill.content);
    }

    handleChangeEditorOpen();
  }, [isEditorOpen, skill.content]);

  return (
    <div className={`space-y-1 bg-(--popover) rounded-lg border border-(--border) transition-transform duration-300 hover:scale-102`}>
      <div 
        role="button"
        tabIndex={0}
        onClick={() => openUpdateEditor(skill.id)}
        className={`flex items-center gap-2 p-3 rounded-lg bg-(--card) ${isEditorOpen ? 'border-b border-(--border)' : ''} cursor-pointer`}
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
        <div className="space-y-4 px-5 py-4">
          <SkillTextEditor
            editorKey={0}
            placeholder="Digite sua habilidade..."
            minHeight={42}
            updateData={html => updateData(html)}
            handleConfirmation={() => updateSkill(skill.id, content)}
            initialContent={skill.content}
          />
          <div className="grid grid-cols-2 w-full gap-3">
            <button 
              className="h-10 bg-red-500 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-red-500/90 cursor-pointer"
              onClick={() => openUpdateEditor(skill.id)}
            >
              Cancelar
            </button>
            <button 
              className="h-10 bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 enabled:cursor-pointer disabled:opacity-50 disabled:cursor-default"
              disabled={(/^<p>(\s*)<\/p>$/).test(content) || content === ''}
              onClick={() => updateSkill(skill.id, content)}
            >
              Atualizar
            </button>
          </div>
        </div> 
      }
    </div>
  );
}