import { Languages, Plus } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import { useResumeData } from "../../../store/resumeData";
import { useState } from "react";
import type { Language, LanguageSection } from "../../../types/languageTypes";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import LanguageForm from "./LanguageForm";
import LanguageComp from "./LanguageComp";

export default function LanguageSectionForm() {
  const resumeData = useResumeData();
  const [languageIndex, setLanguageIndex] = useState<number | null>(null);

  function addLanguage() {
    const newLanguages = {...(resumeData.sections['language'] as LanguageSection)};
    const language: Language = {
      language: '',
      level: 'Iniciante (A1)',
      description: ''
    };
    newLanguages.languages.push(language);
    resumeData.updateResumeData(newLanguages);
    setLanguageIndex((resumeData.sections['language'] as LanguageSection).languages.length-1);
  }

  function removeLanguage(e: React.MouseEvent, position: number) {
    e.stopPropagation();
    const filteredLanguages = [...(resumeData.sections['language'] as LanguageSection).languages];
    filteredLanguages.splice(position, 1);
    resumeData.updateResumeData({
      type: 'language',
      languages: filteredLanguages
    })
  }

  function reorder(result: DropResult) {
    if(!result.destination) return;

    const newLanguages = [...(resumeData.sections['language'] as LanguageSection).languages];
    const [reorderedLanguage] = newLanguages.splice(result.source.index, 1);
    newLanguages.splice(result.destination.index, 0, reorderedLanguage);

    resumeData.updateResumeData({
      type: 'language',
      languages: newLanguages
    })
  }

  return (
    <div className="space-y-6">
      <HeaderForm
        title="Idiomas"
        subtitle="Liste as línguas que você conhece e seu respectivo nível de domínio."
        Icon={Languages}
      />
      {languageIndex !== null ? 
        <LanguageForm 
          languageIndex={languageIndex} 
          closeLanguageForm={() => setLanguageIndex(null)}
        /> 
        :
        <div className="space-y-6">
          {(resumeData.sections['language'] as LanguageSection).languages.length !== 0 ? 
            <DragDropContext onDragEnd={reorder} >
              <Droppable droppableId="language" type="list" direction="vertical" >
                {(provided) => ( 
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-2 w-full text-center py-4"
                  >
                    {(resumeData.sections['language'] as LanguageSection).languages.map((language, index) => (
                      <LanguageComp 
                        key={index}
                        language={language}
                        position={index}
                        openLanguageUpdate={() => setLanguageIndex(index)}
                        removeLanguage={(e) => removeLanguage(e, index)}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )} 
              </Droppable>
            </DragDropContext>
            : 
            <div className="w-full text-center border-y border-(--border) py-4 text-(--muted-foreground)">Adicione um idioma</div>
          }
          <button 
            className="flex h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 cursor-pointer"
            onClick={addLanguage}
          >
            <Plus size={18} />
            <span>Adicionar idioma</span>
          </button>
        </div>
      }
    </div>
  );
}