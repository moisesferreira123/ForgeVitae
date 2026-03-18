import EducationSectionForm from "../sectionsForm/EducationSectionForm";
import ExperienceSectionForm from "../sectionsForm/ExperienceSectionForm";
import LanguageSectionForm from "../sectionsForm/LanguageSectionForm";
import ObjectiveSectionForm from "../sectionsForm/ObjectiveSectionForm";
import ProfileSectionForm from "../sectionsForm/ProfileSectionForm";
import ProjectsSectionForm from "../sectionsForm/ProjectSectionForm";
import SkillSectionForm from "../sectionsForm/SkillSectionForm";
import SummarySectionForm from "../sectionsForm/SummarySectionForm";

export default function SectionRenderer({activedSectionId} : {activedSectionId: number}) {
  switch (activedSectionId) {
    case 0: return <ProfileSectionForm />
    case 1: return <SummarySectionForm />
    case 2: return <SkillSectionForm />
    case 3: return <ExperienceSectionForm />
    case 4: return <EducationSectionForm />
    case 5: return <LanguageSectionForm />
    case 6: return <ProjectsSectionForm />
    case 7: return <ObjectiveSectionForm />
    default: return <div>Seção não disponível</div>
  }
}