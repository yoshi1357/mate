import { type User } from './user'

export type CreateUserForm =
  Pick<User,
    'name' |
    'email' |
    'images' |
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
