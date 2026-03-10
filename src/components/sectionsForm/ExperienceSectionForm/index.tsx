import { BriefcaseBusiness, Plus } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import { useResumeData } from "../../../store/resumeData";
import ExperienceForm from "./ExperienceForm";
import { useState } from "react";
import type { Experience, ExperienceSection } from "../../../pdf/types/experienceTypes";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import ExperienceComp from "./Experiece";

export default function ExperienceSectionForm() {
  const resumeData = useResumeData();
  const [experienceIndex, setExperienceIndex] = useState<number | null>(null);

  function addExperience() {
    const newExperiences = {...(resumeData.sections['experience'] as ExperienceSection)};
    const experience: Experience = {
      jobTitle: '',
      employer: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      location: '',
      description: ''
    };
    newExperiences.experiences.push(experience);
    resumeData.updateResumeData(newExperiences);
    setExperienceIndex((resumeData.sections['experience'] as ExperienceSection).experiences.length-1);
  }

  function removeExperience(e: React.MouseEvent, position: number) {
    e.stopPropagation();
    const filteredExperiences = [...(resumeData.sections['experience'] as ExperienceSection).experiences];
    filteredExperiences.splice(position, 1);
    resumeData.updateResumeData({
      type: 'experience',
      experiences: filteredExperiences
    })
  }

  function reorder(result: DropResult) {
    if(!result.destination) return;

    const newExperiences = [...(resumeData.sections['experience'] as ExperienceSection).experiences];
    const [reorderedExperience] = newExperiences.splice(result.source.index, 1);
    newExperiences.splice(result.destination.index, 0, reorderedExperience);

    resumeData.updateResumeData({
      type: 'experience',
      experiences: newExperiences
    })
  }

  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Experiência Profissional"
        subtitle="Adicione suas experiências de trabalho"
        Icon={BriefcaseBusiness}
      />
      {experienceIndex !== null ? 
        <ExperienceForm 
          experienceIndex={experienceIndex} 
          closeExperienceForm={() => setExperienceIndex(null)}
        /> 
        :
        <div className="space-y-6">
          {(resumeData.sections['experience'] as ExperienceSection).experiences.length !== 0 ? 
            <DragDropContext onDragEnd={reorder} >
              <Droppable droppableId="experience" type="list" direction="vertical" >
                {(provided) => ( 
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-2 w-full text-center py-4"
                  >
                    {(resumeData.sections['experience'] as ExperienceSection).experiences.map((experience, index) => (
                      <ExperienceComp 
                        key={index}
                        experience={experience}
                        position={index}
                        openExperienceUpdate={() => setExperienceIndex(index)}
                        removeExperience={(e) => removeExperience(e, index)}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )} 
              </Droppable>
            </DragDropContext>
            : 
            <div className="w-full text-center border-y border-(--border) py-4 text-(--muted-foreground)">Adicione uma experiência</div>
          }
          <button 
            className="flex h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 cursor-pointer"
            onClick={addExperience}
          >
            <Plus size={18} />
            <span>Adicionar experiência</span>
          </button>
        </div>
      }
    </div>
  );
}