import {FileText } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import TextEditor from "../../TextEditor";
import { useResumeData } from "../../../store/resumeData";
import type { SummarySection } from "../../../types/summaryTypes";

export default function SummarySectionForm() {
  const resumeData = useResumeData();

  function updateData(html: string) {
    resumeData.updateResumeData({
      type: 'summary',
      content: html
    })
  }

  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Resumo"
        subtitle="Escreva um breve resumo sobre sua trajetória, habilidades principais e resultados relevantes"
        Icon={FileText}
      />
      <div className="space-y-2">
        <label htmlFor="summary" className="flex items-center gap-2 text-sm font-medium pl-1">
          <span className="text-(--foreground)">Seu Resumo</span>
        </label>
        <TextEditor 
          placeholder="Digite seu resumo..." 
          minHeight={240} 
          updateData={html => updateData(html)} 
          initialContent={(resumeData.sections['summary'] as SummarySection).content} 
        />
      </div>
    </div>
  );
}
