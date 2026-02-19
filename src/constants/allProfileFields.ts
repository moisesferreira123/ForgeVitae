import type { ProfileField } from "../pdf/types/profileTypes";
import Email from "../assets/Email";
import Phone from "../assets/Phone";
import MapPin from "../assets/MapPin";
import GitHub from "../assets/GitHub";
import Linkedin from "../assets/Linkedin";
import Website from "../assets/Website";

export const profileFields : Record<string, ProfileField> = {
  'name' : {
    value: '',
    label: 'Nome'
  },
  'email': {
    value: '',
    label: 'Email',
    icon: Email
  },
  'phone': {
    value: '',
    label: 'Telefone',
    icon: Phone
  },
  'location': {
    value: '',
    label: 'Localização',
    icon: MapPin
  },
  'github': {
    value: '',
    label: 'GitHub',
    icon: GitHub,
    link: ''
  },
  'linkedin' : {
    value: '',
    label: 'LinkedIn',
    icon: Linkedin,
    link: ''
  },
  'website' : {
    value: '',
    label: 'Website',
    icon: Website,
    link: ''
  }
}