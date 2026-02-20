import { FileText } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import TextEditor from "../../TextEditor";

export default function SummarySectionForm() {
  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Resumo"
        subtitle="Escreva um breve resumo sobre sua trajetória, habilidades principais e resultados relevantes"
      />
      <div className="space-y-2">
        <label htmlFor="summary" className="flex items-center gap-2 text-sm font-medium text-(--primary)">
          <FileText size={16} />
          <span className="text-(--foreground)">Seu Resumo</span>
        </label>
        <TextEditor placeholder="Digite seu resumo..." />
      </div>
    </div>
  );
}
