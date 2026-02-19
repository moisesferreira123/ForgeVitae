import { AlignCenter, AlignJustify, AlignLeft, AlignRight, BoldIcon, ItalicIcon, List, ListOrdered, UnderlineIcon, type LucideIcon } from "lucide-react"

export interface buttonType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: string | Record<string, any>,
  label: string,
  keyShortcut: string,
  Icon: LucideIcon
}

 export const Bold: buttonType = {
  id: 'bold',
  label: 'Bold',
  keyShortcut: 'Ctrl+B',
  Icon: BoldIcon
}

export const Italic: buttonType = {
  id: 'italic',
  label: 'Italic',
  keyShortcut: 'Ctrl+I',
  Icon: ItalicIcon
}

export const Underline: buttonType = {
  id: 'underline',
  label: 'Underline',
  keyShortcut: 'Ctrl+U',
  Icon: UnderlineIcon
}

export const BulletList: buttonType = {
  id: 'bulletList',
  label: 'Bulleted list',
  keyShortcut: 'Ctrl+Shift+8',
  Icon: List
}

export const OrderedList: buttonType = {
  id: 'orderedList',
  label: 'Ordered list',
  keyShortcut: 'Ctrl+Shift+7',
  Icon: ListOrdered
}

export const TextAlignLeft: buttonType = {
  id: {textAlign: 'left'},
  label: 'Align left',
  keyShortcut: 'Ctrl+Shift+L',
  Icon: AlignLeft
}

export const TextAlignRight: buttonType = {
  id: {textAlign: 'right'},
  label: 'Align right',
  keyShortcut: 'Ctrl+Shift+R',
  Icon: AlignRight
}

export const TextAlignCenter: buttonType = {
  id: {textAlign: 'center'},
  label: 'Align center',
  keyShortcut: 'Ctrl+Shift+E',
  Icon: AlignCenter
}

export const TextAlignJustify: buttonType = {
  id: {textAlign: 'justify'},
  label: 'Justify',
  keyShortcut: 'Ctrl+Shift+J',
  Icon: AlignJustify
}