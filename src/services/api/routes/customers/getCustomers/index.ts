import { useLocalStorage } from '@hooks/useLocalStorage'
import { HttpGetUsersParams, HttpGetUsersResponse } from './types'

// TODO: Implementar lógica
export async function getCustomers(
  params?: HttpGetUsersParams
): Promise<HttpGetUsersResponse> {

  let customers = useLocalStorage().getItem("customers")

  if (params?.q) {
    customers = customers.filter(customer =>
      customer.name.toLowerCase().includes(params.q.toLowerCase())
    )
  }

  return customers
}
