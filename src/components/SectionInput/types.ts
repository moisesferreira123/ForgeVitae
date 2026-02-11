export interface InputItem {
  id: string,
  type: string,
  placeholder: string,
  label: string,
  isMovable: boolean,
  position: number,
  value: string,
  onChangeInput: (newValue: string, field: string) => void
}