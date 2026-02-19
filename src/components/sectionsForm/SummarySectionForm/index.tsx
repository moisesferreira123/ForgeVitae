import HeaderForm from "../../HeaderForm";
import TextEditor from "../../TextEditor";

export default function SummarySectionForm() {
  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Resumo"
        subtitle="Escreva um breve resumo sobre sua trajetória, habilidades principais e resultados relevantes"
      />
      <TextEditor />
    </div>
  );
}
