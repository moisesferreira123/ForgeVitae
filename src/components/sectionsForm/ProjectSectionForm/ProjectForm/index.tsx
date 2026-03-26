import { useState } from "react";
import { useResumeData } from "../../../../store/resumeData";
import type { ProjectSection } from "../../../../types/projectType";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import { Link, Plus, Trash2 } from "lucide-react";
import Technology from "../Technology";
import LinkModal from "../../../modals/LinkModal";
import { useLinkModal } from "../../../../store/modalStore";
import DataPickerButton from "../../../ui/DataPickerButton";
import Months from "../../../Months";
import Years from "../../../Years";
import TextEditor from "../../../TextEditor";

interface ProjectFormProps {
  projectIndex: number;
  closeProjectForm: () => void;
}

export default function ProjectForm({projectIndex, closeProjectForm}: ProjectFormProps) {
  const resumeData = useResumeData();
  const linkModal = useLinkModal();
  const [startMonth, setStartMonth] = useState((resumeData.sections['project'] as ProjectSection).projects[projectIndex].startMonth || '');
  const [startYear, setStartYear] = useState((resumeData.sections['project'] as ProjectSection).projects[projectIndex].startYear || '');
  const [endMonth, setEndMonth] = useState((resumeData.sections['project'] as ProjectSection).projects[projectIndex].endMonth || '');
  const [endYear, setEndYear] = useState((resumeData.sections['project'] as ProjectSection).projects[projectIndex].endYear || '');
  const [dateModal, setDateModal] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);
  const [currentTech, setCurrentTech] = useState('');

  function onChange(inputName: string, event: React.ChangeEvent<HTMLInputElement>) {
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    if(inputName === 'name') newProject.projects[projectIndex].name = event.target.value;
    if(inputName === 'technologies') setCurrentTech(event.target.value);
    resumeData.updateResumeData(newProject);
  }

  function onChangeLinkValue(linkIndex: number, event: React.ChangeEvent<HTMLInputElement>) {
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    newProject.projects[projectIndex].links[linkIndex].value = event.target.value;
    resumeData.updateResumeData(newProject);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      addTechnology();
    }
  }

  function addTechnology() {
    if(!currentTech.trim()) return;
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    newProject.projects[projectIndex].technologies.push(currentTech.trim());
    resumeData.updateResumeData(newProject);
    setCurrentTech('');
  }

  function removeTechnology(position: number) {
    const newProject = {...(resumeData.sections['project'] as ProjectSection)};
    newProject.projects[projectIndex].technologies.splice(position, 1);
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

  function save(e: React.SubmitEvent<HTMLFormElement>, link: string | undefined) {
    e.preventDefault();

    if(link === undefined) return;

    let url = link;

    if(url !== '' && !(/^https?:\/\//i.test(url))) {
      url = `https://${url}`;
    }
    console.log(url, linkModal.id)
    const newResumeData = {...resumeData};
    (newResumeData.sections['project'] as ProjectSection).projects[projectIndex].links[Number.parseInt(linkModal.id as string)].url = url;
    resumeData.updateResumeData(newResumeData.sections['project']);
    linkModal.updateModal();
  }

  function openModal(index: string) {
    if(linkModal.updateIdModal) linkModal.updateIdModal(index);
    linkModal.updateModal();
  }

  function addLink() {
    const newProject = resumeData.sections['project'] as ProjectSection;
    newProject.projects[projectIndex].links.push({
      value: '',
      url: ''
    });
    resumeData.updateResumeData(newProject);
  }

  function removeLink(indexLink: number) {
    const newProject = resumeData.sections['project'] as ProjectSection;
    newProject.projects[projectIndex].links.splice(indexLink, 1);
    resumeData.updateResumeData(newProject);
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2">
        <Label id="name" value="Nome do Projeto" />
        <Input 
          id="name"
          type="text"
          placeholder="Digite o nome do projeto..."
          value={(resumeData.sections['project'] as ProjectSection).projects[projectIndex].name}
          onChange={event => onChange('name', event)}
        />
      </div>
      <div className="flex flex-col gap-2">
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
            className="flex h-10 w-10 shrink-0 justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 enabled:cursor-pointer disabled:opacity-50 disabled:cursor-default"
            disabled={(/^<p>(\s*)<\/p>$/).test(currentTech) || currentTech === ''}
            onClick={addTechnology}
          >
            <Plus size={16} />
          </button>
        </div>
        <div className="flex gap-2 flex-wrap mt-1">
          {(resumeData.sections['project'] as ProjectSection).projects[projectIndex].technologies.length !== 0 && 
            (resumeData.sections['project'] as ProjectSection).projects[projectIndex].technologies.map((technology, index) => (
              <Technology
                key={`technology-${index}`}
                technology={technology}
                position={index}
                onRemoveTechnology={(position) => removeTechnology(position)}
              />
            ))
          }
        </div>
      </div>
      {(resumeData.sections['project'] as ProjectSection).projects[projectIndex].links.length !== 0 &&
      (resumeData.sections['project'] as ProjectSection).projects[projectIndex].links.map((link, index) => (
        <div key={`link-project-${index}`} className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Label id={`link-${index+1}`} value={`Link ${index+1}`} />
            <button
              onClick={() => removeLink(index)}
              className="flex justify-center items-center gap-1.5 text-(--destructive) hover:text-red-500 cursor-pointer"
            >
              <Trash2 size={12} />
              <span className="text-xs">Remover</span>
            </button>
          </div>
          <div className="w-full relative flex items-center">
            <Input 
              id={`link-${index+1}`}
              type="text"
              placeholder="Github, LiveSite, etc..."
              value={link.value}
              onChange={event => onChangeLinkValue(index, event)}
            />
            <button 
              onClick={() => openModal(index.toString())}
              className="link absolute right-2 h-6 px-2 rounded-md bg-(--muted) border border-(--border) cursor-pointer hover:text-(--primary)"
            >
              <Link size={16} />
            </button>
            {linkModal.isOpen && linkModal.id === index.toString() && 
              <LinkModal 
                linkName={`Link ${index+1}`}
                linkURL={link.url}
                save={(event, link) => save(event, link) }
              />
            }
          </div>
        </div>
      ))}
      <button
        onClick={addLink}
        className="w-full flex justify-center items-center text-(--primary) font-medium text-sm gap-2 py-2.5 transition-colors duration-200 border-2 border-dashed border-(--primary)/30 rounded-lg bg-(--background) mt-8 hover:bg-(--primary)/5 hover:border-(--primary)/50 hover:text-(--foreground) cursor-pointer"
      >
        <Plus size={16} />
        <span>Adicionar Link</span>
      </button>
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
              <Label id="current-project" value="Atual" />
              <input 
                id="current-project"
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
      <div className="flex flex-col gap-2">
        <Label id="description" value="Descrição" />
        <TextEditor 
          placeholder="Descreva o que foi desenvolvido, funcionalidades e resultados..." 
          minHeight={180} 
          updateData={html => updateData(html)} 
          initialContent={(resumeData.sections['project'] as ProjectSection).projects[projectIndex].description}
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