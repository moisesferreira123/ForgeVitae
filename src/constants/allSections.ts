import { Brain, BriefcaseBusiness, FileText, FolderOpen, GraduationCap, Languages, Target, User } from "lucide-react";
import type { SectionItem } from "../types/sectionItem";

export const allSections: SectionItem[] = [
  {
    id: 0,
    label: 'Pessoal',
    icon: User,
    description: 'Adicione suas informações de contato, links sociais e dados básicos para identificação.'
  },
  {
    id: 1,
    label: 'Resumo',
    icon: FileText,
    description: 'Adicione um breve texto destacando sua trajetória, principais conquistas e o que você busca.'
  },
  {
    id: 2,
    label: 'Habilidades',
    icon: Brain,
    description: 'Adicione suas competências técnicas (hard skills) e diferenciais comportamentais (soft skills).'
  },
  {
    id: 3,
    label: 'Experiência',
    icon: BriefcaseBusiness,
    description: 'Seu histórico profissional, incluindo cargos, empresas e principais responsabilidades.'
  },
  {
    id: 4,
    label: 'Formação Acadêmica',
    icon: GraduationCap,
    description: 'Adicione sua trajetória educacional, certificações e especializações acadêmicas relevantes para sua área.'
  },
  {
    id: 5,
    label: 'Idiomas',
    icon: Languages,
    description: 'Adicione línguas que você domina e seus respectivos níveis de proficiência.'
  },
  {
    id: 6,
    label: 'Projetos',
    icon: FolderOpen,
    description: 'Adicione seus trabalhos autorais onde você aplicou seus conhecimentos.'
  },
  {
    id: 7,
    label: 'Objetivo',
    icon: Target,
    description: 'Adicione o cargo ou a área específica em que você deseja atuar.'
  }
]