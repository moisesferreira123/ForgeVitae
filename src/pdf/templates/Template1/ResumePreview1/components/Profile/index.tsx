import { useProdileFieldKeys } from "../../../../../../store/profileFieldsKeys";
import { useResumeData,  } from "../../../../../../store/resumeData";
import type React from "react";

export default function Profile() {
  const data = useResumeData().sections['profile'];
  const { keys } = useProdileFieldKeys();

  return (
    <header className="text-center ">
      <h1 className="text-3xl font-bold mb-2">{data.fields['name'].value}</h1>
      <div className="flex justify-center items-center gap-x-3 flex-wrap text-[10pt]">
        {keys.map((key) => {
          if(key === 'name' || data.fields[key].value === '') return;
          const Icon: React.ElementType | undefined = data.fields[key].icon;

          return (
            <div key={key} className="flex items-center gap-1 border-r-2 border-black/60 pr-3 last:border-none last:pr-0">
              {Icon && <Icon />}
              <span>{data.fields[key].value}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
}