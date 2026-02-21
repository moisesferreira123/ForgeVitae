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

// TODO: Fazer botão de deleção, atualização (aparecendo um dropdown (editor simples) para atualizar) e fazer o drag and drop ao clicar nele.
// TODO: Lista de sugestão estática de habilidades
// TODO: Será feito com título da habilidade e descrição. A parte de sugestão vai estar no título