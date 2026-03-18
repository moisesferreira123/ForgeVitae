import { useState } from "react";
import { useResumeData } from "../../../../store/resumeData";
import type { Project, ProjectSection } from "../../../../types/projectType";
import Label from "../../../Label";
import Input from "../../../Input";
import { Plus } from "lucide-react";
import Technology from "../Technology";

interface ProjectFormProps {
  projectIndex: number;
  closeProjectForm: () => void;
}

export default function ProjectForm({projectIndex, closeProjectForm}: ProjectFormProps) {
  const resumeData = useResumeData();
  const [startMonth, setStartMonth] = useState((resumeData.sections['experience'] as ProjectSection).projects[projectIndex].startMonth || '');
  const [startYear, setStartYear] = useState((resumeData.sections['experience'] as ProjectSection).projects[projectIndex].startYear || '');
  const [endMonth, setEndMonth] = useState((resumeData.sections['experience'] as ProjectSection).projects[projectIndex].endMonth || '');
  const [endYear, setEndYear] = useState((resumeData.sections['experience'] as ProjectSection).projects[projectIndex].endYear || '');
  const [dateModal, setDateModal] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);
  const [currentTech, setCurrentTech] = useState('');

  function onChange(inputName: string, event: React.ChangeEvent<HTMLInputElement>) {
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    if(inputName === 'name') newProject.projects[projectIndex].name = event.target.value;
    if(inputName === 'technologies') setCurrentTech(event.target.value);
    resumeData.updateResumeData(newProject);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      addTechnology();
      setCurrentTech('');
    }
  }

  function addTechnology() {
    if(!currentTech.trim()) return;
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    newProject.projects[projectIndex].technologies.push(currentTech.trim());
    resumeData.updateResumeData(newProject);
  }

  function handleCurrentProject() {
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
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    if(month !== '') setDateModal('');
    newProject.projects[projectIndex].startMonth = month;
    resumeData.updateResumeData(newProject);
  }

  function handleStartYearSelection(year: string) {
    setStartYear(year);
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    if(year !== '') setDateModal('');
    newProject.projects[projectIndex].startYear = year;
    resumeData.updateResumeData(newProject);
  }

  function handleEndMonthSelection(month: string) {
    setEndMonth(month);
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    if(month !== '') setDateModal('');
    newProject.projects[projectIndex].endMonth = month;
    resumeData.updateResumeData(newProject);
  }

  function handleEndYearSelection(year: string) {
    setEndYear(year);
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    if(year !== '') setDateModal('');
    newProject.projects[projectIndex].endYear = year;
    resumeData.updateResumeData(newProject);
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
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    newProject.projects[projectIndex].description = html;
    resumeData.updateResumeData(newProject);
  }

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label id="name" value="Nome do Projeto" />
        <Input 
          id="name"
          type="text"
          placeholder="Digite o nome do projeto..."
          value={(resumeData.sections['project'] as ProjectSection).projects[projectIndex].name}
          onChange={event => onChange('name', event)}
        />
      </div>
      <div className="space-y-2">
        <Label id="technologies" value="Tecnologias Utilizadas" />
        <div className="flex items-center gap-2">
          <Input 
            id="technologies"
            type="text"
            placeholder="Ex: React, Node.js, PostgreSQL..."
            value={currentTech}
            onChange={event => onChange('technologies', event)}
            onKeyDown={event => handleKeyDown(event)}
          />
          <button 
            className="flex h-10 w-10 justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 enabled:cursor-pointer disabled:opacity-50 disabled:cursor-default"
            disabled={(/^<p>(\s*)<\/p>$/).test(currentTech) || currentTech === ''}
            onClick={addTechnology}
          >
            <Plus size={18} />
          </button>
        </div>
        {/* TODO: Fazer o design das tecnologias e o drag and drop */}
        {(resumeData.sections['project'] as ProjectSection).projects[projectIndex].technologies.length !== 0 && 
          (resumeData.sections['project'] as ProjectSection).projects[projectIndex].technologies.map((technology, index) => (
            <Technology
              key={index}
              technology={technology}
              position={index}
            />
          ))
        }
      </div>
      <div className="space-y-2">
        <Label id="location" value="Localização" />
        <Input 
          id="location"
          type="text"
          placeholder="Cidade, Estado"
          value={(resumeData.sections['experience'] as ProjectSection).experiences[projectIndex].location}
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
        <div className="space-y-2">
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
                onChange={handleCurrentProject}
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
      <div className="space-y-2">
        <Label id="description" value="Descrição" />
        <TextEditor 
          placeholder="Descreva suas responsabilidades e principais conquistas..." 
          minHeight={180} 
          updateData={html => updateData(html)} 
          initialContent={(resumeData.sections['experience'] as ProjectSection).experiences[projectIndex].description}
        />
      </div>
      <button 
        className="flex mt-8 h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-md font-semibold transition-colors duration-200 enabled:hover:bg-(--primary)/90 cursor-pointer"
        onClick={closeProjectForm}
      >
        <span>Concluir</span>
      </button>
    </div>
  );
}