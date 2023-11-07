import { useLocalStorage } from '@hooks/useLocalStorage'
import { HttpPutPetPayload } from './types'
import { HttpGetPetsResponse } from '../getPets/types'
import { makeError } from '@utils/functions/makeError'

export async function putPet(
  id: string,
  payload?: HttpPutPetPayload
): Promise<void> {
  const { getItem, saveItem } = useLocalStorage()

  const pets: HttpGetPetsResponse = getItem('pets')

  const petIndex = pets.findIndex(pet => pet.id === id)

  if (petIndex === -1) {
    throw makeError('Not Found', 'Pet não encontrado', '404')
  }

  pets[petIndex] = { ...pets[petIndex], ...payload }

  saveItem('pets', pets)
}
