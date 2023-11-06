import useSWR from 'swr'
import { getPetsByCustomerId } from '.'

export function useGetPetsByCustomerId(id: string) {
  const { data, isValidating, error, mutate } = useSWR(
    `/customers/${id}/pets`,
    () => {
      if (!id) return undefined
      return getPetsByCustomerId(id)
    },
    { revalidateOnFocus: false, dedupingInterval: 1000 * 5 }
  )

  return {
    data,
    isValidating,
    error,
    mutate
  }
}
