import { IPet } from '@services/types/Pet'

export type HttpGetPetsResponse = HttpGetPet[]

export interface HttpGetPetsParams {
  q?: string
}

export interface HttpGetPet extends IPet {}
