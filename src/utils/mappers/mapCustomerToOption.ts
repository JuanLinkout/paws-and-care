import { ISelectOption } from '@components/selects/Select/types'
import { ICustomer } from '@services/types/Customer'

export function mapCustomerToOption(customer: ICustomer): ISelectOption {
  return {
    description: customer.name,
    value: customer.id,
    label: customer.name
  }
}

export function mapCustomerToOptionList(
  customers: ICustomer[]
): ISelectOption[] {
  return customers.map(mapCustomerToOption)
}
