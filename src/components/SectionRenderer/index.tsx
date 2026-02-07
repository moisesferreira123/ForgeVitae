import EducationSectionForm from "../sections/EducationSectionForm";
import ExperienceSectionForm from "../sections/ExperienceSectionForm";
import ProfileSectionForm from "../sections/ProfileSectionForm";
import ResumeSectionForm from "../sections/ResumeSectionForm";
import SkillSectionForm from "../sections/SkillSectionForm";

export default function SectionRenderer({activedSectionId} : {activedSectionId: number}) {
  switch (activedSectionId) {
    case 0: return <ProfileSectionForm />
    case 1: return <ResumeSectionForm />
    case 2: return <SkillSectionForm />
    case 3: return <ExperienceSectionForm />
    case 4: return <EducationSectionForm />
    default: return <div>Seção não disponível</div>
  }
}