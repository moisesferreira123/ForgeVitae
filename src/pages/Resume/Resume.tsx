import { ArrowLeft, Brain, BriefcaseBusiness, FileText, GraduationCap, User } from "lucide-react";
import { Link } from "react-router-dom";
import SectionSidebar from "../../components/SectionsSidebar";
import { useState } from "react";
import type { SectionItem } from "../../types/sectionItem";

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
    label: 'Formação',
    icon: GraduationCap,
  },
]

export default function Resume() {
  const [sectionsList, setSectionsList] = useState<SectionItem[]>(INITIAL_SECTION);
  const [activedSectionId, setActivedSectionId] = useState<number>(0);

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
      <main className="flex justify-center items-center p-8">
        <div className="max-w-xl p-8 rounded-2xl space-y-6">
          
        </div>
      </main>
      <aside>

      </aside>
    </div>
  );
}