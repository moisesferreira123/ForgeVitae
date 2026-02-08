import { ArrowLeft, Brain, BriefcaseBusiness, FileText, GraduationCap, User } from "lucide-react";
import { Link } from "react-router-dom";
import SectionSidebar from "../../components/SectionsSidebar";
import { useState } from "react";
import type { SectionItem } from "../../types/sectionItem";
import SectionRenderer from "../../components/SectionRenderer";
import ResumePreview1 from "../../components/pdf/templates/Template1/ResumePreview1";
import { PDFViewer } from "@react-pdf/renderer";
import { ResumePDF1 } from "../../components/pdf/templates/Template1/ResumePDF1";

const INITIAL_SECTION: SectionItem[] = [
  {
    id: 0,
    label: 'Pessoal',
    icon: User,
  },
  {
    id: 1,
    label: 'Resumo',
    icon: FileText,
  },
  {
    id: 2,
    label: 'Habilidades',
    icon: Brain,
  },
  {
    id: 3,
    label: 'Experiência',
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    label: 'Educação',
    icon: GraduationCap,
  },
]

export default function Resume() {
  const [sectionsList, setSectionsList] = useState<SectionItem[]>(INITIAL_SECTION);
  const [activedSectionId, setActivedSectionId] = useState<number>(0);

  const [resumeData, setResumeData] = useState({
    profile: { name: 'Moisés Ferreira', email: 'moises@email.com', phone: '(11) 99999-9999', location: 'Parnamirim, RN' },
  });

  return (
    <div className="flex min-h-screen w-full">
      <aside className="min-h-screen h-full w-64 bg-(--sidebar-background) border-r border-(--sidebar-border) p-6">
        <Link
          to={'/'}
          className="flex items-center gap-1 text-(--muted-foreground) text-sm w-17 hover:text-(--foreground) transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          <span>Voltar</span>
        </Link>
        <div className="flex items-center text-(--foreground) gap-3 mb-8">
          <div className="flex justify-center items-center bg-linear-to-br from-(--primary) to-(--accent) rounded-xl w-10 h-10">
            <FileText size={20} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">ForgeVitae</h1>
            <p className="text-xs text-(--muted-foreground)">Criador de Currículos</p>
          </div>
        </div>
        <SectionSidebar 
          sectionsList={sectionsList}
          activedSectionId={activedSectionId}
          onSelectSection={(sectionId: number) => setActivedSectionId(sectionId)}
        />
      </aside>
      <main className="flex-1 justify-center p-8">
        <div className="max-w-xl p-8 rounded-2xl bg-(--card)/70 border border-white/10 shadow-2xl text-(--foreground)">
          <SectionRenderer 
            activedSectionId={activedSectionId}
          />
        </div>
      </main>
      <aside className="flex flex-col gap-4 min-h-screen h-full w-[36.5%] bg-(--muted)/30 border-l border-(--border) p-8">
        <div className="flex justify-between items-center text-(--foreground)">
          <h2 className="font-semibold text-lg">Prévia</h2>
          <button className="flex justify-center items-center">
            {/* TODO: Colocar botão de lupa para ver o pdf melhor (Pode implementar depois)*/}
          </button>
        </div>
        <PDFViewer style={{ width: '100%', height: 'calc(297mm*0.46)' }}>
          <ResumePDF1 />
        </PDFViewer>
        <ResumePreview1 />
      </aside>
    </div>
  );
}