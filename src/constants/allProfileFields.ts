import type { ProfileField } from "../pdf/types/profileTypes";
import Email from "../assets/Email";
import Phone from "../assets/Phone";
import MapPin from "../assets/MapPin";
import GitHub from "../assets/GitHub";
import Linkedin from "../assets/Linkedin";

export const profileFields : Record<string, ProfileField> = {
  'name' : {
    value: '',
  },
  'email': {
    value: '',
    icon: Email
  },
  'phone': {
    value: '',
    icon: Phone
  },
  'location': {
    value: '',
    icon: MapPin
  },
  'github': {
    value: '',
    icon: GitHub
  },
  'linkedin' : {
    value: '',
    icon: Linkedin
  }
}