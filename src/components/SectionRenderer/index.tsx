import EducationSectionForm from "../sectionsForm/EducationSectionForm";
import ExperienceSectionForm from "../sectionsForm/ExperienceSectionForm";
import ProfileSectionForm from "../sectionsForm/ProfileSectionForm";
import SkillSectionForm from "../sectionsForm/SkillSectionForm";
import SummarySectionForm from "../sectionsForm/SummarySectionForm";

export default function SectionRenderer({activedSectionId} : {activedSectionId: number}) {
  switch (activedSectionId) {
    case 0: return <ProfileSectionForm />
    case 1: return <SummarySectionForm />
    case 2: return <SkillSectionForm />
    case 3: return <ExperienceSectionForm />
    case 4: return <EducationSectionForm />
    default: return <div>Seção não disponível</div>
  }
}