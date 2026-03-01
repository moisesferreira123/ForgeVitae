import type { Editor } from '@tiptap/core'
import MenuButton from '../MenuButton';
import { Bold, Italic, Underline } from '../buttonTypes';

export default function SimplifiedMenuBar({editor} : {editor: Editor}) {
  return (
    <div className="flex flex-wrap p-1 rounded-t-lg bg-(--card)">
      <div className="flex flex-wrap gap-1 pr-1 ">
        <MenuButton 
          editor={editor} 
          buttonType={Bold} 
          onHandleClick={() => editor.chain().focus().toggleBold().run()} 
        />
        <MenuButton 
          editor={editor} 
          buttonType={Italic}
          onHandleClick={() => editor.chain().focus().toggleItalic().run()} 
        />
        <MenuButton 
          editor={editor} 
          buttonType={Underline} 
          onHandleClick={() => editor.chain().focus().toggleUnderline().run()} 
        />
      </div>
    </div>
  );
}