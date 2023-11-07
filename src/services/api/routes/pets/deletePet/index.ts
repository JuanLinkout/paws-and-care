import { useLocalStorage } from '@hooks/useLocalStorage'
import { HttpGetPetsResponse } from '../getPets/types'
import { makeError } from '@utils/functions/makeError'

export async function deletePet(id: string): Promise<void> {
  const { getItem, saveItem } = useLocalStorage()

  const pets: HttpGetPetsResponse = getItem('pets')

  const updatedPets = pets.filter(pet => pet.id !== id)

  if (updatedPets.length === pets.length) {
    throw makeError('Not Found', 'Pet não encontrado', '404')
  }

  saveItem('pets', updatedPets)
}
