import { ISelectOption } from '@components/selects/Select/types'

export interface IForm {
  id: string
  name: string
  type: string
  breed: string
  customer: ISelectOption[]
}
