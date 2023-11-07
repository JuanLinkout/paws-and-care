import { IPet } from '@services/types/Pet'
import { HttpPostPetPayload } from './types'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { makeError } from '@utils/functions/makeError'

export async function postPet(payload?: HttpPostPetPayload): Promise<void> {
  const requiredFields = ['name', 'type', 'breed', 'customerId', 'customerName']

  const { name, type, breed, customerId, customerName } = payload
  requiredFields.forEach(param => {
    if (!payload[param])
      throw makeError(
        'Missing Param',
        `O parametro ${param} está faltando`,
        '400'
      )
  })

  const pet: IPet = {
    id: crypto.randomUUID(),
    name,
    type,
    breed,
    customerId,
    customerName
  }

  const { getItem, saveItem } = useLocalStorage()

  const pets = getItem('pets')

  pets.push(pet)

  saveItem('pets', pets)
}
