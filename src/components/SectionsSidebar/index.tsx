import { allSections } from "../../constants/allSections";
import { useSectionsStore } from "../../store/sectionsStore";
import SectionNavItem from "../SectionNavItem";

export default function SectionsSidebar({ activedSectionId, onSelectSection } : { activedSectionId: number, onSelectSection: (sectionId: number) => void}) {
  const sectionsStore = useSectionsStore();

  return (
    <div className="space-y-2 h-[calc(100vh-222px)] overflow-y-auto no-scrollbar py-2">
      {allSections.map((item) => {
        if(!sectionsStore.ids.includes(item.id)) return;
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