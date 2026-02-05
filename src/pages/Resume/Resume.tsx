import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SectionSidebar from "../../components/SectionSidebar";

export default function Resume() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="min-h-screen h-full w-64 bg-(--background) p-6">
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
        {/* TODO: Colocar a lista aqui */}
        <SectionSidebar />
      </aside>
      <main className="flex">

      </main>
    </div>
  );
}