import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import TextAlign from "@tiptap/extension-text-align";

export default function TextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit, 
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      })
    ],
    editorProps: {
      attributes: {
        class: 'px-4 py-2 outline-none min-h-60 focus:outline-none [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4',
      },
    },
    shouldRerenderOnTransaction: true,
    immediatelyRender: true,
    content: ''
  })

  
  return (
    <div className="w-full rounded-lg border border-(--input)">
      <MenuBar editor={editor} />
      <div className="min-h-60 bg-(--background) rounded-b-lg border-t border-t-(--input)  wrap-break-word">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

