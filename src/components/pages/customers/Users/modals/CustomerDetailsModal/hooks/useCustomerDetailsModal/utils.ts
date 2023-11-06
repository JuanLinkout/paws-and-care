import { ICustomer } from '@services/types/Customer'

export function makeInitialCustomer(): ICustomer {
  return {
    document: '',
    email: '',
    id: '',
    name: '',
    phone: ''
  }
}

export function getModalTitle(isCreating: boolean) {
  if (isCreating) return 'Criar novo cliente'
  return 'Detalhes do cliente'
}
