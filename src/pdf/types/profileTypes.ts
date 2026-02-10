import type React from "react";

export interface ProfileField {
  value: string;
  icon?: React.ElementType;
}

export interface ProfileSection {
  fields: Record<string, ProfileField>;
}