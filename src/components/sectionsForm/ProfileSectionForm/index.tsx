import HeaderForm from "../../HeaderForm";
import SectionInput from "../../SectionInput";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import { useResumeData } from "../../../store/resumeData";
import { Plus } from "lucide-react";
import { useProdileFieldKeys } from "../../../store/profileFieldsKeys";
import { profileFieldsInput } from "../../../constants/allProfileFieldsInput";
import { useAddProfileInfoModal } from "../../../store/modalStore";

export default function ProfileSectionForm() {
  const resumeData = useResumeData();
  const profileFieldKeys = useProdileFieldKeys();
  const profileFields = {...profileFieldsInput};
  const modal = useAddProfileInfoModal();
  
  function reorder(result: DropResult) {
    if(!result.destination) return;

    const newKeys = [...profileFieldKeys.keys];
    const [reorderedKeys] = newKeys.splice(result.source.index, 1);
    newKeys.splice(result.destination.index, 0, reorderedKeys);

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
        <div>
          <DragDropContext onDragEnd={reorder} >
            <Droppable droppableId="inputProfile" type="list" direction="vertical" >
              {(provided) => (
                <div 
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-col  gap-5"
                >
                  {profileFieldKeys.keys.map((item, index) => (
                    <SectionInput
                      key={item}
                      id={item}
                      profileInfoInput={profileFields[item]}
                      position={index}
                      value={resumeData.sections['profile'].fields[item].value}
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
      <button
        onClick={() => modal.updateModal()}
        className="w-full flex justify-center items-center text-(--primary) font-medium text-sm gap-2 py-2.5 transition-colors duration-200 border-2 border-dashed border-(--primary)/30 rounded-lg bg-(--background) mt-8 hover:bg-(--primary)/5 hover:border-(--primary)/50 hover:text-(--foreground) cursor-pointer"
      >
        <Plus size={16} />
        <span>Adicionar informações</span>
      </button>
    </div>
  );
}