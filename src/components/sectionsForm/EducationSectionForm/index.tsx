import { GraduationCap, Plus } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import { useResumeData } from "../../../store/resumeData";
import { useState } from "react";
import type { Education, EducationSection } from "../../../pdf/types/educationTypes";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import EducationForm from "./EducationForm";
import EducationComp from "./Education";

export default function EducationSectionForm() {
  const resumeData = useResumeData();
  const [educationIndex, setEducationIndex] = useState<number | null>(null);

  function addEducation() {
    const newEducation = {...(resumeData.sections['education'] as EducationSection)};
    const education: Education = {
      educationalInstitution: '',
      degree: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      location: '',
      description: ''
    };
    newEducation.education.push(education);
    resumeData.updateResumeData(newEducation);
    setEducationIndex((resumeData.sections['education'] as EducationSection).education.length-1);
  }

  function removeEducation(e: React.MouseEvent, position: number) {
    e.stopPropagation();
    const filteredEducation = [...(resumeData.sections['education'] as EducationSection).education];
    filteredEducation.splice(position, 1);
    resumeData.updateResumeData({
      type: 'education',
      education: filteredEducation
    })
  }

  function reorder(result: DropResult) {
    if(!result.destination) return;

    const newEducation = [...(resumeData.sections['education'] as EducationSection).education];
    const [reorderedEducation] = newEducation.splice(result.source.index, 1);
    newEducation.splice(result.destination.index, 0, reorderedEducation);

    resumeData.updateResumeData({
      type: 'education',
      education: newEducation
    })
  }

  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Formação Acadêmica"
        subtitle="Adicione suas formações acadêmicas"
        Icon={GraduationCap}
      />
      {educationIndex !== null ? 
        <EducationForm 
          educationIndex={educationIndex} 
          closeEducationForm={() => setEducationIndex(null)}
        /> 
        :
        <div className="space-y-6">
          {(resumeData.sections['education'] as EducationSection).education.length !== 0 ? 
            <DragDropContext onDragEnd={reorder} >
              <Droppable droppableId="education" type="list" direction="vertical" >
                {(provided) => ( 
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-2 w-full text-center py-4"
                  >
                    {(resumeData.sections['education'] as EducationSection).education.map((item, index) => (
                      <EducationComp 
                        key={index}
                        education={item}
                        position={index}
                        openEducationUpdate={() => setEducationIndex(index)}
                        removeEducation={(e) => removeEducation(e, index)}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )} 
              </Droppable>
            </DragDropContext>
            : 
            <div className="w-full text-center border-y border-(--border) py-4 text-(--muted-foreground)">Adicione uma formação</div>
          }
          <button 
            className="flex h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 cursor-pointer"
            onClick={addEducation}
          >
            <Plus size={18} />
            <span>Adicionar formação</span>
          </button>
        </div>
      }
    </div>
  );
}