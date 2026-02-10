import Email from "../../../../../../assets/Email";
import Phone from "../../../../../../assets/Phone";
import MapPin from "../../../../../../assets/MapPin";
import GitHub from "../../../../../../assets/GitHub";
import Linkedin from "../../../../../../assets/Linkedin";
import type { ProfileSection } from "../../../../../types/profileTypes";

export default function Profile({data} : {data: ProfileSection}) {
  return (
    <header className="text-center ">
      <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
      <div className="flex justify-center items-center gap-x-3 flex-wrap text-[10pt]">
        <div className="flex items-center gap-1">
          <Phone />
          <span>{data.fields['phone'].value}</span>
        </div>
        <span>|</span>
        <div className="flex items-center gap-1">
          <Email />
          <span>{data.fields['email'].value}</span>
        </div>
        <span>|</span>
        <div className="flex items-center gap-1">
          <MapPin />
          <span>{data.fields['location'].value}</span>
        </div>
        <span>|</span>
        <div className="flex items-center gap-1">
          <GitHub />
          <span>github.com/moisesferreira123</span>
        </div>
        <span>|</span>
        <div className="flex items-center gap-1">
          <Linkedin />
          <span>linkedin.com/in/moises-ferreira-099278334</span>
        </div>
      </div>
    </header>
  );
}