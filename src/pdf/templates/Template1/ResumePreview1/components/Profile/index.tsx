import type { ProfileSection } from "../../../../../types/profileTypes";
import type React from "react";

export default function Profile({data} : {data: ProfileSection}) {
  return (
    <header className="text-center ">
      <h1 className="text-3xl font-bold mb-2">{data.fields['name'].value}</h1>
      <div className="flex justify-center items-center gap-x-3 flex-wrap text-[10pt]">
        {Object.entries(data.fields).map(([fieldName, profileField]) => {
          if(fieldName === 'name' || profileField.value === '') return;
          const Icon: React.ElementType | undefined = profileField.icon;

          return (
            <div key={fieldName} className="flex items-center gap-1">
              {Icon && <Icon />}
              <span>{profileField.value}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
}