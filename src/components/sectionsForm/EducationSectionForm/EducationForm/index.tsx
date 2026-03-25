import { useState } from "react";
import { useResumeData } from "../../../../store/resumeData";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import Months from "../../../Months";
import DataPickerButton from "../../../ui/DataPickerButton";
import Years from "../../../Years";
import TextEditor from "../../../TextEditor";
import type { EducationSection } from "../../../../types/educationTypes";

interface EducationFormProps {
  educationIndex: number;
  closeEducationForm: () => void;
}

export default function EducationForm({educationIndex, closeEducationForm}: EducationFormProps) {
  const resumeData = useResumeData();
  const [startMonth, setStartMonth] = useState((resumeData.sections['education'] as EducationSection).education[educationIndex].startMonth || '');
  const [startYear, setStartYear] = useState((resumeData.sections['education'] as EducationSection).education[educationIndex].startYear || '');
  const [endMonth, setEndMonth] = useState((resumeData.sections['education'] as EducationSection).education[educationIndex].endMonth || '');
  const [endYear, setEndYear] = useState((resumeData.sections['education'] as EducationSection).education[educationIndex].endYear || '');
  const [dateModal, setDateModal] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);

  function onChange(inputName: string, event: React.ChangeEvent<HTMLInputElement>) {
    const newEducation = {...(resumeData.sections['education'] as EducationSection)};
    if(inputName === 'educational-institution') newEducation.education[educationIndex].educationalInstitution = event.target.value;
    if(inputName === 'degree') newEducation.education[educationIndex].degree = event.target.value;
    if(inputName === 'location') newEducation.education[educationIndex].location = event.target.value;
    resumeData.updateResumeData(newEducation);
  }

  function handleCurrentExperience() {
    if(isCurrent) {
      handleEndMonthSelection('');
      handleEndYearSelection('');
    } else {
      handleEndMonthSelection('Atual');
      handleEndYearSelection('Atual');
    }
    setIsCurrent(!isCurrent);
  }

  function handleStartMonthSelection(month: string) {
    setStartMonth(month);
    const newEducation = {...(resumeData.sections['education'] as EducationSection)};
    if(month !== '') setDateModal('');
    newEducation.education[educationIndex].startMonth = month;
    resumeData.updateResumeData(newEducation);
  }

  function handleStartYearSelection(year: string) {
    setStartYear(year);
    const newEducation = {...(resumeData.sections['education'] as EducationSection)};
    if(year !== '') setDateModal('');
    newEducation.education[educationIndex].startYear = year;
    resumeData.updateResumeData(newEducation);
  }

  function handleEndMonthSelection(month: string) {
    setEndMonth(month);
    const newEducation = {...(resumeData.sections['education'] as EducationSection)};
    if(month !== '') setDateModal('');
    newEducation.education[educationIndex].endMonth = month;
    resumeData.updateResumeData(newEducation);
  }

  function handleEndYearSelection(year: string) {
    setEndYear(year);
    const newEducation = {...(resumeData.sections['education'] as EducationSection)};
    if(year !== '') setDateModal('');
    newEducation.education[educationIndex].endYear = year;
    resumeData.updateResumeData(newEducation);
  }

  function handleClickDateButton(newDateModal: string) {
    if(isCurrent && (newDateModal === 'end-month' || newDateModal === 'end-year')) return;
    if(dateModal === newDateModal) setDateModal('');
    else setDateModal(newDateModal);
  }

  function clearStartMonth(event: React.MouseEvent) {
    event.stopPropagation();
    handleStartMonthSelection('');
  }

  function clearStartYear(event: React.MouseEvent) {
    event.stopPropagation();
    handleStartYearSelection('');
  }

  function clearEndMonth(event: React.MouseEvent) {
    event.stopPropagation();
    handleEndMonthSelection('');
  }

  function clearEndYear(event: React.MouseEvent) {
    event.stopPropagation();
    handleEndYearSelection('');
  }

  function updateData(html: string) {
    const newEducation = {...(resumeData.sections['education'] as EducationSection)};
    newEducation.education[educationIndex].description = html;
    resumeData.updateResumeData(newEducation);
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2">
        <Label id="educational-institution" value="Instituição de Ensino" />
        <Input 
          id="educational-institution"
          type="text"
          placeholder="Digite o título do cargo..."
          value={(resumeData.sections['education'] as EducationSection).education[educationIndex].educationalInstitution}
          onChange={event => onChange('educational-institution', event)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label id="degree" value="Diploma" />
        <Input 
          id="degree"
          type="text"
          placeholder="Digite o empregador..."
          value={(resumeData.sections['education'] as EducationSection).education[educationIndex].degree}
          onChange={event => onChange('degree', event)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label id="location" value="Localização" />
        <Input 
          id="location"
          type="text"
          placeholder="Cidade, Estado"
          value={(resumeData.sections['education'] as EducationSection).education[educationIndex].location}
          onChange={event => onChange('location', event)}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label id="start-date" value="Data de Início" />
          <div className="grid grid-cols-2 gap-1">
            <div className="relative">
              <DataPickerButton
                defaultText="Mês"
                selectedDate={startMonth}
                isSelected={startMonth !== ''}
                onClickButton={() => handleClickDateButton('start-month')}
                clear={(e) => clearStartMonth(e)}
                disabled={false}
              />
              {dateModal === 'start-month' &&
                <Months 
                  selectedMonth={startMonth} 
                  selectMonth={month => handleStartMonthSelection(month)}
                  changeDateModal={() => setDateModal('')}
                />
              }
            </div>
            <div className="relative">
              <DataPickerButton
                defaultText="Ano"
                selectedDate={startYear}
                isSelected={startYear !== ''}
                onClickButton={() => handleClickDateButton('start-year')}
                clear={(e) => clearStartYear(e)}
                disabled={false}
              />
              {dateModal === 'start-year' &&
                <Years 
                  selectedYear={startYear} 
                  selectYear={year => handleStartYearSelection(year)}
                  changeDateModal={() => setDateModal('')}
                />
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Label id="end-date" value="Data de Fim" />
            <div className="flex items-center gap-2 relative mr-1">
              <Label id="current-experience" value="Atual" />
              <input 
                id="current-experience"
                type="checkbox" 
                className="peer appearance-none w-3 h-3 rounded-full border border-(--foreground)
               checked:bg-(--primary) transition-all duration-200 outline-none mt-0.5 cursor-pointer "
                checked={isCurrent} 
                onChange={handleCurrentExperience}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="relative">
              <DataPickerButton
                defaultText="Mês"
                selectedDate={endMonth}
                isSelected={endMonth !== ''}
                onClickButton={() => handleClickDateButton('end-month')}
                clear={(e) => clearEndMonth(e)}
                disabled={isCurrent}
              />
              {dateModal === 'end-month' &&
                <Months 
                  selectedMonth={endMonth} 
                  selectMonth={month => handleEndMonthSelection(month)}
                  changeDateModal={() => setDateModal('')}
                />
              }
            </div>
            <div className="relative">
              <DataPickerButton
                defaultText="Ano"
                selectedDate={endYear}
                isSelected={endYear !== ''}
                onClickButton={() => handleClickDateButton('end-year')}
                clear={(e) => clearEndYear(e)}
                disabled={isCurrent}
              />
              {dateModal === 'end-year' &&
                <Years 
                  selectedYear={endYear} 
                  selectYear={year => handleEndYearSelection(year)}
                  startedYear={startYear}
                  changeDateModal={() => setDateModal('')}
                />
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label id="description" value="Descrição" />
        <TextEditor 
          placeholder="Descreva suas responsabilidades e principais conquistas..." 
          minHeight={180} 
          updateData={html => updateData(html)} 
          initialContent={(resumeData.sections['education'] as EducationSection).education[educationIndex].description}
        />
      </div>
      <button 
        className="flex mt-8 h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-md font-semibold transition-colors duration-200 enabled:hover:bg-(--primary)/90 cursor-pointer"
        onClick={closeEducationForm}
      >
        <span>Concluir</span>
      </button>
    </div>
  );
}