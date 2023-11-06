import { IPet } from '@services/types/Pet'

export interface IOpenDetailsParams {
  isCreating?: boolean
  pet?: IPet
}

export interface PetDetailsModalMethods {
  open: (value: IOpenDetailsParams) => void
  close: () => void
}
