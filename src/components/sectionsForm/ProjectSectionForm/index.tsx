import { FolderOpen, Plus } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import { useResumeData } from "../../../store/resumeData";
import { useState } from "react";
import type { Project, ProjectSection } from "../../../types/projectType";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import ProjectForm from "./ProjectForm";
import ProjectComp from "./ProjectComp";

export default function ProjectsSectionForm() {
  const resumeData = useResumeData();
  const [projectIndex, setProjectIndex] = useState<number | null>(null);

  function addProject() {
    const newProjects = {...(resumeData.sections['project'] as ProjectSection)};
    const project: Project = {
      name: '',
      technologies: [],
      links: [],
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      description: ''
    };
    newProjects.projects.push(project);
    resumeData.updateResumeData(newProjects);
    setProjectIndex((resumeData.sections['project'] as ProjectSection).projects.length-1);
  }

  function removeProject(e: React.MouseEvent, position: number) {
    e.stopPropagation();
    const filteredProjects = [...(resumeData.sections['project'] as ProjectSection).projects];
    filteredProjects.splice(position, 1);
    resumeData.updateResumeData({
      type: 'project',
      projects: filteredProjects
    })
  }

  function reorder(result: DropResult) {
    if(!result.destination) return;

    const newProjects = [...(resumeData.sections['project'] as ProjectSection).projects];
    const [reorderedProject] = newProjects.splice(result.source.index, 1);
    newProjects.splice(result.destination.index, 0, reorderedProject);

    resumeData.updateResumeData({
      type: 'project',
      projects: newProjects
    })
  }

  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Projetos"
        subtitle="Destaque os principais projetos que demonstrem suas habilidades"
        Icon={FolderOpen}
      />
      {projectIndex !== null ? 
        <ProjectForm 
          projectIndex={projectIndex} 
          closeProjectForm={() => setProjectIndex(null)}
        /> 
        :
        <div className="space-y-6">
          {(resumeData.sections['project'] as ProjectSection).projects.length !== 0 ? 
            <DragDropContext onDragEnd={reorder} >
              <Droppable droppableId="project" type="list" direction="vertical" >
                {(provided) => ( 
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-2 w-full text-center py-4"
                  >
                    {(resumeData.sections['project'] as ProjectSection).projects.map((project, index) => (
                      <ProjectComp 
                        key={`project-${index}`}
                        project={project}
                        position={index}
                        openProjectUpdate={() => setProjectIndex(index)}
                        removeProject={(e) => removeProject(e, index)}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )} 
              </Droppable>
            </DragDropContext>
            : 
            <div className="w-full text-center border-y border-(--border) py-4 text-(--muted-foreground)">Adicione um projeto</div>
          }
          <button 
            className="flex h-10 w-full justify-center items-center gap-2 text-(--foreground) bg-(--primary) rounded-lg text-sm font-medium transition-colors duration-200 enabled:hover:bg-(--primary)/90 cursor-pointer"
            onClick={addProject}
          >
            <Plus size={18} />
            <span>Adicionar projeto</span>
          </button>
        </div>
      }
    </div>
  );
}