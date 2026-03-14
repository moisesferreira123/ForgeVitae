import { Target } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import TextEditor from "../../TextEditor";
import { useResumeData } from "../../../store/resumeData";
import type { ObjectiveSection } from "../../../types/objectiveTypes";

export default function ObjectiveSectionForm() {
  const resumeData = useResumeData();

  function updateData(html: string) {
    resumeData.updateResumeData({
      type: 'objective',
      content: html
    })
  }

  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Objetivo"
        subtitle="Apresente seu objetivo profissional de forma objetiva"
        Icon={Target}
      />
      <div className="space-y-2">
        <label htmlFor="objective" className="flex items-center gap-2 text-sm font-medium pl-1">
          <span className="text-(--foreground)">Seu Objetivo</span>
        </label>
        <TextEditor 
          placeholder="Digite seu objetivo..." 
          minHeight={240} 
          updateData={html => updateData(html)} 
          initialContent={(resumeData.sections['objective'] as ObjectiveSection).content} 
        />
      </div>
    </div>
  );
}
