import { useSectionsStore } from "../../../../store/sectionsStore";
import PDFSectionRenderer from "./components/PDFSectionRenderer";

export default function ResumePreview1() {
  const sectionsStore = useSectionsStore();

  return (
    <div className="h-[calc(297mm*0.46)] flex justify-center overflow-y-auto overflow-x-hidden">
      {/* Container de Escala para caber na Aside */}
      <div className="origin-top scale-[0.46] shadow-2xl transition-transform duration-300">
        {/* A "Folha" A4 */}
        <div className="bg-white w-[210mm] h-[297mm] p-[15mm] text-[#141414] font-sans flex flex-col leading-tight space-y-4">
          {sectionsStore.ids.map((id) => (
            <PDFSectionRenderer pdfSectionId={id} />
          ))}
        </div>
      </div>
    </div>
  );
}