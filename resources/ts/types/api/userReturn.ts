import { type Replace } from '../util/Replace'
import { type User } from './user';
import { type UserImage } from '../api/userImage'

export interface UserReturn extends Replace<User, 'images'> {
    images: UserImage[]
}
