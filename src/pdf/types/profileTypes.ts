export interface ProfileField {
  value: string;
  // Trocar por interface que retorna os ícones
  icon?: string;
}

export interface ProfileSection {
  name: string;
  fields: Record<string, ProfileField>;
}