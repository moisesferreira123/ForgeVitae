import type { SectionItem } from "../../types/sectionItem";
import SectionNavItem from "../SectionNavItem";

export default function SectionsSidebar({ sectionsList, activedSectionId, onSelectSection } : { sectionsList: SectionItem[], activedSectionId: number, onSelectSection: (sectionId: number) => void}) {
  return (
    <div className="space-y-2">
      {sectionsList.map((item) => (
        <SectionNavItem 
          key={item.id} 
          sectionItem={item}
          isActive={item.id === activedSectionId}
          onSelectSection={onSelectSection}
        />
      ))}
    </div>
  );
}