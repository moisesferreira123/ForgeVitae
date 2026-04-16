import ComponentHTML from "../../../../../../components/ComponentHTML";
import { useResumeData } from "../../../../../../store/resumeData";
import type { ProjectSection } from "../../../../../../types/projectType";

export default function Projects() {
  const data = (useResumeData().sections['project'] as ProjectSection).projects;

  return (
    <section className="pdf-list">
      <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Projetos</h2>
      <div className="space-y-4">
        {data.map((project, index) => (
          <div key={`project-pdf-${index}`} className="space-y-1.5">
            <div className="flex justify-between items-baseline gap-2">
              <div className="flex flex-col flex-wrap text-[10pt] font-normal break-all w-[80%]">
                <span className="font-bold">{project.name}</span> 
                <span className="flex flex-wrap gap-1"> 
                  {project.technologies.length !== 0 && <span className="font-bold">Tecnologias Utilizadas:</span>}
                  {project.technologies.length !== 0 && project.technologies.map((technology, index) => (
                    <span key={`${technology}-pdf-${index}`} className="wrap-break-word">{`${technology}${project.technologies.length !== index+1 ? ',':''}`}</span>
                  ))}
                </span>
              </div>
              <div className="flex flex-col  items-end w-[20%]">
                <div className="text-[9pt] flex flex-wrap items-center break-all gap-1">
                  {project.links.map((link, index) => (
                    <span 
                      key={`link-pdf-${index}`}
                      className="flex items-center gap-1"
                    >
                      <a
                        href={link.url} 
                        target={"_blank"}
                        onClick={(e) => {
                          if (!link.url) {
                            e.preventDefault();
                          }
                        }} 
                        className="italic"
                      >
                        {link.value}
                      </a>
                      {project.links.length !== index+1 && <span>|</span>}
                    </span>
                  ))}
                </div>
                <div>
                  {(project.startMonth || project.endMonth || project.startYear || project.endYear) &&
                    <p className="text-[10pt]">{`${project.startMonth}. ${project.startYear} - ${project.endMonth !== 'Atual' ? `${project.endMonth}. ${project.endYear}`: 'Atual'}`}</p>
                  }
                </div>
              </div>
            </div>
            <div className="text-[10pt]">
              <ComponentHTML HTMLstring={project.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}