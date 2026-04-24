import type { ProfileField } from "../types/profileTypes";
import Email from "../assets/Email";
import Phone from "../assets/Phone";
import MapPin from "../assets/MapPin";
import GitHub from "../assets/GitHub";
import Linkedin from "../assets/Linkedin";
import Website from "../assets/Website";
import LinkedinPDF from "../pdf/images/LinkedinPDF";
import EmailPDF from "../pdf/images/EmailPDF";
import PhonePDF from "../pdf/images/PhonePDF";
import MapPinPDF from "../pdf/images/MapPinPDF";
import GitHubPDF from "../pdf/images/GitHubPDF";
import WebsitePDF from "../pdf/images/WebsitePDF";

export const profileFields : Record<string, ProfileField> = {
  'name' : {
    value: '',
    label: 'Nome'
  },
  'email': {
    value: '',
    label: 'Email',
    icon: Email,
    IconPDF: EmailPDF
    
  },
  'phone': {
    value: '',
    label: 'Telefone',
    icon: Phone,
    IconPDF: PhonePDF
  },
  'location': {
    value: '',
    label: 'Localização',
    icon: MapPin,
    IconPDF: MapPinPDF
  },
  'github': {
    value: '',
    label: 'GitHub',
    icon: GitHub,
    IconPDF: GitHubPDF,
    link: ''
  },
  'linkedin' : {
    value: '',
    label: 'LinkedIn',
    icon: Linkedin,
    IconPDF: LinkedinPDF,
    link: ''
  },
  'website' : {
    value: '',
    label: 'Website',
    icon: Website,
    IconPDF: WebsitePDF,
    link: ''
  }
}