export type HttpGetUsersResponse = HttpGetUser[]

export interface HttpGetUsersParams {
  q?: string
}

export interface HttpGetUser {
  id: string
  name: string
  email: string
  document: string
  phone: string
}
