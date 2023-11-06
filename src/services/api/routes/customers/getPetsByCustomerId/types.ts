export interface HttpGetPetsByUserIdResponse {
  pets: HttpGetPet[]
}

export interface HttpGetPet {
  id: string
  name: string
  customerId: string
  type: string
  breed: string
  customerName: string
}
