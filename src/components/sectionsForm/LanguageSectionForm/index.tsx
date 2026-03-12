import { Earth } from "lucide-react";
import HeaderForm from "../../HeaderForm";

export default function LanguageSectionForm() {
  return (
    <div className="space-y-6">
      <HeaderForm
        title="Idiomas"
        subtitle="Liste as línguas que você conhece e seu respectivo nível de domínio."
        Icon={Earth}
      />
      
    </div>
  );
}