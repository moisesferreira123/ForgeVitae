export type profileInfoInput = {
  type: string,
  placeholder: string,
  label: string,
  isDraggable: boolean,
  isRemovable: boolean,
  isLinkable: boolean
}

export const profileFieldsInput : Record<string, profileInfoInput> = {
  'name' : {
    type: "text",
    placeholder: "Moisés Ferreira",
    label: "Nome e Sobrenome",
    isDraggable: false,
    isRemovable: false,
    isLinkable: false
  },
  'phone' : {
    type: "tel",
    placeholder: "(99)99999-9999",
    label: "Telefone",
    isDraggable: true,
    isRemovable: false,
    isLinkable: false
  },
  'email' : {
    type: "email",
    placeholder: "moises@email.com",
    label: "Email",
    isDraggable: true,
    isRemovable: false,
    isLinkable: false
  },
  'location' : {
    type: "text",
    placeholder: "São Paulo, SP",
    label: "Localização",
    isDraggable: true,
    isRemovable: false,
    isLinkable: false
  },
  'linkedin' : {
    type: "text",
    placeholder: "linkedin.com/in/exemplo",
    label: "LinkedIn",
    isDraggable: true,
    isRemovable: true,
    isLinkable: true
  },
  'github' : {
    type: "text",
    placeholder: "github.com/exemplo",
    label: "GitHub",
    isDraggable: true,
    isRemovable: true,
    isLinkable: true
  }
}
