import { BriefcaseBusiness } from "lucide-react";
import HeaderForm from "../../HeaderForm";

export default function ExperienceSectionForm() {
  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Experiência Profissional"
        subtitle="Adicione suas experiências de trabalho"
        Icon={BriefcaseBusiness}
      />
    </div>
  );
}