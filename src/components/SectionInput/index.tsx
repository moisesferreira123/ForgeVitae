import { ArrowDownUp, Trash2 } from "lucide-react";
import type { InputItem } from "./types";
import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import { useProdileFieldKeys } from "../../store/profileFieldsKeys";

export default function SectionInput({id, profileInfoInput, position, value, onChangeInput} : InputItem) {
  const profileFieldKeys = useProdileFieldKeys();

  function onChange(event: React.ChangeEvent<HTMLInputElement>, field: string) {
    const newValue = event.target.value;
    onChangeInput(newValue, field);
  }
  
  if(!profileInfoInput.isDraggable) return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium flex items-center gap-2">
        <span>{profileInfoInput.label}</span>
      </label>
      <input 
        id={id}
        type={profileInfoInput.type} 
        placeholder={profileInfoInput.placeholder} 
        value={value}
        onChange={(event) => onChange(event, id)}
        className="flex w-full h-10 text-sm px-3 py-2 rounded-lg bg-(--background) border border-(--input) focus:border-(--primary) focus:outline-none"
      />
    </div>
  );

  return (
    <Draggable draggableId={id} index={position} >
      {(provided) => (
        <div 
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <label htmlFor={id} className="text-sm font-medium flex items-center gap-2">
              <span>{profileInfoInput.label}</span>
            </label>
            {profileInfoInput.isRemovable && 
            <button
              onClick={() => profileFieldKeys.removeProfileFieldKey(id)}
              className="flex justify-center items-center gap-1.5 text-(--destructive) hover:text-red-500 cursor-pointer"
            >
              <Trash2 size={12} />
              <span className="text-xs">Remover</span>
            </button>
            }
          </div>
          <div className="flex gap-1">
            <input 
              id={id}
              type={profileInfoInput.type} 
              placeholder={profileInfoInput.placeholder} 
              value={value}
              onChange={(event) => onChange(event, id)}
              className="flex w-full h-10 text-sm px-3 py-2 rounded-lg bg-(--background) border border-(--input) focus:border-(--primary) focus:outline-none"
            />
            <div 
              {...provided.dragHandleProps}
              className="flex justify-center items-center w-11 h-10 rounded-lg bg-(--background) border border-(--input) cursor-grab hover:border-(--primary)"
            >
              <ArrowDownUp size={20} />
            </div> 
          </div>
        </div>
      )}
    </Draggable>
  );
}