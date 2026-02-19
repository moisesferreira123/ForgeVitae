import { ArrowDownUp, Link, Trash2 } from "lucide-react";
import type { InputItem } from "./types";
import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import { useProdileFieldKeys } from "../../store/profileFieldsKeys";
import { useLinkModal } from "../../store/modalStore";
import LinkModal from "../modals/LinkModal";
import { useResumeData } from "../../store/resumeData";

export default function SectionInput({id, profileInfoInput, position, value, onChangeInput} : InputItem) {
  const profileFieldKeys = useProdileFieldKeys();
  const linkModal = useLinkModal();
  const resumeData = useResumeData();

  function onChange(event: React.ChangeEvent<HTMLInputElement>, field: string) {
    const newValue = event.target.value;
    onChangeInput(newValue, field);
  }

  function removeInput() {
    onChangeInput('', id);
    const link = resumeData.sections['profile'].fields[id].link;
    if(link) {
      const newResumeData = {...resumeData};
      newResumeData.sections['profile'].fields[id].link = '';
      resumeData.updateResumeData(newResumeData.sections);
    }
    profileFieldKeys.removeProfileFieldKey(id);
  }

  function openModal() {
    if(linkModal.updateIdModal) linkModal.updateIdModal(id);
    linkModal.updateModal();
  }
  
  if(!profileInfoInput.isDraggable) return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
            <label htmlFor={id} className="text-sm font-medium flex items-center gap-2">
              <span>{profileInfoInput.label}</span>
            </label>
            {profileInfoInput.isRemovable && 
            <button
              onClick={removeInput}
              className="flex justify-center items-center gap-1.5 text-(--destructive) hover:text-red-500 cursor-pointer"
            >
              <Trash2 size={12} />
              <span className="text-xs">Remover</span>
            </button>
            }
          </div>
      <input 
        id={id}
        type={profileInfoInput.type} 
        placeholder={profileInfoInput.placeholder} 
        value={value}
        onChange={(event) => onChange(event, id)}
        className="flex w-full h-10 text-sm px-3 py-2 rounded-lg bg-(--background) border border-(--input) focus:border-(--primary) focus:outline-none placeholder:text-(--muted-foreground) "
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
              onClick={removeInput}
              className="flex justify-center items-center gap-1.5 text-(--destructive) hover:text-red-500 cursor-pointer"
            >
              <Trash2 size={12} />
              <span className="text-xs">Remover</span>
            </button>
            }
          </div>
          <div className="flex gap-1">
            <div className="w-full relative flex items-center">
              <input 
                id={id}
                type={profileInfoInput.type} 
                placeholder={profileInfoInput.placeholder} 
                value={value}
                onChange={(event) => onChange(event, id)}
                className="flex w-full h-10 text-sm px-3 py-2 rounded-lg bg-(--background) border border-(--input) focus:border-(--primary) focus:outline-none placeholder:text-(--muted-foreground) "
              />
              {profileInfoInput.isLinkable &&
                <button 
                  onClick={openModal}
                  className="link absolute right-2 h-6 px-2 rounded-md bg-(--muted) border border-(--border) cursor-pointer hover:text-(--primary)"
                >
                  <Link size={16} />
                </button>
              }
              {linkModal.isOpen && linkModal.id === id && 
                <LinkModal linkId={id} linkName={profileInfoInput.label} />
              }
            </div>
            <div 
              {...provided.dragHandleProps}
              className="flex justify-center items-center w-11 h-10 rounded-lg bg-(--background) border border-(--input) cursor-grab hover:border-(--primary) hover:text-(--primary)"
            >
              <ArrowDownUp size={20} />
            </div> 
          </div>
        </div>
      )}
    </Draggable>
  );
}