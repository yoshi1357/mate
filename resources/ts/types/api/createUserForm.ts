import { type User } from './user'

export type CreateUserForm =
  Pick<User,
    'name' |
    'email' |
    'image' |
    'password' |
    'password_digest' |
    'content' |
    'age' |
    'sex' |
    'blood_type' |
    'height' |
    'body_shape' |
    'residence' |
    'birth_place' |
    'holiday' |
    'work'
  >
