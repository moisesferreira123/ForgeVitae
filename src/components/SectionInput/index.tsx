import { ArrowDownUp } from "lucide-react";
import type { InputItem } from "./types";
import { Draggable } from "@hello-pangea/dnd";
import React from "react";

export default function SectionInput({id, type, placeholder, icon: Icon, label, isMovable, position, value, onChangeInput} : InputItem) {

  function onChange(event: React.ChangeEvent<HTMLInputElement>, field: string) {
    const newValue = event.target.value;
    onChangeInput(newValue, field);
  }
  
  if(!isMovable) return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium flex items-center gap-2">
        <Icon className="text-(--primary)" size={16} />
        <span>{label}</span>
      </label>
      <input 
        id={id}
        type={type} 
        placeholder={placeholder} 
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
          <label htmlFor={id} className="text-sm font-medium flex items-center gap-2">
            <Icon className="text-(--primary)" size={16} />
            <span>{label}</span>
          </label>
          <div className="flex gap-1">
            <input 
              id={id}
              type={type} 
              placeholder={placeholder} 
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