import { Check, X } from "lucide-react";
import { allSections } from "../../../constants/allSections";
import { useSectionsStore } from "../../../store/sectionsStore";
import { useAddSectionModal } from "../../../store/modalStore";
import SectionToAdd from "./SectionsToAdd";
import { useState } from "react";

export default function AddSectionModal() {
  const sectionsStore = useSectionsStore();
  const notVisibleSections = allSections.filter(section => !sectionsStore.ids.includes(section.id));
  const [clickedSectionsIds, setClickedSectionsIds] = useState<number[]>([]);
  const modal = useAddSectionModal();

  function addSectionId(id: number) {
    if(clickedSectionsIds.includes(id)) {
      setClickedSectionsIds(clickedSectionsIds.filter(item => item !== id));
      return;
    }
    setClickedSectionsIds([...clickedSectionsIds, id]);
  }

  function cancel() {
    modal.updateModal();
  }
  
  function done() {
    sectionsStore.addSections(clickedSectionsIds);
    modal.updateModal();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-section-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
    >
      <div className="relative w-4xl h-[80vh] flex flex-col justify-between rounded-xl bg-(--background) border border-(--border) p-6">
        <button 
          onClick={cancel}
          className="absolute top-4 right-4 text-(--foreground) hover:text-red-400 cursor-pointer"
        >
          <X />
        </button>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col gap-1.5 flex-none">
            <h2 id="add-section-modal-title" className="tracking-tight text-xl font-bold text-(--foreground)">Adicionar Seções</h2>
            <p className="text-sm text-(--muted-foreground)">Selecione as seções que deseja adicionar</p>
          </div>
          <div className="grid grid-cols-3 gap-3 py-4">
            {notVisibleSections.map((section) => (
              <SectionToAdd 
                key={`section-to-add-${section.id}`}
                section={section}
                isSelectedSection={clickedSectionsIds.includes(section.id)}
                addSection={() => addSectionId(section.id)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 text-(--foreground) font-medium">
          <button
            onClick={cancel}
            className="flex justify-center items-center px-4 h-10 text-sm rounded-lg hover:bg-(--secondary) cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={done}
            className="flex justify-center items-center gap-2 px-4 h-10 bg-(--primary) text-sm rounded-lg hover:bg-(--primary)/90 cursor-pointer"
          >
            <Check size={16} />
            Concluído
          </button>
        </div>
      </div>
    </div>
  );
}