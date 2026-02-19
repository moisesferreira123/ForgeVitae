import type { SectionItem } from "../../types/sectionItem";

export default function SectionNavItem( {sectionItem, isActive, onSelectSection} : {sectionItem: SectionItem, isActive: boolean, onSelectSection: (sectionId: number) => void}) {
  const {id, label, icon: Icon} = sectionItem;

  return (
    <button
      onClick={() => onSelectSection(id)}
      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-(--primary) text-(--foreground) ' : 'text-(--muted-foreground) hover:bg-(--muted) hover:text-(--foreground)'}`}
    >
      <div className={`w-8 h-8 rounded-full flex justify-center items-center ${isActive ? 'bg-(--foreground)/20' : 'bg-(--muted)'}`}>
        <Icon size={16} />
      </div>
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}