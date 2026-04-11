import type { SectionItem } from "../../../../types/sectionItem";

interface SectionToAddProps {
  section: SectionItem;
  isSelectedSection: boolean;
  addSection: () => void;
}

export default function SectionToAdd({section, isSelectedSection, addSection} : SectionToAddProps) {
  const {label, icon: Icon, description} = section;

  return (
    <button 
      onClick={addSection}
      className={`flex flex-col gap-3 p-3 rounded-xl border-2 ${isSelectedSection ? 'border-(--primary) text-(--primary) bg-(--primary)/10' : 'border-(--border) text-(--muted-foreground) hover:bg-(--popover)'} cursor-pointer transition-colors duration-200`}
    >
      <h3 className={`flex items-center gap-3 ${isSelectedSection ? 'text-(--primary-dark)' : 'text-(--foreground)'}`}>
        <Icon size={20} />
        <span className="text-xl">{label}</span>
      </h3>
      <span className="text-start text-sm">{description}</span>
    </button>
  );
}