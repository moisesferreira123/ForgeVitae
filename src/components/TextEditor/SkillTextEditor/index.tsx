import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import SimplifiedMenuBar from "./SimplifiedMenuBar";
import TextAlign from "@tiptap/extension-text-align";
import { Placeholder } from "@tiptap/extensions";
import { useEffect } from "react";

interface TextEditorProps {
  editorKey: number
  placeholder: string;
  minHeight: number;
  updateData: (html: string) => void;
  handleConfirmation: () => void
  initialContent: string
}

export default function SkillTextEditor({editorKey, placeholder, minHeight, updateData, handleConfirmation, initialContent} : TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: `${placeholder}`
      })
    ],
    editorProps: {
      attributes: {
        class: `px-4 py-2 outline-none focus:outline-none [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4`,
        style: `min-height: ${minHeight}px;`
      },
      handleKeyDown: (view, event) => {
        if(event.key === 'Enter') {
          event.preventDefault()
          const htmlContent = view.state.doc.textContent.trim();
          if(htmlContent.length > 0) {
            handleConfirmation();
            editor.commands.clearContent();
          }
          return true;
        }
        return false;
      }
    },
    shouldRerenderOnTransaction: true,
    immediatelyRender: true,
    onUpdate: ({editor}) => {
      const html = editor.getHTML();
      updateData(html);
    },
    content: initialContent
  })

  useEffect(() => {
    editor.commands.clearContent();
  }, [editorKey, editor])
  
  return (
    <div className="w-full rounded-lg border border-(--input)">
      <SimplifiedMenuBar editor={editor} />
      <div className={`bg-(--background) rounded-b-lg border-t border-t-(--input)  wrap-break-word`}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
