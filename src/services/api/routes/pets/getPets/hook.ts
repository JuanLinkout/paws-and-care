import useSWR from 'swr'
import { HttpGetPetsParams } from './types'
import { getPets } from '.'

export function useGetPets(params?: HttpGetPetsParams) {
  const { data, isValidating, error, mutate } = useSWR(
    `/pets?${JSON.stringify(params)}`,
    () => getPets(params),
    { revalidateOnFocus: false, dedupingInterval: 1000 * 5 }
  )

  return {
    data,
    isValidating,
    error,
    mutate
  }
}
