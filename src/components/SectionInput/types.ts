import type { profileInfoInput } from "../../constants/allProfileFieldsInput"

export interface InputItem {
  id: string,
  profileInfoInput: profileInfoInput
  position: number,
  value: string,
  onChangeInput: (newValue: string, field: string) => void
}