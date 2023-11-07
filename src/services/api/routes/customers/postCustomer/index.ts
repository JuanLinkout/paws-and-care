import { useLocalStorage } from '@hooks/useLocalStorage'
import { HttpPostCustomerPayload } from './types'
import { makeError } from '@utils/functions/makeError'

// TODO: Implementar lógica
export async function postCustomer(
  payload?: HttpPostCustomerPayload
): Promise<void> {
  const { saveItem } = useLocalStorage()

  throw makeError('123', 'outro error', '123')
}
