import ComponentHTML from "../../../../../../components/ComponentHTML";
import { useResumeData } from "../../../../../../store/resumeData";
import type { EducationSection } from "../../../../../types/educationTypes";

export default function Education() {
  const data = (useResumeData().sections['education'] as EducationSection).education;

  return (
    <section className="pdf-list">
      <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Formação Acadêmica</h2>
      <div  className="space-y-4">
        {data.map((education,index) => (
          <div key={`education-${index}`} className="space-y-1">
            <div className="pl-2 flex justify-between items-center">
              <div>
                <p className="text-[10pt] font-bold">{education.educationalInstitution}</p>
                <p className="text-[10pt] italic">{education.degree}</p>
              </div>
              <div className="text-right">
                {/* TODO: Criar uma função para retornar uma string com a data da forma escolhida */}
                <p className="text-[10pt] text-gray-700">{`${education.startMonth}. ${education.startYear} - ${education.endMonth !== 'Atual' ? `${education.endMonth}. ${education.endYear}`: 'Atual'}`}</p>
                <p className="text-[10pt] text-gray-700">{education.location}</p>
              </div>
            </div>
            <div className="text-[10pt] pl-2">
              <ComponentHTML HTMLstring={education.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}