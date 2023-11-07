import { makeError } from '@utils/functions/makeError'
import { ICustomer } from '@services/types/Customer'
import { HttpPostCustomerPayload } from './types'
import { useLocalStorage } from '@hooks/useLocalStorage'

// TODO: Implementar lógica
export async function postCustomer(
  payload?: HttpPostCustomerPayload
): Promise<void> {
  const requiredFields = ['name', 'email', 'phone', 'document']

  const { name, email, document , phone, } = payload

  requiredFields.forEach(param => {
    if (!payload[param])
      throw makeError(
        'Missing Param',
        `O parametro "${param}" está faltando`,
        '400'
      )
  })

  let customers: ICustomer[] = useLocalStorage().getItem("customers")

  if ( !customers ) {
    customers = []
  }
  const customer: ICustomer = {
    id: crypto.randomUUID(),
    name,
    email,
    document,
    phone
  }

  customers.push(customer)

  useLocalStorage().saveItem("customers", customers)

  return null
}
