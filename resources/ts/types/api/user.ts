export interface User {
  id: number
  name: string
  email: string
  images: File[]
  remember_digest?: string | null
  password: string
  password_digest: string
  content: string
  age: number
  sex: number
  blood_type: number
  height: number
  body_shape: number
  residence: number
  birth_place: number
  holiday: number
  work: number
  admin: number
  activated: boolean
  activation_digest?: string | null
  activated_at?: Date | null
  created_at?: Date
  updated_at?: Date
}
