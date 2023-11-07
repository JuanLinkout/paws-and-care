import { IPet } from '@services/types/Pet'
import { IForm } from './types'

export function makeInitialPet(): IForm {
  return {
    breed: '',
    customer: [],
    id: '',
    name: '',
    type: ''
  }
}

export function getModalTitle(isCreating: boolean) {
  if (isCreating) return 'Criar novo pet'
  return 'Detalhes do pet'
}

export function mapPetToForm(pet: IPet): IForm {
  return {
    breed: pet.breed,
    id: pet.id,
    name: pet.name,
    type: pet.type,
    customer: [
      {
        description: pet.customerName,
        label: pet.customerName,
        value: pet.customerId
      }
    ]
  }
}

export function mapFormToPet(form: IForm): IPet {
  return {
    breed: form.breed,
    id: form.id,
    name: form.name,
    type: form.type,
    customerId: form?.customer[0]?.value?.toString(),
    customerName: form?.customer[0]?.label?.toString()
  }
}
