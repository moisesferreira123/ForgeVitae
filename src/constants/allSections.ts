import { Brain, BriefcaseBusiness, FileText, FolderOpen, GraduationCap, Languages, Target, User } from "lucide-react";
import type { SectionItem } from "../types/sectionItem";

export const allSections: SectionItem[] = [
  {
    id: 0,
    label: 'Pessoal',
    icon: User,
  },
  {
    id: 1,
    label: 'Resumo',
    icon: FileText,
  },
  {
    id: 2,
    label: 'Habilidades',
    icon: Brain,
  },
  {
    id: 3,
    label: 'Experiência',
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    label: 'Formação Acadêmica',
    icon: GraduationCap,
  },
  {
    id: 5,
    label: 'Idiomas',
    icon: Languages,
  },
  {
    id: 6,
    label: 'Projetos',
    icon: FolderOpen,
  },
  {
    id: 7,
    label: 'Objetivo',
    icon: Target,
  }
]