import type { Editor } from '@tiptap/core'
import MenuButton from './MenuButton';
import { Bold, BulletList, Italic, OrderedList, TextAlignCenter, TextAlignJustify, TextAlignLeft, TextAlignRight, Underline } from './buttonTypes';

export default function MenuBar({editor} : {editor: Editor}) {
  return (
    <div className="flex flex-wrap p-2 bg-(--muted)/20">
      <div className="flex flex-wrap gap-1 pr-1 border-r border-r-(--input) ">
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
      <div className="flex flex-wrap gap-1 px-1 border-r border-r-(--input) ">
        <MenuButton 
          editor={editor} 
          buttonType={BulletList} 
          onHandleClick={() => editor.chain().focus().toggleBulletList().run()} 
        />
        <MenuButton 
          editor={editor} 
          buttonType={OrderedList} 
          onHandleClick={() => editor.chain().focus().toggleOrderedList().run()} 
        />
      </div>
      <div className="flex flex-wrap gap-1 pl-1 ">
        <MenuButton 
          editor={editor} 
          buttonType={TextAlignLeft}
          onHandleClick={() => editor.chain().focus().setTextAlign('left').run()} 
        />
        <MenuButton 
          editor={editor} 
          buttonType={TextAlignCenter} 
          onHandleClick={() => editor.chain().focus().setTextAlign('center').run()} 
        />
        <MenuButton 
          editor={editor} 
          buttonType={TextAlignRight} 
          onHandleClick={() => editor.chain().focus().setTextAlign('right').run()} 
        />
        <MenuButton 
          editor={editor} 
          buttonType={TextAlignJustify} 
          onHandleClick={() => editor.chain().focus().setTextAlign('justify').run()} 
        />
      </div>
    </div>
  );
}