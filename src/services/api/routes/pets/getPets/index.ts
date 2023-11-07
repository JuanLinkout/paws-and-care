import { HttpGetPetsParams, HttpGetPetsResponse } from './types'
import { useLocalStorage } from '@hooks/useLocalStorage'

export async function getPets(
  params?: HttpGetPetsParams
): Promise<HttpGetPetsResponse> {
  const { getItem } = useLocalStorage()
  let pets: HttpGetPetsResponse = getItem('pets')

  if (params.q) {
    pets = pets.filter(pet =>
      pet.customerName.toLowerCase().includes(params.q.toLowerCase())
    )
  }

  return pets
}
