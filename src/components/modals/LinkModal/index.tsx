import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLinkModal } from "../../../store/modalStore";
import { useResumeData } from "../../../store/resumeData";

export default function LinkModal({linkId, linkName} : {linkId: string, linkName: string}) {
  const linkModal = useLinkModal();
  const resumeData = useResumeData();
  const [link, setLink] = useState(resumeData.sections['profile'].fields[linkId].link);
  const modalRef = useRef<HTMLDivElement>(null);

  function save(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if(link === undefined) return;

    let url = link;

    if(url !== '' && !(/^https?:\/\//i.test(url))) {
      url = `https://${url}`;
    }

    const newResumeData = {...resumeData};
    newResumeData.sections['profile'].fields[linkId].link = url;
    resumeData.updateResumeData(newResumeData.sections);
    linkModal.updateModal();
  }

  useEffect(() => {
    function handleCLickOutside(event: MouseEvent) {
      if(modalRef.current && !modalRef.current.contains(event.target as Node)) {
        linkModal.updateModal();
      }
    }

    if(linkModal.isOpen) {
      document.addEventListener('mousedown', handleCLickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleCLickOutside);
    }
  }, [linkModal]);
  
  return (
    <div
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      className="absolute z-20 right-0 bottom-11 p-3 bg-(--popover) border border-(--primary)/20 rounded-lg w-75"
    >
      <form 
        onSubmit={(e) => save(e)}
        className="flex flex-col gap-3 text-(--foreground)"
      >
        <span className="text-sm font-medium">Link do {linkName}</span>
        <input 
          type="text"
          value={link}
          placeholder="Digite o Link"
          className="h-10 w-full px-3 rounded-md border border-(--input) bg-(--background) text-sm placeholder:text-(--muted-foreground) focus:border-(--primary) outline-none"
          onChange={(event) => setLink(event.target.value)}
        />
        <div className="flex justify-end">
          <button 
            type="submit"
            className="flex gap-1.5 px-3 items-center rounded-lg bg-(--primary) text-(--foreground) h-9 cursor-pointer hover:bg-(--primary)/90"
          >
            <Check size={16} />
            <span className="text-sm font-medium">Salvar</span>
          </button>
        </div>
      </form>
    </div>
  );
}