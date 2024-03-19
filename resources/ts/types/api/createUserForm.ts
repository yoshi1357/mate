export interface CreateUserForm {
  name: string
  email: string
  tweet?: string
  image?: {
    name: string
    data: File
  }
  password: string
  password_digest: string
  content?: string
  age: number
  sex: number
  blood_type: number
  height: number
  body_shape: number
  residence: number
  birth_place: number
  holiday: number
  work: number
}
