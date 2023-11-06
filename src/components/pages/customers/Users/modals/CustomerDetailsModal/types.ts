import { ICustomer } from '@services/types/Customer'

export interface IOpenUserDetails {
  isCreating?: boolean
  customer?: ICustomer
}

export interface CustomerDetailsModalMethods {
  open: (value: IOpenUserDetails) => void
  close: () => void
}
