import { useResumeData } from "../../../../store/resumeData";
import type { LanguageSection } from "../../../../types/languageTypes";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import TextEditor from "../../../TextEditor";
import OpenDropDownButton from "../../../OpenDropDownButton";
import { useState } from "react";
import DropDown from "../../../ui/DropDown";

interface LanguageFormProps {
  languageIndex: number;
  closeLanguageForm: () => void;
}

const levels = [
  'Iniciante (A1)',
  'Básico (A2)',
  'Intermediário (B1)',
  'Intermediário (B2)',
  'Avançado (C1)',
  'Fluente (C2)',
  'Nativo'
];

export default function LanguageForm({languageIndex, closeLanguageForm}: LanguageFormProps) {
  const resumeData = useResumeData();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newLanguage = {...(resumeData.sections['language'] as LanguageSection)};
    newLanguage.languages[languageIndex].language = event.target.value;
    resumeData.updateResumeData(newLanguage);
  }

  function updateData(html: string) {
    const newLanguage = {...(resumeData.sections['language'] as LanguageSection)};
    newLanguage.languages[languageIndex].description = html;
    resumeData.updateResumeData(newLanguage);
  }

  function selectLevel(level: string) {
    const newLanguage = {...(resumeData.sections['language'] as LanguageSection)};
    newLanguage.languages[languageIndex].level = level;
    setIsDropDownOpen(false);
    resumeData.updateResumeData(newLanguage);
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-5 gap-2">
        <div className="flex flex-col gap-2 col-span-3">
          <Label id="language" value="Idioma" />
          <Input 
            id="language"
            type="text"
            placeholder="Digite o idioma..."
            value={(resumeData.sections['language'] as LanguageSection).languages[languageIndex].language}
            onChange={event => onChange(event)}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <Label id="level" value="Nível" />
          <div className="relative">
            <OpenDropDownButton
              selectedItem={(resumeData.sections['language'] as LanguageSection).languages[languageIndex].level}
              isOpen={isDropDownOpen}
              onClickButton={() => setIsDropDownOpen(!isDropDownOpen)}
            />
            {isDropDownOpen && 
              <DropDown
                selectedItemIndex={levels.indexOf((resumeData.sections['language'] as LanguageSection).languages[languageIndex].level)}
                list={levels}
                onSelectButton={level => selectLevel(level)}
                onClickOutside={() => setIsDropDownOpen(false)}
              />
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label id="description" value="Detalhes adicionais" />
        <TextEditor 
          placeholder="Adicione certificações ou detalhes (ex: TOEFL, IELTS, intercâmbio...)" 
          minHeight={120} 
          updateData={html => updateData(html)} 
          initialContent={(resumeData.sections['language'] as LanguageSection).languages[languageIndex].description}
        />
      </div>
      <button 
        className="flex mt-8 h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-md font-semibold transition-colors duration-200 enabled:hover:bg-(--primary)/90 cursor-pointer"
        onClick={closeLanguageForm}
      >
        <span>Concluir</span>
      </button>
    </div>
  );
}