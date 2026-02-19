import type { buttonType } from "./buttonTypes";
import type { Editor } from '@tiptap/core'

interface Button {
  editor: Editor | null,
  buttonType: buttonType,
  onHandleClick: () => void
}

export default function MenuButton({editor, buttonType, onHandleClick} : Button) {
  if(!editor) return;
  const {id, label, keyShortcut, Icon} = buttonType;

  return (
    <button
      className={`flex justify-center items-center w-8 h-8 rounded-md text-(--foreground) cursor-pointer ${editor.isActive(id) ? 'bg-(--primary)' : 'hover:bg-(--muted) hover:text-(--muted-foreground)'} `}
      aria-label={label}
      aria-keyshortcuts={keyShortcut}
      onClick={onHandleClick}
    >
      <Icon size={16} />
    </button>
  );
}