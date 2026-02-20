import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import TextAlign from "@tiptap/extension-text-align";
import { Placeholder } from "@tiptap/extensions";
import { useResumeData } from "../../store/resumeData";
import type { SummarySection } from "../../pdf/types/summaryTypes";
import { useRef } from "react";

export default function TextEditor({placeholder} : {placeholder: string}) {
  const resumeData = useResumeData();
  const saveTimeoutRef = useRef<number|null>(null);

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
        class: 'px-4 py-2 outline-none min-h-60 focus:outline-none [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4',
      },
      handleKeyDown: (view, event) => {
        if(event.key === 'Tab') {
          if(editor.isActive('listItem')) {
            if(event.shiftKey) editor.commands.liftListItem('listItem');
            else editor.commands.sinkListItem('listItem');
            return true;
          }
          editor.commands.insertContent('\t');
          return true;
        }
        return false;
      }
    },
    shouldRerenderOnTransaction: true,
    immediatelyRender: true,
    onUpdate: ({editor}) => {
      const html = editor.getHTML();

      console.log(html)

      clearTimeout(saveTimeoutRef.current === null ? undefined : saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        resumeData.updateResumeData({
          type: 'summary',
          content: html
        })
      }, 500)
    },
    content: (resumeData.sections['summary'] as SummarySection).content
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

