import ComponentHTML from "../../../../../../components/ComponentHTML";
import { useResumeData } from "../../../../../../store/resumeData";
import type { ExperienceSection } from "../../../../../types/experienceTypes";

export default function Experience() {
  const data = (useResumeData().sections['experience'] as ExperienceSection).experiences;

  return (
    <section className="pdf-list">
      <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Experiência</h2>
      <div  className="space-y-4">
        {data.map((experience,index) => (
          <div key={`experience-${index}`} className="space-y-1">
            <div className="pl-2 flex justify-between items-center">
              <div>
                <p className="text-[10pt] font-bold">{experience.jobTitle}</p>
                <p className="text-[10pt] italic">{experience.employer}</p>
              </div>
              <div className="text-right">
                {/* TODO: Criar uma função para retornar uma string com a data da forma escolhida */}
                <p className="text-[10pt] text-gray-700">{`${experience.startMonth}. ${experience.startYear} - ${experience.endMonth !== 'Atual' ? `${experience.endMonth}. ${experience.endYear}`: 'Atual'}`}</p>
                <p className="text-[10pt] text-gray-700">{experience.location}</p>
              </div>
            </div>
            <div className="text-[10pt] pl-2">
              <ComponentHTML HTMLstring={experience.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}