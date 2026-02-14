import type React from "react";

export interface ProfileField {
  value: string;
  label: string;
  icon?: React.ElementType;
  link?: string;
}

export interface ProfileSection {
  fields: Record<string, ProfileField>;
}