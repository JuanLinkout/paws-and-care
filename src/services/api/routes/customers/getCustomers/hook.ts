import useSWR from 'swr'
import { HttpGetUsersParams } from './types'
import { getCustomers } from '.'

export function useGetCustomers(params?: HttpGetUsersParams) {
  const { data, isValidating, error, mutate } = useSWR(
    `/customers?${JSON.stringify(params)}`,
    () => getCustomers(params),
    { revalidateOnFocus: false, dedupingInterval: 1000 * 5 }
  )

  return {
    data,
    isValidating,
    error,
    mutate
  }
}
