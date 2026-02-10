import { Mail, MapPin, Phone, User } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import SectionInput from "../../SectionInput";
import { useState } from "react";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import type { ResumeData } from "../../../pdf/types/resumeData";

const movableProfileInformationsInitial = [
  {
    id: "phone",
    type: "tel",
    placeholder: "(99)99999-9999",
    icon: Phone,
    label: "Telefone",
    isMovable: true
  },
  {
    id: "email",
    type: "email",
    placeholder: "moises@email.com",
    icon: Mail,
    label: "Email",
    isMovable: true
  },
  {
    id: "location",
    type: "text",
    placeholder: "São Paulo, SP",
    icon: MapPin,
    label: "Localização",
    isMovable: true
  },
];

export default function ProfileSectionForm({data, onFieldChange} : {data:ResumeData, onFieldChange: (newResumeData: ResumeData) => void}) {
  const [movableProfileInformations, setMovableProfileInformations] = useState(movableProfileInformationsInitial);
  const [profileData, setProfileData] = useState(data);
  
  function reorder(result: DropResult) {
    if(!result.destination) return;

    const resultList = Array.from(movableProfileInformations);
    const [reorderedItem] = resultList.splice(result.source.index, 1);
    resultList.splice(result.destination.index, 0, reorderedItem);

    setMovableProfileInformations(resultList);
  }

  function onChangeInput(newValue: string, field: string) {
    const newProfileData = {...profileData};
    newProfileData.sections['profile'].fields[field].value = newValue;
    setProfileData(newProfileData);
    onFieldChange(newProfileData);
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
          icon={User}
          label="Nome e Sobrenome"
          isMovable={false}
          position={0}
          value={profileData.sections['profile'].fields["name"].value}
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
                      icon={item.icon}
                      label={item.label}
                      isMovable={item.isMovable}
                      position={index}
                      value={profileData.sections['profile'].fields[item.id].value}
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
    </div>
  );
}