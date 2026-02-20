import ComponentHTML from "../../../../../../components/ComponentHTML";
import { useResumeData } from "../../../../../../store/resumeData";
import type { SummarySection } from "../../../../../types/summaryTypes";

export default function Summary() {
  const data = useResumeData().sections['summary'] as SummarySection;

  return (
    <section className="summary">
      <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Resumo</h2>
      <div className="text-[10pt] pl-2 whitespace-pre-wrap wrap-break-word">
        <ComponentHTML HTMLstring={data.content} />
      </div>
    </section>
  );
}