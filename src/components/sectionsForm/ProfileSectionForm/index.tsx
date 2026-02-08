import { Mail, MapPin, Phone, User } from "lucide-react";
import HeaderForm from "../../HeaderForm";
import SectionInput from "../../SectionInput";

export default function ProfileSectionForm() {
  return (
    <div className="space-y-6">
      <HeaderForm 
        title="Informações Pessoais"
        subtitle="Preencha seus dados de contato"
      />
      <div className="space-y-5">
      <SectionInput 
        id="name"
        type="type"
        placeholder="Moisés Ferreira"
        icon={User}
        label="Nome e Sobrenome"
      />
      <SectionInput 
        id="email"
        type="type"
        placeholder="moises@email.com"
        icon={Mail}
        label="Email"
      />
      <SectionInput 
        id="phone"
        type="type"
        placeholder="(99)99999-9999"
        icon={Phone}
        label="Telefone"
      />
      <SectionInput 
        id="location"
        type="type"
        placeholder="São Paulo, SP"
        icon={MapPin}
        label="Localização"
      />
      </div>
    </div>
  );
}