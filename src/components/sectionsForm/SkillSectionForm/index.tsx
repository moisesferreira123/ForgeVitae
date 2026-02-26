import { Brain, GripVertical, Plus, SquarePen, Trash2 } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import SimplifiedTextEditor from "../../TextEditor/SimplifiedTextEditor";
import { useResumeData } from "../../../store/resumeData";
import { useState } from "react";
import type { Skill, SkillSection } from "../../../pdf/types/skillTypes";

export default function SkillSectionForm() {
  const resumeData = useResumeData();
  const [skillContent, setSkillContent] = useState(localStorage.getItem('skillContent') || '');
  const [skills, setSkills] = useState<Skill[]>([...(resumeData.sections['skills'] as SkillSection).skills])

  function updateData(html: string) {
    setSkillContent(html);
    localStorage.setItem('skillContent', html);
  }

  function addSkill() {
    const newSkill : Skill = {
      id: skills.length,
      content: skillContent
    }
    const newSkills = [...skills, newSkill];
    setSkills(newSkills);
    updateData('');
  }

  return (
    <div className="space-y-6">
      <HeaderForm
        title="Habilidades"
        subtitle="Adicione suas principais competências"
        Icon={Brain}
      />
      <div className="p-5 rounded-xl bg-(--card)/50 border border-(--border) space-y-4 w-full text-(--foreground)">
        <div className="flex flex-col gap-2">
          <label htmlFor="skill" className="text-sm font-medium leading-none pl-1">Habilidade</label>
          <SimplifiedTextEditor
            placeholder="Digite sua habilidade..."
            minHeight={42}
            updateData={html => updateData(html)}
            addSkill={addSkill}
            initialContent={skillContent}
          />
        </div>
        <button 
          className="flex h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 enabled:cursor-pointer disabled:opacity-50 disabled:cursor-default"
          disabled={skillContent === '<p></p>' || skillContent === ''}
          onClick={addSkill}
        >
          <Plus size={18} />
          <span>Adicionar habilidade</span>
        </button>
      </div>
      {skills.length !== 0 && <div className="space-y-2">
        {skills.map(skill => (
          <div key={skill.id} className="flex items-center gap-2 p-3 rounded-lg bg-(--card)/30 border border-(--border)">
            <div className="flex flex-none justify-center items-center w-8 h-8 cursor-grab rounded-md hover:bg-(--muted)"><GripVertical size={22} /></div>
            <div className="flex-1 truncate">{skill.content}</div>
            <button className="flex flex-none justify-center items-center w-8 h-8 cursor-pointer rounded-md hover:bg-(--muted) "><SquarePen size={20} /></button>
            <button className="flex flex-none justify-center items-center w-8 h-8 cursor-pointer rounded-md text-(--destructive) hover:bg-red-400/20"><Trash2 size={20} /></button>
          </div>
        ))}
      </div>}
    </div>
  );
}

// TODO: Fazer botão de deleção, atualização (aparecendo um dropdown (editor simples) para atualizar) e fazer o drag and drop ao clicar nele.
// TODO: Lista de sugestão estática de habilidades
// TODO: Será feito com título da habilidade e descrição. A parte de sugestão vai estar no título