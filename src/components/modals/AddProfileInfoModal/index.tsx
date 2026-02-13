import { Plus } from "lucide-react";
import { profileFields } from "../../../constants/allProfileFields";
import { useProdileFieldKeys } from "../../../store/profileFieldsKeys";
import { useState } from "react";

export default function AddProfileInfoModal() {
  const allProfileFieldKeys = Object.keys(profileFields);
  const notVisibleKeys = allProfileFieldKeys.filter(key => !useProdileFieldKeys.getState().keys.includes(key));
  const [profileInfoClicked, setProfileInfoClicked] = useState([]);
  
  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
    >
      <div className="w-md h-[70vh] flex flex-col gap-2 rounded-xl bg-(--background) border border-(--border) p-6">
        <div className="flex flex-col gap-1.5 ">
          <h2 className="tracking-tight text-xl font-bold text-(--foreground)">Informações Adicionais</h2>
          <p className="text-sm text-(--muted-foreground)">Selecione os campos que deseja adicionar</p>
        </div>
        <div className="py-4 space-x-2 space-y-2">
          {notVisibleKeys.map(item => (
            <button className="inline-flex items-center gap-1 py-2 px-3 rounded-xl border-2 border-(--border) text-(--muted-foreground) cursor-pointer hover:bg-(--popover)">
              <Plus size={18} />
              <span className="text-sm font-medium">{item}</span>
            </button>
          ))}
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}