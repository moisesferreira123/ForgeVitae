import { BriefcaseBusiness } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import Input from "../../Input";
import Label from "../../Label";
import { useResumeData } from "../../../store/resumeData";
import type { ExperienceSection } from "../../../pdf/types/experienceTypes";
import DataPickerButton from "../../DataPickerButton";
import Months from "../../Months";
import { useState } from "react";
import Years from "../../Years";
import TextEditor from "../../TextEditor";

export default function ExperienceSectionForm() {
  const resumeData = useResumeData();
  const [startMonth, setStartMonth] = useState((resumeData.sections['experience'] as ExperienceSection).startMonth || '');
  const [startYear, setStartYear] = useState((resumeData.sections['experience'] as ExperienceSection).startYear || '');
  const [endMonth, setEndMonth] = useState((resumeData.sections['experience'] as ExperienceSection).endMonth || '');
  const [endYear, setEndYear] = useState((resumeData.sections['experience'] as ExperienceSection).endYear || '');
  const [dateModal, setDateModal] = useState('');

  function onChange(inputName: string, event: React.ChangeEvent<HTMLInputElement>) {
    const newExperience = {...(resumeData.sections['experience'] as ExperienceSection)};
    if(inputName === 'job-title') newExperience.jobTitle = event.target.value;
    if(inputName === 'employer') newExperience.employer = event.target.value;
    if(inputName === 'location') newExperience.location = event.target.value;
    resumeData.updateResumeData(newExperience);
  }

  function handleStartMonthSelection(month: string) {
    setStartMonth(month);
    const newExperience = {...(resumeData.sections['experience'] as ExperienceSection)};
    if(month !== '') setDateModal('');
    newExperience.startMonth = month;
    resumeData.updateResumeData(newExperience);
  }

  function handleStartYearSelection(year: string) {
    setStartYear(year);
    const newExperience = {...(resumeData.sections['experience'] as ExperienceSection)};
    if(year !== '') setDateModal('');
    newExperience.startYear = year;
    resumeData.updateResumeData(newExperience);
  }

  function handleEndMonthSelection(month: string) {
    setEndMonth(month);
    const newExperience = {...(resumeData.sections['experience'] as ExperienceSection)};
    if(month !== '') setDateModal('');
    newExperience.endMonth = month;
    resumeData.updateResumeData(newExperience);
  }

  function handleEndYearSelection(year: string) {
    setEndYear(year);
    const newExperience = {...(resumeData.sections['experience'] as ExperienceSection)};
    if(year !== '') setDateModal('');
    newExperience.endYear = year;
    resumeData.updateResumeData(newExperience);
  }

  function handleClickDateButton(newDateModal: string) {
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
    const newExperience = {...(resumeData.sections['experience'] as ExperienceSection)};
    newExperience.description = html;
    resumeData.updateResumeData(newExperience);
  }

  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Experiência Profissional"
        subtitle="Adicione suas experiências de trabalho"
        Icon={BriefcaseBusiness}
      />
      <div className="space-y-5">
        <div className="space-y-2">
          <Label id="job-title" value="Título do Cargo" />
          <Input 
            id="job-title"
            type="text"
            placeholder="Digite o título do cargo..."
            value={(resumeData.sections['experience'] as ExperienceSection).jobTitle}
            onChange={event => onChange('job-title', event)}
          />
        </div>
        <div className="space-y-2">
          <Label id="employer" value="Empregador" />
          <Input 
            id="employer"
            type="text"
            placeholder="Digite o empregador..."
            value={(resumeData.sections['experience'] as ExperienceSection).employer}
            onChange={event => onChange('employer', event)}
          />
        </div>
        <div className="space-y-2">
          <Label id="location" value="Localização" />
          <Input 
            id="location"
            type="text"
            placeholder="Cidade, Estado"
            value={(resumeData.sections['experience'] as ExperienceSection).location}
            onChange={event => onChange('location', event)}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label id="start-date" value="Data de Início" />
            <div className="grid grid-cols-2 gap-1">
              <div className="relative">
                <DataPickerButton
                  defaultText="Mês"
                  selectedDate={startMonth}
                  isSelected={startMonth !== ''}
                  onClickButton={() => handleClickDateButton('start-month')}
                  clear={(e) => clearStartMonth(e)}
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
          <div className="space-y-2">
            <Label id="end-date" value="Data de Fim" />
            <div className="grid grid-cols-2 gap-1">
              <div className="relative">
                <DataPickerButton
                  defaultText="Mês"
                  selectedDate={endMonth}
                  isSelected={endMonth !== ''}
                  onClickButton={() => handleClickDateButton('end-month')}
                  clear={(e) => clearEndMonth(e)}
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
        <div className="space-y-2">
          <Label id="description" value="Descrição" />
          <TextEditor 
            placeholder="Descreva suas responsabilidades e principais conquistas..." 
            minHeight={180} 
            updateData={html => updateData(html)} 
            initialContent={(resumeData.sections['experience'] as ExperienceSection).description}
          />
        </div>
      </div>
    </div>
  );
}