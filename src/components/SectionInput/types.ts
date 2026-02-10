import type { LucideIcon } from "lucide-react";

export interface InputItem {
  id: string,
  type: string,
  placeholder: string,
  icon: LucideIcon,
  label: string,
  isMovable: boolean,
  position: number,
  // onChangeInput: (newValue: string) => void
}