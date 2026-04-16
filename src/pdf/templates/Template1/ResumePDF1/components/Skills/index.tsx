import ComponentHTML from "../../../../../../components/ComponentHTML";
import { useResumeData } from "../../../../../../store/resumeData";
import type { SkillSection } from "../../../../../../types/skillTypes";

export default function Skills() {
  const data = (useResumeData().sections['skills'] as SkillSection).skills;

  return (
    <section className="pdf-list">
      <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Habilidades</h2>
      <div className="pl-2">
        <ul className="text-[10pt] whitespace-pre-wrap wrap-break-word">
          {data.map((skill) => (
            <li key={skill.id}>
              <ComponentHTML HTMLstring={skill.content} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}