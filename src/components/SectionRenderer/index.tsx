import type { ResumeData } from "../../pdf/types/resumeData";
import EducationSectionForm from "../sectionsForm/EducationSectionForm";
import ExperienceSectionForm from "../sectionsForm/ExperienceSectionForm";
import ProfileSectionForm from "../sectionsForm/ProfileSectionForm";
import ResumeSectionForm from "../sectionsForm/ResumeSectionForm";
import SkillSectionForm from "../sectionsForm/SkillSectionForm";

export default function SectionRenderer({activedSectionId, data, onFieldChange} : {activedSectionId: number, data: ResumeData, onFieldChange: (newResumeData: ResumeData) => void}) {
  switch (activedSectionId) {
    case 0: return <ProfileSectionForm data={data} onFieldChange={onFieldChange} />
    case 1: return <ResumeSectionForm />
    case 2: return <SkillSectionForm />
    case 3: return <ExperienceSectionForm />
    case 4: return <EducationSectionForm />
    default: return <div>Seção não disponível</div>
  }
}