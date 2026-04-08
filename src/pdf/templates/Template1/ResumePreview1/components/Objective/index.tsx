import ComponentHTML from "../../../../../../components/ComponentHTML";
import { useResumeData } from "../../../../../../store/resumeData";
import type { ObjectiveSection } from "../../../../../../types/objectiveTypes";

export default function Objective() {
  const data = useResumeData().sections['objective'] as ObjectiveSection;

  return (
    <section className="pdf-list">
      <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Objetivo</h2>
      <div className="text-[10pt] pl-2 whitespace-pre-wrap wrap-break-word">
        <ComponentHTML HTMLstring={data.content} />
      </div>
    </section>
  );
}