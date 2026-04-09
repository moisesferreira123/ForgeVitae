import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import { allSections } from "../../constants/allSections";
import { useSectionsStore } from "../../store/sectionsStore";
import SectionNavItem from "../SectionNavItem";

export default function SectionsSidebar({ activedSectionId, onSelectSection } : { activedSectionId: number, onSelectSection: (sectionId: number) => void}) {
  const sectionsStore = useSectionsStore();

  function reorder(result: DropResult) {
    if(!result.destination) return;

    const updatedSectionsIds = [...sectionsStore.ids];
    const [reorderedsectionsIds] = updatedSectionsIds.splice(result.source.index, 1);
    updatedSectionsIds.splice(result.destination.index, 0, reorderedsectionsIds);

    sectionsStore.updateSections(updatedSectionsIds);
  }

  return (
    <div className="h-[calc(100vh-222px)] overflow-y-auto no-scrollbar py-2">
      <DragDropContext onDragEnd={reorder} >
        <Droppable droppableId="sections-nav" type="list" direction="vertical" >
          {(provided) => ( 
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-col gap-2 w-full "
            >
              {sectionsStore.ids.map((id, index) => (
                  <SectionNavItem 
                    key={id} 
                    sectionItem={allSections[id]}
                    isActive={id === activedSectionId}
                    position={index}
                    onSelectSection={onSelectSection}
                  />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}