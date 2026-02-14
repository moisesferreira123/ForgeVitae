import { Check, Plus } from "lucide-react";
import { profileFields } from "../../../constants/allProfileFields";
import { useProdileFieldKeys } from "../../../store/profileFieldsKeys";
import { useState } from "react";
import { useAddProfileInfoModal } from "../../../store/modalStore";

export default function AddProfileInfoModal() {
  const notVisibleFields = Object.entries(profileFields).filter(([key, ]) => !useProdileFieldKeys.getState().keys.includes(key));
  const [profileInfoClicked, setProfileInfoClicked] = useState<string[]>([]);
  const modal = useAddProfileInfoModal();
  const profileFieldsKeys = useProdileFieldKeys();

  function addInfoKey(key: string) {
    if(profileInfoClicked.includes(key)) {
      setProfileInfoClicked(profileInfoClicked.filter(item => item !== key));
      return;
    }
    setProfileInfoClicked([...profileInfoClicked, key]);
  }

  function cancel() {
    modal.updateModal();
  }

  function done() {
    profileFieldsKeys.addProfileFieldKeys(profileInfoClicked);
    modal.updateModal();
  }
  
  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
    >
      <div className="w-md h-[70vh] flex flex-col justify-between rounded-xl bg-(--background) border border-(--border) p-6">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col gap-1.5 flex-none">
            <h2 className="tracking-tight text-xl font-bold text-(--foreground)">Informações Adicionais</h2>
            <p className="text-sm text-(--muted-foreground)">Selecione os campos que deseja adicionar</p>
          </div>
          <div className="py-4 space-x-2 space-y-2 overflow-y-auto flex-1">
            {notVisibleFields.map(([key, profileField]) => (
              <button 
                onClick={() => addInfoKey(key)}
                className={`inline-flex items-center gap-1 py-2 px-3 rounded-xl border-2 ${profileInfoClicked.includes(key) ? 'border-(--primary) text-(--primary) bg-(--primary)/10' : 'border-(--border) text-(--muted-foreground) hover:bg-(--popover)'} cursor-pointer transition-colors duration-200`}
              >
                <Plus size={18} />
                <span className="text-sm font-medium">{profileField.label}</span>
              </button>
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