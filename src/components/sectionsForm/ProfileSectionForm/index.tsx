import HeaderForm from "../../HeaderForm";
import SectionInput from "../../SectionInput";
import { useState } from "react";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import { useProdileFieldKeys, useResumeData } from "../../../store/resumeData";
import { Plus } from "lucide-react";

const movableProfileInformationsInitial = [
  {
    id: "phone",
    type: "tel",
    placeholder: "(99)99999-9999",
    label: "Telefone",
    isMovable: true
  },
  {
    id: "email",
    type: "email",
    placeholder: "moises@email.com",
    label: "Email",
    isMovable: true
  },
  {
    id: "location",
    type: "text",
    placeholder: "São Paulo, SP",
    label: "Localização",
    isMovable: true
  },
];

export default function ProfileSectionForm() {
  const [movableProfileInformations, setMovableProfileInformations] = useState(movableProfileInformationsInitial);
  const resumeData = useResumeData();
  const profileFieldKeys = useProdileFieldKeys();
  
  function reorder(result: DropResult) {
    if(!result.destination) return;

    const resultList = Array.from(movableProfileInformations);
    const [reorderedItem] = resultList.splice(result.source.index, 1);
    resultList.splice(result.destination.index, 0, reorderedItem);

    const newKeys = [...profileFieldKeys.keys];
    const [reorderedKeys] = newKeys.splice(result.source.index+1, 1);
    newKeys.splice(result.destination.index+1, 0, reorderedKeys);

    setMovableProfileInformations(resultList);
    profileFieldKeys.updateProfileFieldKeys(newKeys);
  }

  function onChangeInput(newValue: string, field: string) {
    const newProfileData = {...resumeData.sections};
    newProfileData['profile'].fields[field].value = newValue;
    resumeData.updateResumeData(newProfileData);
  }

  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Informações Pessoais"
        subtitle="Preencha seus dados de contato"
      />
      <div className="space-y-5">
        <SectionInput 
          id="name"
          type="text"
          placeholder="Moisés Ferreira"
          label="Nome e Sobrenome"
          isMovable={false}
          position={0}
          value={resumeData.sections['profile'].fields["name"].value}
          onChangeInput={(newValue: string, field: string) => onChangeInput(newValue, field)}
        />
        <div>
          <DragDropContext onDragEnd={reorder} >
            <Droppable droppableId="inputProfile" type="list" direction="vertical" >
              {(provided) => (
                <div 
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-col  gap-5"
                >
                  {movableProfileInformations.map((item, index) => (
                    <SectionInput
                      key={item.id}
                      id={item.id}
                      type={item.type}
                      placeholder={item.placeholder}
                      label={item.label}
                      isMovable={item.isMovable}
                      position={index}
                      value={resumeData.sections['profile'].fields[item.id].value}
                      onChangeInput={(newValue: string, field: string) => onChangeInput(newValue, field)}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <button className="w-full flex justify-center items-center text-(--primary) font-medium text-sm gap-2 py-2.5 transition-colors duration-300 border-2 border-dashed border-(--primary)/30 rounded-lg bg-(--background) mt-8 hover:bg-(--primary)/5 hover:border-(--primary)/50 hover:text-(--foreground) cursor-pointer">
        <Plus size={16} />
        <span>Adicionar informações</span>
      </button>
    </div>
  );
}