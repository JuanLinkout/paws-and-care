import { ISelectOption } from '@components/selects/Select/types'
import { IPet } from '@services/types/Pet'

export function mapPetToOption(pet: IPet): ISelectOption {
  return {
    description: pet.name,
    value: pet.id,
    label: pet.name
  }
}

export function mapPetToOptionList(pets: IPet[]): ISelectOption[] {
  return pets.map(mapPetToOption)
}
