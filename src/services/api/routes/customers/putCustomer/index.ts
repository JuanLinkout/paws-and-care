import { useLocalStorage } from '@hooks/useLocalStorage'
import { HttpPutCustomerPayload } from './types'
import { ICustomer } from '@services/types/Customer'

// TODO: Implementar lógica
export async function putCustomer(
  id: string,
  payload?: HttpPutCustomerPayload
): Promise<void> {
  const { name, email, document , phone, } = payload

  let customers: ICustomer[] = useLocalStorage().getItem("customers")

  const editedCustomers: ICustomer[] = customers.map(item =>  { 
    if (item.id === id ){
    item = {
      id: item.id,
      name,
      email,
      document,
      phone
    }
  }
  return item
  })
  
  useLocalStorage().saveItem("customers", editedCustomers)

  return null
}
