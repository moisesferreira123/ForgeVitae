import { allSections } from "../../constants/allSections";
import SectionNavItem from "../SectionNavItem";

export default function SectionsSidebar({ sectionsList, activedSectionId, onSelectSection } : { sectionsList: number[], activedSectionId: number, onSelectSection: (sectionId: number) => void}) {
  return (
    <div className="space-y-2 h-[calc(100vh-222px)] overflow-y-auto no-scrollbar py-2">
      {allSections.map((item) => {
        if(!sectionsList.includes(item.id)) return;
        return (
          <SectionNavItem 
            key={item.id} 
            sectionItem={item}
            isActive={item.id === activedSectionId}
            onSelectSection={onSelectSection}
          />
        )
      })}
    </div>
  );
}