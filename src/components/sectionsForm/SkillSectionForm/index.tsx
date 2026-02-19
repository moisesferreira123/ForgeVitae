import HeaderForm from "../../HeaderForm";

export default function SkillSectionForm() {
  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Habilidades"
        subtitle="Adicione suas principais competências"
      />
    </div>
  );
}

// TODO: Fazer botão de deleção, atualização (aparecendo um dropdown para atualizar) e fazer o drag and drop ao clicar nele.