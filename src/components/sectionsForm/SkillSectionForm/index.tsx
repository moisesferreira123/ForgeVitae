import { Brain, Plus } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import SkillTextEditor from "../../TextEditor/SkillTextEditor";
import { useResumeData } from "../../../store/resumeData";
import React, { useState } from "react";
import type { Skill, SkillSection } from "../../../pdf/types/skillTypes"; 
import SkillComp from "./Skill";

export default function SkillSectionForm() {
  const resumeData = useResumeData();
  const [skillContent, setSkillContent] = useState(localStorage.getItem('skillContent') || '');
  const [skills, setSkills] = useState<Skill[]>([...(resumeData.sections['skills'] as SkillSection).skills]);
  const [editorKey, setEditorKey] = useState(0);
  const [idUpdateSkill, setIdUpdateSkill] = useState<number|null>(null);

  function updateData(html: string) {
    setSkillContent(html);
    localStorage.setItem('skillContent', html);
  }

  function addSkill() {
    const newSkill : Skill = {
      id: Date.now(),
      content: skillContent
    }
    const newSkills = [...skills, newSkill];
    resumeData.updateResumeData({
      type: 'skills',
      skills: [...newSkills]
    })
    setSkills(newSkills);
    updateData('');
    setEditorKey(prev => prev+1);
  }

  function removeSkill(e: React.MouseEvent, skillId: number) {
    e.stopPropagation();
    const filteredSkills = skills.filter(skill => skill.id !== skillId);
    resumeData.updateResumeData({
      type: 'skills',
      skills: [...filteredSkills]
    })
    setSkills(filteredSkills);
  }

  function updateSkill(idSkill: number, newContent: string) {
    const updatedSkills = (resumeData.sections['skills'] as SkillSection).skills.map(sk => (
      sk.id === idSkill ? {...sk, content: newContent} : sk
    ));

    resumeData.updateResumeData({
      type: 'skills',
      skills: updatedSkills
    })

    setSkills(updatedSkills);
    setIdUpdateSkill(null);
  }

  function openUpdateEditor(id: number) {
    if(idUpdateSkill && idUpdateSkill === id) setIdUpdateSkill(null);
    else setIdUpdateSkill(id);
  }

  return (
    <div className="space-y-6 ">
      <HeaderForm
        title="Habilidades"
        subtitle="Adicione suas principais competências"
        Icon={Brain}
      />
      <div className="p-5 rounded-xl bg-(--card) border border-(--border) space-y-4 w-full text-(--foreground) transition-transform duration-300 hover:scale-102">
        <div className="flex flex-col gap-2">
          <label htmlFor="skill" className="text-sm font-medium leading-none pl-1">Habilidade</label>
          <SkillTextEditor
            editorKey={editorKey}
            placeholder="Digite sua habilidade..."
            minHeight={42}
            updateData={html => updateData(html)}
            handleConfirmation={addSkill}
            initialContent={skillContent}
          />
        </div>
        <button 
          className="flex h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 enabled:cursor-pointer disabled:opacity-50 disabled:cursor-default"
          disabled={(/^<p>(\s*)<\/p>$/).test(skillContent) || skillContent === ''}
          onClick={addSkill}
        >
          <Plus size={18} />
          <span>Adicionar habilidade</span>
        </button>
      </div>
      {skills.length !== 0 && 
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <SkillComp
              key={index}
              skill={skill}
              openUpdateEditor={openUpdateEditor}
              removeSkill={removeSkill}
              updateSkill={(idSkill, newContent) => updateSkill(idSkill, newContent)}
              isEditorOpen={idUpdateSkill === skill.id}
            />
          ))}
        </div>
      }
    </div>
  );
}

// TODO: Fazer botão de deleção, atualização (aparecendo um dropdown (editor simples) para atualizar) e fazer o drag and drop ao clicar nele.
// TODO: Lista de sugestão estática de habilidades